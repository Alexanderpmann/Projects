import {
    backend,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    python,
    java,
    vscode,
    flask,
    mysql,
    api_walker,
    pokemon_api,
    am_photography,
    antonetti,
    eaker,
    alex,
    raspberry_pi,
    adobe,
    coding_dojo,
    dealeron,
    lee_property,
    web_partners,
    web_developer,
    frontend,
    photography,
} from "../assets";

export const navLinks = [
{
    id: "about",
    title: "About",
},
{
    id: "work",
    title: "Work",
},

{
    id: "contact",
    title: "Contact",
},
];

const services = [
{
    title: "Web Developer",
    icon: web_developer,
},
{
    title: "Front-End Developer",
    icon: frontend,
},
{
    title: "Back-end Developer",
    icon: backend,
},
{
    title: "Photography",
    icon: photography,
},
];

const technologies = [
{
    name: "HTML 5",
    icon: html,
},
{
    name: "CSS 3",
    icon: css,
},
{
    name: "Tailwind CSS",
    icon: tailwind,
},
{
    name: "React JS",
    icon: reactjs,
},
{
    name: "Node JS",
    icon: nodejs,
},
{
    name: "Three JS",
    icon: threejs,
},
{
    name: "java",
    icon: java,
},
{
    name: "Python",
    icon: python,
},
{
    name: "Flask",
    icon: flask,
},
{
    name: "MySQL",
    icon: mysql,
},
{
    name: "MongoDB",
    icon: mongodb,
},
{
    name: "Git",
    icon: git,
},
{
    name: "VS Code",
    icon: vscode,
},
{
    name: "Adobe",
    icon: adobe,
},
];

const experiences = [
{
    title: "Senior Technical Support II",
    company_name: "DealerOn",
    icon: dealeron,
    iconBg: "#1a2c47",
    date: "Jan 2016 - Jan 2017",
    points: [
    "Sustained a 95% client retention rate by under-promising and over-delivering on client expectations.",
    "Implemented AB Testing for Calls to Action on client sites to optimize client interactions.",
    "Conducted client meetings to problem-solve site KPIs and stay compliant with Toyota, Volkswagen, Mercedes Benz, and BMW.",
    "Managed over 300 client sites using agile ticket creation to provide feedback on current projects, utilizing custom CRM and HTML/CSS/Bootstrap Coding.",
    "Trained over 25 client support staff on de-escalation tactics and CRM boot camps in HTML/CSS/Confluence.",
    ],
},
{
    title: "Web Project Manager",
    company_name: "Web Partners, LLC",
    icon: web_partners,
    iconBg: "#1b2c4d",
    date: "Jan 2017 - Mar 2017",
    points: [
    "Drafted client proposals for 8 sites by delivering key points of interest and site analytics in monthly reports.",
    "Optimized SEO for all content to improve the rank and ease user discovery.",
    "Conceptualized, coded, and launched client websites (HTML, CSS, Umbraco - CURIS CRM).",
    "Developed internal communications structure for start-up by learning and implementing software; Teamwork/Wrike.",
    ],
},
{
    title: "Property Manager",
    company_name: "Lee Property Management, LLC",
    icon: lee_property,
    iconBg: "#13223f",
    date: "Jan 2021 - Dec 2021",
    points: [
    "Managed all property records, including tenant files, financial accounts, and maintenance histories.",
    "Maintained buildings and grounds with regular trash removal, landscaping, and parking lot repairs.",
    "Completed weekly inspection and maintenance checklists.",
    "Saved the company over $10,000 for parking lot maintenance by patching potholes and power washing the properties myself.",
    ],
},
{
    title: "Student",
    company_name: "Coding Dojo Academy",
    icon: coding_dojo,
    iconBg: "#202020",
    date: "Feb 2022 - Aug 2022",
    points: [
    "Developed and maintained web applications using Python, Java, MERN and other related technologies.",
    "Collaborated worldwide with cohorts and instructors via remote; zoom meetings, discord.",
    "Implemented responsive design and ensured cross-browser compatibility.",
    "Participated in code reviews and provided constructive feedback to other developers.",
    ],
},
];

const testimonials = [
{
    testimonial:
    "First and foremost, let me say that I am not an easy client... But Alexander is my go-to guy. If he can't make something happen for me immediately he handles getting it to the next level or department who can without me having to reach out to them myself. I'm pretty sure most of the things that he makes happen for me are not his problem or 'In his job description' but he does them anyway. My work life has been much easier since I started going directly to Alexander versus landing with whoever answered the phone.",
    name: "Blain Eaker",
    designation: "General Manager",
    company: "Oak Ridge Auto Sales",
    image: eaker,
},
{
    testimonial:
    "I had the good luck to work with Alexander on a photo shoot project for my car. His edits to the photos gave the finished images a very professional industrialized look. I always get compliments when I share his photos with others. I've followed Alexander's work and am always impressed by his photographic eye and skill. I recommend Alexander 100% and will likely work with him again in the near future.",
    name: "Alexander J Chaudhry",
    designation: "General Counsel",
    company: "FNC Title Services, LLC",
    image: alex,
},
{
    testimonial:
    "Alexander's creativity, get-it-done work ethic, and knack to get his ideas across quickly and effectively make him the ideal candidate for any position",
    name: "Jorge Antonetti",
    designation: "Software Consultant",
    company: "SharpCloud",
    image: antonetti,
},
];

const projects = [
{
    name: "Pokemon API",
    description:
    "Web-based API app that allows user to search for a shiny pokemon by name or ID or click the drop-down menu to view the pokemon's ID to insert into the search bar. Image generated from search is a sprite from the Pokemon API.",
    tags: [
    {
        name: "Postman",
        color: "blue-text-gradient",
    },
    {
        name: "JavaScript",
        color: "green-text-gradient",
    },
    {
        name: "Bootstrap",
        color: "pink-text-gradient",
    },
    ],
    image: pokemon_api,
    source_code_link: "https://github.com/Alexanderpmann/pokemon-api",
    demo_link: "https://pokemon-api-mauve-beta.vercel.app/",
},
{
    name: "Luke API Walker",
    description:
    "Web application that enables users to search by planet or people IDs based on site metrics under the search bar for either a planet or person of the StarWars Universe.",
    tags: [
    {
        name: "Postman",
        color: "blue-text-gradient",
    },
    {
        name: "JavaScript",
        color: "green-text-gradient",
    },
    {
        name: "Bootstrap",
        color: "pink-text-gradient",
    },
    ],
    image: api_walker,
    source_code_link: "https://github.com/Alexanderpmann/luke-api-walker",
    demo_link: "https://luke-api-walker.vercel.app/",
},
{
    name: "Alexander Mann Photography",
    description:
    "My photography portfolio based on Smugmug and HTML templates with editing.",
    tags: [
    {
        name: "SmugMug",
        color: "blue-text-gradient",
    },
    {
        name: "HTML",
        color: "green-text-gradient",
    },
    {
        name: "CSS",
        color: "pink-text-gradient",
    },
    ],
    image: am_photography,
    source_code_link: "https://github.com/Alexanderpmann",
    demo_link: "https://www.alexandermannphotography.com/",
},
];

export { services, technologies, experiences, testimonials, projects };