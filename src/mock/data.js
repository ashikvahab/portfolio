import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ashiq',
  subtitle: 'Welcome to my portfolio',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: 'I am a Graduate student in Computer Science at the University of Cincinnati.',
  paragraphTwo:
    'Experienced React developer. Language agnostic with most expertise in C++, Python, JavaScript.',
  paragraphThree: 'Very strong in data structures and algorithms',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project1.png',
    title: 'Sorting Visualizer',
    info:
      'Built React application for visualizing sorting algorithms in a very pleasing way. Implemented Merge sort, Quick sort, Heap sort and Bubble sort. Sorting algorithm doing the heavy lifting was written in javascript. Animation done by a combination of HTML, CSS and JSX (react). The sorting is repeated with each CSS element in JSX.',
    info2: 'Technology: Git, HTML 5, CSS3, Flexbox, Ecmascript, Javascript, React',
    url: 'https://sortingvisualizerr.herokuapp.com/',
    repo: 'https://github.com/ashikvahab/Sorting-Visualizer.git', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project4.png',
    title: 'Pathfinding Visualizer',
    info:
      'Built React application for visualizing path-finding algorithms. Visualized Dijkstra’s with JavaScript for the logic, CSS and JSX for the animation',
    info2: 'Git, HTML 5, CSS 3, Flexbox, Ecmascript, Javascript, React',
    url: 'https://pathfindingvisualizer.herokuapp.com/',
    repo: 'https://github.com/ashikvahab/Pathfinding_Visualizer', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'rsa.png',
    title: 'RSA Cryptosystem in C++',
    info:
      'Implemented RSA (Rivest-Shamir–Adleman) cryptosystem in C++. Used Miller-Rabin Primality Test for checking primality. Implemented Euclid’s Greatest Common Divisor algorithm, modular multiplicative inverse and modular multiplication. Used Unicode for padding and RSA algorithm for the encryption and decryption part of the project',
    info2: 'Technology: C++',
    url: '',
    repo: 'https://github.com/ashikvahab/RSA_cryptosystem', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ashik.w@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ashiqwahab/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/ashikvahab',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
