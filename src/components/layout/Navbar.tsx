import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sectionIds = ["hero", "services", "products", "dealers", "about", "become-partner"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Products", id: "products" },
    { name: "Dealers", id: "dealers" },
    { name: "About", id: "about" },
    { name: "Become a Partner", id: "become-partner" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("hero");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img 
              src="/images/logo-icon.png" 
              alt="MotoNode Logo" 
              className="h-20 w-auto object-contain"
            />
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
              Moto<span className="text-primary">Node</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-all relative ${
                  activeSection === link.id 
                    ? "text-primary scale-110" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button onClick={() => scrollToSection("become-partner")}>
              Contact
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-lg font-medium text-left p-2 transition-colors ${
                    activeSection === link.id ? "text-primary bg-primary/5 rounded-lg" : "text-white hover:text-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="w-full h-px bg-white/10 my-2" />
              <Button className="w-full justify-center" onClick={() => scrollToSection("become-partner")}>
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
