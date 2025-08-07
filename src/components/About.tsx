import { Card } from "@/components/ui/card"

export const About = () => {
  const skills = [
    {
      title: "Linguagens de Programação e Banco de Dados",
      items: [
        "Python com foco em análise de dados",
        "Web scraping com Python",
        "SQL para extração de dados",
        "R para modelagem estatística",
        "SQLite, Postgres, MySQL, Oracle, MongoDB e Cassandra"
      ]
    },
    {
      title: "Estatística e Machine Learning",
      items: [
        "Estatística descritiva (localização, dispersão, assimetria, kurtosis, densidade)",
        "Algoritmos de Regressão, classificação, clusterização e learn to rank",
        "Técnicas de balanceamento dos dados, seleção de atributos e redução de dimensionalidade",
        "Métricas de performance (RMSE, MAE, MAPE, Confusion Matrix, Precisão, Recall, Curva ROC)",
        "Pacotes de Machine Learning: Sklearn e Scipy"
      ]
    },
    {
      title: "Visualização de Dados",
      items: [
        "Matplotlib, Seaborn, Plotly e Bokeh",
        "Power BI, Tableau, Metabase e Looker"
      ]
    },
    {
      title: "Engenharia de Software",
      items: [
        "Git, Github, Gitlab, Cookiecutter, Virtual Environment e Docker",
        "Streamlit, Flask, Python APIs",
        "Cloud Heroku, AWS Amazon, Google Cloud Platform (GCP) e Azure"
      ]
    }
  ]

  const experience = [
    {
      title: "4+ Projetos completos de Ciência de Dados",
      description: "Construção de soluções de dados para problemas de negócio, próximos dos desafios reais das empresas, utilizando dados públicos de competições de Ciência de Dados, onde abordei o problema desde a concepção do desafio de negócio até a publicação do algoritmo treinado em produção, utilizando ferramentas de Cloud Computing."
    },
    {
      title: "2+ anos como Analista de Dados Freelancer",
      description: "Atuação em projetos independentes voltados à solução de problemas de negócio por meio da análise de dados. Aplicação de técnicas estatísticas, modelagem preditiva e visualização para gerar insights relevantes. Desenvolvimento de dashboards, relatórios interativos e rotinas automatizadas com foco em eficiência e clareza na comunicação com stakeholders."
    },
    {
      title: "6+ anos como Trader Autônomo de Derivativos",
      description: "Atuação diária no mercado financeiro com foco em operações de opções de ações. Análise contínua de cenários macroeconômicos, fluxo de mercado e comportamento de ativos para tomada de decisão estratégica. Gestão de risco, execução de operações e acompanhamento de resultados com disciplina e precisão, visando consistência e preservação de capital."
    }
  ]

  return (
    <section id="sobre-mim" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre <span className="text-accent">Mim</span>
          </h2>
          <p className="text-xl text-accent/80 font-medium mb-8">
            Cientista de Dados | Portfólio de Projetos
          </p>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Sou formado em <span className="text-foreground font-semibold">Estatística</span> e atualmente trabalho como 
              freelancer em projetos de análise de dados, oferecendo soluções baseadas em dados para apoiar 
              decisões estratégicas e resolver problemas reais.
            </p>
            <p>
              Também desenvolvo projetos pessoais sobre Ciência de Dados, com o objetivo de adquirir 
              experiência na solução de problemas de negócio e aprofundar o domínio sobre as ferramentas 
              de análise de dados.
            </p>
            <p>
              Estou buscando uma oportunidade de trabalhar profissionalmente como <span className="text-accent font-semibold">Cientista de Dados</span> para 
              melhorar a tomada de decisão da empresa, por meio da construção de soluções usando dados.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-12 text-center">
            <span className="text-accent">Habilidades</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="card-gradient border-border/50 p-6 hover:border-primary/30 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4 text-accent">{skill.title}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold mb-12 text-center">
            Experiência <span className="text-accent">Profissional</span>
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="card-gradient border-border/50 p-8 hover:border-accent/30 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4 text-foreground">{exp.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}