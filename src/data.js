//  icons
import {
  FiLinkedin,
  FiGithub,
  FiMail,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/Reservia.PNG';
import Project2 from './assets/img/projects/Oh My Food.PNG';
import Project3 from './assets/img/projects/La Chouette Agence.PNG';
import Project4 from './assets/img/projects/Kanap.PNG';
import Project5 from './assets/img/projects/Hot Takes.PNG';
import Project6 from './assets/img/projects/Groupomania.PNG';
import Project7 from './assets/img/projects/BlackJack.PNG';
import Project8 from './assets/img/projects/Extension chrome.PNG';
import Project9 from './assets/img/projects/GeneratePassword.PNG';
import Project10 from './assets/img/projects/Meme Generator.PNG';
import Project11 from './assets/img/projects/Notes App.PNG';




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
    href: 'https://www.linkedin.com/in/paul-vigneron98',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/wodenp98',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Reservia',
    description: 'HTML, CSS',
    href: 'https://github.com/wodenp98/PaulVigneron_2_03092021',
    video:'https://www.loom.com/share/481c8930ebcc4612b59b5331df50c064'
  },
  {
    id: '2',
    image: Project2,
    name: 'Oh My Food',
    description: 'HTML, SASS',
    href:'https://github.com/wodenp98/PaulVigneron_3_23092021',
    video:'https://www.loom.com/share/6e3cd69c02184f50a99d0660a631683a',
  },
  {
    id: '3',
    image: Project3,
    name: 'La Chouette Agence',
    description: 'HTML, CSS, SEO',
    href:'https://github.com/wodenp98/PaulVigneron_4_26102021',
    video:'https://www.loom.com/share/d1979610300d4a81995004c7694cc356',
  },
  {
    id: '4',
    image: Project4,
    name: 'Kanap',
    description: 'Vanilla Javascript',
    href:'https://github.com/wodenp98/PaulVigneron_5_17112021',
    video:'https://www.loom.com/share/f2f474d00d0c46eca56c21b533fca1a1',
  },
  {
    id: '5',
    image: Project5,
    name: 'Hot Takes',
    description: 'NodeJs, Express, MongoDB',
    href:'https://github.com/wodenp98/PaulVigneron_6_27122021',
    video:'https://www.loom.com/share/749a1e620aa0401aa251507cd3a280d7',
  },
  {
    id: '6',
    image: Project6,
    name: 'Groupomania',
    description: 'React, SASS, NodeJS, MySQL',
    href:'https://github.com/wodenp98/PaulVigneron_7_26012022',
    video:'https://www.loom.com/share/6197758fffda45288b3967c4dfb15a66',
  },
  {
    id: '7',
    image: Project7,
    name: 'BlackJack',
    description: 'Javascript, SASS',
    href:'https://github.com/wodenp98/BlackJack-Game',
    video:'https://www.loom.com/share/ea3b73aa794e445481dc457c589cec78',
  },
  {
    id: '8',
    image: Project8,
    name: 'Extension Chrome',
    description: 'Javascript, CSS',
    href:'https://github.com/wodenp98/Extension-Chrome',
    video:'https://www.loom.com/share/cee73f75aa364cbb9a2a985bda5dfbb6',
  },
  {
    id: '9',
    image: Project9,
    name: 'Générateur de mot de passe',
    description: 'Javascript, CSS',
    href:'https://github.com/wodenp98/Generate-Password',
    video:'https://www.loom.com/share/ddc4f04352ee433cb1bf834d040efb25',
  },
  {
    id: '10',
    image: Project10,
    name: 'Générateur de meme',
    description: 'React',
    href:'https://github.com/wodenp98/Meme-Generator',
    video:'https://www.loom.com/share/e57060034f4546a3ab79ff9f2afc5b4d',
  },
  {
    id: '11',
    image: Project11,
    name: 'Notes',
    description: 'React',
    href:'https://github.com/wodenp98/Notes-App',
    video:'https://www.loom.com/share/55a98e70faf94aa481837a036efc8763',
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
    title: 'Une question?',
    description: 'Envoyez-moi un mail à paulvigneron4698@gmail.com',
  },
  
];
