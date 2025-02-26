import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProjectCard from "../../components/ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Redesign",
      description:
        "A complete overhaul of an e-commerce platform focusing on user experience and conversion optimization.",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Mobile Banking App",
      description: "Designed an intuitive and secure mobile banking application for a leading financial institution.",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Travel Booking Website",
      description: "Created a user-friendly interface for a travel booking website, enhancing the booking experience.",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

