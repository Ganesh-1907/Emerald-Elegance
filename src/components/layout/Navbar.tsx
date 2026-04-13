import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { primaryNavigation } from "@/config/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = primaryNavigation.filter((page) =>
    ["home", "services", "parts", "community", "rides", "about", "contact"].includes(page.key),
  );

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location === "/";
    }

    return location.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-2"
            : "bg-transparent py-6"
          : "bg-black border-b border-white/5 py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            onClick={() => {
              closeMobileMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img 
              src="/images/logo-icon.png" 
              alt="Moto Node automobile super app logo" 
              className="h-20 w-auto object-contain"
              width="160"
              height="160"
            />
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
              Moto<span className="text-primary">Node</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.path}
                className={`text-sm font-medium transition-all relative ${
                  isActive(link.path)
                    ? "text-primary scale-110" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.navLabel}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <Link href="/contact">Become a Partner</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
                <Link
                  key={link.key}
                  href={link.path}
                  onClick={closeMobileMenu}
                  className={`text-lg font-medium text-left p-2 transition-colors ${
                    isActive(link.path) ? "text-primary bg-primary/5 rounded-lg" : "text-white hover:text-primary"
                  }`}
                >
                  {link.navLabel}
                </Link>
              ))}
              <div className="w-full h-px bg-white/10 my-2" />
              <Button asChild className="w-full justify-center">
                <Link href="/contact" onClick={closeMobileMenu}>
                  Become a Partner
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
