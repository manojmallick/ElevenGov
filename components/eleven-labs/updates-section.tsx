import { ArrowRight } from "lucide-react"

const updates = [
  {
    title: "Introducing Flows in ElevenCreative",
    category: "Product",
    date: "Mar 11, 2026",
  },
  {
    title: "Introducing ElevenLabs for Government",
    category: "Company",
    date: "Feb 11, 2026",
  },
  {
    title: "Introducing Expressive Mode for ElevenAgents",
    category: "Product",
    date: "Feb 10, 2026",
  },
]

export function UpdatesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-center mb-16">
          Latest updates
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {updates.map((update, i) => (
            <article
              key={i}
              className="group bg-secondary/30 rounded-2xl border border-border/50 p-6 hover:bg-secondary/50 hover:border-border transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="px-2.5 py-1 bg-muted rounded-full">{update.category}</span>
                <span>{update.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground leading-relaxed">{update.title}</h3>
              <div className="mt-4 flex items-center gap-2 text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                Read more
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
