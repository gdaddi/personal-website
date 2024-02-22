import planningLogo from './assets/planning.svg'
import hammerLogo from './assets/hammer.svg'
import NewsContent from './components/NewsContent';
import ContactContent from './components/ContactContent';
import iconArm from './assets/arm.svg';
import iconSchool from './assets/school.svg';
import iconPaper from './assets/paper.svg';
import iconField from './assets/field.svg';
import iconPosition from './assets/position.svg';
import ProjectsContent from './components/ProjectsContent';
import PublicationsContent from './components/PublicationsContent';

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
];


export const TABCONTENTS = {
    tab1: {
        getContent: () => NewsContent,
    },
    tab2: {
        getContent:() => ProjectsContent,
    },
    tab3: {
        getContent: () => PublicationsContent,
    },
    tab4: {
        getContent: () => ContactContent,
    }
};

export const NEWS_ITEMS = [
    {
        title: "EELS paper at IROS",
        date: "Oct, 2023",
        icon: iconPaper,
        description: "And it was best paper finalist!",
        link: 'https://ai.jpl.nasa.gov/public/documents/papers/thakker-et-al-iros2023-eels.pdf',
    },
    {
      title: "Field test at Athabasca Glacier",
      date: "Sep, 2023",
      icon: iconField,
      description: "The EELS robot was field tested for three weeks on the Athabasca Glacier, AB, Canada.",
      link: 'https://www.cbc.ca/news/canada/edmonton/alberta-glacier-used-as-nasa-training-ground-for-robotic-snake-that-will-explore-outer-space-1.7034061',
    },
    {
      title: "Visiting Researcher at NASA/JPL",
      date: "Nov, 2021",
      icon: iconPosition,
      description: "In the Mission Planning and Software integration teams for the EELS project.",
      link: "https://www.jpl.nasa.gov/robotics-at-jpl/eels"
    },
    {
        title: "Published my first journal paper",
        date: 'Apr, 2021',
        icon: iconPaper,
        description: "On investigating plasma drilling to enhance melt probes.",
        link: "https://doi.org/10.2514/1.T6244"
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
        title: "M.Sc. Student at PoliTo",
        date: "Sep, 2017",
        icon: iconSchool,
        description: "In Aerospace Engineering.",
    },
];


export const PUBLICATIONS = [
    {
      id: 'sroc2022',
      title: 'Space Rider Observer Cube--SROC: a CubeSat mission for proximity operations demonstration',
      bibtex: `@inproceedings{corpino2022space,
        title={Space Rider Observer Cube--SROC: a CubeSat mission for proximity operations demonstration},
        author={Corpino, S and Ammirante, G and Daddi, G and Stesina, F and Corradino, F and Basler, A and Francesconi, A and Branz, F and Van den Eynde, J and others},
        booktitle={Proc. 73rd International Astronautical Congress (IAC)},
        year={2022}
      }`
    },
    {
        id: 'thakker2023eels',
        title: `EELS: Towards Autonomous Mobility in Extreme Terrain with a Versatile Snake Robot with Resilience to Exteroception Failures`,
        bibtex: `@inproceedings{thakker2023eels,
            title={EELS: Towards Autonomous Mobility in Extreme Terrain with a Versatile Snake Robot with Resilience to Exteroception Failures},
            author={Thakker, Rohan and Paton, Michael and Strub, Marlin P and Swan, Michael and Daddi, Guglielmo and Royce, Rob and Tosi, Phillipe and Gildner, Matthew and Vaquero, Tiago and Veismann, Marcel and others},
            booktitle={2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
            pages={9886--9893},
            year={2023},
            organization={IEEE}
          }`
    }
];