import translateImg from '../projects_photos/Game.png';
import touristAgencyImg from '../projects_photos/touristAgency.jpg';
import yummy_noddels from '../projects_photos/yummy-noddels.svg';

export const projectsInfo = [
    {
        id: '3300h',
        cover: touristAgencyImg,
        isExplained: true,
        title: 'Tourist agency website',
        summery: 'The website showcase the service of the agency allows the users to book online ,The Website can be translated to most of the known languages via a translation API, inclusive admin section for easily updating the content only accessble by the agancy owner',
        technologies: ['JavaScript', 'PHP', 'MySQL', 'Css', 'Bootstrap', 'HTML'],
        codeSource: 'https://github.com/Code-With-Amine/tourist-agency',
        link: ''
    },
    {
        id: '124f0h',
        cover: yummy_noddels,
        isExplained: true,
        title: 'Yummy Noodles',
        summery: 'Website for a french restaurant that specialise in making the best noodles in paris the website showcase there menu and location and way to contact them and the possibility to buy online',
        technologies: ['ReactJS', 'Sass'],
        codeSource: 'https://github.com/Code-With-Amine/yummy-noddles',
        link: ''
    },
    {
        id: '132fdd',
        cover: translateImg,
        isExplained: true,
        title: 'Translation Game',
        summery: 'Website to test your grasping for a new language throughout out a fun game in your favorite filed of interset',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        codeSource: 'https://github.com/Code-With-Amine/translation-game',
        link: ''
    }
]