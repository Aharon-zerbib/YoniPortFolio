import Contact from './pages/Contact';
import Entreprise from './pages/Entreprise';
import EpreuveE5 from './pages/EpreuveE5';
import EpreuveE6 from './pages/EpreuveE6';
import Home from './pages/Home';
import Profil from './pages/Profil';
import VeillesTechnologiques from './pages/VeillesTechnologiques';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Contact": Contact,
    "Entreprise": Entreprise,
    "EpreuveE5": EpreuveE5,
    "EpreuveE6": EpreuveE6,
    "Home": Home,
    "Profil": Profil,
    "VeillesTechnologiques": VeillesTechnologiques,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};