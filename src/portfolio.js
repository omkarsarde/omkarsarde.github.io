/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Omkar Sarde",
  title: "Hi! I'm Omkar \n",
  subTitle: emoji(
    "A passionate Software Engineer who is trying to positively change the world, one problem at a time!",
  ),
  resumeLink:
    "https://github.com/omkarsarde/Resume/blob/main/OmkarSardeResume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/omkarsarde",
  linkedin: "https://www.linkedin.com/in/omkarsarde/",
  gmail: "sardeomkarp@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Engineer proficient in SDLC, Machine Learning, Deep Learning, Data Enigeering.\n\nAchieving my goals by building end-to-end highly performant, reliable, distributed & scalable AI/ML solutions.\n\nIn my free time you will find me trekking, cooking, competatively playing esports and mentoring students to learn new skills.",
  skills:[],
  /*skills: [
    emoji(
      "⚡ Full Stack Software Development"
    ),
    emoji(
      "⚡ Data Mining, Analysis and Visualization"
    ),
    emoji(
      "⚡ ML and Deep Learning system Design, Development and Production"
    ),
    emoji(
      "⚡ Deep Learning Systems for Computer Vision, Natural Language Processing"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],*/

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-dropbox"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rochester Institute of Technology",
      logo: require("./assets/images/RitLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2018 - Decemeber 2021",
      Honors: "Graduate Merit Scholarship Recepient.",
      descBullets: [
        "GPA: 3.50/4.00",
        "Coursework: Algorithms, Object-Oriented Design, SDLC, Data Analytics, Machine Learning, Deep Learning, Computer Vision, Pattern Recognition"
      ]
    },
    {
      schoolName: "Savitribai Phule Pune University (Formerly University of Pune)",
      logo: require("./assets/images/sppu1.png"),
      subHeader: "Bachelor of Engineering in Mechanical Engineering",
      duration: "August 2013 - May 2017",
      Honors: "Undergraduate Merit Scholarship Recepient",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Design and Development, Machine Learning, Deep Learning", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Software Engineer",
      company: "DEKA R&D Corporation",
      companylogo: require("./assets/images/dekaLogo.png"),
      date: "Feb 2022 – Present",
      desc:
        "Developed robust and efficient machine learning systems, achieving significant performance boosts and enhancing the efficiency of data processing, consistently delivering high-quality software in a fast-paced, agile environment.",
      descBullets: [
        "Directed architecture and deployment of 4 distributed ML system workflows utilizing Python, C++, SQL, Docker, Kubernetes, AWS, and Airflow, achieving a 40% performance increase, and reducing latency by 35%.",
        "Overhauled two ML production systems for 2D object detection, enhancing input capacity by 30% and resource utilization by 40% via Airflow DAG profiling, codebase refactoring, and resource optimization.",
        "Transformed software development lifecycle by implementing Agile, CI/CD, and TDD methodologies. Constructed 4 new CI/CD pipelines, increasing task completion speed by 35% and enhancing software reliability by 40%.",
        "Designed an efficient data management system using SQL (PostgreSQL) and NoSQL databases (Elasticsearch), enhancing data retrieval times by 50%.",
      ]
    },
    {
      role: "Graduate Research Assistant",
      company: "Rochester Institute of Technology",
      companylogo: require("./assets/images/RitLogo.png"),
      date: "July 2020 – February 2021",
      desc:
        "Executed pioneering research in AI and ML, and led the creation of advanced models, significantly enhancing data collection speed, and annotation efficiency, fostering an environment of technical excellence and continuous improvement.",
      descBullets: [
        "Developed advanced web crawlers using Python and opensource APIs, creating a diverse dataset of 1000+ videos across 5+ categories and enhancing data collection speed by 40%.",
        "Created video-to-text generators using Faster RCNN + LSTM models, to automate annotation of the dataset to generate a vocabulary for over 100 objects with a BLEU score of 71.8.",
        "Improved model accuracy in automated annotation processes by 30% by applying data engineering techniques like PCA, ICA, LDA, LLE, and t-SNE.",
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Horizon Geospace",
      companylogo: require("./assets/images/h.png"),
      date: "June 2017 – July 2018",
      desc:
        "Engineered and optimized big data pipelines and machine learning systems, accelerating data load speed, boosting sales, and promoting system resilience while fostering a culture of continuous learning.",
      descBullets: [
        "Designed and engineered real-time data pipeline workflows with Spark and Kafka, deploying various algorithms and ML techniques to boost system performance by 60% and system efficiency by 45%.",
        "Created ML-based CRM prototypes with TensorFlow, Keras, and PyTorch, contributing to a 15% sales increase and 50% improvement in customer retention.",
        "Integrated Computer Vision and NLP ML systems into microservices architectures with Docker and Kubernetes, enhancing system resilience by 50% and scalability by 70%.",
        "Fostered a culture of continuous learning and collaboration among a team of 5 interns, increasing team productivity by 40%.",
      ]
    },
    {
      role: "Engineering Intern",
      company: "Defence R&D Organisation  HEMRL",
      companylogo: require("./assets/images/drdo.png"),
      date: "August 2016 – May 2017",
      desc:
        "Played a key role in the development of efficient deep learning system prototypes, implemented rigorous testing standards, and improved application performance and system storage efficiency, demonstrating a commitment to quality and performance.",
      descBullets: [
        "Programmed efficient deep learning system prototypes for propellant analysis, reducing system storage footprint by 43% and training time by 27% through advanced feature engineering techniques.",
        "Enhanced code coverage from 63% to 94% through refactoring and unit testing, leading to 1.5x improvement in Memory (CPU) management & saved 110ms in loading time.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Awards and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Graduate Merit Scholarship",
      subtitle: "40% Tution Waiver as a Graduate Student for Academic Achievements.",
      image: require("./assets/images/RitLogo.webp"),
      footerLink: [
        {
          name: "Institute Website",
          url: "https://www.rit.edu/"
        }
      ]
    },
    {
      title: "Undergraduate Scholarship",
      subtitle: "30% Tution Waiver as a Undergraduate Student for Academic Achievements.",
      image: require("./assets/images/Viit.webp"),
      footerLink: [
        {
          name: "Institute Website",
          url: "https://www.viit.ac.in/"
        }
      ]
    },
    {
      title: "Advanced Java Programming",
      subtitle:
        "",
      image: require("./assets/images/U8.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-ed98773d-d8f1-4403-a0e4-a088e77afef3"
        },
      ]
    },
    {
      title: "Java Advanced Algorithms",
      subtitle:
        "",
      image: require("./assets/images/U1.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-X0VCC1A7"
        },
      ]
    },
    {
      title: "Node.js Developer",
      subtitle:
        "",
      image: require("./assets/images/U7.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-59f7291e-3b6a-4ab6-a2be-06faafe4cb4a"
        },
      ]
    },
    {
      title: "Python for ML",
      subtitle:
        "",
      image: require("./assets/images/U2.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-NX7JGSQW"
        },
      ]
    },
    {
      title: "Hadoop for Big Data",
      subtitle:
        "",
      image: require("./assets/images/U4.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-2e4c1d1f-c9d4-4557-89b8-11cedd2c38fe"
        },
      ]
    },
    {
      title: "Docker and Kubernetes",
      subtitle:
        "",
      image: require("./assets/images/U9.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-b01d573a-aaa6-4d0c-ae01-da9695982378"
        },
      ]
    },
    {
      title: "Tensorflow for Deep Learning",
      subtitle:
        "",
      image: require("./assets/images/U3.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-b8ed46c4-e1f0-42eb-96d8-aa8144f330dc"
        },
      ]
    },
    {
      title: "Structured Query Language (SQL)",
      subtitle:
        "",
      image: require("./assets/images/U5.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-c91d457f-b0a5-4adb-9007-8621999f7412"
        },
      ]
    },
    {
      title: "Data Science and Analysis",
      subtitle:
        "",
      image: require("./assets/images/U6.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-1533e8ca-6872-462f-aea7-96d523228886"
        },
      ]
    },
    {
      title: "Machine Learning using R",
      subtitle:
        "",
      image: require("./assets/images/U10.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://ude.my/UC-7e7137fd-f4ad-47f5-ad54-25e8a669392e"
        },
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-585-439-7414",
  email_address: "os4802@g.rit.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
