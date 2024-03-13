import planningLogo from './assets/planning.svg'
import hammerLogo from './assets/hammer.svg'
import NewsContent from './components/NewsContent';
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
};

export const NEWS_ITEMS = [
    {
        title: "EELS paper in Science Robotics",
        date: "Mar, 2024",
        icon: iconPaper,
        description: "Our paper on the EELS robot had front page coverage in Science Robotics!",
        link: "https://www.science.org/toc/scirobotics/9/88"
    },
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
        id: `vaquero2024eels`,
        title: `EELS: Autonomous snake-like robot with task and motion planning capabilities for ice world exploration`,
        bibtex: `@article{
            doi:10.1126/scirobotics.adh8332,
            author = {T. S. Vaquero  and G. Daddi  and R. Thakker  and M. Paton  and A. Jasour  and M. P. Strub  and R. M. Swan  and R. Royce  and M. Gildner  and P. Tosi  and M. Veismann  and P. Gavrilov  and E. Marteau  and J. Bowkett  and D. Loret de Mola Lemus  and Y. Nakka  and B. Hockman  and A. Orekhov  and T. D. Hasseler  and C. Leake  and B. Nuernberger  and P. Proença  and W. Reid  and W. Talbot  and N. Georgiev  and T. Pailevanian  and A. Archanian  and E. Ambrose  and J. Jasper  and R. Etheredge  and C. Roman  and D. Levine  and K. Otsu  and S. Yearicks  and H. Melikyan  and R. R. Rieber  and K. Carpenter  and J. Nash  and A. Jain  and L. Shiraishi  and M. Robinson  and M. Travers  and H. Choset  and J. Burdick  and A. Gardner  and M. Cable  and M. Ingham  and M. Ono },
            title = {EELS: Autonomous snake-like robot with task and motion planning capabilities for ice world exploration},
            journal = {Science Robotics},
            volume = {9},
            number = {88},
            pages = {eadh8332},
            year = {2024},
            doi = {10.1126/scirobotics.adh8332},
            URL = {https://www.science.org/doi/abs/10.1126/scirobotics.adh8332},
            eprint = {https://www.science.org/doi/pdf/10.1126/scirobotics.adh8332}`
    },
    {
        id: `thakker2023eels`,
        title: `EELS: Towards Autonomous Mobility in Extreme Terrain with a Versatile Snake Robot with Resilience to Exteroception Failures`,
        bibtex: `@inproceedings{thakker2023eels,
    title={EELS: Towards Autonomous Mobility in Extreme Terrain with a Versatile Snake Robot with Resilience to Exteroception Failures},
    author={Thakker, Rohan and Paton, Michael and Strub, Marlin P and Swan, Michael and Daddi, Guglielmo and Royce, Rob and Tosi, Phillipe and Gildner, Matthew and Vaquero, Tiago and Veismann, Marcel and others},
    booktitle={2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
    pages={9886--9893},
    year={2023},
    organization={IEEE}
    }`
    },
    {
        id: `daddi2022thermal`,
        title: 'Thermal probe enhanced with pulsed plasma discharges for efficient ice penetration',
        bibtex: `@article{daddi2022thermal,
title={Thermal probe enhanced with pulsed plasma discharges for efficient ice penetration},
author={Daddi, Guglielmo and Mier-Hicks, Fernando},
journal={Journal of Thermophysics and Heat Transfer},
volume={36},
number={1},
pages={81--88},
year={2022},
publisher={American Institute of Aeronautics and Astronautics}
}`
    },
    {
        id: `ono2024boldly`,
        title: `To Boldly Go Where No Robots Have Gone Before--Part 1: EELS Robot to Spearhead a New One-Shot Exploration Paradigm with in-situ Adaptation`,
        bibtex: `@inproceedings{ono2024boldly,
title={To Boldly Go Where No Robots Have Gone Before--Part 1: EELS Robot to Spearhead a New One-Shot Exploration Paradigm with in-situ Adaptation},
author={Ono, Masahiro and Thakker, Rohan and Georgiev, Nikola and Gavrilov, Peter and Archanian, Avak and Drevinskas, Tomas and Daddi, Guglielmo and Paton, Michael and Melikyan, Hovhannes and Pailevanian, Torkom and others},
booktitle={AIAA Scitech 2024 Forum},
pages={1746},
year={2024}
}`
    },
    {
        id: `thakker2024boldly`,
        title: `To Boldly Go Where No Robots Have Gone Before--Part 4: NEO Autonomy for Robustly Exploring Unknown, Extreme Environments with Versatile Robots`,
        bibtex: `@inproceedings{thakker2024boldly,
title={To Boldly Go Where No Robots Have Gone Before--Part 4: NEO Autonomy for Robustly Exploring Unknown, Extreme Environments with Versatile Robots},
author={Thakker, Rohan and Paton, Michael and Strub, Marlin and Swan, Michael and Vaquero, Tiago and Jones, Bryson and Daddi, Guglielmo and Royce, Rob and Bowkett, Joseph and Loret de Mola Lemus, Daniel and others},
booktitle={AIAA SCITECH 2024 Forum},
pages={1747},
year={2024}
          }`
    },
    {
        id: `ono2023enabling`,
        title: `Enabling Ocean Access with EELS`,
        bibtex: `@article{ono2023enabling,
title={Enabling Ocean Access with EELS},
author={Ono, Masahiro and Cable, Morgan L and Spilker, Linda Joyce and Drevinskas, Tomas and Weber, Jessica and Malaska, Michael and Gardner, Alex S and Ambrose, Eric and Archanian, Avak and Barchowsky, Ansel and others},
journal={AGU23},
year={2023},
publisher={AGU}
}`
    },
    {
        id: `daddi2022assessing`,
        title: `Assessing an Image-to-Image Approach to Global Path Planning for a Planetary Exploration`,
        bibtex: `@article{daddi2022assessing,
title={Assessing an Image-to-Image Approach to Global Path Planning for a Planetary Exploration},
author={Daddi, Guglielmo and Notaristefano, Nicolaus and Stesina, Fabrizio and Corpino, Sabrina},
journal={Aerospace},
volume={9},
number={11},
pages={721},
year={2022},
publisher={MDPI}
}`
    },
    {
        id: `corpino2022space`,
        title: 'Space Rider Observer Cube--SROC: a CubeSat mission for proximity operations demonstration',
        bibtex: `@inproceedings{corpino2022space,
  title={Space Rider Observer Cube--SROC: a CubeSat mission for proximity operations demonstration},
  author={Corpino, S and Ammirante, G and Daddi, G and Stesina, F and Corradino, F and Basler, A and Francesconi, A and Branz, F and Van den Eynde, J and others},
  booktitle={Proc. 73rd International Astronautical Congress (IAC)},
  year={2022}
  }`
      } 
];