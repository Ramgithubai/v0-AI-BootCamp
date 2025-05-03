import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "AI Engineesadr",
    company: "TechInnovate",
    avatar: "/placeholder.svg?height=80&width=80",
    quote:
      "This GenAI program transformed my career. The hands-on approach and comprehensive curriculum gave me the skills to implement advanced AI solutions that impressed my team and clients.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    company: "DataVision",
    avatar: "/placeholder.svg?height=80&width=80",
    quote:
      "The RAG & Deployment day was exactly what I needed. I went from theoretical knowledge to actually deploying models in production. The instructors were incredibly knowledgeable and supportive.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Product Manager",
    company: "InnovateTech",
    avatar: "/placeholder.svg?height=80&width=80",
    quote:
      "Even as a non-technical PM, I found tremendous value in this program. It gave me the vocabulary and understanding to effectively collaborate with our AI teams and make informed product decisions.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Software Developer",
    company: "CodeCraft",
    avatar: "/placeholder.svg?height=80&width=80",
    quote:
      "The program's focus on practical implementation was refreshing. I was able to integrate GenAI into our existing products immediately after completing the course. Worth every penny!",
  },
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="h-12 w-12 border-2 border-blue-200">
                <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
              <Quote className="text-blue-200 h-8 w-8 flex-shrink-0" />
            </div>
            <p className="mt-4 text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
