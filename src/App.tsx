import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Scene } from './components/Scene';
import { Navbar } from './components/Navbar';
import { Rocket, Code, Globe, Sparkles, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function App() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Canvas className="fixed inset-0">
        <ScrollControls pages={6} damping={0.3}>
          <Scene />
          <Scroll html>
            <div id="home" className="w-screen h-screen flex items-center justify-center">
              <motion.div 
                className="text-center text-white"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
              >
                <h1 className="text-7xl font-bold mb-4">Welcome to the Cosmos</h1>
                <p className="text-xl">Scroll to explore the universe</p>
              </motion.div>
            </div>
            
            <div id="explore" className="w-screen h-screen flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg max-w-3xl text-white">
                <Rocket className="w-12 h-12 mb-4" />
                <h2 className="text-4xl font-bold mb-4">Discover New Worlds</h2>
                <p className="text-lg leading-relaxed">
                  Journey through an interactive space of endless possibilities. 
                  Each floating object represents a gateway to new experiences.
                </p>
              </div>
            </div>
            
            <div id="features" className="w-screen h-screen flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto p-8">
                <motion.div 
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-lg text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Code className="w-8 h-8 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Interactive Elements</h3>
                  <p>Engage with floating objects that respond to your presence.</p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-lg text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Globe className="w-8 h-8 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Dynamic Motion</h3>
                  <p>Experience smooth parallax scrolling and animations.</p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-lg text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="w-8 h-8 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Visual Effects</h3>
                  <p>Stunning post-processing and particle systems.</p>
                </motion.div>
              </div>
            </div>
            
            <div id="experience" className="w-screen h-screen flex items-center justify-center">
              <motion.div 
                className="text-center text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-5xl font-bold mb-4">Immersive Experience</h2>
                <p className="text-xl max-w-2xl mx-auto">
                  Blend the boundaries between web and reality with WebGL-powered 3D environments.
                  Hover over the floating objects to interact with them.
                </p>
              </motion.div>
            </div>
            
            <div id="showcase" className="w-screen h-screen flex items-center justify-center">
              <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto p-8">
                <motion.div 
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-lg text-white"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-3xl font-bold mb-4">Technical Excellence</h3>
                  <ul className="space-y-3">
                    <li>• WebGL-powered 3D rendering</li>
                    <li>• Real-time physics interactions</li>
                    <li>• Advanced post-processing effects</li>
                    <li>• Optimized performance</li>
                  </ul>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-lg text-white"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-3xl font-bold mb-4">Design Innovation</h3>
                  <ul className="space-y-3">
                    <li>• Responsive 3D environments</li>
                    <li>• Intuitive navigation system</li>
                    <li>• Seamless animations</li>
                    <li>• Modern UI elements</li>
                  </ul>
                </motion.div>
              </div>
            </div>
            
            <div id="contact" className="w-screen h-screen flex items-center justify-center">
              <motion.div 
                className="bg-white/10 backdrop-blur-lg p-8 rounded-lg text-white text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
                <p className="text-xl mb-6">Let's bring your vision to life with cutting-edge web technologies.</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://twitter.com/naviNBRuas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#1DA1F2] text-white rounded-full font-bold hover:bg-opacity-90 transition-colors"
                  >
                    <Twitter className="w-5 h-5 mr-2" />
                    <span>Follow on Twitter</span>
                  </a>
                  <a 
                    href="https://github.com/naviNBRuas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#24292F] text-white rounded-full font-bold hover:bg-opacity-90 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>Follow on GitHub</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;