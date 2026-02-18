import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, inquiryType, message } = body

    // バリデーション
    if (!name || !phone || !email || !inquiryType) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      )
    }

    // Resendを使用したメール送信（推奨）
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'office@cosmos-welfare.net',
          to: ['office@cosmos-welfare.net'],
          subject: `【楠根の里】お問い合わせ: ${inquiryType}`,
          html: `
            <h2>お問い合わせ内容</h2>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>電話番号:</strong> ${phone}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>お問い合わせ内容:</strong> ${inquiryType}</p>
            <p><strong>メッセージ:</strong></p>
            <p>${message || 'なし'}</p>
            <hr>
            <p><small>このメールは楠根の里のお問い合わせフォームから送信されました。</small></p>
          `,
        }),
      })

      if (resendResponse.ok) {
        return NextResponse.json({ success: true })
      }
    }

    // SendGridを使用したメール送信
    if (process.env.SENDGRID_API_KEY) {
      const sendGridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: 'office@cosmos-welfare.net' }],
              subject: `【楠根の里】お問い合わせ: ${inquiryType}`,
            },
          ],
          from: { email: process.env.SENDGRID_FROM_EMAIL || 'office@cosmos-welfare.net' },
          content: [
            {
              type: 'text/html',
              value: `
                <h2>お問い合わせ内容</h2>
                <p><strong>お名前:</strong> ${name}</p>
                <p><strong>電話番号:</strong> ${phone}</p>
                <p><strong>メールアドレス:</strong> ${email}</p>
                <p><strong>お問い合わせ内容:</strong> ${inquiryType}</p>
                <p><strong>メッセージ:</strong></p>
                <p>${message || 'なし'}</p>
                <hr>
                <p><small>このメールは楠根の里のお問い合わせフォームから送信されました。</small></p>
              `,
            },
          ],
        }),
      })

      if (sendGridResponse.ok) {
        return NextResponse.json({ success: true })
      }
    }

    // nodemailerを使用したメール送信（SMTP）
    if (process.env.SMTP_PASS) {
      const nodemailer = await import('nodemailer')
      
      const transporter = nodemailer.default.createTransporter({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER || 'office@cosmos-welfare.net',
          pass: process.env.SMTP_PASS,
        },
      })

      const mailOptions = {
        from: process.env.SMTP_USER || 'office@cosmos-welfare.net',
        to: 'office@cosmos-welfare.net',
        subject: `【楠根の里】お問い合わせ: ${inquiryType}`,
        html: `
          <h2>お問い合わせ内容</h2>
          <p><strong>お名前:</strong> ${name}</p>
          <p><strong>電話番号:</strong> ${phone}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>お問い合わせ内容:</strong> ${inquiryType}</p>
          <p><strong>メッセージ:</strong></p>
          <p>${message || 'なし'}</p>
          <hr>
          <p><small>このメールは楠根の里のお問い合わせフォームから送信されました。</small></p>
        `,
        text: `
お問い合わせ内容
お名前: ${name}
電話番号: ${phone}
メールアドレス: ${email}
お問い合わせ内容: ${inquiryType}
メッセージ: ${message || 'なし'}

このメールは楠根の里のお問い合わせフォームから送信されました。
        `,
      }

      await transporter.sendMail(mailOptions)
      return NextResponse.json({ success: true })
    }

    // どのメール送信方法も設定されていない場合
    return NextResponse.json(
      { error: 'メール送信設定が完了していません' },
      { status: 500 }
    )

  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { error: 'メール送信に失敗しました。もう一度お試しください。' },
      { status: 500 }
    )
  }
}
