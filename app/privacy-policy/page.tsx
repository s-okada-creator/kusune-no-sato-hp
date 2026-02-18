"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-[#6CB2F7] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            楠根の里に戻る
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">楠根の里</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">プライバシーポリシー</h1>
            <p className="text-gray-600">個人情報保護に関する方針</p>
            <p className="text-sm text-gray-500 mt-2">最終更新日: 2025年1月29日</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">1. 基本方針</h2>
              <p className="leading-relaxed">
                社会福祉法人秋桜福祉会（以下「当法人」といいます。）は、利用者の個人情報の保護に関して、個人情報の保護に関する法律（個人情報保護法）を遵守し、適切な取扱いを行います。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">2. 個人情報の定義</h2>
              <p className="leading-relaxed mb-4">
                個人情報とは、個人情報保護法第2条第1項に規定する個人情報を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）をいいます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">3. 個人情報の収集・利用目的</h2>
              <p className="leading-relaxed mb-4">
                当法人は、以下の目的で個人情報を収集・利用いたします：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>施設の見学・入居に関するご相談・お問い合わせへの対応</li>
                <li>入居申込の受付・審査・契約手続き</li>
                <li>入居者の方へのサービス提供</li>
                <li>医療・介護サービスの提供</li>
                <li>ご家族様との連絡・情報共有</li>
                <li>施設運営に必要な事務処理</li>
                <li>法令に基づく報告・届出</li>
                <li>サービスの改善・向上のための分析</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">4. 個人情報の収集方法</h2>
              <p className="leading-relaxed mb-4">
                当法人は、以下の方法で個人情報を収集いたします：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>お問い合わせフォームからの入力</li>
                <li>電話でのお問い合わせ</li>
                <li>面談・見学時の申込書等の記入</li>
                <li>入居契約時の書類提出</li>
                <li>医療機関からの情報提供</li>
                <li>ご家族様からの情報提供</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">5. 個人情報の第三者提供</h2>
              <p className="leading-relaxed mb-4">
                当法人は、以下の場合を除き、本人の同意なく個人情報を第三者に提供することはありません：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                <li>医療機関、介護保険事業者等、サービスの提供に必要な範囲で業務委託先に提供する場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">6. 個人情報の安全管理</h2>
              <p className="leading-relaxed mb-4">
                当法人は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のため、以下の措置を講じます：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>個人情報を取り扱う従業者を限定し、適切な監督を行います</li>
                <li>個人情報の取扱いに関する規程を整備し、従業者に周知徹底します</li>
                <li>個人情報を取り扱う区域の管理を適切に行います</li>
                <li>個人情報を取り扱う機器・電子媒体等の盗難・紛失の防止措置を講じます</li>
                <li>個人情報を取り扱うシステムへのアクセス制御を行います</li>
                <li>個人情報の取扱いに関する記録を作成し、保存します</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">7. 個人情報の開示・訂正・削除等</h2>
              <p className="leading-relaxed mb-4">
                ご本人またはその代理人から個人情報の開示、訂正、削除等の請求があった場合、本人確認を行った上で、合理的な期間内に対応いたします。
              </p>
              <p className="leading-relaxed">
                なお、個人情報の保護に関する法律その他の法令により、開示等の請求に応じられない場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">8. Cookie等の使用</h2>
              <p className="leading-relaxed">
                当ウェブサイトでは、サービスの向上のため、Cookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">9. プライバシーポリシーの変更</h2>
              <p className="leading-relaxed">
                当プライバシーポリシーは、法令の改正等により必要に応じて変更することがあります。変更する場合は、当ウェブサイトに掲載いたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">10. お問い合わせ窓口</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="leading-relaxed mb-4">
                  個人情報の取扱いに関するお問い合わせは、以下の窓口までご連絡ください：
                </p>
                <div className="space-y-2">
                  <p><strong>社会福祉法人秋桜福祉会 楠根の里</strong></p>
                  <p>〒572-0811 大阪府寝屋川市楠根南町24番22号</p>
                  <p>電話: 072-880-1165</p>
                  <p>受付時間: 9:00〜18:00（年中無休）</p>
                  <p>メール: office@cosmos-welfare.net</p>
                </div>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="text-center pt-8">
            <Button asChild className="bg-[#6CB2F7] hover:bg-[#5A9FE4] text-white">
              <Link href="/">トップページに戻る</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6 md:py-12 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">© 社会福祉法人秋桜福祉会 楠根の里 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
