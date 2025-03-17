import React from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, Sparkles, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Compass, label: 'Explore', href: '#explore' },
  { icon: Sparkles, label: 'Experience', href: '#experience' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
        <ul className="flex space-x-8">
          {navItems.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};