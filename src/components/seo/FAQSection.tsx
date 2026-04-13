import { FadeIn } from "@/components/animations/FadeIn";
import type { FAQItem } from "@/config/site";

interface FAQSectionProps {
  title?: string;
  description?: string;
  items: FAQItem[];
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description = "Quick answers to common questions about Moto Node.",
  items,
}: FAQSectionProps) {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </div>
        </FadeIn>

        <div className="grid gap-4">
          {items.map((item, index) => (
            <FadeIn key={item.question} delay={index * 0.08}>
              <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
