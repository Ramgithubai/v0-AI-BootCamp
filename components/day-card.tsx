import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Topic {
  title: string
  description: string
}

interface DayCardProps {
  day: string
  title: string
  icon: string
  color: "blue" | "green" | "purple" | "orange"
  topics: Topic[]
}

export default function DayCard({ day, title, icon, color, topics }: DayCardProps) {
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      header: "bg-blue-100",
      text: "text-blue-700",
      icon: "bg-blue-600 text-white",
      hover: "hover:bg-blue-100",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      header: "bg-green-100",
      text: "text-green-700",
      icon: "bg-green-600 text-white",
      hover: "hover:bg-green-100",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      header: "bg-purple-100",
      text: "text-purple-700",
      icon: "bg-purple-600 text-white",
      hover: "hover:bg-purple-100",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      header: "bg-orange-100",
      text: "text-orange-700",
      icon: "bg-orange-600 text-white",
      hover: "hover:bg-orange-100",
    },
  }

  return (
    <Card className={`${colorMap[color].bg} ${colorMap[color].border} border shadow-md overflow-hidden`}>
      <CardHeader className={`${colorMap[color].header} flex flex-row items-center gap-4 p-6`}>
        <div
          className={`${colorMap[color].icon} w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold`}
        >
          {day}
        </div>
        <div>
          <h3 className={`text-2xl font-bold ${colorMap[color].text} flex items-center`}>
            <span className="mr-2">{icon}</span> Day {day}: {title}
          </h3>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Accordion type="single" collapsible className="w-full">
          {topics.map((topic, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-0">
              <AccordionTrigger className={`py-4 ${colorMap[color].hover} rounded px-2 -mx-2 ${colorMap[color].text}`}>
                {topic.title}
              </AccordionTrigger>
              <AccordionContent className="py-3 px-2 text-gray-700">{topic.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
