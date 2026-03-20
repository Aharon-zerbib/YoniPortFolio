import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Home, User, Building2, FileText, Database, Eye, Mail } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const navItems = [
  { name: 'Home', icon: Home, path: 'Home' },
  { name: 'Profil', icon: User, path: 'Profil' },
  { name: 'Entreprise', icon: Building2, path: 'Entreprise' },
  { name: 'Épreuve E5', icon: FileText, path: 'EpreuveE5' },
  { name: 'Épreuve E6', icon: Database, path: 'EpreuveE6' },
  { name: 'Veille Technologique', icon: Eye, path: 'VeillesTechnologiques' },
  { name: 'Contact', icon: Mail, path: 'Contact' }];


  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-blue-500/40 shadow-lg shadow-blue-500/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-5">
            <Link to={createPageUrl('Home')} className="text-white text-3xl font-bold hover:text-blue-400 transition-colors">
              Yoni Sebban
            </Link>
            <div className="hidden md:flex gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPageName === item.path;
                return (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 font-medium ${
                    isActive ?
                    'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-white border-2 border-blue-400/50 shadow-lg shadow-blue-500/30' :
                    'text-gray-300 hover:text-white hover:bg-blue-500/15 border-2 border-transparent'}`
                    }>

                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.name}</span>
                  </Link>);

              })}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-400 hover:text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      {children}
    </div>);

}