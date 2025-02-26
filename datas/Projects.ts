import Image1 from "@/public/image/renex-web.jpg";
import Image2 from "@/public/image/turkiz-web.jpg";
import Image3 from "@/public/image/dgtl-web.jpg";
import Image4 from "@/public/image/adem.jpg";
import Image5 from "@/public/image/adim.jpg";
import Image6 from "@/public/image/adum.jpg";
import { CheckCircle2, Users2, Target } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Eco Friendly Branding",
    description:
      "Sürdürülebilir bir marka için logo ve kurumsal kimlik tasarımı.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Logo Tasarımı",
    client: "Green Co.",
    year: "2023",
    tags: ["Logo", "Branding", "Sürdürülebilirlik"],
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
  {
    id: 2,
    title: "Tech Startup Sosyal Medya Kampanyası",
    description:
      "Yenilikçi bir teknoloji şirketi için Instagram ve LinkedIn kampanyası.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Sosyal Medya Tasarımı",
    client: "InnoTech",
    year: "2023",
    tags: ["Sosyal Medya", "Dijital Pazarlama", "Tech"],
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
  {
    id: 3,
    title: "E-ticaret Mobil Uygulama UI/UX",
    description:
      "Kullanıcı deneyimini optimize eden bir e-ticaret mobil uygulaması tasarımı.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "UI/UX Tasarımı",
    client: "ShopEase",
    year: "2022",
    tags: ["UI/UX", "Mobile App", "E-commerce"],
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
  {
    id: 4,
    title: "Minimalist Poster Serisi",
    description: "Klasik filmleri temsil eden minimalist poster koleksiyonu.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Grafik Tasarım",
    client: "CinemaArt Gallery",
    year: "2023",
    tags: ["Poster", "Minimalizm", "Film"],
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
  {
    id: 5,
    title: "Organik Gıda Ambalaj Tasarımı",
    description: "Çevre dostu malzemelerle üretilen organik gıda ambalajları.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Ambalaj Tasarımı",
    client: "NatureBite",
    year: "2022",
    tags: ["Ambalaj", "Organik", "Sürdürülebilirlik"],
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
  {
    id: 6,
    title: "Fintech Dashboard UI",
    description:
      "Kullanıcı dostu ve veri odaklı finans yönetim paneli arayüzü.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "UI/UX Tasarımı",
    client: "FinanceFlow",
    year: "2023",
    tags: ["UI/UX", "Dashboard", "Fintech"],
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

export default projects;
