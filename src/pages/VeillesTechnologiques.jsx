import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield } from 'lucide-react';

export default function VeillesTechnologiques() {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Titre Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              VEILLE TECHNOLOGIQUE
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Surveillance et analyse des évolutions techniques
          </p>
        </motion.div>

        {/* Définition de la Veille Technologique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Qu'est-ce que la veille technologique ?</h2>
          </div>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              La veille technologique, élément de la veille stratégique, consiste à surveiller les évolutions techniques, les innovations dans un secteur d'activité donnée. La veille technologique comprend notamment la surveillance, la collecte, le partage et la diffusion d'information permettant d'anticiper ou de s'informer sur des changements en matière de recherche, développement, brevet, lancement de nouveaux produits, matériaux, processus, concepts, innovation de fabrication, etc…
            </p>
            <p>
              Cela a pour but d'évaluer l'impact sur l'environnement et l'organisation.
            </p>
          </div>
        </motion.div>

        {/* Ma Veille: Cybersécurité dans l'Armée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20 p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Ma Veille Technologique</h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-cyan-500/10 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">La Cybersécurité dans l'Armée</h3>
            <p className="text-gray-400 italic">Contenu détaillé à venir...</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}