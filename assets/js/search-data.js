// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-i-attended-the-2024-trb-annual-meeting",
          title: '👏 I attended the 2024 TRB Annual Meeting!.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/I-attended-the-2024-TRB-Annual-Meeting!/";
            },},{id: "news-i-graduated-from-bjut",
          title: '👏 I graduated from BJUT.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/I-graduated-from-BJUT!/";
            },},{id: "news-i-joined-purdue",
          title: '👏 I joined Purdue.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/I-joined-Purdue!/";
            },},{id: "news-i-attended-the-2025-trb-annual-meeting",
          title: '👏 I attended the 2025 TRB Annual Meeting!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/I-attended-the-2025-TRB-Annual-Meeting!/";
            },},{id: "news-i-visited-google",
          title: '👏 I visited Google!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/I-visited-Google!/";
            },},{id: "news-i-attended-the-11th-midwest-workshop-on-control-and-game-theory-mwcgt-in-uiuc",
          title: '👏 I attended the 11th Midwest Workshop on Control and Game Theory (MWCGT)...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/I-attended-the-11th-Midwest-Workshop-on-Control-and-Game-Theory-(MWCGT)-in-UIUC!/";
            },},{id: "projects-play-with-simulators",
          title: 'Play with Simulators',
          description: "I have been passionate about traffic simulation for a long time, exploring various simulators ranging from the classical VISSIM during my undergraduate studies to CARLA now as a Ph.D. student. This project aims to document and share insights in leveraging these tools for cutting-edge research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Play-around-with-simulators/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
