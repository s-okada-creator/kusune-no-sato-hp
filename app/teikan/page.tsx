"use client"

import Link from "next/link"
import { ArrowLeft, Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeiканPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Hidden in print */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur print:hidden">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-[#6CB2F7] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            楠根の里に戻る
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => window.print()} className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              印刷・PDF保存
            </Button>
            <Button variant="outline" size="sm" asChild className="flex items-center gap-2 bg-transparent">
              <a href="/teikan.txt" download="社会福祉法人秋桜福祉会定款.txt">
                <Download className="h-4 w-4" />
                テキスト版
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Document Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl print:px-0 print:py-0 print:max-w-none">
        {/* Title Page */}
        <div className="text-center mb-12 print:mb-8 page-break-after">
          <h1 className="text-4xl font-bold mb-8 print:text-3xl print:mb-6">社会福祉法人秋桜福祉会定款</h1>
          <div className="text-lg text-gray-600 space-y-2 print:text-base">
            <p>Social Welfare Corporation</p>
            <p>Kosumosu Welfare Association</p>
            <p>Articles of Incorporation</p>
          </div>
          <div className="mt-12 text-sm text-gray-500 print:mt-8">
            <p>令和3年10月31日施行</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 print:mb-8 page-break-after">
          <h2 className="text-2xl font-bold mb-6 print:text-xl print:mb-4">目次</h2>
          <div className="space-y-2 text-sm print:text-xs">
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第一章　総則</span>
              <span>第1条〜第4条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第二章　評議員</span>
              <span>第5条〜第6条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第三章　評議員会</span>
              <span>第7条〜第14条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第四章　役員及び職員</span>
              <span>第15条〜第22条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第五章　理事会</span>
              <span>第23条〜第27条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第六章　資産及び会計</span>
              <span>第28条〜第35条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第七章　公益を目的とする事業</span>
              <span>第36条〜第37条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第八章　解散</span>
              <span>第38条〜第39条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第九章　定款の変更</span>
              <span>第40条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>第十章　公告の方法その他</span>
              <span>第41条〜第42条</span>
            </div>
            <div className="flex justify-between border-b border-dotted pb-1">
              <span>附則</span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Document Body */}
        <div className="space-y-8 print:space-y-6">
          {/* 第一章 総則 */}
          <section className="page-break-before">
            <h2 className="text-2xl font-bold mb-6 text-center print:text-xl print:mb-4">第一章　総則</h2>

            <div className="space-y-6 print:space-y-4">
              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（目的）</h3>
                <p className="mb-2 font-medium">第一条</p>
                <p className="leading-relaxed text-justify print:text-sm">
                  この社会福祉法人（以下「法人」という。）は、多様な福祉サービスがその利用者の意向を尊重して総合的に提供されるよう創意工夫することにより、利用者が、個人の尊厳を保持しつつ、自立した生活を地域社会において営むことができるよう支援することを目的として、次の社会福祉事業を行う。
                </p>
                <div className="ml-4 mt-2">
                  <p>（1）第二種社会福祉事業</p>
                  <p className="ml-4">（イ）認知症対応型老人共同生活援助事業（グループホーム楠根の里1・2）</p>
                </div>
              </article>

              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（名称）</h3>
                <p className="mb-2 font-medium">第二条</p>
                <p className="leading-relaxed text-justify print:text-sm">この法人は、社会福祉法人秋桜福祉会という。</p>
              </article>

              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（経営の原則等）</h3>
                <p className="mb-2 font-medium">第三条</p>
                <p className="leading-relaxed text-justify print:text-sm mb-3">
                  この法人は、社会福祉事業の主たる担い手としてふさわしい事業を確実、効果的かつ適正に行うため、自主的にその経営基盤の強化を図るとともに、その提供する福祉サービスの質の向上並びに事業経営の透明性の確保を図り、もって地域福祉の推進に努めるものとする。
                </p>
                <p className="leading-relaxed text-justify print:text-sm">
                  2　この法人は、地域社会に貢献する取組として、地域の独居高齢者を支援するため、無料又は低額な料金で福祉サービスを積極的に提供するものとする。
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（事務所の所在地）</h3>
                <p className="mb-2 font-medium">第四条</p>
                <p className="leading-relaxed text-justify print:text-sm">
                  この法人の事務所を大阪府寝屋川市楠根南町24番22号に置く。
                </p>
              </article>
            </div>
          </section>

          {/* 第二章 評議員 */}
          <section className="page-break-before">
            <h2 className="text-2xl font-bold mb-6 text-center print:text-xl print:mb-4">第二章　評議員</h2>

            <div className="space-y-6 print:space-y-4">
              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（評議員の定数）</h3>
                <p className="mb-2 font-medium">第五条</p>
                <p className="leading-relaxed text-justify print:text-sm">この法人に評議員7名を置く。</p>
              </article>

              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（評議員の選任及び解任）</h3>
                <p className="mb-2 font-medium">第六条</p>
                <div className="space-y-3 print:space-y-2">
                  <p className="leading-relaxed text-justify print:text-sm">
                    この法人に評議員選任・解任委員会を置き、評議員の選任及び解任は、評議員選任・解任委員会において行う。
                  </p>
                  <p className="leading-relaxed text-justify print:text-sm">
                    2　評議員選任・解任委員会は、監事2名、事務局員1名、外部委員2名の合計5名で構成する。
                  </p>
                  <p className="leading-relaxed text-justify print:text-sm">
                    3　選任候補者の推薦及び解任の提案は、理事会が行う。評議員選任・解任委員会の運営についての細則は、理事会において定める。
                  </p>
                  <p className="leading-relaxed text-justify print:text-sm">
                    4　選任候補者の推薦及び解任の提案を行う場合には、当該者が評議員として適任及び不適任と判断した理由を委員に説明しなければならない。
                  </p>
                  <p className="leading-relaxed text-justify print:text-sm">
                    5　評議員選任・解任委員会の決議は、委員の過半数が出席し、その過半数をもって行う。ただし、外部委員の1名以上が出席し、かつ、外部委員の1名以上が賛成することを要する。
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* 第六章 資産及び会計（重要部分） */}
          <section className="page-break-before">
            <h2 className="text-2xl font-bold mb-6 text-center print:text-xl print:mb-4">第六章　資産及び会計</h2>

            <div className="space-y-6 print:space-y-4">
              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（資産の区分）</h3>
                <p className="mb-2 font-medium">第二十八条</p>
                <div className="space-y-3 print:space-y-2">
                  <p className="leading-relaxed text-justify print:text-sm">
                    この法人の資産は、これを分けて基本財産とその他財産の二種とする。
                  </p>
                  <p className="leading-relaxed text-justify print:text-sm">
                    2　基本財産は、次の各号に掲げる財産をもって構成する。
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="print:text-sm">
                      （1）大阪府寝屋川市楠根南町241番1所在のグループホーム楠根の里1・2敷地（858平方メートル）
                    </p>
                    <p className="print:text-sm">
                      （2）大阪府寝屋川市楠根南町241番地1所在の鉄骨造合金メッキ鋼板葺2階建グループホーム楠根の里1・2建物（639.28平方メートル）
                    </p>
                  </div>
                  <p className="leading-relaxed text-justify print:text-sm">
                    3　その他財産は、基本財産以外の財産とする。
                  </p>
                  <p className="leading-relaxed text-justify print:text-sm">
                    4　基本財産に指定されて寄附された金品は、速やかに第二項に掲げるため、必要な手続をとらなければならない。
                  </p>
                </div>
              </article>

              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（会計年度）</h3>
                <p className="mb-2 font-medium">第三十三条</p>
                <p className="leading-relaxed text-justify print:text-sm">
                  この法人の会計年度は、毎年四月一日に始まり、翌年三月三一日をもって終わる。
                </p>
              </article>
            </div>
          </section>

          {/* 第九章 公告の方法その他 */}
          <section className="page-break-before">
            <h2 className="text-2xl font-bold mb-6 text-center print:text-xl print:mb-4">第九章　公告の方法その他</h2>

            <div className="space-y-6 print:space-y-4">
              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（公告の方法）</h3>
                <p className="mb-2 font-medium">第四十一条</p>
                <p className="leading-relaxed text-justify print:text-sm">
                  この法人の公告は、社会福祉法人秋桜福祉会の掲示場に掲示するとともに、官報、新聞又は電子公告に掲載して行う。
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold mb-3 print:text-base print:mb-2">（施行細則）</h3>
                <p className="mb-2 font-medium">第四十二条</p>
                <p className="leading-relaxed text-justify print:text-sm">
                  この定款の施行についての細則は、理事会において定める。
                </p>
              </article>
            </div>
          </section>

          {/* 附則 */}
          <section className="page-break-before">
            <h2 className="text-2xl font-bold mb-6 text-center print:text-xl print:mb-4">附則</h2>

            <div className="space-y-6 print:space-y-4">
              <article>
                <p className="leading-relaxed text-justify print:text-sm mb-4">
                  この法人の設立当初の役員は、次のとおりとする。ただし、この法人の成立後遅滞なく、この定款に基づき、役員の選任を行うものとする。
                </p>

                <div className="grid grid-cols-2 gap-4 print:gap-2">
                  <div>
                    <p className="font-medium mb-2">理事長</p>
                    <p className="ml-4 print:text-sm">東森幸子</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">理事</p>
                    <div className="ml-4 space-y-1 print:text-sm">
                      <p>北川法夫</p>
                      <p>合田眞佐彦</p>
                      <p>鈴木幸一</p>
                      <p>山田慶一</p>
                      <p>松本英彦</p>
                      <p>小寺隆</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">監事</p>
                    <div className="ml-4 space-y-1 print:text-sm">
                      <p>松本直高</p>
                      <p>吉川稔</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="mt-8 print:mt-6">
                <div className="space-y-2 print:text-sm">
                  <p className="font-medium">附則</p>
                  <p>この定款は、平成29年4月1日から施行する。</p>
                  <p>この定款は、令和3年10月31日から施行する。</p>
                </div>
              </article>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t text-center text-sm text-gray-500 print:mt-8 print:pt-4">
          <p>社会福祉法人秋桜福祉会</p>
          <p>〒572-0811 大阪府寝屋川市楠根南町24番22号</p>
        </footer>
      </main>
    </div>
  )
}
