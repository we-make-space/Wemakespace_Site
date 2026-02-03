import { motion } from "framer-motion";
import { DynamicIcon } from "./DynamicIcon";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

export function ServiceCard({ title, description, iconName, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <Card className="h-full p-8 rounded-[2.5rem] bg-card border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
        
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:rotate-6">
          <DynamicIcon name={iconName} className="w-8 h-8" />
        </div>
        
        <h3 className="text-2xl font-black font-display mb-4 tracking-tighter group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed font-light">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}
