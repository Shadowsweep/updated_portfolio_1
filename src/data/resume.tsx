import { Icons } from "@/components/icons";

export const DATA = {
  name: "Utkarsh Gupta",
  initials: "UG",
  url: "https://portfolio-utk.vercel.app/",
  location: " Gwalior , Madhya Pradesh India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Enthusiastic entry-level full-stack developer skilled in Django REST Framework.",
  summary:
    "Hi, I'm Utkarsh Gupta, a Mathematics and Computing student at Madhav Institute of Technology. I'm passionate about full-stack development and have interned at Sooosoftwares and Numeric Infosystem. I've worked on projects like an automated email system and a mobile recommendation app, using languages like Python and JavaScript, and frameworks like Django and React. I'm also certified in cloud computing and cybersecurity. I love creating efficient, user-friendly solutions and am always eager to take on new tech challenges.",
  avatarUrl: "/me7.jpeg",
  skills: [
    "C/C++",
    "Python",
    "Django",
    "Django REST Framework",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Postgres",
    "MySQL",
    "Git/Github",
  ],
  contact: {
    email: "utkarshhg911@gmial.com",
    tel: "+91 7987674357",
    social: {
      GitHub: {
        url: "https://github.com/Shadowsweep/",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/utkarsh-gupta-shadowsweep/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/lumb3rjack64",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://www.youtube.com/@techunsatisfied",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
      company: "Numric Infosystem Pvt. Ltd.",
      href: "https://www.numericinfosystem.com/",
      badges: [],
      location: "On-site",
      title: "Full Stack Web Developer",
      logoUrl: "/numericinfo.jpg",
      start: "Aug 2023",
      end: "Feb 2024",
      description:
        "Developed a Medical Assistance Platform using Django and React, enabling seamless doctor-patient communication and personalized prescriptions with real-time updates, reducing prescription generation time by 50%. ",
    },
    {
      company: "Sooosoftwares",
      badges: [],
      // href: "https://shopify.com",
      location: "On-site",
      title: "Web Developer",
      logoUrl: "/sooo.png",
      start: "May 2023",
      end: "June 2023",
      description:
        "Played a key role in a Car Rental Full Stack Project, enabling customers to purchase vehicles based on preferences and pay exclusively for the duration of usage, boosting customer satisfaction by 30%. ",
    }
    ,
  ],
  education: [
    {
      school: "Madhav  Institute of Technology",
      href: "https://web.mitsgwalior.in/",
      degree: "Bachelor Of technology -  BTech, Mathematics And Computing ",
      logoUrl: "/buildspace.jpg",
      start: "2021",
      end: "2025",
    },
    // {
    //   school: "Sankar Public School",
    //   href: "https://uwaterloo.ca",
    //   degree: "Higher Secondary ,PCM ",
    //   logoUrl: "/waterloo.png",
    //   start: "2019",
    //   end: "2021",
    // },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
    
  ],
  projects: [
    {
      title: "MobiSense",
      href: "https://mobile-recommendation-system.onrender.com/",
      dates: " March 2024 - April 2024",
      active: true,
      description:
        "With just a few clicks, simply select your preferred price range, favorite brand, and desired storage capacity, and let our intelligent system do the rest. Instantly, you'll receive a curated list of top recommendations, handpicked to match your specifications.",
      technologies: [
        "Django",
        "HTML",
        "CSS",
        "Javascript",
        "Python",
        "Render",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://mobile-recommendation-system.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shadowsweep/mobile_recommendation_system",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "linkedin",
          href: "https://www.linkedin.com/posts/utkarsh-gupta-shadowsweep_exciting-news-introducing-mobisense-activity-7189572960960036864-27lz?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
        
      ],
      image: "/mobi.png",
      video:
        "",
    },
    {
      title: "Marvelverse",
      href: "https://magicui.design",
      dates: "May 2024 - Present",
      active: true,
      description:
        " Created a website showcasing Marvel characters with cool images, highlighting their strengths and human abilities. You can also go to the fight arena and see which hero wins in epic battles!",
      technologies: [
        "Django",
        "HTML",
        "CSS",
        "Javascript",
        "Python",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://marvel-char.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shadowsweep/Marvel_public",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "linkedin",
          href: "https://www.linkedin.com/posts/utkarsh-gupta-shadowsweep_marvel-mcu-ironman-activity-7197864978278711296-oBJk?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/marvel.png",
      video: "",
    },
    {
      title: "Automailapp",
      href: "https://www.linkedin.com/posts/utkarsh-gupta-shadowsweep_this-is-the-final-preview-of-my-automail-activity-7119208215501770752-LQNT?utm_source=share&utm_medium=member_desktop",
      dates: "August 2023 - September 2023",
      active: true,
      description:
        "This Email System is Dedicated for freshers and students who sent mail to companies applying for job In this project You have to just fill some Details in The form and You are Set to go .",
      technologies: [
        "Django",
        "HTML",
        "CSS",
        "Javascript",
        "Python",
        "Render",
        "Bootstrap",
        "PostgreSQL",
      ],
      links: [
        
        {
          type: "Linkedin",
          href: "https://www.linkedin.com/posts/utkarsh-gupta-shadowsweep_this-is-the-final-preview-of-my-automail-activity-7119208215501770752-LQNT?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/Automail.png",
      video: "",
    },
    {
      title: "MedAssist",
      href: "https://automatic.chat",
      dates: "September 2023 - February 2024",
      active: true,
      description:
        "Contributed in the development of a Medical Assistance Platform using Django and React, enabling seamless doctor-patient communication and personalized prescriptions with real-time updates, reducing prescription generation time by 50%.",
      technologies: [
        "Django",
        "React JS",
        "MUI",
        "Tailwind CSS",
        "Javascript",
        "Python",
        "MySQL",

      ],
      links: [
        {
          type: "Linkedin",
          href: "https://www.linkedin.com/posts/utkarsh-gupta-shadowsweep_medassistproject-react-djangorestframework-activity-7133156947406508032-lRnY?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/medassist.png",
      video:
        "",
    },
  ],
  hackathons: [
    
    {
      title: "SEND - O - QR",
      dates: "",
      location: "",
      description:
        "With SEND-O-QR, you can effortlessly generate various types of QR codes tailored to your needs. Whether it's for business cards, events, or promotions, we've got you covered! 📊",
      image:
        "/tech.jpg",
      win: "",
      mlh: "",
      links: [
        
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Shadowsweep/SendoQR/tree/master",
        },
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/utkarsh-gupta-shadowsweep_sendabroabrqr-qrcodegenerator-innovation-activity-7186772325499879424-lv_T?utm_source=share&utm_medium=member_desktop",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/9cEmHtezYVA?si=Ydn8eE9zwRBArLWL",
        },
      ],
    },
    {
      title: "Tech Yt",
      dates: "",
      location: "",
      description:
        "Hey there, everyone! I'm thrilled to share my latest project with you all – I've created a YouTube-like clone called Techyt . How I Did It: I learned how to build Techyt through online tutorials and resources. It was an incredible journey of coding and testing, but the end result was totally worth it! ",
      image:
        "/tech.jpg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lambent-salamander-48ba6c.netlify.app/",
        },
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/utkarsh-gupta-shadowsweep_techyt-youtubeclone-webdevelopment-activity-7126596418445729792-u7ul?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Car Rental Project ",
      dates: "",
      location: "",
      description:
        "Played a key role in a Car Rental Full Stack Project, enabling customers to purchase vehicles based on preferences and pay exclusively for the duration of usage, boosting customer satisfaction by 30%. ",
      image:
        "/tech.jpg",
      mlh: "",
      links: [
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/utkarsh-gupta-shadowsweep_codingjourney-webdevelopment-django-activity-7143125683207131136-F2AP?utm_source=share&utm_medium=member_desktop",
        },
       
      ],
    },
    
    {
      title: "Whatsapp Message maker",
      dates: "",
      location: "",
      description:
        "AutoWhatsappMessageSender leverages the Django REST API framework to create a seamless interaction between your applications and WhatsApp. You can schedule messages, personalize content, and reach your audience with precision.",
      image:
        "/tech.jpg",
      mlh: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Shadowsweep/Django_Message_sender",
        },
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/utkarsh-gupta-shadowsweep_autowhatsappsender-djangorestapi-automation-activity-7097929018095628289-B6c4?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Frontend Design Page",
      dates: "",
      location: "",
      description:
        "Developed a Front - End responsive design for practice",
      image:
        "/tech.jpg",
      win: "r",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Shadowsweep/project_vercel",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://project-vercel-git-main-shadowsweep.vercel.app/",
        },
      ],
    },
    {
      title: "Library management System",
      dates: "",
      location: "",
      description:
        "Made to save records in library ",
      image:
        "/tech.jpg",
      links: [
        {
          title: "View video",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1DBir6yrxU6B18SgYyefjewi2C3Y_2s8O/view?usp=sharing",
        },
      ],
    },
    {
      title: "Space Invaders",
      dates: "",
      location: "",
      description:
        "Developed a game uisng Python and pygame library",
      image:
        "/tech.jpg",
      win: "",
      links: [
        {
          title: "View video",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1DBir6yrxU6B18SgYyefjewi2C3Y_2s8O/view?usp=sharing",
        },
        
      ],
    },
   
    {
      title: "Food Record Saver App",
      dates: "",
      location: "",
      description: "",
      image:
        "/tech.jpg",
      win: "",
      links: [
        {
          title: "View Video",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1c-kfSqR5fEPbcS0E8k7oQFoS2iNcogE7/view",
        },
      ],
    },

    {
      title: "Cyber Security Certificate",
      dates: "March 19,2024",
      location: "",
      description: "",
      image:
        "/google1.png",
      win: "",
      links: [
        {
          title: "View certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.coursera.org/account/accomplishments/professional-cert/VWNXKKCWXKWP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
        },
      ],
    },

    {
      title: "•	Career Essentials in Cybersecurity by Microsoft and LinkedIn",
      dates: "",
      location: "",
      description: "",
      image:
        "/microsoft.png",
      win: "",
      links: [
        {
          title: "View Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/learning/certificates/15e2cb3c771c6540acbdb4fe696b35be906f96775e2a3e49093739396edb46bf",
        },
      ],
    },
   
  ],
} as const;
