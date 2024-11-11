'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Users, Search, MessageSquare, User2, FileText, Calendar, CheckCircle, Star, Stethoscope, Microscope, Phone, MapPin, Clock, Facebook, Instagram, Ear, Baby, SquareActivity, ClipboardPlus, SmilePlus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Head from 'next/head'

const doctors = [
  {
    name: "Др. Нураев Жуманазар",
    specialty: "Главный врач, Дерматолог",
    experience: "13 лет стажа",
    image: "/images/bosh1.png",
    bgColor: "bg-blue-100",
    offset: false,
    translate: ''
  },
  {
    name: "Др. Ахмедов Сардор",
    specialty: "Дерматолог",
    experience: "8 лет стажа",
    image: "/images/bosh1.png",
    bgColor: "bg-cyan-100",
    offset: 'md:mt-10',
    translate: 'md:translate-x-8'
  },
  {
    name: "Др. Каримова Нилуфар",
    specialty: "Педиатр",
    experience: "10 лет стажа",
    image: "/images/bosh1.png",
    bgColor: "bg-orange-100",
    offset: false,
    translate: ''
  },
  {
    name: "Др. Рахимов Акмал",
    specialty: "ЛОР-врач",
    experience: "15 лет стажа",
    image: "/images/bosh1.png",
    bgColor: "bg-pink-100",
    offset: 'md:mt-10',
    translate: 'md:translate-x-8'
  }
]

const steps = [
  {
    icon: User2,
    title: "Выберите специалиста",
    description: "Изучите профиль наших врачей, их квалификацию и специализацию, чтобы подобрать наиболее подходящего специалиста для ваших нужд.",
  },
  {
    icon: FileText,
    title: "Запросите консультацию",
    description: "Оставьте заявку на персональную консультацию, указав свои симптомы и пжелания, чтобы получить рекомендации по подходящим методам лечения.",
  },
  {
    icon: Calendar,
    title: "Пройдите консультацию",
    description: "На встрече с врачом обсудите все вопросы и получите квалифицированные рекомендации, а также план диагностики и лечения.",
  },
  {
    icon: CheckCircle,
    title: "Начните лечение",
    description: "Получите индивидуальный план лечения, адаптированный под ваши потребности, с учетом особенностей вашего организма и рекомендаций врача.",
  },
]

const services = [
  {
    icon: Stethoscope,
    title: "Дерматология 24/7",
    description: "Профессиональная помощь в диагностике и лечении кожных заболеваний.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    iconPath: "M12 8a4 4 0 100 8 4 4 0 000-8zM2.252 8A10.27 10.27 0 0112 2c4.97 0 9.185 3.53 10.144 8.25a1 1 0 01-1.944.478A8.27 8.27 0 0012 4 8.271 8.271 0 004.07 9.96a1 1 0 01-1.818-.82zm-.83 5.445a1 1 0 011.238-.698 8.27 8.27 0 0015.725-2.54 1 1 0 011.944.477A10.27 10.27 0 012.252 8a1 1 0 01.83 1.445z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    icon: Ear,
    title: "ЛОР 24/7",
    description: "Круглосуточная помощь по лечению заболеваний уха, горла и носа.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    iconPath: "M6 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z M6 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z M2.5 11.5a9 9 0 1 1 18 0 9 9 0 0 1-18 0z M12 1.5a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
  },
  {
    icon: Baby,
    title: "Педиатрия 24/7",
    description: "Забота о здоровье ваших детей в любое время суток.",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
  {
    icon: SquareActivity,
    title: "УЗИ 24/7",
    description: "Современные ультразвуковые исследования для точной диагностики.",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600"
  },
  {
    icon: ClipboardPlus,
    title: "Урология",
    description: "Комплексное лечение заболеваний мочеполовой системы.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: ClipboardPlus,
    title: "Ортопедия",
    description: "Диагностика и лечение заболеваний опорно-двигательного аппарата.",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    icon: SmilePlus,
    title: "Стоматология 24/7",
    description: "Профессиональный уход за зубами и полостью рта в любое время.",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    icon: Microscope,
    title: "Лаборатория",
    description: "Быстрые и точные анализы для постановки диагноза.",
    bgColor: "bg-red-50",
    iconColor: "text-red-600"
  }
]

const testimonials = [
  {
    name: "Shahzod Ruziyev",
    title: "Пациент педиатрии",
    image: "/placeholder.svg",
    rating: 5,
    review: "Детский Педиатр хорошо работает, решил как решить проблему моего 6 летнего ребенка, отличный специалист! Ставлю 5 звёзд и всем советую"
  },
  {
    name: "Nikolay Arteomov",
    title: "Пациент дерматовенеролога",
    image: "/placeholder.svg",
    rating: 5,
    review: "Персонал хороший и специалист попался лучший! (Дерматовенеролог) он мне вылечил псориаз и я остался доволен и заплатил очень мало, лучшая клиника! Советую"
  },
  {
    name: "Nigora Mamadjonova",
    title: "Пациент педиатрии",
    image: "/placeholder.svg",
    rating: 5,
    review: "Очень хорошая клиника. Педиатр с лёгкостью определил мою проблему и отправил к нужному специалисту. Отличная клиника, советую :)"
  },
  {
    name: "Shahzoda Dekhkanbaeva",
    title: "Пациент дерматолога",
    image: "/placeholder.svg",
    rating: 5,
    review: "Спасибо дерматологу за хороший осмотр."
  },
  {
    name: "Sherzodbek Tillaboyev",
    title: "Пациент клиники",
    image: "/placeholder.svg",
    rating: 5,
    review: "Рекомендую! Все ваши проблемы будут решены в течение 24 часов."
  },
  {
    name: "Азиза Каримова",
    title: "Пациент УЗИ",
    image: "/placeholder.svg",
    rating: 5,
    review: "УЗИст очень хороший специалист, решил мою проблему в 2 счета. Отличная клиника, советую!"
  }
]

const getBackgroundColor = (letter: string) => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-cyan-500'
  ];
  
  // Используем код символа для определения индекса цвета
  const index = letter.toLowerCase().charCodeAt(0) % colors.length;
  return colors[index];
};

