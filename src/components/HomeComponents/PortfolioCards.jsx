import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Project One",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BCDxXxx4q9JD6YJtpAzXDIt6Mmg4DW.png",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Project Two",
    image: "/placeholder.svg?height=400&width=400",
    category: "Design",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/placeholder.svg?height=400&width=400",
    category: "Branding",
  },
  {
    id: 4,
    title: "Project Four",
    image: "/placeholder.svg?height=400&width=400",
    category: "Development",
  },
  {
    id: 5,
    title: "Project Five",
    image: "/placeholder.svg?height=400&width=400",
    category: "UI/UX",
  },
]

export default function PortfolioCards() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cardWidth = 300
    const totalWidth = cardWidth * projects.length
    const duration = 30

    const animation = gsap.to(container, {
      x: `-=${totalWidth}`,
      duration: duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => Number.parseFloat(x) % totalWidth),
      },
    })

    container.addEventListener("mouseenter", () => gsap.to(animation, { timeScale: 0 }))
    container.addEventListener("mouseleave", () => gsap.to(animation, { timeScale: 1 }))

    return () => {
      gsap.killTweensOf(container)
    }
  }, [])

  return (
    <div className="bg-black  py-16 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-6xl md:text-8xl font-bold text-white text-center mb-6">Our Work</h2>
        <div className="w-24 h-1 bg-[#3FA69B] mx-auto mb-12"></div>
      </div>

      <div className="relative h-screen ">
        <div ref={containerRef} className="flex gap-6  absolute left-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative w-[280px] h-[400px] bg-[#3FA69B] rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-white/90 mb-4">{project.category}</p>
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center mt-16">
        <button
          size="lg"
          className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          View Our Portfolio
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
