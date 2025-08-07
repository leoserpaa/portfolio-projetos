import { Button } from "@/components/ui/button"
import profileImage from "@/assets/leonardo-profile.jpg"

export const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-accent font-display">Leonardo</span>
                <br />
                <span className="text-foreground">Serpa</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Cientista de Dados
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Demonstro minhas habilidades de resolver problemas de negócio utilizando 
                conceitos e ferramentas da Ciência de Dados, através de projetos com dados públicos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => document.getElementById('sobre-mim')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Sobre mim
                </Button>
                <Button 
                  variant="glass" 
                  size="lg"
                  onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Projetos
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-glow-green relative z-10">
                <img 
                  src={profileImage} 
                  alt="Leonardo Serpa - Cientista de Dados" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}