import React from 'react';
import { motion } from 'framer-motion';
import { Database, ExternalLink } from 'lucide-react';

export default function EpreuveE6() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Titre Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Épreuve E6</h1>
          <p className="text-xl text-gray-400">
            Cybersécurité des services informatiques
          </p>
        </motion.div>

        {/* Projets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Projets de Cybersécurité</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projet 1 */}
            <motion.a
              href="https://drive.google.com/file/d/1Bif71rp9z5BsAx-hskltOof7kezJlmoY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 hover:border-blue-500/60 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-400">Projet 1</h3>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-sm text-gray-400">Consulter le projet</p>
            </motion.a>

            {/* Projet 2 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 hover:border-blue-500/60 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Projet 2</h3>
              <p className="text-sm text-gray-400 italic">Description à venir...</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}