export function LandingPageComponent() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev + 2 >= testimonials.length ? 0 : prev + 2
    )
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Yangi Hayot Diagnostika - Частная клиника в Ташкенте | Медицинский центр 24/7</title>
        <meta name="description" content="Yangi Hayot Diagnostika - ведущая частная клиника в Ташкенте. Квалифцированные врачи, современное оборудование, медицинские услуги 24/7. Запишитесь онлайн!" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yangihayotclinic.uz/" />
        <meta property="og:title" content="Yangi Hayot Diagnostika - Частная клиника в Ташкенте" />
        <meta property="og:description" content="Ведущая частная клиника в Ташкенте. Современное оборудование, квалифицированные специалисты. Работаем 24/7." />
        <meta property="og:image" content="https://yangihayotclinic.uz/og-image.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:locale:alternate" content="uz_UZ" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yangihayot" />
        <meta name="twitter:title" content="Yangi Hayot Diagnostika - Частная клиника в Ташкенте" />
        <meta name="twitter:description" content="Ведущая частна клиника в Ташкенте. Свременное оборудование, квалифицированные специалисты. Работаем 24/7." />
        <meta name="twitter:image" content="https://yangihayotclinic.uz/og-image.jpg" />

        {/* Additional SEO tags */}
        <meta name="keywords" content="частная клиника в ташкенте, клиника в ташкенте, медицинский центр ташкент, врачи ташкент, диагностический центр, узи ташкент, анализы ташкент, круглосуточная клиника, Yangi Hayot Diagnostika" />
        <meta name="author" content="Yangi Hayot Diagnostika" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="Russian" />
        <meta name="geo.region" content="UZ-TO" />
        <meta name="geo.placename" content="Tashkent" />
        
        {/* Alternate Languages */}
        <link rel="alternate" hrefLang="ru" href="https://yangihayotclinic.uz/" />
        <link rel="alternate" hrefLang="uz" href="https://yangihayotclinic.uz/uz/" />
        <link rel="alternate" hrefLang="x-default" href="https://yangihayotclinic.uz/" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yangihayotclinic.uz/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Yangi Hayot Diagnostika",
            "alternateName": "Янги Хаёт Диагностика",
            "image": "https://yangihayotclinic.uz/og-image.jpg",
            "logo": "https://yangihayotclinic.uz/logo.png",
            "@id": "https://yangihayotclinic.uz",
            "url": "https://yangihayotclinic.uz",
            "telephone": "+998770318448",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Янгиҳаятский р-н, Чароғон МФЙ, Дўстлик-1",
              "addressLocality": "Ташкент",
              "addressRegion": "Ташкент",
              "postalCode": "100098",
              "addressCountry": "UZ"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.2995,
              "longitude": 69.2401
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61567130414766",
              "https://www.instagram.com/yangihayot_medical/",
              "https://t.me/yangihayot_med"
            ],
            "medicalSpecialty": [
              "Дерматология",
              "ЛОР",
              "Педиатрия",
              "УЗИ",
              "Урология",
              "Ортопедия",
              "Стоматология",
              "Лабораторные исследования"
            ]
          })}
        </script>
      </Head>
      <div className="min-h-screen bg-[#F8FAFC]" style={{ transform: 'scale(0.9)', transformOrigin: 'top center', width: '111.11%', marginLeft: '-5.56%' }}>
        {/* Header Section */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Yangi Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">
                О клинике
              </Link>
              <Link href="#services" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Услуги
              </Link>
              <Link href="#reviews" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Отзывы
              </Link>
              <Link href="#contact" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Контакты
              </Link>          
            </nav>
            
            <a 
              href="tel:+998770318448" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+998 77 031 84 48</span>
            </a>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section id="hero" className="container mx-auto px-4 py-12 relative">
            {/* Добавить плавающие элементы */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-100/30 blur-3xl"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                <span className="inline-block text-sm font-medium text-emerald-500 mb-0">
                  СЕРТИФИЦИРОВАННЫЕ ВРАЧИ
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Круглосуточная клиника <br />в Ташкенте
                </h1>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg">Режим работы 24/7</h3>
                      <p className="text-sm text-gray-500">Круглосуточная помощь</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg">Опытны специалисты</h3>
                      <p className="text-sm text-gray-500">Команда профессионалов</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Search className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg">Найдите лучших врачей</h3>
                      <p className="text-sm text-gray-500">Индивидуальный подход</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg">Задайте свои вопросы</h3>
                      <p className="text-sm text-gray-500">Мы всегда на связи</p>
                    </div>
                  </div>
                </div>
                <motion.div className="flex flex-col sm:flex-row gap-4 mt-16">
                  <motion.a
                    href="tel:+998770318448"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                  >
                    <span className="text-lg font-semibold relative z-10">Позвонить</span>
                    <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://maps.app.goo.gl/QPztMEtPAzSbgnsP6', '_blank')}
                    className="inline-flex items-center justify-center space-x-3 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="text-lg font-semibold relative z-10">Адрес клиники</span>
                    <MapPin className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
              >
                <Image
                  src="/images/doctor.jpg"
                  alt="Yangi Hayot"
                  fill
                  priority
                  className="rounded-3xl object-cover object-center"
                />
                <div className="hidden md:block">
                  <Card className="absolute -right-4 top-4 bg-white p-6 rounded-xl shadow-lg w-80">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                        <Image src="/images/bosh.jpg" alt="Основатель клиники" width={96} height={96} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-lg text-gray-900">Др.Нураев Жуманазар</h3>
                        <p className="text-sm text-gray-600">Основатель клиники</p>
                        <p className="text-sm text-blue-600 mt-1">13 лет опыта в медицине</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Наша миссия - предосавить каждому пациенту индивидуальный подход и высококачественное лечение.
                      </p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Steps Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-20">
                <span className="text-blue-600 text-sm font-medium mb-4 block tracking-wide">
                  БЫСТРОЕ РЕШЕНИЕ
                </span>
                <h2 className="text-3xl md:text-[40px] font-bold text-[#1E293B] leading-tight">
                  4 постых шага для получения решеня
                </h2>
              </div>
              
              <motion.div 
                className="grid md:grid-cols-4 gap-12 md:gap-16  max-w-7xl mx-auto px-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
                      <step.icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-[#1E293B]">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Doctors Section */}
          <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="md:grid md:grid-cols-2 md:gap-24 items-start">
                <div className="space-y-6 md:pt-16 mb-12 md:mb-0">
                  <span className="text-blue-600 text-sm font-medium tracking-wide">
                    О КЛИНИКЕ
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] leading-tight">
                    Надёжная клиника для всей семьи
                  </h2>
                  <p className="text-gray-500">
                   Наша клиика – это современный медицинский центр, где каждому пациенту уделяется максимальное внимание. Мы гордимся высококвалифицированной командой специалистов, которые прошли строгий отбор и имеют многолетний опыт работы. Наши врачи регулярно проходят обучение, чтобы использовать самые передовые методы диагностики и лечения.
                  </p>
                  <p className="text-gray-500">
                  Мы предлагаем широкий спектр медицинских услуг, от профилактики и диагностики до специализированного лечения и реабилитации. Наша миссия – забота о вашем здоровье с индивидуальным подходом и гарантией высокого качества на каждом этапе лечения.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-auto px-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md">
                        Записаться на консультацию
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Связаться с нами</DialogTitle>
                      </DialogHeader>
                      <p>Наш номер телефона: <a href="tel:+998770318448">+998 77 031 84 48</a></p>
                    </DialogContent>
                  </Dialog>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {doctors.map((doctor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${doctor.offset || ''} ${doctor.translate || ''}`}
                    >
                      <Card className="p-4 hover:shadow-lg shadow-md transition-shadow duration-300 bg-white rounded-3xl relative group">
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative bg-white rounded-[23px] p-4">
                          <div className="flex flex-row sm:flex-col items-left sm:items-start space-x-4 sm:space-x-0 sm:space-y-6">
                            <div className={`w-20 h-20 ${doctor.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                              <Image
                                src={doctor.image}
                                alt={doctor.name}
                                width={90}
                                height={90}
                                className="rounded-xl"
                              />
                            </div>
                            <div className="space-y-1 text-left sm:text-left">
                              <h3 className="font-semibold text-[#1E293B] text-lg">{doctor.name}</h3>
                              <p className="text-sm text-blue-600 font-medium">{doctor.specialty}</p>
                              <p className="text-sm text-gray-500">{doctor.experience}</p>
                            </div>
                          </div>
                          {/* Градиентная рамка */}
                          <div className="absolute inset-0 -z-10 overflow-hidden">
                            <motion.div
                              animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"
                            />
                            <motion.div
                              animate={{
                                rotate: -360,
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-100/30 blur-3xl"
                            />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-20">
                <span className="text-blue-600 text-sm font-medium mb-4 block tracking-wide">
                  НАШИ УСЛУГИ
                </span>
                <h2 className="text-3xl md:text-[40px] font-bold text-[#1E293B] leading-tight mb-4">
                  Профессиональные услуги для вашего здоровья
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Оказываем медицинские услуги 24/7 с индивидуальным подходом и высоким качеством. Современные методы диагностики и лечения для вашего здоровья.
                </p>
              </div>
              
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                      <div className="space-y-4">
                        <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center`}>
                          {React.createElement(service.icon, {
                            className: `w-7 h-7 ${service.iconColor}`
                          })}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-[#1E293B] text-lg">
                            {service.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-blue-600 text-sm font-medium mb-2 block">
                  ОТЗЫВЫ
                </span>
                <h2 className="text-3xl md:text-[40px] font-bold text-[#1E293B] leading-tight">
                  Что оворят о нас пациенты
                </h2>
              </div>

              <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    {[0, 1].map((offset) => {
                      const testimonial = testimonials[(currentTestimonialIndex + offset) % testimonials.length]
                      return (
                        <motion.div
                          key={currentTestimonialIndex + offset}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: offset * 0.1 }}
                        >
                          <Card className="p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300">
                            <div className="space-y-4">
                              <div className="flex items-center space-x-4">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-semibold ${getBackgroundColor(testimonial.name[0])} text-white`}>
                                  {testimonial.name[0]}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-[#1E293B] text-lg">
                                    {testimonial.name}
                                  </h3>
                                  <p className="text-sm text-gray-500">
                                    {testimonial.title}
                                  </p>
                                </div>
                              </div>
                              <div className="flex text-emerald-500">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                              </div>
                              <p className="text-gray-600 leading-relaxed">
                                {testimonial.review}
                              </p>
                            </div>
                          </Card>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: testimonials.length / 2 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index * 2)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        currentTestimonialIndex === index * 2 
                          ? 'bg-blue-600' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    >
                      <span className="sr-only">Перейи к слайду {index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
            {/* Анимированный фоновый паттерн */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готовы начать свой путь к здоровью?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Запишитесь на бесплатную консультацию и узнайте, как мы можем помочь вам обрести уверенность в себе с помощью наших передовых методов лечения.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-blue-600 hover:bg-blue-100">
                      Записаться на консультацию
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-white/80 backdrop-blur-sm border border-gray-100">
                    <DialogHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-lg">
                      <DialogTitle className="text-2xl font-bold text-center">
                        Записаться на консультацию
                      </DialogTitle>
                      <p className="text-sm text-center text-blue-100 mt-2">
                        Оставьте свои данные, и мы свяжемся с вами в ближайшее время
                      </p>
                    </DialogHeader>
                    <div className="p-6">
                      <form className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Ваше имя
                          </label>
                          <Input 
                            id="name"
                            placeholder="Введите ваше имя" 
                            className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Номер телефона
                          </label>
                          <Input 
                            id="phone"
                            type="tel" 
                            placeholder="+998 __ ___ __ __"
                            className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Сообщение
                          </label>
                          <Textarea 
                            id="message"
                            placeholder="Опишите причину обращения" 
                            className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[100px] resize-none"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg"
                        >
                          Отправить заявку
                        </Button>
                        
                        <p className="text-xs text-gray-500 text-center mt-4">
                          Нажимая кнопку Отправить заявку, ы соглашаетесь с обработкой персональных данных
                        </p>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>              
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-white py-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <span className="text-blue-600 text-sm font-medium mb-2 block">
                  КОНТАКТЫ
                </span>
                <h2 className="text-3xl md:text-[40px] font-bold text-[#1E293B] leading-tight mb-4">
                  Свяжитесь с нами
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Мы всегда готовы ответить на ваши вопросы и помочь вам сделать первый шаг к здровью. Не стесняйтесь обращаться к нам любым удобнм дя вас способом.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="space-y-8 bg-white p-8 rounded-lg shadow-lg">
                  <div className="space-y-6 p-2">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E293B]">Телефон</h3>
                        <a href="tel:+998770318448" className="text-gray-600 hover:text-blue-600 transition-colors">
                          +998 77 031 84 48
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E293B]">Email</h3>
                        <a href="mailto:info@yangihayot.uz" className="text-gray-600 hover:text-blue-600 transition-colors">
                          nozimjonilimjonov@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E293B]">Адрес</h3>
                        <p className="text-gray-600">
                        Янгиҳаятский р-н, Чароғон МФЙ, Дўстлик-1, Ташкент
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E293B]">Часы работы</h3>
                        <p className="text-gray-600">
                          Круглосуточно 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#1E293B]">Свяжитесь с нами</h3>
                    <p className="text-gray-600">
                      Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время для консультации.
                    </p>
                    <a href="tel:+998770318448" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-md">
                      Позвонить
                    </a>
                  </div>
                </div>
                <div className="relative h-[300px] md:h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/location.png"
                    alt="Карта расположения клиники"
                    layout="fill"
                    objectFit="cover"
                    className="scale-125"
                  />
                  <div className="absolute inset-0 flex items-center justify-center mt-60">
                    <button 
                      className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md"
                      onClick={() => window.open('https://maps.app.goo.gl/QPztMEtPAzSbgnsP6', '_blank')}
                    >
                      Открыть карту
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-[#1E293B] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold">Yangi</span>
                  <span className="text-2xl font-bold text-blue-400">.</span>
                </Link>
                <p className="text-gray-400">
                  Ведущая клиника, использующая передовые технологии и индивидуальный подход к каждому пациенту.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Компания</h3>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-400 hover:text-white">О нас</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white">Наши услуги</a></li>
                  <li><a href="#reviews" className="text-gray-400 hover:text-white">Отзывы</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">Контакты</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
                <div className="space-y-4">
                  <a href="https://www.facebook.com/profile.php?id=61567130414766" className="flex items-center space-x-3 text-gray-400 hover:text-white">
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://t.me/yangihayot_med" className="flex items-center space-x-3 text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.351c.192-.18-.045-.277-.297-.097l-5.965 3.759-2.564-.801c-.657-.206-.671-.657.136-.974l10.018-3.838c.545-.206 1.024.126.837.985z"/>
                    </svg>
                    <span>Telegram</span>
                  </a>
                  <a href="https://www.instagram.com/yangihayot_medical/" className="flex items-center space-x-3 text-gray-400 hover:text-white">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Yangi. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}