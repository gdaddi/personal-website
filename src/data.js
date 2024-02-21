import planningLogo from './assets/planning.svg'
import hammerLogo from './assets/hammer.svg'
import NewsContent from './components/NewsContent';
import ContactContent from './components/ContactContent';
import ResumeContent from './components/ResumeContent';
import iconArm from './assets/arm.svg';
import iconSchool from './assets/school.svg';
import iconPaper from './assets/paper.svg';
import iconField from './assets/field.svg';
import iconPosition from './assets/position.svg';

export const CARDS = [
    {
        title: "Robotics",
        description: "I write software for robotic systems and field test it in extreme terrains",
        image: iconArm
    },
    {
        title: "Autonomy",
        description: "My research is focused on system-level autonomy, and machine learning",
        image: planningLogo
    },
    {
        title: "Making",
        description: "I enjoy prototyping and building both software and hardware products",
        image: hammerLogo
    }
]


export const TABCONTENTS = {
    tab1: {
        getContent: () => NewsContent,
    },
    tab2: {
        getContent:() => ResumeContent,
    },
    tab3: {
        getContent: () => ContactContent, 
    }
};

export const NEWS_ITEMS = [
    {
        title: "EELS paper presented at IROS",
        date: "Oct, 2023",
        icon: iconPaper,
        description: "And it was best paper finalist!",
        link: 'https://ai.jpl.nasa.gov/public/documents/papers/thakker-et-al-iros2023-eels.pdf',
    },
    {
      title: "Field test at Athabasca Glacier",
      date: "Feb, 2020",
      icon: iconField,
      description: "The EELS robot was field tested for three weeks on the Athabasca Glacier, AB, Canada.",
      link: 'https://www.cbc.ca/news/canada/edmonton/alberta-glacier-used-as-nasa-training-ground-for-robotic-snake-that-will-explore-outer-space-1.7034061',
    },
    {
        title: "Field test at Big Bear",
        date: "Mar, 2023",
        icon: iconField,
        description: "The EELS robot was field tested for three days at Big Bear, CA, USA.",
    },
    {
        title: "Field test at Table Mountain",
        date: "Dec, 2022",
        icon: iconField,
        description: "The EELS robot was field tested for two days at Table Mountain, CA, USA.",
    },
    {
      title: "Visiting Researcher at NASA/JPL",
      date: "Nov, 2021",
      icon: iconPosition,
      description: "In the Mission Planning and Software integration teams for the EELS project.",
      link: "https://www.jpl.nasa.gov/robotics-at-jpl/eels"
    },
    {
        title: "Ph.D. Student at PoliTo",
        date: "Sep, 2020",
        icon: iconSchool,
        description: "In the department of Mechanical and Aerospace Engineering.",
    },
    {
        title: "Visiting Researcher at NASA/JPL",
        date: "Oct, 2019",
        icon: iconPosition,
        description: "Focusing on plasma drilling and melt probe R&D.",
      },
      {
        title: "Ms.C. Student at PoliTo",
        date: "Sep, 2017",
        icon: iconSchool,
        description: "In Aerospace Engineering.",
    },
  ];