import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contato" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos <span className="text-accent">Conversar?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a discutir novas oportunidades, projetos interessantes 
            ou simplesmente trocar ideias sobre Ciência de Dados.
          </p>
        </div>

        <Card className="card-gradient border-border/50 p-8 text-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Entre em contato
              </h3>
              <p className="text-muted-foreground mb-8">
                Sinta-se à vontade para entrar em contato através dos canais abaixo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open('mailto:leoserpa55@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                leoserpa55@gmail.com
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open('https://linkedin.com/in/leonardo-serpa', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto hover:border-accent/50"
                onClick={() => window.open('https://github.com/leoserpaa', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}