import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, MapPin, Wrench, School, Award, Database } from 'lucide-react';

export default function Entreprise() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Titre Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Mes Opportunités Professionnelles
          </h1>
          <p className="text-xl text-gray-400">
            Découvrez les entreprises qui m'ont permis de développer mes compétences
          </p>
        </motion.div>

        {/* TAVA - Première Opportunité */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          {/* Header avec logo */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 border-l-4 border-blue-500 pl-4">
                TAVA
              </h2>
              <p className="text-blue-400 font-semibold pl-4">Ma Première Opportunité</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl border border-blue-500/20">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ba931bb33e47d92d4dca4/6b02da1af_Capturedcran2025-12-24142150.png" 
                alt="TAVA Logo" 
                className="h-12 object-contain"
              />
            </div>
          </div>

          {/* Présentation */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Présentation de l'entreprise
            </h3>
            <div className="text-gray-300 leading-relaxed space-y-3 pl-7">
              <p>
                <span className="text-blue-400 font-semibold">TAVA</span>, fondée en 2018, est une entreprise spécialisée dans la mise à disposition de matériel informatique pour les étudiants et alternants. Elle propose notamment des MacBook reconditionnés, financés par les dotations des OPCO, afin d'équiper les apprenants sans frais directs pour eux ou leur établissement.
              </p>
              <p>
                L'entreprise fournit une solution 360°, comprenant la prise en charge logistique, la configuration des appareils, la réinitialisation sécurisée des données entre utilisateurs et l'assistance technique. Elle accompagne ainsi les alternants et les établissements dans la gestion complète du parc informatique dédié à la formation.
              </p>
              <p>
                TAVA s'inscrit dans une démarche éco-responsable en privilégiant du matériel reconditionné et en assurant un suivi technique pour garantir une utilisation optimale des équipements fournis.
              </p>
            </div>
          </div>

          {/* Rôle occupé */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Rôle occupé en informatique
            </h3>
            <div className="text-gray-300 leading-relaxed pl-7">
              <p className="mb-3">
                Au sein de l'entreprise TAVA à <span className="text-blue-400">Ivry-sur-Seine</span>, j'ai occupé un poste d'alternant en informatique, avec des missions orientées support et maintenance. J'ai participé au diagnostic, à la réparation et au reconditionnement de postes informatiques, ainsi qu'à l'installation et la configuration des systèmes.
              </p>
              <p>
                Cette expérience m'a permis de renforcer mes compétences en maintenance matérielle, en environnements systèmes et d'acquérir une première approche professionnelle du support informatique.
              </p>
            </div>
          </div>

          {/* Éléments clés */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center"
            >
              <School className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">50</p>
              <p className="text-sm text-gray-400">Écoles en partenariat</p>
              <p className="text-xs text-gray-500 mt-1">Lyon, Nice...</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center"
            >
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">6</p>
              <p className="text-sm text-gray-400">Personnes employées</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center"
            >
              <Award className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">1</p>
              <p className="text-sm text-gray-400">Outil de vérification</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center"
            >
              <Building2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">6</p>
              <p className="text-sm text-gray-400">Machines à disposition</p>
            </motion.div>
          </div>
        </motion.div>

        {/* E2TIME - Deuxième Opportunité */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20 p-8 md:p-12"
        >
          {/* Header avec image */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 border-l-4 border-cyan-500 pl-4">
                E2TIME
              </h2>
              <p className="text-cyan-400 font-semibold pl-4">Ma Deuxième Opportunité - Actuelle</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-cyan-500/20">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ba931bb33e47d92d4dca4/36a814e10_mockup-e2time.jpg" 
                alt="E2TIME Bâtiment" 
                className="h-32 object-cover"
              />
            </div>
          </div>

          {/* Présentation */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Présentation de l'entreprise
            </h3>
            <div className="text-gray-300 leading-relaxed space-y-3 pl-7">
              <p>
                <span className="text-cyan-400 font-semibold">E2TIME</span> est une entreprise française spécialisée dans l'édition de solutions logicielles SIRH en mode SaaS (Software as a Service). Fondée au début des années 2010 et située à <span className="text-cyan-400">Rosny-sous-Bois</span>, elle accompagne les entreprises dans la gestion des temps et des activités de leurs collaborateurs.
              </p>
              <p>
                La solution E2TIME permet de centraliser et automatiser des processus tels que le pointage, la gestion des congés et absences, le suivi du temps de travail ou encore le télétravail. Accessible via une interface web, la plateforme s'adresse aussi bien aux PME qu'aux structures de plus grande taille, quel que soit leur secteur d'activité.
              </p>
              <p>
                Grâce à son approche SaaS, E2TIME propose une solution flexible, évolutive et accessible à distance, facilitant l'adoption par les équipes RH et les managers. L'entreprise met l'accent sur la fiabilité du service, la disponibilité de la plateforme et l'amélioration continue de ses fonctionnalités.
              </p>
            </div>
          </div>

          {/* Rôle occupé */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Rôle occupé en informatique
            </h3>
            <div className="text-gray-300 leading-relaxed space-y-3 pl-7">
              <p>
                Au sein de l'entreprise E2TIME, j'occupe un poste d'alternant en informatique, avec des missions orientées réseaux, conformité et outils numériques. J'interviens notamment sur la gestion du réseau interne, incluant la fibre optique, la configuration et le suivi du réseau invité, ainsi que l'organisation et l'optimisation de l'infrastructure réseau.
              </p>
              <p>
                Je participe également à des travaux liés au RGPD, tels que la compréhension des obligations réglementaires, la gestion des données et la sensibilisation aux bonnes pratiques. En parallèle, j'ai l'opportunité de m'intéresser à des sujets liés à l'intelligence artificielle, notamment dans une logique de veille et d'exploration des usages au sein de l'entreprise.
              </p>
              <p>
                Cette expérience me permet de développer une vision globale du système d'information, en combinant réseaux, réglementation et innovation technologique, dans un environnement professionnel SaaS.
              </p>
            </div>
          </div>

          {/* Éléments clés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 text-center"
            >
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">1548</p>
              <p className="text-sm text-gray-400">Clients chez E2TIME</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 text-center"
            >
              <Building2 className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">37</p>
              <p className="text-sm text-gray-400">Employés chez E2TIME</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 text-center"
            >
              <Database className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">OVH</p>
              <p className="text-sm text-gray-400">Bases de données hébergées</p>
            </motion.div>
          </div>

          {/* Secret Santa 2025 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-2xl border-2 border-cyan-500/30"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ba931bb33e47d92d4dca4/a583faf26_E2timesantasecret.jpeg" 
              alt="Secret Santa 2025" 
              className="w-full object-cover"
            />
            <div className="bg-cyan-500/10 p-4 text-center">
              <p className="text-cyan-400 font-semibold">Secret Santa 2025</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}