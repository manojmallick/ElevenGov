import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-8">
          The most realistic voice AI platform
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-border hover:bg-secondary">
            Talk to sales
          </Button>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base">
            Create an AI agent
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
