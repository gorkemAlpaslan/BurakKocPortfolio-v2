import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ContactForm from "../../components/ContactForm"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-xl text-gray-600 mb-8">
          Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
        </p>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

