

const projects = [
  {
    id: 1,
    name: "Market-Place",
    technologies: "MERN Stack",
    image: '/market2.PNG',
    github: "https://github.com/yeasinarafat51/marketplace",
    client: "https://marketplace-ten-phi.vercel.app/"
  },
  {
    id: 2,
    name: "Leptop-Resale",
    technologies: "MERN Stack",
    image: '/lapto2.PNG',
    github: "https://github.com/yeasinarafat51/Laptop-resale-marker-ripo",
    client: "https://66aa7cfb3c8aca07d40c5292--leptop-resale.netlify.app/"
  },
  {
    id: 3,
    name: "Food-Service",
    technologies: "MERN Stack",
    image: '/food.PNG',
    github: "https://github.com/yeasinarafat51/Food-service-ripo",
     client: "https://food-service-6ae57.web.app/"

  },
  {
    id: 4,
    name: "Resturant",
    technologies: "Frontend",
    image: '/resturant.PNG',
    github: "https://github.com/yeasinarafat51/resturant",
     client: "https://resturant-eight-sandy.vercel.app/"

  },
  {
    id: 5,
    name: "Disastears",
    technologies: "Frontend",
    image: '/cyper.PNG',
    github: "https://github.com/yeasinarafat51/cyper-tailwind",
     client: "https://cyper-tailwind.vercel.app/"

  },
  {
    id: 6,
    name: "File-Submit",
    technologies: "Frontend",
    image: '/task.PNG',
    github: "https://github.com/yeasinarafat51/task-seo",
     client: "https://task-seo.vercel.app/"

  },
  {
    id: 7,
    name: "Wizia",
    technologies: "Frontend",
    image: '/wiz.PNG',
    github: "https://github.com/yeasinarafat51/wizia",
     client: "https://wizia-three.vercel.app/"

  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-between items-center">
              <a href={project.client} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
              <a href={project.client} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">Live-Link</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
