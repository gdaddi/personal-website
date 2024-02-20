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
        description: "I write software for robotic systems and field test them in extreme terrains",
        image: iconArm
    },
    {
        title: "Autonomy",
        description: "My research is focused on system-level autonomy and machine learning",
        image: planningLogo
    },
    {
        title: "Building",
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
      description: "The team field tested the EELS robot for three weeks on the Athabasca Glacier in Alberta, Canada.",
      link: 'https://www.cbc.ca/news/canada/edmonton/alberta-glacier-used-as-nasa-training-ground-for-robotic-snake-that-will-explore-outer-space-1.7034061',
    },
    {
        title: "Field test at Big Bear",
        date: "Mar, 2023",
        icon: iconField,
        description: "The team field tested the EELS robot for three days at Big Bear Lake, CA, USA.",
    },
    {
        title: "Field test at Table Mountain",
        date: "Dec, 2022",
        icon: iconField,
        description: "The team field tested the EELS robot for two days at JPL's Table Mountain facility in CA, USA.",
    },
    {
      title: "Visiting Researcher at NASA/JPL",
      date: "Nov, 2021",
      icon: iconPosition,
      description: "I joined JPL for a second time to work on Autonomy software for the Exobiology Extant Life Surveyor (EELS).",
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
        description: "I joined JPL to work to develop plasma drilling technology.",
      },
      {
        title: "Ms.C. Student at PoliTo",
        date: "Sep, 2017",
        icon: iconSchool,
        description: "In Aerospace Engineering.",
    },
  ];