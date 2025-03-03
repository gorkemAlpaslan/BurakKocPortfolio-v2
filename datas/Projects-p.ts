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
    // her içerikte bu sayı 1 artacak
    id: 1,
    // Verdiğim pronpt kesin isim veririm
    title: "Proje adı",
    // tamamen sana bırakıyorum
    description: "Açıklaması",
    // Bu kısımı değiştirmene gerek yok
    imageUrl: "/turkiz-web.jpg",
    // Kategori belirle
    category: "Web Tasarım",
    // Promtta verdiğim isim ( ama özellikle müşteri belirttiysem belirttiğim ismi kullan)
    client: "Müşteri",
    year: "yıl", // hangi yılda yapıldığı
    // Proje için etiketler 3 taneyi geçmeyecek
    tags: ["UI/UX", "Web Tasarım", "Responsive Design"],
    // her ürettiğin içerikte sırayla bir macbook bir iphone olacak
    deviceType: "macbook",
    // Projenin toplam Üretim süresi
    duration: "8 Hafta",

    // projectData içinde title'ı otomatik olarak bağladık
    projectData: {
      id: null,
      title: null,
      description: null,
      fullDescription: `Detaylı Açıklama`, // Detaylı proje Açıklama
      imageUrl: null,
      category: null,
      client: null,
      year: null,
      duration: null,
      // Proje içerisinde ki kişilerin title ları 2-3 taneyi geçmesin genelde 1 tane yeter oda ben UI/UX Designer
      team: ["UX Araştırmacısı", "UI Tasarımcısı", "Frontend Geliştirici"],
      // Teslim edilen dosyalar birden çok oluyor ama genel olarak hangi araçları kullandıysam onların uzantıları olsun.
      deliverables: [
        "Wireframe Tasarımları",
        "Kullanıcı Akış Şemaları",
        "UI Stil Rehberi",
        "Tamamlanmış Web Sitesi",
        "SEO Optimizasyonu",
        "Mobil Uyumluluk Testleri",
      ],
      // Kullanılan araçlar(programlar) en az 3 adet olsun
      technologies: ["Figma", "Adobe XD", "Maze", "Miro", "Proto.io"],
      // Researh için kullanılan yöntemler metotlar
      researchMethods: [
        "Kullanıcı Görüşmeleri",
        "Anketler",
        "Rakip Analizi",
        "Kullanılabilirlik Testleri",
        "A/B Testleri",
      ],
      // Projenin hedefleri
      goals: [
        "Kullanıcı kaydı ve katılımını %40 artırmak",
        "Ders tamamlama oranlarını %60'a çıkarmak",
        "Mobil kullanımı %50 artırmak",
        "Platform kullanılabilirlik skorunu 90+ yapmak",
      ],
      // Projenin sonuçları
      results: [
        "Kullanıcı kaydında %45 artış",
        "Ders tamamlama oranlarında %65 iyileşme",
        "Mobil kullanımda %55 artış",
        "92/100 kullanılabilirlik skoru",
      ],
      // Bu alanda tasarım sürecini detaylıca anlatacağız bütün içeriğini projeye göre güncellemen gerek
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
      // Projenin tüm görselleri bu kısım aynı kalsın
      gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
      // Proje bittikten sonra projenin ulaştığı sonuçlar ( hep pozitif olacak )
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
      // Eğer UI/UX, Web Tasarım ve Mobil App ile alakalı bir proje ise True değilse False olacak.
      hasPrototype: true,
    },
  },

projects.forEach((project) => {
  project.projectData.id = project.id;
});
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
console.log(projects);
export default projects;
