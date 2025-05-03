"use client"

import { useEffect, useState } from "react"

export default function CourseFlowDiagram() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="w-full min-w-[800px] md:min-w-0 bg-white p-4 rounded-xl shadow-md">
      <div className="flex flex-col gap-8">
        {/* Day 1 */}
        <div className="flow-section">
          <div className="bg-blue-100 border-2 border-blue-500 rounded-xl p-4 mb-2">
            <h3 className="text-xl font-bold text-blue-700 flex items-center">
              <span className="mr-2">🚀</span> Day 1: Foundation
            </h3>
          </div>
          <div className="flow-items">
            <FlowItem color="blue" title="GenAI Introduction" isFirst={true} isLast={false} />
            <FlowItem color="blue" title="Python Environments" isFirst={false} isLast={false} />
            <FlowItem color="blue" title="Groq Implementation" isFirst={false} isLast={false} />
            <FlowItem color="blue" title="Gemini & Other Models" isFirst={false} isLast={true} />
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="h-8 w-0.5 bg-blue-500"></div>
        </div>

        {/* Day 2 */}
        <div className="flow-section">
          <div className="bg-green-100 border-2 border-green-500 rounded-xl p-4 mb-2">
            <h3 className="text-xl font-bold text-green-700 flex items-center">
              <span className="mr-2">🔄</span> Day 2: RAG & Deployment
            </h3>
          </div>
          <div className="flow-items">
            <FlowItem color="green" title="Vector Databases & Knowledge Graphs" isFirst={true} isLast={false} />
            <FlowItem color="green" title="Tokenizing & Vectorising" isFirst={false} isLast={false} />
            <FlowItem color="green" title="LangChain Orchestration" isFirst={false} isLast={false} />
            <FlowItem color="green" title="Proprietary Document Analysis" isFirst={false} isLast={false} />
            <FlowItem color="green" title="RAG - Server & Client" isFirst={false} isLast={false} />
            <FlowItem color="green" title="Ollama & Deepseek" isFirst={false} isLast={false} />
            <FlowItem color="green" title="Containerization & AWS EC2" isFirst={false} isLast={false} />
            <FlowItem color="green" title="Prompt Engineering Techniques" isFirst={false} isLast={true} />
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="h-8 w-0.5 bg-green-500"></div>
        </div>

        {/* Day 3 */}
        <div className="flow-section">
          <div className="bg-purple-100 border-2 border-purple-500 rounded-xl p-4 mb-2">
            <h3 className="text-xl font-bold text-purple-700 flex items-center">
              <span className="mr-2">💡</span> Day 3: Advanced Concepts
            </h3>
          </div>
          <div className="flow-items">
            <FlowItem color="purple" title="LLM with Short/Long Term Memory" isFirst={true} isLast={false} />
            <FlowItem color="purple" title="LLM Tool Calls" isFirst={false} isLast={false} />
            <FlowItem color="purple" title="Model Fine-tuning" isFirst={false} isLast={false} />
            <FlowItem color="purple" title="Multimodal: Sound & Vision" isFirst={false} isLast={false} />
            <FlowItem color="purple" title="OCR & Tesseract" isFirst={false} isLast={false} />
            <FlowItem color="purple" title="Vibe Coding Introduction" isFirst={false} isLast={true} />
          </div>
        </div>

        {/* Connector to Outcomes */}
        <div className="flex justify-center">
          <div className="h-8 w-0.5 border-l-2 border-dashed border-orange-500"></div>
        </div>

        {/* Outcomes */}
        <div className="flow-section">
          <div className="bg-orange-100 border-2 border-orange-500 rounded-xl p-4 w-64 mx-auto text-center">
            <h3 className="text-lg font-bold text-orange-700">Industry Applications</h3>
            <p className="text-sm text-orange-600">Career Pathways</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flow-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

interface FlowItemProps {
  color: "blue" | "green" | "purple" | "orange"
  title: string
  isFirst: boolean
  isLast: boolean
}

function FlowItem({ color, title, isFirst, isLast }: FlowItemProps) {
  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      border: "border-blue-500",
      text: "text-blue-700",
      connector: "bg-blue-500",
    },
    green: {
      bg: "bg-green-100",
      border: "border-green-500",
      text: "text-green-700",
      connector: "bg-green-500",
    },
    purple: {
      bg: "bg-purple-100",
      border: "border-purple-500",
      text: "text-purple-700",
      connector: "bg-purple-500",
    },
    orange: {
      bg: "bg-orange-100",
      border: "border-orange-500",
      text: "text-orange-700",
      connector: "bg-orange-500",
    },
  }

  return (
    <div className="flex flex-col items-center">
      {!isFirst && <div className={`h-4 w-0.5 ${colorMap[color].connector}`}></div>}
      <div
        className={`${colorMap[color].bg} ${colorMap[color].border} border-2 rounded-lg p-3 w-64 text-center font-medium ${colorMap[color].text}`}
      >
        {title}
      </div>
      {!isLast && <div className={`h-4 w-0.5 ${colorMap[color].connector}`}></div>}
    </div>
  )
}
