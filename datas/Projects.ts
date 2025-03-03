import Image1 from "@/public/image/renex-web.jpg";
import Image2 from "@/public/image/turkiz-web.jpg";
import Image3 from "@/public/image/dgtl-web.jpg";
import Image4 from "@/public/image/adem.jpg";
import Image5 from "@/public/image/adim.jpg";
import Image6 from "@/public/image/adum.jpg";
import { CheckCircle2, Users2, Target } from "lucide-react";

const projects = [
  // Preje 1
  {
    id: 1,
    title: "Imperial Turkiz Hotel Web Sitesi",
    description:
      "Renex Hotel için modern, şık ve tamamen responsive bir web sitesi tasarladık. Kullanıcı dostu arayüzü ile otelin hizmetlerini en iyi şekilde tanıtıyor.",
    imageUrl: "/turkiz-web.jpg",
    category: "Web Tasarım",
    client: "Imperial Hotels",
    year: "2023",
    tags: ["UI/UX", "Web Tasarım", "Kullanıcı Odaklılık"],
    deviceType: "macbook",
    duration: "8 Hafta",

    // projectData içinde title'ı otomatik olarak bağladık
    projectData: {
      id: null,
      title: null, // Başlangıçta null, sonra set edilecek
      description: null,
      fullDescription: `Bu projede, modern eğitim ihtiyaçlarını karşılayan, kullanıcı dostu bir e-learning platformu tasarladık...`,
      imageUrl: null,
      category: null,
      client: null,
      year: null,
      duration: null,
      team: [
        "UX Araştırmacısı",
        "UI Tasarımcısı",
        "Etkileşim Tasarımcısı",
        "Frontend Geliştirici",
      ],
      deliverables: [
        "UX Araştırma Raporu",
        "Kullanıcı Akış Şemaları",
        "Wireframe'ler",
        "UI Stil Rehberi",
        "Prototip",
        "Kullanılabilirlik Test Raporu",
      ],
      technologies: ["Figma", "Adobe XD", "Maze", "Miro", "Proto.io"],
      researchMethods: [
        "Kullanıcı Görüşmeleri",
        "Anketler",
        "Rakip Analizi",
        "Kullanılabilirlik Testleri",
        "A/B Testleri",
      ],
      goals: [
        "Kullanıcı kaydı ve katılımını %40 artırmak",
        "Ders tamamlama oranlarını %60'a çıkarmak",
        "Mobil kullanımı %50 artırmak",
        "Platform kullanılabilirlik skorunu 90+ yapmak",
      ],
      results: [
        "Kullanıcı kaydında %45 artış",
        "Ders tamamlama oranlarında %65 iyileşme",
        "Mobil kullanımda %55 artış",
        "92/100 kullanılabilirlik skoru",
      ],
      process: {
        empathize: {
          title: "Empati & Araştırma",
          description:
            "Kullanıcı ihtiyaçlarını ve davranışlarını derinlemesine anlamak için kapsamlı araştırma yaptık.",
          duration: "3 Hafta",
          tasks: [
            "15 derinlemesine kullanıcı görüşmesi",
            "200+ anket yanıtı analizi",
            "5 rakip platformun detaylı analizi",
            "Kullanıcı yolculuğu haritalaması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
      },
      wireframes: [
        {
          title: "Ana Sayfa",
          description: "Kurs keşfi ve navigasyon yapısı",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1O1QwHRLMB1otiLMWNOgFJNQSeoThO.png",
        },
      ],
      gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
      metrics: [
        {
          title: "Kullanıcı Memnuniyeti",
          value: "92%",
          change: "+15%",
          icon: Users2,
        },
      ],
      hasPrototype: true,
      hasWireframes: true,
    },
  },
  // Preje 2
  {
    id: 2,
    title: "Burak Proje 2",
    description:
      "Yenilikçi bir teknoloji şirketi için Instagram ve LinkedIn kampanyası.",
    imageUrl: "/inone-mobile.jpg",
    category: "Mobile App",
    client: "Inone Hotels",
    year: "2023",
    tags: ["Mobile App", "Dijital Pazarlama", "Tech"],
    deviceType: "iphone", // Bu proje için iPhone frame kullan
    projectData: {
      id: 1,
      title: "Burak Proje 2",
      description:
        "Kullanıcı odaklı, erişilebilir ve etkileşimli bir online eğitim platformu tasarımı.",
      fullDescription: `Bu projede, modern eğitim ihtiyaçlarını karşılayan, kullanıcı dostu bir e-learning platformu tasarladık. Projemiz, detaylı kullanıcı araştırması ve test süreçleriyle şekillendirildi. Platform, öğrencilerin eğitim içeriklerine kolay erişimini sağlarken, eğitmenlere de içerik yönetimi için güçlü araçlar sunuyor.
        
        Tasarım sürecimiz, kullanıcı deneyimini merkeze alan bir yaklaşımla yürütüldü. Özellikle mobil kullanım senaryoları ve erişilebilirlik standartları göz önünde bulundurularak, her kullanıcı için optimal bir deneyim hedeflendi.`,
      imageUrl: "@/renex-web.jpg",
      category: "UI/UX Tasarımı",
      client: "EduTech Inc.",
      date: "2023",
      duration: "12 Hafta",
      team: [
        "UX Araştırmacısı",
        "UI Tasarımcısı",
        "Etkileşim Tasarımcısı",
        "Frontend Geliştirici",
      ],
      deliverables: [
        "UX Araştırma Raporu",
        "Kullanıcı Akış Şemaları",
        "Wireframe'ler",
        "UI Stil Rehberi",
        "Prototip",
        "Kullanılabilirlik Test Raporu",
      ],
      technologies: ["Figma", "Adobe XD", "Maze", "Miro", "Proto.io"],
      researchMethods: [
        "Kullanıcı Görüşmeleri",
        "Anketler",
        "Rakip Analizi",
        "Kullanılabilirlik Testleri",
        "A/B Testleri",
      ],
      goals: [
        "Kullanıcı kaydı ve katılımını %40 artırmak",
        "Ders tamamlama oranlarını %60'a çıkarmak",
        "Mobil kullanımı %50 artırmak",
        "Platform kullanılabilirlik skorunu 90+ yapmak",
      ],
      results: [
        "Kullanıcı kaydında %45 artış",
        "Ders tamamlama oranlarında %65 iyileşme",
        "Mobil kullanımda %55 artış",
        "92/100 kullanılabilirlik skoru",
      ],
      process: {
        empathize: {
          title: "Empati & Araştırma",
          description:
            "Kullanıcı ihtiyaçlarını ve davranışlarını derinlemesine anlamak için kapsamlı araştırma yaptık.",
          duration: "3 Hafta",
          tasks: [
            "15 derinlemesine kullanıcı görüşmesi",
            "200+ anket yanıtı analizi",
            "5 rakip platformun detaylı analizi",
            "Kullanıcı yolculuğu haritalaması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        define: {
          title: "Tanımlama & Analiz",
          description:
            "Araştırma bulgularını analiz ederek temel kullanıcı ihtiyaçlarını ve sorunları belirledik.",
          duration: "2 Hafta",
          tasks: [
            "Kullanıcı personaları oluşturma",
            "Sorun tespiti ve önceliklendirme",
            "Tasarım prensiplerinin belirlenmesi",
            "Başarı metriklerinin tanımlanması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        ideate: {
          title: "Fikir Üretimi & Tasarım",
          description:
            "Belirlenen sorunlara yönelik çözümler geliştirdik ve ilk tasarım konseptlerini oluşturduk.",
          duration: "4 Hafta",
          tasks: [
            "Beyin fırtınası oturumları",
            "Çözüm önerilerinin değerlendirilmesi",
            "Wireframe'lerin oluşturulması",
            "Tasarım sisteminin geliştirilmesi",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        prototype: {
          title: "Prototipleme & Test",
          description:
            "Tasarımları interaktif prototiplere dönüştürdük ve kullanıcılarla test ettik.",
          duration: "3 Hafta",
          tasks: [
            "Hi-fi prototiplerin hazırlanması",
            "10 kullanılabilirlik testi",
            "Geri bildirimlerin analizi",
            "İterasyonların tamamlanması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
      },
      wireframes: [
        {
          title: "Ana Sayfa",
          description: "Kurs keşfi ve navigasyon yapısı",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1O1QwHRLMB1otiLMWNOgFJNQSeoThO.png",
        },
        {
          title: "Kurs Detay",
          description: "İçerik organizasyonu ve etkileşim noktaları",
          image: "/placeholder.svg?height=600&width=800",
        },
        {
          title: "Öğrenim Paneli",
          description: "İlerleme takibi ve içerik görüntüleme",
          image: "/placeholder.svg?height=600&width=800",
        },
      ],
      gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
      metrics: [
        {
          title: "Kullanıcı Memnuniyeti",
          value: "92%",
          change: "+15%",
          icon: Users2,
        },
        {
          title: "Görev Tamamlama",
          value: "95%",
          change: "+20%",
          icon: CheckCircle2,
        },
        {
          title: "Hedef Gerçekleşme",
          value: "88%",
          change: "+25%",
          icon: Target,
        },
      ],
      hasPrototype: true,
      hasWireframes: true,
    },
  },
  // Proje 3
  {
    id: 3,
    title: "Renex Hotel Web Sitesi",
    description:
      "Renex Hotel için modern, şık ve tamamen responsive bir web sitesi tasarladık. Kullanıcı dostu arayüzü ile otelin hizmetlerini en iyi şekilde tanıtıyor.",
    imageUrl: "/renex-web.jpg",
    category: "Web Tasarım",
    client: "Renex Hotel",
    year: "2024",
    tags: ["UI/UX", "Web Tasarım", "Responsive Design"],
    deviceType: "macbook",
    duration: "6 Hafta",

    projectData: {
      id: null,
      title: null,
      description: null,
      fullDescription: `Renex Hotel için hazırladığımız web sitesi, otelin lüks ve konforlu atmosferini dijital dünyada en iyi şekilde yansıtmayı amaçlıyor. Kullanıcı deneyimini ön planda tutarak, hem masaüstü hem de mobil cihazlarda sorunsuz bir gezinti sunan bir arayüz geliştirdik.`,
      imageUrl: null,
      category: null,
      client: null,
      year: null,
      duration: null,
      team: ["UI/UX Designer", "Frontend Geliştirici"],
      deliverables: [
        "Wireframe Tasarımları",
        "Kullanıcı Akış Şemaları",
        "UI Stil Rehberi",
        "Tamamlanmış Web Sitesi",
        "SEO Optimizasyonu",
        "Mobil Uyumluluk Testleri",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "WordPress",
        "HTML/CSS",
        "JavaScript",
      ],
      researchMethods: [
        "Kullanıcı Görüşmeleri",
        "Rakip Analizi",
        "Kullanılabilirlik Testleri",
        "SEO Analizi",
      ],
      goals: [
        "Otel rezervasyonlarını %30 artırmak",
        "Mobil kullanıcı erişimini %50 artırmak",
        "SEO uyumluluğunu %90 seviyesine çıkarmak",
        "Web sitesi hızını optimize ederek %80 daha hızlı yükleme sağlamak",
      ],
      results: [
        "Rezervasyon oranında %35 artış",
        "Mobil kullanıcı trafiğinde %55 büyüme",
        "SEO performansında 92/100 puan",
        "Web sitesi yükleme süresi %85 daha hızlı",
      ],
      process: {
        empathize: {
          title: "Empati & Araştırma",
          description:
            "Kullanıcıların otel web sitelerindeki beklentilerini anlamak için detaylı araştırmalar yaptık.",
          duration: "2 Hafta",
          tasks: [
            "10 kullanıcı görüşmesi",
            "3 rakip otel web sitesinin analizi",
            "Kullanıcı yolculuğu haritalaması",
            "SEO ve performans analizleri",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        define: {
          title: "Tanımlama & Analiz",
          description:
            "Elde edilen verileri analiz ederek en kritik kullanıcı ihtiyaçlarını belirledik.",
          duration: "1 Hafta",
          tasks: [
            "Kullanıcı personaları oluşturma",
            "Önemli sorunları belirleme",
            "Başarı metriklerini oluşturma",
            "Tasarım hedeflerinin netleştirilmesi",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        ideate: {
          title: "Fikir Üretimi & Tasarım",
          description:
            "Kullanıcı dostu ve modern bir tasarım geliştirmek için yaratıcı çözümler ürettik.",
          duration: "2 Hafta",
          tasks: [
            "Wireframe ve prototip oluşturma",
            "Tasarım sistemini geliştirme",
            "Renk paleti ve tipografi seçimi",
            "Kullanıcı deneyimi testleri",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        prototype: {
          title: "Prototipleme & Test",
          description:
            "Hazırlanan prototipleri test ederek kullanıcı geri bildirimleri doğrultusunda iyileştirmeler yaptık.",
          duration: "1 Hafta",
          tasks: [
            "Hi-fi prototiplerin hazırlanması",
            "10 kullanılabilirlik testi",
            "SEO ve performans testleri",
            "İterasyon sürecinin tamamlanması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
      },
      gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
      metrics: [
        {
          title: "Kullanıcı Memnuniyeti",
          value: "90%",
          change: "+20%",
          icon: Users2,
        },
        {
          title: "Rezervasyon Artışı",
          value: "35%",
          change: "+15%",
          icon: CheckCircle2,
        },
        {
          title: "Mobil Trafik",
          value: "55%",
          change: "+30%",
          icon: Target,
        },
      ],
      hasPrototype: true,
    },
  },

  // Preje 4
  {
    id: 4,
    title: "Burak Proje 4",
    description: "Klasik filmleri temsil eden minimalist poster koleksiyonu.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Grafik Tasarım",
    client: "CinemaArt Gallery",
    year: "2023",
    tags: ["Poster", "Minimalizm", "Film"],
    deviceType: "macbook", // Bu proje için MacBook frame kullan
    projectData: {
      id: 1,
      title: "E-Learning Platform UI/UX Design",
      description:
        "Kullanıcı odaklı, erişilebilir ve etkileşimli bir online eğitim platformu tasarımı.",
      fullDescription: `Bu projede, modern eğitim ihtiyaçlarını karşılayan, kullanıcı dostu bir e-learning platformu tasarladık. Projemiz, detaylı kullanıcı araştırması ve test süreçleriyle şekillendirildi. Platform, öğrencilerin eğitim içeriklerine kolay erişimini sağlarken, eğitmenlere de içerik yönetimi için güçlü araçlar sunuyor.
        
        Tasarım sürecimiz, kullanıcı deneyimini merkeze alan bir yaklaşımla yürütüldü. Özellikle mobil kullanım senaryoları ve erişilebilirlik standartları göz önünde bulundurularak, her kullanıcı için optimal bir deneyim hedeflendi.`,
      imageUrl: "@/renex-web.jpg",
      category: "UI/UX Tasarımı",
      client: "EduTech Inc.",
      date: "2023",
      duration: "12 Hafta",
      team: [
        "UX Araştırmacısı",
        "UI Tasarımcısı",
        "Etkileşim Tasarımcısı",
        "Frontend Geliştirici",
      ],
      deliverables: [
        "UX Araştırma Raporu",
        "Kullanıcı Akış Şemaları",
        "Wireframe'ler",
        "UI Stil Rehberi",
        "Prototip",
        "Kullanılabilirlik Test Raporu",
      ],
      technologies: ["Figma", "Adobe XD", "Maze", "Miro", "Proto.io"],
      researchMethods: [
        "Kullanıcı Görüşmeleri",
        "Anketler",
        "Rakip Analizi",
        "Kullanılabilirlik Testleri",
        "A/B Testleri",
      ],
      goals: [
        "Kullanıcı kaydı ve katılımını %40 artırmak",
        "Ders tamamlama oranlarını %60'a çıkarmak",
        "Mobil kullanımı %50 artırmak",
        "Platform kullanılabilirlik skorunu 90+ yapmak",
      ],
      results: [
        "Kullanıcı kaydında %45 artış",
        "Ders tamamlama oranlarında %65 iyileşme",
        "Mobil kullanımda %55 artış",
        "92/100 kullanılabilirlik skoru",
      ],
      process: {
        empathize: {
          title: "Empati & Araştırma",
          description:
            "Kullanıcı ihtiyaçlarını ve davranışlarını derinlemesine anlamak için kapsamlı araştırma yaptık.",
          duration: "3 Hafta",
          tasks: [
            "15 derinlemesine kullanıcı görüşmesi",
            "200+ anket yanıtı analizi",
            "5 rakip platformun detaylı analizi",
            "Kullanıcı yolculuğu haritalaması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        define: {
          title: "Tanımlama & Analiz",
          description:
            "Araştırma bulgularını analiz ederek temel kullanıcı ihtiyaçlarını ve sorunları belirledik.",
          duration: "2 Hafta",
          tasks: [
            "Kullanıcı personaları oluşturma",
            "Sorun tespiti ve önceliklendirme",
            "Tasarım prensiplerinin belirlenmesi",
            "Başarı metriklerinin tanımlanması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        ideate: {
          title: "Fikir Üretimi & Tasarım",
          description:
            "Belirlenen sorunlara yönelik çözümler geliştirdik ve ilk tasarım konseptlerini oluşturduk.",
          duration: "4 Hafta",
          tasks: [
            "Beyin fırtınası oturumları",
            "Çözüm önerilerinin değerlendirilmesi",
            "Wireframe'lerin oluşturulması",
            "Tasarım sisteminin geliştirilmesi",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        prototype: {
          title: "Prototipleme & Test",
          description:
            "Tasarımları interaktif prototiplere dönüştürdük ve kullanıcılarla test ettik.",
          duration: "3 Hafta",
          tasks: [
            "Hi-fi prototiplerin hazırlanması",
            "10 kullanılabilirlik testi",
            "Geri bildirimlerin analizi",
            "İterasyonların tamamlanması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
      },
      wireframes: [
        {
          title: "Ana Sayfa",
          description: "Kurs keşfi ve navigasyon yapısı",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1O1QwHRLMB1otiLMWNOgFJNQSeoThO.png",
        },
        {
          title: "Kurs Detay",
          description: "İçerik organizasyonu ve etkileşim noktaları",
          image: "/placeholder.svg?height=600&width=800",
        },
        {
          title: "Öğrenim Paneli",
          description: "İlerleme takibi ve içerik görüntüleme",
          image: "/placeholder.svg?height=600&width=800",
        },
      ],
      gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
      metrics: [
        {
          title: "Kullanıcı Memnuniyeti",
          value: "92%",
          change: "+15%",
          icon: Users2,
        },
        {
          title: "Görev Tamamlama",
          value: "95%",
          change: "+20%",
          icon: CheckCircle2,
        },
        {
          title: "Hedef Gerçekleşme",
          value: "88%",
          change: "+25%",
          icon: Target,
        },
      ],
      hasPrototype: true,
      hasWireframes: true,
    },
  },
  // Preje 5
  {
    id: 5,
    title: "Burak Proje 5",
    description: "Çevre dostu malzemelerle üretilen organik gıda ambalajları.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Ambalaj Tasarımı",
    client: "NatureBite",
    year: "2022",
    tags: ["Ambalaj", "Organik", "Sürdürülebilirlik"],
    deviceType: "macbook", // Bu proje için MacBook frame kullan
    projectData: {
      id: 1,
      title: "E-Learning Platform UI/UX Design",
      description:
        "Kullanıcı odaklı, erişilebilir ve etkileşimli bir online eğitim platformu tasarımı.",
      fullDescription: `Bu projede, modern eğitim ihtiyaçlarını karşılayan, kullanıcı dostu bir e-learning platformu tasarladık. Projemiz, detaylı kullanıcı araştırması ve test süreçleriyle şekillendirildi. Platform, öğrencilerin eğitim içeriklerine kolay erişimini sağlarken, eğitmenlere de içerik yönetimi için güçlü araçlar sunuyor.
        
        Tasarım sürecimiz, kullanıcı deneyimini merkeze alan bir yaklaşımla yürütüldü. Özellikle mobil kullanım senaryoları ve erişilebilirlik standartları göz önünde bulundurularak, her kullanıcı için optimal bir deneyim hedeflendi.`,
      imageUrl: "@/renex-web.jpg",
      category: "UI/UX Tasarımı",
      client: "EduTech Inc.",
      date: "2023",
      duration: "12 Hafta",
      team: [
        "UX Araştırmacısı",
        "UI Tasarımcısı",
        "Etkileşim Tasarımcısı",
        "Frontend Geliştirici",
      ],
      deliverables: [
        "UX Araştırma Raporu",
        "Kullanıcı Akış Şemaları",
        "Wireframe'ler",
        "UI Stil Rehberi",
        "Prototip",
        "Kullanılabilirlik Test Raporu",
      ],
      technologies: ["Figma", "Adobe XD", "Maze", "Miro", "Proto.io"],
      researchMethods: [
        "Kullanıcı Görüşmeleri",
        "Anketler",
        "Rakip Analizi",
        "Kullanılabilirlik Testleri",
        "A/B Testleri",
      ],
      goals: [
        "Kullanıcı kaydı ve katılımını %40 artırmak",
        "Ders tamamlama oranlarını %60'a çıkarmak",
        "Mobil kullanımı %50 artırmak",
        "Platform kullanılabilirlik skorunu 90+ yapmak",
      ],
      results: [
        "Kullanıcı kaydında %45 artış",
        "Ders tamamlama oranlarında %65 iyileşme",
        "Mobil kullanımda %55 artış",
        "92/100 kullanılabilirlik skoru",
      ],
      process: {
        empathize: {
          title: "Empati & Araştırma",
          description:
            "Kullanıcı ihtiyaçlarını ve davranışlarını derinlemesine anlamak için kapsamlı araştırma yaptık.",
          duration: "3 Hafta",
          tasks: [
            "15 derinlemesine kullanıcı görüşmesi",
            "200+ anket yanıtı analizi",
            "5 rakip platformun detaylı analizi",
            "Kullanıcı yolculuğu haritalaması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        define: {
          title: "Tanımlama & Analiz",
          description:
            "Araştırma bulgularını analiz ederek temel kullanıcı ihtiyaçlarını ve sorunları belirledik.",
          duration: "2 Hafta",
          tasks: [
            "Kullanıcı personaları oluşturma",
            "Sorun tespiti ve önceliklendirme",
            "Tasarım prensiplerinin belirlenmesi",
            "Başarı metriklerinin tanımlanması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        ideate: {
          title: "Fikir Üretimi & Tasarım",
          description:
            "Belirlenen sorunlara yönelik çözümler geliştirdik ve ilk tasarım konseptlerini oluşturduk.",
          duration: "4 Hafta",
          tasks: [
            "Beyin fırtınası oturumları",
            "Çözüm önerilerinin değerlendirilmesi",
            "Wireframe'lerin oluşturulması",
            "Tasarım sisteminin geliştirilmesi",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        prototype: {
          title: "Prototipleme & Test",
          description:
            "Tasarımları interaktif prototiplere dönüştürdük ve kullanıcılarla test ettik.",
          duration: "3 Hafta",
          tasks: [
            "Hi-fi prototiplerin hazırlanması",
            "10 kullanılabilirlik testi",
            "Geri bildirimlerin analizi",
            "İterasyonların tamamlanması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
      },
      wireframes: [
        {
          title: "Ana Sayfa",
          description: "Kurs keşfi ve navigasyon yapısı",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1O1QwHRLMB1otiLMWNOgFJNQSeoThO.png",
        },
        {
          title: "Kurs Detay",
          description: "İçerik organizasyonu ve etkileşim noktaları",
          image: "/placeholder.svg?height=600&width=800",
        },
        {
          title: "Öğrenim Paneli",
          description: "İlerleme takibi ve içerik görüntüleme",
          image: "/placeholder.svg?height=600&width=800",
        },
      ],
      gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
      metrics: [
        {
          title: "Kullanıcı Memnuniyeti",
          value: "92%",
          change: "+15%",
          icon: Users2,
        },
        {
          title: "Görev Tamamlama",
          value: "95%",
          change: "+20%",
          icon: CheckCircle2,
        },
        {
          title: "Hedef Gerçekleşme",
          value: "88%",
          change: "+25%",
          icon: Target,
        },
      ],
      hasPrototype: true,
      hasWireframes: true,
    },
  },
  // Preje 6
  {
    id: 6,
    title: "Burak Proje 6",
    description:
      "Kullanıcı dostu ve veri odaklı finans yönetim paneli arayüzü.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "UI/UX Tasarımı",
    client: "FinanceFlow",
    year: "2023",
    tags: ["UI/UX", "Dashboard", "Fintech"],
    deviceType: "macbook", // Bu proje için MacBook frame kullan
    projectData: {
      id: 1,
      title: "E-Learning Platform UI/UX Design",
      description:
        "Kullanıcı odaklı, erişilebilir ve etkileşimli bir online eğitim platformu tasarımı.",
      fullDescription: `Bu projede, modern eğitim ihtiyaçlarını karşılayan, kullanıcı dostu bir e-learning platformu tasarladık. Projemiz, detaylı kullanıcı araştırması ve test süreçleriyle şekillendirildi. Platform, öğrencilerin eğitim içeriklerine kolay erişimini sağlarken, eğitmenlere de içerik yönetimi için güçlü araçlar sunuyor.
        
        Tasarım sürecimiz, kullanıcı deneyimini merkeze alan bir yaklaşımla yürütüldü. Özellikle mobil kullanım senaryoları ve erişilebilirlik standartları göz önünde bulundurularak, her kullanıcı için optimal bir deneyim hedeflendi.`,
      imageUrl: "@/renex-web.jpg",
      category: "UI/UX Tasarımı",
      client: "EduTech Inc.",
      date: "2023",
      duration: "12 Hafta",
      team: [
        "UX Araştırmacısı",
        "UI Tasarımcısı",
        "Etkileşim Tasarımcısı",
        "Frontend Geliştirici",
      ],
      deliverables: [
        "UX Araştırma Raporu",
        "Kullanıcı Akış Şemaları",
        "Wireframe'ler",
        "UI Stil Rehberi",
        "Prototip",
        "Kullanılabilirlik Test Raporu",
      ],
      technologies: ["Figma", "Adobe XD", "Maze", "Miro", "Proto.io"],
      researchMethods: [
        "Kullanıcı Görüşmeleri",
        "Anketler",
        "Rakip Analizi",
        "Kullanılabilirlik Testleri",
        "A/B Testleri",
      ],
      goals: [
        "Kullanıcı kaydı ve katılımını %40 artırmak",
        "Ders tamamlama oranlarını %60'a çıkarmak",
        "Mobil kullanımı %50 artırmak",
        "Platform kullanılabilirlik skorunu 90+ yapmak",
      ],
      results: [
        "Kullanıcı kaydında %45 artış",
        "Ders tamamlama oranlarında %65 iyileşme",
        "Mobil kullanımda %55 artış",
        "92/100 kullanılabilirlik skoru",
      ],
      process: {
        empathize: {
          title: "Empati & Araştırma",
          description:
            "Kullanıcı ihtiyaçlarını ve davranışlarını derinlemesine anlamak için kapsamlı araştırma yaptık.",
          duration: "3 Hafta",
          tasks: [
            "15 derinlemesine kullanıcı görüşmesi",
            "200+ anket yanıtı analizi",
            "5 rakip platformun detaylı analizi",
            "Kullanıcı yolculuğu haritalaması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        define: {
          title: "Tanımlama & Analiz",
          description:
            "Araştırma bulgularını analiz ederek temel kullanıcı ihtiyaçlarını ve sorunları belirledik.",
          duration: "2 Hafta",
          tasks: [
            "Kullanıcı personaları oluşturma",
            "Sorun tespiti ve önceliklendirme",
            "Tasarım prensiplerinin belirlenmesi",
            "Başarı metriklerinin tanımlanması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        ideate: {
          title: "Fikir Üretimi & Tasarım",
          description:
            "Belirlenen sorunlara yönelik çözümler geliştirdik ve ilk tasarım konseptlerini oluşturduk.",
          duration: "4 Hafta",
          tasks: [
            "Beyin fırtınası oturumları",
            "Çözüm önerilerinin değerlendirilmesi",
            "Wireframe'lerin oluşturulması",
            "Tasarım sisteminin geliştirilmesi",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
        prototype: {
          title: "Prototipleme & Test",
          description:
            "Tasarımları interaktif prototiplere dönüştürdük ve kullanıcılarla test ettik.",
          duration: "3 Hafta",
          tasks: [
            "Hi-fi prototiplerin hazırlanması",
            "10 kullanılabilirlik testi",
            "Geri bildirimlerin analizi",
            "İterasyonların tamamlanması",
          ],
          image: "/placeholder.svg?height=600&width=800",
        },
      },
      wireframes: [
        {
          title: "Ana Sayfa",
          description: "Kurs keşfi ve navigasyon yapısı",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1O1QwHRLMB1otiLMWNOgFJNQSeoThO.png",
        },
        {
          title: "Kurs Detay",
          description: "İçerik organizasyonu ve etkileşim noktaları",
          image: "/placeholder.svg?height=600&width=800",
        },
        {
          title: "Öğrenim Paneli",
          description: "İlerleme takibi ve içerik görüntüleme",
          image: "/placeholder.svg?height=600&width=800",
        },
      ],
      gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
      metrics: [
        {
          title: "Kullanıcı Memnuniyeti",
          value: "92%",
          change: "+15%",
          icon: Users2,
        },
        {
          title: "Görev Tamamlama",
          value: "95%",
          change: "+20%",
          icon: CheckCircle2,
        },
        {
          title: "Hedef Gerçekleşme",
          value: "88%",
          change: "+25%",
          icon: Target,
        },
      ],
      hasPrototype: true,
      hasWireframes: true,
    },
  },
];

projects.forEach((project) => {
  project.projectData.title = project.title;
});
projects.forEach((project) => {
  project.projectData.description = project.description;
});
projects.forEach((project) => {
  project.projectData.imageUrl = project.imageUrl;
});
projects.forEach((project) => {
  project.projectData.category = project.category;
});
projects.forEach((project) => {
  project.projectData.client = project.client;
});
projects.forEach((project) => {
  project.projectData.year = project.year;
});
projects.forEach((project) => {
  project.projectData.tags = project.tags;
});
projects.forEach((project) => {
  project.projectData.duration = project.duration;
});
projects.forEach((project) => {
  project.projectData.id = project.id;
});

console.log(projects);
export default projects;
