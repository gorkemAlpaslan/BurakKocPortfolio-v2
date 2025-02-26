import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

