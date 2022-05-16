//  icons
import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/Reservia.PNG';
import Project2 from './assets/img/projects/Oh My Food.PNG';
import Project3 from './assets/img/projects/La Chouette Agence.PNG';
import Project4 from './assets/img/projects/Kanap.PNG';
import Project5 from './assets/img/projects/Hot Takes.PNG';
import Project6 from './assets/img/projects/Groupomania.PNG';
import Project7 from './assets/img/projects/BlackJack.PNG';
import Project8 from './assets/img/projects/Convertisseur eau.PNG';
import Project9 from './assets/img/projects/Extension chrome.PNG';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/tailwind.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';




// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Reservia',
    description: 'HTML, CSS',
  },
  {
    id: '2',
    image: Project2,
    name: 'Oh My Food',
    description: 'HTML, SASS',
  },
  {
    id: '3',
    image: Project3,
    name: 'La Chouette Agence',
    description: 'HTML, CSS, SEO',
  },
  {
    id: '4',
    image: Project4,
    name: 'Kanap',
    description: 'Vanilla Javascript',
  },
  {
    id: '5',
    image: Project5,
    name: 'Hot Takes',
    description: 'NodeJs, Express, MongoDB',
  },
  {
    id: '6',
    image: Project6,
    name: 'Groupomania',
    description: 'React, SASS, NodeJS, MySQL',
  },
  {
    id: '7',
    image: Project7,
    name: 'BlackJack',
    description: 'Javascript, SASS',
  },
  {
    id: '8',
    image: Project8,
    name: 'Convertisseur d\'eau',
    description: 'React',
  },
  {
    id: '9',
    image: Project9,
    name: 'Extension Chrome',
    description: 'Javascript, CSS',
  },
  
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
