import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-gray-600 mb-8">
          I'm a passionate UI/UX designer with a keen eye for detail and a love for creating intuitive, user-friendly
          interfaces. With years of experience in the field, I've worked on a variety of projects ranging from mobile
          apps to complex web applications.
        </p>
        <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
        <ul className="list-disc list-inside text-gray-600 mb-8">
          <li>User Interface Design</li>
          <li>User Experience Design</li>
          <li>Wireframing and Prototyping</li>
          <li>User Research</li>
          <li>Interaction Design</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}

