import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-6">
              Wemakespace<span className="text-primary">.</span>
            </h2>
            <p className="text-neutral-400 max-w-sm">
              Making room for you. Creating sustainable, beautiful, and functional spaces for the modern world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Sitemap</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/stack" className="hover:text-primary transition-colors cursor-pointer">Platforms</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors cursor-pointer">Solutions</Link></li>
              <li><Link href="/cases" className="hover:text-primary transition-colors cursor-pointer">Case Studies</Link></li>
              <li><Link href="/vision" className="hover:text-primary transition-colors cursor-pointer">Vision</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Studio</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/studio" className="hover:text-primary transition-colors cursor-pointer">Our Studio</Link></li>
              <li><Link href="/vision" className="hover:text-primary transition-colors cursor-pointer">Team</Link></li>
              <li><Link href="/cases" className="hover:text-primary transition-colors cursor-pointer">Insights</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© 2026 Wemakespace. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy">
              <a className="hover:text-neutral-300">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-neutral-300">Terms of Service</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
