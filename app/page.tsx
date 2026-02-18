"use client"

import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Clock,
  Heart,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  UserCheck,
  Activity,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

const heroImages = [
  {
    src: "/kusune-no-sato-main.png",
    alt: "楠根の里的正面玄関",
    title: "温かみのある正面玄関",
  },
  {
    src: "/kusune-no-sato-garden.png",
    alt: "楠根の里的日本庭園",
    title: "美しい日本庭園",
  },
]

export default function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      inquiryType: formData.get('inquiry-type'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus('success')
        // フォームをリセット
        e.currentTarget.reset()
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('送信エラー:', error)
      setFormStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-[#B8EACE]" />
            <span className="text-xl font-bold">楠根の里</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-[#6CB2F7] transition-colors">
              施設紹介
            </Link>
            <Link href="#medical" className="text-sm font-medium hover:text-[#6CB2F7] transition-colors">
              充実の医療サポート
            </Link>
            <Link href="#rooms" className="text-sm font-medium hover:text-[#6CB2F7] transition-colors">
              お部屋・料金
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-[#6CB2F7] transition-colors">
              よくあるご質問
            </Link>
            <Link href="#access" className="text-sm font-medium hover:text-[#6CB2F7] transition-colors">
              アクセス
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#6CB2F7] transition-colors">
              お問い合わせ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:block">
              <Button className="bg-[#B8EACE] text-black hover:bg-[#A0D9B8] text-base px-6 py-2 h-12 rounded-lg">
                無料相談はこちら
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button variant="outline" size="icon" className="lg:hidden bg-transparent" onClick={toggleMobileMenu}>
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="#about"
                className="block text-base font-medium hover:text-[#6CB2F7] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                施設紹介
              </Link>
              <Link
                href="#medical"
                className="block text-base font-medium hover:text-[#6CB2F7] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                充実の医療サポート
              </Link>
              <Link
                href="#rooms"
                className="block text-base font-medium hover:text-[#6CB2F7] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                お部屋・料金
              </Link>
              <Link
                href="#faq"
                className="block text-base font-medium hover:text-[#6CB2F7] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                よくあるご質問
              </Link>
              <Link
                href="#access"
                className="block text-base font-medium hover:text-[#6CB2F7] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                アクセス
              </Link>
              <Link
                href="#contact"
                className="block text-base font-medium hover:text-[#6CB2F7] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                お問い合わせ
              </Link>
              <div className="pt-4">
                <Button
                  className="w-full bg-[#B8EACE] text-black hover:bg-[#A0D9B8] text-base px-6 py-2 h-12 rounded-lg"
                  asChild
                  onClick={closeMobileMenu}
                >
                  <Link href="#contact">無料相談はこちら</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
          {/* Background Image Carousel */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 opacity-70 hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 z-10"
            aria-label="前の画像"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 opacity-70 hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 z-10"
            aria-label="次の画像"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-white shadow-lg scale-125" : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`画像 ${index + 1} を表示`}
              />
            ))}
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center text-white space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter leading-tight">
                  住み慣れた家のような安心感
                  <br />― 楠根の里 ―
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium">24時間365日サポート／見学いつでも歓迎</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-2xl mx-auto">
                  <Button
                    className="bg-[#6CB2F7] hover:bg-[#5A9FE4] text-white text-lg xl:text-xl px-8 py-4 h-16 xl:h-20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="#contact">無料相談はこちら</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-800 text-lg xl:text-xl px-8 py-4 h-16 xl:h-20 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="#contact">資料請求</Link>
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-4 mt-8 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl max-w-lg xl:max-w-xl mx-auto">
                  <Phone className="h-8 w-8 xl:h-10 xl:w-10 text-[#6CB2F7] flex-shrink-0" />
                  <div className="text-gray-800">
                    <p className="text-2xl xl:text-3xl font-bold">072-880-1165</p>
                    <div className="flex items-center text-sm xl:text-base text-gray-600">
                      <Clock className="h-4 w-4 xl:h-5 xl:w-5 mr-1" />
                      <span>受付時間: 9:00〜18:00（年中無休）</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Title Overlay */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
            <p className="text-white text-lg xl:text-xl font-medium bg-black/50 rounded-xl px-6 py-3 backdrop-blur-sm">
              {heroImages[currentImageIndex].title}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">楠根の里について</h2>
                <p className="mx-auto max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  大阪府寝屋川市に位置する楠根の里は、高齢者の方々が安心して暮らせる住まいを提供しています。
                  家庭的な雰囲気の中で、一人ひとりの生活リズムを大切にし、自分らしく過ごせる環境づくりを心がけています。
                  医療・介護・リハビリの専門スタッフが24時間体制でサポートし、充実した毎日をお過ごしいただけます。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl xl:max-w-6xl 2xl:max-w-7xl grid-cols-1 md:grid-cols-3 gap-6 py-12">
              <div className="relative h-60 overflow-hidden rounded-lg">
                <Image
                  src="/kusune-living-area.jpeg"
                  alt="共用リビングエリア"
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="relative h-60 overflow-hidden rounded-lg">
                <Image
                  src="/kusune-accessible-bathroom.png"
                  alt="バリアフリー浴室"
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="relative h-60 overflow-hidden rounded-lg">
                <Image
                  src="/kusune-kitchen.png"
                  alt="モダンキッチン"
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Medical Services Section */}
        <section id="medical" className="w-full py-12 md:py-24 bg-[#F0F9FF]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">充実の医療サポート</h2>
                <p className="mx-auto max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  安心してお過ごしいただけるよう、様々な医療サービスを提供しています
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl xl:max-w-7xl 2xl:max-w-8xl grid-cols-1 md:grid-cols-2 gap-8 py-12">
              <Card className="border-2 border-[#B8EACE] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-20 h-20 bg-[#B8EACE] rounded-full flex items-center justify-center mb-6 z-10">
                    <UserCheck className="h-10 w-10 text-gray-800" />
                  </div>
                  <CardTitle className="text-2xl mb-3">訪問看護</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 text-base leading-relaxed">
                    専門の看護師が定期的に訪問し、
                    <br />
                    健康管理やケアを行います
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      • バイタルチェック
                      <br />• 服薬管理
                      <br />• 健康相談
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#6CB2F7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-20 h-20 bg-[#6CB2F7] rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20" />
                      <path d="M8 18V6a2 2 0 0 1 4 0v12" />
                      <path d="M16 18V6a2 2 0 0 1 4 0v12" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl mb-3">歯科診療</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 text-base leading-relaxed">
                    口腔ケアから治療まで、
                    <br />
                    歯科医師による専門的な診療を受けられます
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      • 定期検診
                      <br />• 口腔ケア指導
                      <br />• 治療・メンテナンス
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#B8EACE] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-20 h-20 bg-[#B8EACE] rounded-full flex items-center justify-center mb-6">
                    <Activity className="h-10 w-10 text-gray-800" />
                  </div>
                  <CardTitle className="text-2xl mb-3">サナトリウム往診</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 text-base leading-relaxed">
                    療養に特化した専門医による
                    <br />
                    往診サービスを提供しています
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      • 療養指導
                      <br />• リハビリテーション
                      <br />• 専門的ケア
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#6CB2F7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-20 h-20 bg-[#6CB2F7] rounded-full flex items-center justify-center mb-6">
                    <Stethoscope className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3">内科往診</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 text-base leading-relaxed">
                    内科医による定期的な往診で、
                    <br />
                    日常的な健康管理をサポートします
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      • 定期健診
                      <br />• 慢性疾患管理
                      <br />• 緊急時対応
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Room Types & Pricing */}
        <section id="rooms" className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">お部屋タイプと料金</h2>
                <p className="mx-auto max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  快適で安心してお過ごしいただける個室をご用意しています
                </p>
              </div>
            </div>

            {/* Single Room Type */}
            <div className="mx-auto max-w-4xl xl:max-w-5xl 2xl:max-w-6xl py-12">
              <Card className="overflow-hidden">
                {/* Image Gallery */}
                <div className="relative h-64 md:h-80">
                  <div className="grid grid-cols-2 h-full gap-1">
                    <div className="relative">
                      <Image src="/kusune-room-1.png" alt="個室タイプA" fill className="object-cover" />
                    </div>
                    <div className="relative">
                      <Image src="/kusune-room-2.png" alt="個室タイプB" fill className="object-cover" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white">空室あり</Badge>
                </div>

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">個室</CardTitle>
                  <CardDescription className="text-lg">
                    プライバシーを重視した快適な個室。洗面台・エアコン完備で安心してお過ごしいただけます。
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* 入居費用 */}
                  <div className="bg-[#F0F9FF] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-center">入居費用</h3>
                    <div className="flex justify-center">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-[#6CB2F7]">120,000円</span>
                        <p className="text-gray-600 mt-1">（別途補償金 150,000円）</p>
                      </div>
                    </div>
                  </div>

                  {/* 月額費用 */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-center">月額費用内訳</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">月額利用料</span>
                          <span className="font-bold">42,000円</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">食費</span>
                          <span className="font-bold">45,000円</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">水道光熱費</span>
                          <span className="font-bold">25,000円</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">日常用途品</span>
                          <span className="font-bold">8,000円</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-[#B8EACE] bg-opacity-20 rounded-lg border-l-4 border-[#B8EACE]">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">月額合計</span>
                        <span className="text-2xl font-bold text-[#6CB2F7]">120,000円</span>
                      </div>
                    </div>
                  </div>

                  {/* ご利用にあたって */}
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-bold mb-3 text-yellow-800">ご利用にあたって</h3>
                    <div className="text-sm text-yellow-700 space-y-2">
                      <p>
                        当施設では、介護保険負担割合証に記載された自己負担額に加え、往診費用、医薬品代、オムツ代、理美容費など、介護サービスに付随する実費費用はご負担いただきます。
                      </p>
                      <p>また、退去時には居室清掃費用を別途ご請求いたしますので、あらかじめご了承ください。</p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-[#6CB2F7] hover:bg-[#5A9FE4] text-white text-lg h-12" asChild>
                    <Link href="#contact">見学予約・お問い合わせ</Link>
                  </Button>
                  <Button variant="outline" className="flex-1 border-[#B8EACE] text-lg h-12 bg-transparent">
                    資料請求
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Admission Flow */}
        <section className="w-full py-12 md:py-24 bg-[#F9FEFF]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">入居までの流れ</h2>
                <p className="mx-auto max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  楠根の里への入居をご検討の方へ、入居までのステップをご案内します
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl py-12">
              <div className="relative">
                {/* Desktop version */}
                <div className="hidden md:block">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-[#B8EACE] -translate-y-1/2"></div>
                  <div className="relative flex justify-between">
                    {["見学", "申込", "面談", "契約", "入居"].map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-[#6CB2F7] text-white flex items-center justify-center mb-4 z-10">
                          {index + 1}
                        </div>
                        <h3 className="font-medium text-lg">{step}</h3>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile version */}
                <div className="md:hidden space-y-8">
                  {["見学", "申込", "面談", "契約", "入居"].map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#6CB2F7] text-white flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{step}</h3>
                        <p className="text-gray-600">
                          {index === 0 && "施設の雰囲気や設備をご覧いただけます。お気軽にお問い合わせください。"}
                          {index === 1 && "入居申込書にご記入いただきます。必要書類についてもご案内します。"}
                          {index === 2 && "ご本人様とご家族様との面談を行い、ご要望やご不安点などをお伺いします。"}
                          {index === 3 && "契約内容の説明を行い、ご納得いただいた上で契約を締結します。"}
                          {index === 4 && "入居日を決定し、新しい生活のスタートをサポートします。"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:grid grid-cols-5 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-gray-600">施設の雰囲気や設備をご覧いただけます</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">入居申込書にご記入いただきます</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">ご本人様とご家族様との面談を行います</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">契約内容の説明を行い、契約を締結します</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">入居日を決定し、新生活をサポートします</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">よくあるご質問</h2>
                <p className="mx-auto max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  楠根の里についてよくいただくご質問にお答えします
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-5xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">入居の条件はありますか？</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    65歳以上の方で、要介護1以上の認定を受けている方が対象です。認知症の方もご入居いただけます。詳しい条件については個別にご相談ください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">入居費用の内訳を教えてください</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    月額費用には、家賃、食費、管理費、水道光熱費が含まれています。介護保険サービスの自己負担分は別途かかります。お部屋のタイプによって料金が異なりますので、詳しくはお問い合わせください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">面会や外出は自由にできますか？</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    ご家族様の面会は9:00〜20:00の間であれば自由にしていただけます。また、ご本人様の体調に問題がなければ、外出や外泊も可能です。事前にスタッフにお知らせいただければ対応いたします。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">
                    入居後に介護度が上がった場合はどうなりますか？
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    介護度が上がっても、基本的には継続してご入居いただけます。医療的ケアが必要になった場合も、可能な限り対応いたしますが、状況によっては医療機関への入院をご案内することもあります。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Access */}
        <section id="access" className="w-full py-12 md:py-24 bg-[#F9FEFF]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">アクセス</h2>
                <p className="mx-auto max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  楠根の里へのアクセス方法をご案内します
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="space-y-8 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-[#6CB2F7]" />
                    <h3 className="text-xl font-bold">住所</h3>
                  </div>
                  <p className="text-gray-600">〒572-0811 大阪府寝屋川市楠根南町24番22号</p>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-[#6CB2F7]" />
                    <h3 className="text-xl font-bold">電話番号</h3>
                  </div>
                  <p className="text-gray-600">072-880-1165（受付時間：9:00〜18:00）</p>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#6CB2F7]"
                    >
                      <path d="M9 17h6" />
                      <path d="M11 8v5h2" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <h3 className="text-xl font-bold">アクセス方法</h3>
                  </div>
                  <div className="text-gray-600 space-y-4 max-w-2xl">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">電車でお越しの場合</h4>
                      <p>京阪本線 寝屋川市駅　駅前バス停33番・34番・35番乗り口から「楠根南」で下車。</p>
                      <p>楠根南バス停から徒歩5分</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">車でお越しの場合</h4>
                      <p>国道170号線・楠根交差点を西方向へ。一つ目の信号を左折して、約50m先</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="https://maps.google.com/maps?q=572-0811+大阪府寝屋川市楠根南町24番22号"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#6CB2F7] hover:bg-[#5A9FE4] text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Googleマップで場所を確認
                  </a>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#6CB2F7]"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M6 8h.01" />
                      <path d="M18 8h.01" />
                      <path d="M10 8h4" />
                      <path d="M6 12h.01" />
                      <path d="M18 12h.01" />
                      <path d="M10 12h4" />
                      <path d="M6 16h.01" />
                      <path d="M18 16h.01" />
                      <path d="M10 16h4" />
                    </svg>
                    <h3 className="text-xl font-bold">駐車場</h3>
                  </div>
                  <p className="text-gray-600">
                    施設内に来客用駐車場5台分をご用意しています。見学の際は事前にご連絡ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">お問い合わせ</h2>
                <p className="mx-auto max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  見学のご予約や資料請求など、お気軽にお問い合わせください
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-5xl py-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-base font-medium">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <Input id="name" name="name" required placeholder="山田 太郎" className="h-12 text-base" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-base font-medium">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <Input id="phone" name="phone" required placeholder="090-1234-5678" className="h-12 text-base" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-medium">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="example@example.com"
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="text-base font-medium">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    required
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">選択してください</option>
                    <option value="見学予約">見学予約</option>
                    <option value="資料請求">資料請求</option>
                    <option value="入居相談">入居相談</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-base font-medium">
                    メッセージ
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="ご質問やご要望などをご記入ください"
                    className="min-h-[150px] text-base"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-[#6CB2F7] focus:ring-[#6CB2F7]"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-gray-700">
                      <Link href="/privacy-policy" className="text-[#6CB2F7] hover:underline" target="_blank" rel="noopener noreferrer">
                        プライバシーポリシー
                      </Link>
                      に同意します <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                
                {/* ステータス表示 */}
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    お問い合わせありがとうございます。内容を確認次第、担当者よりご連絡いたします。
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    送信に失敗しました。もう一度お試しください。問題が続く場合は、お電話でお問い合わせください。
                  </div>
                )}
                
                <Button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-[#6CB2F7] hover:bg-[#5A9FE4] text-white text-lg h-14 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? '送信中...' : '送信する'}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-white py-6 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-[#B8EACE]" />
                <span className="text-xl font-bold">楠根の里</span>
              </div>
              <p className="text-sm text-gray-500">
                大阪府寝屋川市にある高齢者向け介護施設。
                <br />
                安心・安全な住まいと24時間サポートを提供しています。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">リンク</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#about" className="text-sm hover:underline">
                  施設紹介
                </Link>
                <Link href="#medical" className="text-sm hover:underline">
                  充実の医療サポート
                </Link>
                <Link href="#rooms" className="text-sm hover:underline">
                  お部屋・料金
                </Link>
                <Link href="#faq" className="text-sm hover:underline">
                  よくあるご質問
                </Link>
                <Link href="#access" className="text-sm hover:underline">
                  アクセス
                </Link>
                <Link href="#contact" className="text-sm hover:underline">
                  お問い合わせ
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">お問い合わせ</h3>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#6CB2F7] mt-0.5" />
                <span className="text-sm">〒572-0811 大阪府寝屋川市楠根南町24番22号</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-[#6CB2F7] mt-0.5" />
                <span className="text-sm">072-880-1165（受付時間：9:00〜18:00）</span>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 楠根の里 2025. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="/teikan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:underline"
              >
                定款
              </a>
              <a
                href="/genjyo-houkokusho.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:underline"
              >
                現状報告書
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
