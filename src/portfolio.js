/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Omkar Sarde",
  title: "Hi! I'm Omkar \n",
  subTitle: emoji(
    "A passionate Software Engineer proficient in SDLC, Machine Learning, Deep Learning, Data Enigeering."
  ),
  resumeLink:
    "https://github.com/omkarsarde/Resume/blob/main/OmkarSardeResume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/omkarsarde",
  linkedin: "https://www.linkedin.com/in/omkarsarde/",
  gmail: "os4802@g.rit.edu",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER PROFICIENT IN BUILDING END-TO-END ML APPS",
  skills: [
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
  ],

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
        "GPA: 3.48/4.00",
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
      role: "Graduate Research Assistant",
      company: "Rochester Institute of Technology",
      companylogo: require("./assets/images/RitLogo.png"),
      date: "July 2020 – February 2021",
      desc:
        "Assisted and collaborated with Researchers at Action Lab to facilitate Computer Vision Research.",
      descBullets: [
        "Programmed web crawlers to create a Dataset of 1000+ videos across 5+ categories.",
        "Crawler bots enhanced data collection speed by 40% with precision range of 85% - 90%",
        "Implemented video-to-text generators using Faster RCNN + LSTM models to annotate dataset.",
        "Model generated vocabulary for 100+ objects with BLEU score of 71.8.",
        "Held & participated in weekly peer code reviews to test and debug code and system features for multiple teams",
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Horizon Geospace",
      companylogo: require("./assets/images/h.png"),
      date: "June 2017 – July 2018",
      desc:
        "Engineered hypothesis testing, A/B testing and built scalable ML and Deep Learning models.",
      descBullets: [
        "Programmed 25 Proof of Concepts (POCs) prototytpes that simulated and analyzed client manufacturing plants.",
        "Executed data engineering and feature extraction using PCA, ICA, LDA, LLE and t-SNE to analyze dominant features in client processes.",
        "Desinged and developed inventory reduction feature to reorder and restock crucial components for inventory management, reducing 15% restocking time.",
        "Established 24 ETL pipelines to enable users to perform analytics at scale, reducing time to decision by 20%",
      ]
    },
    {
      role: "Engineering Intern",
      company: "Defence R&D Organisation  HEMRL",
      companylogo: require("./assets/images/drdo.png"),
      date: "August 2016 – May 2017",
      desc:
        "Supported Scientists, Engineers to replace manual testing of propellants with Deep Learning Systems.",
      descBullets: [
        "Assisted development of multiple deep learning system prototypes to analyze ageing & testing of 3 propellant types.",
        "Decreased system storage footprint by 43% through feature engineering, reducing 27% of training time.",
        "Programmed REST APIs to expose model endpoints to interface with Multi-User Intefaces (MUIs).",
        "Enhanced code coverage from 67% to 85%, test coverage from 63% to 87% by refactoring and unit-testing.",
        "Recevied citation for performance."
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
