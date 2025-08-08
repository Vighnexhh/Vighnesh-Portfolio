
  const project = [
  {
    id: 1,
    title: "Food Hunter",
    description: "A fully functional food delivery website developed using ASP.NET for the backend and MS SQL for the database. The platform supports user authentication, restaurant listings, order management, and real-time delivery status tracking.",
    image: "./projects/food.png",
    tags: ["asp.net", "ms sql"]
  },
  {
    id: 2,
    title: "VS SPORTS BLOG",
    description: "A dynamic blog platform centered around sports content, built using ASP.NET. It features a responsive layout, comment system, admin dashboard for post management, and SQL database integration for content storage.",
    image: "./projects/blog.png",
    tags: ["asp.net"]
  },
  {
    id: 3,
    title: "Food Hunter Application",
    description: "A cross-platform mobile application for food delivery, created using Flutter. The UI screens were designed with Figma to ensure a smooth and intuitive user experience. Features include restaurant browsing, cart management, and order tracking.",
    image: "./projects/app.png",
    tags: ["flutter", "figma"]
  },
  {
    id: 4,
    title: "Cake Delivery Application",
    description: "A user-friendly mobile application prototype for cake delivery services, with all UI screens designed in Figma. The design emphasizes visual appeal, ease of navigation, and customization options for cake orders.",
    image: "./projects/cake.png",
    tags: ["figma"]
  },
  {
    id: 5,
    title: "Somaiya Clone",
    description: "A detailed clone of the Somaiya university website, created entirely using Figma. The project replicates the design, structure, and content layout of the original site with improved UI elements and responsiveness considerations.",
    image: "/projects/somaiya.png",
    tags: ["figma"]
  }
]




export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((project, key) => (
                        <div key={key} className="group bg-card  rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"></img>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



