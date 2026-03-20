import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Titre Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Contactez-moi</h1>
          <p className="text-xl text-gray-400">
            N'hésitez pas à me contacter pour toute question ou opportunité
          </p>
        </motion.div>

        {/* Carte de Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-12"
        >
          <div className="flex flex-col items-center space-y-8">
            {/* Icon de contact */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="p-6 bg-blue-500/20 rounded-full"
            >
              <Send className="w-16 h-16 text-blue-400" />
            </motion.div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Restons en contact</h2>
              <p className="text-gray-400">
                Je suis disponible pour discuter de projets, d'opportunités professionnelles<br />
                ou simplement pour échanger sur l'informatique et la cybersécurité.
              </p>
            </div>

            {/* Boutons de contact */}
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
              {/* Email */}
              <motion.a
                href="mailto:yoni.sebban@exemple.com"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/yoni-sebban"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
            </div>

            {/* Info supplémentaire */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl w-full"
            >
              <p className="text-center text-gray-300">
                <span className="text-blue-400 font-semibold">Temps de réponse:</span> Je m'efforce de répondre dans les 24-48 heures
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}