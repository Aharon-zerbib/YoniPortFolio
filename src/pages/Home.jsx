import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Network, Server, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Network Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-blue-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="80%" y2="40%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="80%" y1="40%" x2="30%" y2="70%" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="30%" y1="70%" x2="70%" y2="85%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="3s" repeatCount="indefinite" />
          </line>
        </svg>
        
        {/* Network Icons */}
        <Network className="absolute top-32 right-1/4 w-8 h-8 text-blue-500 opacity-50" />
        <Server className="absolute bottom-32 left-1/3 w-8 h-8 text-cyan-500 opacity-50" />
        <Shield className="absolute top-1/2 right-20 w-8 h-8 text-blue-600 opacity-50" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12 mb-8"
          >
            <div className="flex flex-col items-center text-center mb-10">
              {/* Photo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ba931bb33e47d92d4dca4/aa417b2b2_yoniphotopro.jpeg" 
                    alt="Yoni Sebban"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Info */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-pink-400 mb-3"
                >
                  Yoni Sebban
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-blue-400 font-medium mb-2"
                >
                  BTS SIO option SISR
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-gray-400 italic"
                >
                  (Brevet de Technicien Supérieur - Services Informatiques aux Organisations)
                  <br />
                  (Solutions d'Infrastructure, Systèmes et Réseaux)
                </motion.p>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center mb-10"
            >
              <a 
                href="mailto:ton-email@exemple.com" 
                className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ton-profil" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4">
                À propos
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Étudiant passionné en BTS SIO option SISR, je me spécialise dans les solutions 
                  d'infrastructure, les systèmes et les réseaux informatiques. Mon parcours est guidé 
                  par une curiosité constante pour les technologies de l'information et une volonté 
                  d'approfondir mes compétences techniques.
                </p>
                <p>
                  Au cours de ma formation, j'ai développé une expertise dans la gestion et la 
                  maintenance des infrastructures réseau, l'administration systèmes, ainsi que la 
                  sécurisation des environnements informatiques. Je suis particulièrement intéressé 
                  par la cybersécurité et les nouvelles technologies qui façonnent l'avenir du 
                  numérique.
                </p>
                <p>
                  Mon objectif est de mettre en pratique mes connaissances théoriques à travers 
                  des projets concrets et de continuer à évoluer dans le domaine des technologies 
                  de l'information. Je suis toujours à la recherche de nouvelles opportunités 
                  d'apprentissage et de défis techniques stimulants.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}