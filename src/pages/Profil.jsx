import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award } from 'lucide-react';

export default function Profil() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-full mx-auto space-y-8 px-4 md:px-12 lg:px-16">
        {/* Présentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
            Présentation
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Je m'appelle <span className="text-blue-400 font-semibold">Yoni Sebban</span>, j'ai 21 ans et je suis passionné par l'informatique et les technologies numériques. Depuis plusieurs années, je m'intéresse au fonctionnement des systèmes informatiques, des réseaux et aux enjeux de sécurité qui y sont associés.
            </p>
            <p>
              En septembre 2024, j'ai intégré un <span className="text-blue-400 font-semibold">BTS SIO (Services Informatiques aux Organisations)</span>, spécialité Solutions d'Infrastructure, Systèmes et Réseaux (SISR), afin de développer des compétences solides en systèmes, réseaux et sécurité informatique. Cette formation me permet d'acquérir une approche rigoureuse et technique des infrastructures informatiques.
            </p>
            <p>
              Curieux, motivé et en constante recherche d'apprentissage, je m'oriente aujourd'hui vers la <span className="text-blue-400 font-semibold">cybersécurité</span>, un domaine exigeant et en perpétuelle évolution. Mon objectif est de devenir un professionnel de la cybersécurité, capable de protéger les systèmes d'information et d'apporter des solutions fiables et sécurisées aux organisations.
            </p>
          </div>
        </motion.div>

        {/* Expériences Professionnelles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
            Expériences Professionnelles
          </h2>
          <div className="space-y-6">
            {/* TAVA */}
            <div className="border-l-2 border-blue-500/50 pl-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Technicien Informatique - TAVA</h3>
              <p className="text-sm text-gray-400 mb-3">Ivry-sur-Seine</p>
              <p className="text-gray-300 leading-relaxed">
                Au cours de mon parcours, j'ai eu l'opportunité d'acquérir une première expérience concrète en informatique au sein de TAVA, où j'ai occupé un poste de technicien informatique. Cette expérience m'a permis de réparer et maintenir des ordinateurs, ainsi que de découvrir et approfondir l'utilisation du terminal, afin de mieux comprendre le fonctionnement des systèmes.
              </p>
            </div>

            {/* E2TIME */}
            <div className="border-l-2 border-blue-500/50 pl-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Spécialiste Cybersécurité & Réseaux - E2TIME</h3>
              <p className="text-sm text-gray-400 mb-3">Rosny-sous-Bois</p>
              <p className="text-gray-300 leading-relaxed">
                Par la suite, j'ai rejoint l'entreprise E2TIME, où je développe des compétences orientées cybersécurité et réseaux. J'y aborde notamment des sujets liés à la sécurité informatique, au RGPD et à la gestion des infrastructures réseau, renforçant ainsi ma vision globale des enjeux actuels des systèmes d'information.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Objectifs Professionnels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
            Objectifs Professionnels
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Mon objectif professionnel est de faire carrière dans le domaine de la <span className="text-blue-400 font-semibold">cybersécurité</span>. Je souhaite développer une expertise technique solide afin de participer activement à la protection des systèmes d'information, des réseaux et des données des organisations.
            </p>
            <p>
              En complément de ma formation en BTS SIO option SISR, je m'investis également dans des formations personnelles et pratiques, notamment à travers des plateformes spécialisées telles que <span className="text-blue-400 font-semibold">TryHackMe</span>, qui me permettent de renforcer mes compétences techniques, d'approfondir ma compréhension des menaces et d'adopter une démarche d'apprentissage continue.
            </p>
            <p>
              À moyen et long terme, mon ambition est d'évoluer vers un poste spécialisé en cybersécurité, où je pourrai contribuer à la prévention, à la détection et à la sécurisation des infrastructures informatiques dans un environnement professionnel en constante évolution.
            </p>
          </div>
        </motion.div>

        {/* Mes Qualités */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Mes Qualités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rigoureux */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0]
              }}
              transition={{ 
                delay: 0.5, 
                duration: 0.5,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ scale: 1.1, y: -15, rotate: 2 }}
              className="text-center group"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Rigoureux</h3>
              <div className="overflow-hidden rounded-xl border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-blue-500/20">
                <motion.img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop" 
                  alt="Rigoureux"
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.2, rotate: -2 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            {/* Productif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0]
              }}
              transition={{ 
                delay: 0.6, 
                duration: 0.5,
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }
              }}
              whileHover={{ scale: 1.1, y: -15, rotate: -2 }}
              className="text-center group"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Productif</h3>
              <div className="overflow-hidden rounded-xl border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-blue-500/20">
                <motion.img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" 
                  alt="Productif"
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.2, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            {/* Autonome */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -12, 0]
              }}
              transition={{ 
                delay: 0.7, 
                duration: 0.5,
                y: {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }
              }}
              whileHover={{ scale: 1.1, y: -15, rotate: 2 }}
              className="text-center group"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Autonome</h3>
              <div className="overflow-hidden rounded-xl border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-blue-500/20">
                <motion.img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" 
                  alt="Autonome"
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.2, rotate: -2 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Technologies Maîtrisées */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
            Technologies Maîtrisées
          </h2>

          <div className="space-y-8">
            {/* Systèmes d'exploitation */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Systèmes d'exploitation</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Administration Windows (Windows 10, 11, Server)</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Administration Linux (Kali, Ubuntu)</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.1, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Réseaux</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">TCP/IP, Adressage IP, Sous-réseaux</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Configuration équipements, VLAN, Routage</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.3, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sécurité informatique */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Sécurité informatique</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Cybersécurité, Pare-feu, Antivirus</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.4, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">RGPD et bonnes pratiques</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Outils et virtualisation */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Outils et virtualisation</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">VirtualBox, VMware</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.6, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Sauvegarde et diagnostic</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.7, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Gestion et support informatique */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Gestion et support informatique</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">GLPI (gestion de parc, tickets, inventaire)</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Documentation technique et support</span>
                    <span className="text-blue-400 font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.9, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Développement & scripting */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Développement & scripting</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Python (scripts, automatisation)</span>
                    <span className="text-blue-400 font-semibold">65%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Bash / Batch</span>
                    <span className="text-blue-400 font-semibold">65%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ delay: 2.1, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">HTML / CSS</span>
                    <span className="text-blue-400 font-semibold">65%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ delay: 2.2, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Curriculum Vitae et certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-900/80 backdrop-blur-lg border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
            Curriculum Vitae et certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Consulter Mon CV */}
            <motion.a
              href="https://drive.google.com/file/d/1G6003RK3rRuR-6Qt-CBXHkq4XoYmVvAZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-2xl p-8 cursor-pointer group hover:border-blue-500/60 transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <FileText className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-400">Consulter Mon CV</h3>
              </div>
            </motion.a>

            {/* Certification 1 */}
            <motion.a
              href="https://drive.google.com/file/d/1aVhiQv49WNyXwwpweewM1_Sr2vASQt2Y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-2xl p-8 cursor-pointer group hover:border-blue-500/60 transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <Award className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-400">Certification 1</h3>
              </div>
            </motion.a>

            {/* Certification 2 */}
            <motion.a
              href="https://drive.google.com/file/d/1mfs3wR_DVvU-UpfB-6J95QvY3EIa51NR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-2xl p-8 cursor-pointer group hover:border-blue-500/60 transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <Award className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-400">Certification 2</h3>
              </div>
            </motion.a>

            {/* Certification 3 */}
            <motion.a
              href="https://drive.google.com/file/d/1-WKXDYLaK_soMCSxWXWZvMXs4O0ScEnc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-2xl p-8 cursor-pointer group hover:border-blue-500/60 transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <Award className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-400">Certification 3</h3>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}