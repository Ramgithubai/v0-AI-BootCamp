import { ArrowDown } from "lucide-react"
import CourseFlowDiagram from "@/components/course-flow-diagram"
import DayCard from "@/components/day-card"
import Testimonials from "@/components/testimonials"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-16 px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4">GenAI Mastery Program</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            A comprehensive 3-day journey into the world of Generative AI
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg">
            Enroll Now
          </Button>

          <div className="mt-16 flex justify-center">
            <ArrowDown className="animate-bounce w-10 h-10 text-blue-500" />
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section id="program" className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">Program Overview</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our intensive 3-day program is designed to take you from GenAI fundamentals to advanced implementation,
            equipping you with the skills needed in today's AI-driven world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramFeature
              icon="🚀"
              title="Hands-on Learning"
              description="Build real-world projects with guidance from industry experts"
            />
            <ProgramFeature
              icon="🔄"
              title="Latest Technologies"
              description="Work with cutting-edge models like Groq, Gemini, and more"
            />
            <ProgramFeature
              icon="💡"
              title="Career Advancement"
              description="Gain skills that are in high demand across industries"
            />
            <ProgramFeature
              icon="🌐"
              title="Networking"
              description="Connect with peers and mentors in the AI community"
            />
            <ProgramFeature
              icon="📊"
              title="Real-world Applications"
              description="Learn how to apply GenAI to solve business problems"
            />
            <ProgramFeature
              icon="🔑"
              title="Ongoing Support"
              description="Access to resources and community after program completion"
            />
          </div>
        </div>
      </section>

      {/* Course Flow Diagram */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Your Learning Journey</h2>
          <div className="overflow-x-auto">
            <CourseFlowDiagram />
          </div>
        </div>
      </section>

      {/* Course Days */}
      <section id="curriculum" className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Course Curriculum</h2>

          <div className="space-y-12">
            <DayCard
              day="1"
              title="Foundation"
              icon="🚀"
              color="blue"
              topics={[
                {
                  title: "GenAI Introduction",
                  description: "Understand the fundamentals of Generative AI and its applications",
                },
                {
                  title: "Python Environments",
                  description: "Set up and configure Python environments for AI development",
                },
                {
                  title: "Groq Implementation",
                  description: "Learn how to implement and utilize Groq for efficient AI processing",
                },
                { title: "Gemini & Other Models", description: "Explore Google's Gemini and other popular AI models" },
              ]}
            />

            <DayCard
              day="2"
              title="RAG & Deployment"
              icon="🔄"
              color="green"
              topics={[
                {
                  title: "Vector Databases & Knowledge Graphs",
                  description: "Understand how to store and retrieve vector embeddings",
                },
                {
                  title: "Tokenizing & Vectorising",
                  description: "Learn techniques for converting text into tokens and vectors",
                },
                {
                  title: "LangChain Orchestration",
                  description: "Master LangChain for building complex AI applications",
                },
                {
                  title: "Proprietary Document Analysis",
                  description: "Analyze and extract insights from proprietary documents",
                },
                {
                  title: "RAG - Server & Client",
                  description: "Implement Retrieval Augmented Generation on both server and client",
                },
                { title: "Ollama & Deepseek", description: "Explore local model deployment with Ollama and Deepseek" },
                {
                  title: "Containerization & AWS EC2",
                  description: "Deploy AI solutions using containers and AWS EC2",
                },
                {
                  title: "Prompt Engineering Techniques",
                  description: "Master advanced prompt engineering for better results",
                },
              ]}
            />

            <DayCard
              day="3"
              title="Advanced Concepts"
              icon="💡"
              color="purple"
              topics={[
                {
                  title: "LLM with Short/Long Term Memory",
                  description: "Implement memory systems for more contextual AI interactions",
                },
                { title: "LLM Tool Calls", description: "Enable AI models to use external tools and APIs" },
                {
                  title: "Model Fine-tuning",
                  description: "Learn techniques for customizing models to specific use cases",
                },
                {
                  title: "Multimodal: Sound & Vision",
                  description: "Work with AI that can process both audio and visual inputs",
                },
                { title: "OCR & Tesseract", description: "Extract text from images using OCR technologies" },
                {
                  title: "Vibe Coding Introduction",
                  description: "Get introduced to the innovative Vibe Coding paradigm",
                },
              ]}
            />

            <div className="pt-8 text-center">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Career Pathways</h3>
              <div className="bg-orange-100 border-2 border-orange-300 rounded-xl p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold mb-2">Industry Applications</h4>
                <p className="text-gray-700">
                  Discover how these skills translate to real-world industry applications and career opportunities in
                  the rapidly growing field of Generative AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 md:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">What Our Graduates Say</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from professionals who have transformed their careers with our GenAI Mastery Program
          </p>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master GenAI?</h2>
          <p className="text-xl mb-8">Join our comprehensive 3-day program and transform your AI skills</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg shadow-lg">
              Download Syllabus
            </Button>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-lg shadow-lg border border-blue-400">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">GenAI Mastery Program</h3>
            <p className="text-gray-400">Empowering the next generation of AI developers</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
            <a href="#" className="hover:text-blue-400">
              About
            </a>
            <a href="#" className="hover:text-blue-400">
              FAQ
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GenAI Mastery Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

interface ProgramFeatureProps {
  icon: string
  title: string
  description: string
}

function ProgramFeature({ icon, title, description }: ProgramFeatureProps) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
