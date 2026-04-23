interface TimelineItem {
  year: number
  event: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4">
          {/* Timeline node and line */}
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
            {index !== items.length - 1 && (
              <div className="w-0.5 h-24 bg-border my-2" />
            )}
          </div>

          {/* Content */}
          <div className="pb-8">
            <div className="font-bold text-lg text-primary">{item.year}</div>
            <p className="text-foreground mt-2">{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
