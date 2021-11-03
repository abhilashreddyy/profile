// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Development', 'Languages', "Data Science"],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: [ 'Languages'],
  },
  {
    title: 'Java',
    competency: 2,
    category: ['Languages', "Development"],
  },
  {
    title: 'NodeJS',
    competency: 3,
    category: ["Web Development"],
  },
  {
    title: 'ReactJs',
    competency: 3,
    category: ["Web Development"],
  },
  {
    title: 'Bootstrap',
    competency: 2,
    category: ["Web Development"],
  },
  {
    title: 'JQuery',
    competency: 2,
    category: ["Web Development"],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science'],
  },
  
  {
    title: 'Pytorch',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'Seaborn',
    competency: 3,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Development'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Web Development', 'Databases', "Development"],
  },
  {
    title: 'Github',
    competency: 4,
    category: ["Tools", "Development"],
  },
  {
    title: 'Linux',
    competency: 3,
    category: ["Tools", "Development"],
  },
  {
    title: 'Data Mining',
    competency: 5,
    category: ["Data Engineering"],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ["Data Science","Data Engineering"],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', "Tools"],
  },
  {
    title: 'HTML + SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Julia',
    competency: 2,
    category: ['Languages'],
  },
  
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
