import { FadeIn } from "@/components/animations/FadeIn";
import { ShoppingBag, ChevronRight } from "lucide-react";

const categories = [
  { name: "Engine Oil & Lubricants", image: "engine-oil.png", items: "124 Products" },
  { name: "Brakes & Suspension", image: "brakes.png", items: "86 Products" },
  { name: "Tires & Wheels", image: "tires.png", items: "210 Products" },
  { name: "Interior Accessories", image: "app-mockup.png", items: "340 Products" }, // reusing image for mockup
];

export function Products() {
  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-primary/10">
              <ShoppingBag className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Genuine <span className="text-primary">Parts & Accessories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Shop high-quality, verified products directly from authorized sellers.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-500">
                <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-500" />
                <img 
                  src={`${import.meta.env.BASE_URL}images/${cat.image}`} 
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
                  {/* <p className="text-primary font-medium mb-1 text-sm">{cat.items}</p> */}
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-glow transition-all">{cat.name}</h3>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 flex items-center text-sm font-semibold text-white">
                    Explore Category <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* <FadeIn delay={0.4} className="mt-12 text-center">
          <Button variant="outline" size="lg" onClick={() => alert("View All Products")}>
            View All Products
          </Button>
        </FadeIn> */}
      </div>
    </section>
  );
}
