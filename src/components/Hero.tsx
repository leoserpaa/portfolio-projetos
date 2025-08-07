import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-accent font-display block">Leonardo</span>
                <span className="text-foreground block">Serpa</span>
              </h1>
              <div className="relative">
                <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
                  Cientista de Dados
                </p>
                <p className="text-lg md:text-xl text-accent/80 font-medium mt-2">
                  Portfólio de Data Science
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Explore meus projetos de <span className="text-accent font-semibold">Data Science</span> onde demonstro 
                habilidades de resolver problemas de negócio utilizando conceitos e ferramentas 
                da Ciência de Dados, através de projetos com dados públicos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg px-8 py-6 h-auto"
                  onClick={() => document.getElementById('sobre-mim')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Sobre mim
                </Button>
                <Button 
                  variant="glass" 
                  size="lg"
                  className="text-lg px-8 py-6 h-auto"
                  onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Projetos
                </Button>
              </div>
            </div>
          </div>

          {/* Additional visual elements */}
          <div className="flex justify-center items-center space-x-8 opacity-40">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-300"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  )
}