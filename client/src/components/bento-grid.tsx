import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShoppingBag, Building, Truck, Blocks, GraduationCap, ArrowUpRight } from "lucide-react";
import ecommerceImg from "/ecommerce.png";
import realEstateImg from "/real-estate.png";
import transportationImg from "/transportation.png";
import web3Img from "/web3.png";
import techEduImg from "/tech-education.png";

const bentoItems = [
  {
    title: "E-commerce Platforms",
    description: "Scalable digital marketplaces and commerce solutions that power modern buying and selling.",
    icon: ShoppingBag,
    className: "md:col-span-2 md:row-span-2",
    bg: "bg-primary/10 border-primary/20 hover:border-primary/50",
    color: "text-primary",
    glowColor: "bg-blue-500",
    image: ecommerceImg
  },
  {
    title: "Real Estate Technology",
    description: "Smart property platforms for listing, renting, management, and real estate innovation.",
    icon: Building,
    className: "md:col-span-1 md:row-span-2",
    bg: "bg-secondary/10 border-secondary/20 hover:border-secondary/50",
    color: "text-secondary",
    glowColor: "bg-purple-500",
    image: realEstateImg
  },
  {
    title: "Transportation & Logistics",
    description: "Technology for deliveries, logistics coordination, fleet management, and movement of goods.",
    icon: Truck,
    className: "md:col-span-1 md:row-span-2",
    bg: "bg-white/5 border-white/10 hover:border-white/30",
    color: "text-white",
    glowColor: "bg-orange-500",
    image: transportationImg
  },
  {
    title: "Web3 & Decentralized Applications",
    description: "Blockchain-powered applications, smart contracts, and decentralized digital ecosystems.",
    icon: Blocks,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-primary/5 border-primary/20 hover:border-primary/40",
    color: "text-primary",
    glowColor: "bg-indigo-500",
    image: web3Img
  },
  {
    title: "Tech Education & Innovation Community",
    description: "Programs, talks, workshops, and training initiatives focused on empowering developers, founders, and tech enthusiasts.",
    icon: GraduationCap,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-secondary/5 border-secondary/20 hover:border-secondary/40",
    color: "text-secondary",
    glowColor: "bg-emerald-500",
    image: techEduImg
  },
];

export function BentoGrid() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-[100vw]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-8 leading-[0.9] uppercase tracking-tighter text-foreground">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Architecture</span> <br/> of Tomorrow.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl font-light">
              Architecting the future with scalable solutions for visionary growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-4 sm:gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] border overflow-hidden transition-all duration-500",
                item.className,
                item.bg
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 scale-105 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
                <div className="flex justify-between items-start">
                  <div className={cn("p-3 sm:p-4 bg-background/40 rounded-xl sm:rounded-2xl backdrop-blur-xl border border-foreground/10", item.color)}>
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="p-2 bg-white/5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-snug font-light line-clamp-2 sm:line-clamp-none">{item.description}</p>
                </div>
              </div>
              
              {/* Glow effect */}
              <div 
                className={cn(
                  "absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                  item.glowColor
                )} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { Terminal, Cpu, Globe, Zap, ShieldCheck, Database, ArrowUpRight } from "lucide-react";

// const bentoItems = [
//   {
//     title: "Core Infrastructure",
//     description: "Cloud-native architecture designed for 99.9% uptime with global edge distribution.",
//     icon: Database,
//     className: "md:col-span-2 md:row-span-2",
//     bg: "bg-primary/10 border-primary/20 hover:border-primary/50",
//     color: "text-primary"
//   },
//   {
//     title: "Edge Delivery",
//     description: "Low-latency content delivery networks.",
//     icon: Globe,
//     className: "md:col-span-1 md:row-span-2", // Made this medium size
//     bg: "bg-secondary/10 border-secondary/20 hover:border-secondary/50",
//     color: "text-secondary"
//   },
//   {
//     title: "AI & ML",
//     description: "Intelligent automation and predictive analytics.",
//     icon: Cpu,
//     className: "md:col-span-1 md:row-span-2", // Changed to medium size (2 rows)
//     bg: "bg-white/5 border-white/10 hover:border-white/30",
//     color: "text-white"
//   },
//   {
//     title: "Secure Auth",
//     description: "Enterprise-grade identity management.",
//     icon: ShieldCheck,
//     className: "md:col-span-1 md:row-span-1",
//     bg: "bg-white/5 border-white/10 hover:border-white/30",
//     color: "text-white"
//   },
//   {
//     title: "Real-time Sync",
//     description: "Distributed databases with instant state synchronization.",
//     icon: Zap,
//     className: "md:col-span-1 md:row-span-1",
//     bg: "bg-secondary/5 border-white/10 hover:border-primary/30",
//     color: "text-secondary"
//   },
// ];

// export function BentoGrid() {
//   return (
//     <section id="services" className="py-40 bg-background relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] translate-x-1/2 translate-y-1/2 rounded-full" />

//       <div className="container px-6 mx-auto relative z-10">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl"
//           >
//             <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-[0.85] uppercase tracking-tighter">
//               The <span className="text-primary animate-pulse italic">Architecture</span> <br/> of Tomorrow.
//             </h2>
//             <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-light">
//               Modular components designed for extreme scale and velocity.
//             </p>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 h-auto md:h-[1000px]">
//           {bentoItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95, y: 30 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.8 }}
//               whileHover={{ y: -10 }}
//               className={cn(
//                 "group relative p-12 rounded-[3rem] border overflow-hidden transition-all duration-700",
//                 item.className,
//                 item.bg
//               )}
//             >
//               <div className="relative z-10 h-full flex flex-col justify-between">
//                 <div className="flex justify-between items-start">
//                   <div className={cn("p-5 bg-background/50 rounded-[1.5rem] backdrop-blur-2xl border border-foreground/10", item.color)}>
//                     <item.icon className="w-10 h-10" />
//                   </div>
//                   <ArrowUpRight className="w-6 h-6 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </div>
//                 <div className="space-y-4">
//                   <h3 className="text-3xl font-bold text-foreground leading-none tracking-tighter">{item.title}</h3>
//                   <p className="text-muted-foreground text-lg leading-snug font-light">{item.description}</p>
//                 </div>
//               </div>
//               <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
