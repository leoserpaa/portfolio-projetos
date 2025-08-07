import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export const Projects = () => {
  const projects = [
    {
      title: "Programa de Fidelidade com Clusterização",
      description: "Usei Python, Estatística e técnicas não-supervisionadas de Machine Learning para segmentar um grupo de clientes com base em suas características de performance de compra, a fim de selecionar grupos de clientes para formar um programa de Fidelidade com o objetivo de aumentar a receita da empresa.",
      impact: "R$ 15MM de dólares de receita anual",
      tools: [
        "Git, Gitlab e Github",
        "Python, Pandas, Matplotlib e Seaborn", 
        "Jupyter Notebook",
        "K-Means, Hierarquical Clustering, DBScan",
        "AWS Cloud (EC2, S3, Postgres, SQLite)",
        "Metabase Visualization"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      title: "Análise de Imóveis para Investimento",
      description: "Identificação de imóveis abaixo do preço médio de venda e definição do preço ideal de revenda, a partir de uma análise exploratória de dados em Python.",
      impact: "Maximização do lucro em investimentos imobiliários",
      tools: [
        "Python, Pandas, Numpy e Seaborn",
        "Anaconda, Pycharm e Jupyter Notebook", 
        "Mapas interativos com Plotly e Folium",
        "Heroku Cloud",
        "Streamlit Python framework web"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop"
    }
  ]

  return (
    <section id="projetos" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projetos em <span className="text-accent">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Projetos completos de Ciência de Dados que demonstram minha capacidade de resolver 
            problemas de negócio reais utilizando dados e técnicas avançadas de análise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-accent font-semibold text-sm">
                      Impacto: {project.impact}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Ferramentas utilizadas:</h4>
                  <div className="space-y-1">
                    {project.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:border-accent/50 transition-colors">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Saiba Mais
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}