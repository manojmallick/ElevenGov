import { Shield, Scale, Fingerprint } from "lucide-react"

const safetyPillars = [
  {
    icon: Shield,
    title: "Moderation",
    description: "We actively monitor content generated with our technology.",
  },
  {
    icon: Scale,
    title: "Accountability",
    description: "We believe misuse must have consequences.",
  },
  {
    icon: Fingerprint,
    title: "Provenance",
    description: "We believe that you should know if audio is AI-generated.",
  },
]

export function SafetySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-center mb-16">
          Safety, built in
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {safetyPillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
