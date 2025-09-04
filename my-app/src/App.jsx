import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Input from '@/components/ui/input';
import { ArrowRight, CheckCircle2, Layout, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <SiteHeader />
      <main className="px-4 sm:px-6 lg:px-8">
        <Hero />
        <QuickActions />
        <FeatureGrid />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* -------------------- HEADER -------------------- */
function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-background/80 dark:bg-background/90 border-b border-muted">
      <div className="mx-auto max-w-7xl flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold tracking-tight text-foreground">TuMarca</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-foreground">
          <a href="#features" className="hover:opacity-80">Características</a>
          <a href="#pricing" className="hover:opacity-80">Precios</a>
          <a href="#faq" className="hover:opacity-80">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex text-foreground">Ingresar</Button>
          <Button className="gap-1 text-foreground">
            Empezar <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl py-12 sm:py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Construimos interfaces{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              rápidas
            </span>{" "}
            y{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              hermosas
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-prose">
            Un starter profesional listo para escalar: accesible, responsive y con una base de componentes reutilizables.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="gap-2 bg-primary/20 text-primary hover:bg-primary/30">
              Comenzar ahora
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
              Ver demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="rounded-2xl border border-muted bg-muted dark:bg-background">
            <div className="rounded-xl border p-4 border-muted dark:border-foreground">
              <div className="grid gap-3">
                <div className="h-8 rounded-xl bg-muted/70 dark:bg-foreground/20" />
                <div className="h-24 rounded-xl bg-muted/70 dark:bg-foreground/20" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-xl bg-muted/70 dark:bg-foreground/20" />
                  <div className="h-20 rounded-xl bg-muted/70 dark:bg-foreground/20" />
                  <div className="h-20 rounded-xl bg-muted/70 dark:bg-foreground/20" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- QUICK ACTIONS -------------------- */
function QuickActions() {
  return (
    <section className="mx-auto max-w-7xl pb-8">
      <div className="rounded-2xl border p-4 sm:p-6 lg:p-8 bg-muted dark:bg-background">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center">
              <SlidersHorizontal className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold leading-none tracking-tight text-foreground">Explorá el kit</h3>
              <p className="text-sm text-foreground/80">Componentes, tokens y buenas prácticas.</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <label htmlFor="search" className="sr-only">Buscar</label>
            <div className="flex items-center gap-2">
              <Input id="search" placeholder="Buscar componentes…" className="h-11 bg-muted dark:bg-background text-foreground border border-muted dark:border-foreground" />
              <Button className="h-11 bg-primary/20 text-primary hover:bg-primary/30">Buscar</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FEATURE GRID -------------------- */
function FeatureGrid() {
  const features = [
    { title: 'Base escalable', desc: 'Arquitectura pensada para crecer sin dolor.', icon: <Layout className="w-5 h-5 text-primary" /> },
    { title: 'UI consistente', desc: 'shadcn/ui con tokens de diseño y Tailwind.', icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { title: 'Accesibilidad', desc: 'Semántica correcta, focus visible y roles ARIA.', icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
  ];

  return (
    <section id="features" className="mx-auto max-w-7xl py-12 sm:py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <Card title={f.title} content={f.desc} className="bg-muted dark:bg-background border border-muted dark:border-foreground">
              <div className="text-primary">{f.icon}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- CTA -------------------- */
function CTA() {
  return (
    <section className="mx-auto max-w-7xl py-16">
      <div className="relative overflow-hidden rounded-3xl border p-8 sm:p-12 bg-muted dark:bg-background border-muted dark:border-foreground">
        <div className="relative grid lg:grid-cols-[1.2fr,1fr] gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">¿Listo para lanzar?</h2>
            <p className="mt-3 text-foreground/80 max-w-prose">
              Empezá con un stack moderno, flexible y opinado. Te acompaño en iteraciones rápidas hasta que quede perfecto.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="gap-2 bg-primary/20 text-primary hover:bg-primary/30">
                Crear proyecto <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border border-primary/40 text-primary hover:bg-primary/10">
                Ver roadmap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function SiteFooter() {
  return (
    <footer className="border-t border-muted mt-16 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-foreground/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TuMarca. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80">Privacidad</a>
            <a href="#" className="hover:opacity-80">Términos</a>
            <a href="#faq" className="hover:opacity-80">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
