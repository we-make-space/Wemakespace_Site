import { motion } from "framer-motion";
import officeImage from "@assets/generated_images/minimalist_luxury_office_interior_with_warm_lighting..png";
import sketchImage from "@assets/generated_images/modern_architectural_concept_sketch_with_abstract_lines..png";

const projects = [
  {
    title: "The Zenith Office",
    location: "Stockholm",
    image: officeImage,
    tags: ["Workspace", "Minimalist"]
  },
  {
    title: "Artisans Studio",
    location: "Berlin",
    image: sketchImage,
    tags: ["Creative", "Spatial"]
  }
];

export function ProjectShowcase() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Recent Space <br/><span className="text-primary italic">Transformations</span></h2>
          </div>
          <button className="hidden md:block text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors border-b-2 border-primary pb-1">
            View All Work
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-none"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-3 rounded-full font-bold transform -rotate-12">View Project</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground">{project.location}</p>
                </div>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-tighter font-bold border border-border px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
