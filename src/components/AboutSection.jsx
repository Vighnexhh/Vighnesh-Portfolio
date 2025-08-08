import { Briefcase, Code, Crown, School } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {""}
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mr-5">
                    <div className="space-y-6">
                        <h4 className="text-3xl font-bold"> Web Developer & Tech  Enthusiast</h4>
                        <p className="text-muted-foreground">
                            Hello! I’m Vighnesh Shinde, a dedicated and detail-oriented developer with a strong foundation in web technologies like ASP.NET, PHP, and the MERN stack. I enjoy creating intuitive, user-friendly applications that solve real-world problems, from food delivery platforms to responsive portfolio websites. My journey in tech is driven by curiosity, continuous learning, and a passion for blending creativity with functionality. Beyond coding, I’m always exploring new tools, improving my skills, and staying updated with the latest trends in technology            </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a href="/vighnesh.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
    // Trigger download
    const link = document.createElement("a");
    link.href = "/vighnesh.pdf";
    link.download = "vighnesh.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
                                 className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 ml-5">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <School className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Academics</h4>
                                    <p className="text-muted-foreground">
                                        BCA graduate from Somaiya Vidyavihar University with an overall CGPA of 8.67, equipped with strong technical skills and a passion for innovation.  </p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Passionate coder with hands-on experience in ASP.NET, PHP, and the MERN stack, focused on building efficient and user-friendly applications.  </p>
                                </div>

                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Crown className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Qualities</h4>
                                    <p className="text-muted-foreground">
                                        Collaborative team leader who thrives in guiding and working alongside others to achieve shared goals with efficiency and creativity  </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
