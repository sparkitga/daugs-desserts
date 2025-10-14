import type React from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DoughnutCardProps {
  name: string
  image: number
  note?: string
  large?: boolean
  icon?: React.ReactNode
}

export function DoughnutCard({ name, image, note, large = false, icon }: DoughnutCardProps) {
  return (
    <div className="flex flex-col items-center group">
      <div className={`relative ${large ? "w-48 h-48" : "w-32 h-32"} mb-4`}>
        {icon ? (
          <div className="w-full h-full flex items-center justify-center bg-card rounded-full border border-border">
            {icon}
          </div>
        ) : (
          <>
            <Image
              src={`/generic-placeholder-icon.png?height=${large ? 300 : 200}&width=${large ? 300 : 200}&query=gourmet ${name} doughnut`}
              alt={name}
              width={large ? 300 : 200}
              height={large ? 300 : 200}
              className="w-full h-full object-cover rounded-full"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>

      <h3 className="text-center text-xs uppercase tracking-wider font-medium mb-1">{name}</h3>

      {note && <p className="text-center text-xs text-muted-foreground">{note}</p>}
    </div>
  )
}
