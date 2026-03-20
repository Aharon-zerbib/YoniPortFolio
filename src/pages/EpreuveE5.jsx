import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, Briefcase, Code, GraduationCap, ExternalLink } from 'lucide-react';

export default function EpreuveE5() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Titre Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Épreuve E5</h1>
          <p className="text-xl text-gray-400">
            Support et mise à disposition de services informatiques
          </p>
        </motion.div>

        {/* Modules: Tableau de Synthèse et Description de Compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tableau de Synthèse */}
          <motion.a
            href="https://drive.google.com/file/d/17xX_3McmbL6buBHM5EXYsxicFo8m5swl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 cursor-pointer group hover:border-blue-500/60 transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                <FileText className="w-12 h-12 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-blue-400">Tableau de Synthèse</h2>
              <p className="text-gray-400">Synthèse des compétences et projets</p>
            </div>
          </motion.a>

          {/* Description de Compétences */}
          <motion.a
            href="https://drive.google.com/file/d/1sAFurZRtbX1vaiCWfwQu64dqHKzaKnzi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 cursor-pointer group hover:border-blue-500/60 transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                <Award className="w-12 h-12 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-blue-400">Description de Compétences</h2>
              <p className="text-gray-400">Détail des compétences acquises</p>
            </div>
          </motion.a>
        </div>

        {/* Projets en Entreprise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Projets en Entreprise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: 1, url: "https://drive.google.com/file/d/12Wo-yNr3VeekM72K-Boqj6XelSZ4NzQe/view?usp=sharing" },
              { num: 2, url: "https://drive.google.com/file/d/1y98iZKtO3wl3d7B_3glswcq38RKM3IK6/view?usp=sharing" },
              { num: 3, url: "https://drive.google.com/file/d/1jeLT63IceCLhAblrwVe9wBuYPv7Lp_PJ/view?usp=sharing" },
              { num: 4, url: "https://drive.google.com/file/d/1U4TUjcTS6ZzLWmw9NcI7g-YDcN49KoQh/view?usp=sharing" },
              { num: 5, url: "https://drive.google.com/file/d/1rHN4k2g0FujRUBSMh8EvLcdj_gSajbqs/view?usp=sharing" },
              { num: 6, url: "https://drive.google.com/file/d/11mLL7t0oLSYG9rJLRLLRTRzev1fs_ZXj/view?usp=sharing" }
            ].map((project) => (
              <motion.a
                key={project.num}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/60 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-blue-400">Projet {project.num}</h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-sm text-gray-400">Consulter le projet</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Projets Personnels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20 p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Projets Personnels</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition-all"
              >
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Projet Personnel {num}</h3>
                <p className="text-sm text-gray-400 italic">Description à venir...</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projets Scolaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-500/20 p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">Projets Scolaires</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all"
              >
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Projet Scolaire {num}</h3>
                <p className="text-sm text-gray-400 italic">Description à venir...</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}