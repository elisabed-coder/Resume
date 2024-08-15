import Project1 from "../../assets/project-1-multi-step-form.jpg";
import Project2 from "../../assets/project-2-task-managment.png";
import Project3 from "../../assets/project-3-honey-movies.png";

export const Projects = [
  {
    id: 1,
    img: Project1,
    category: "Functional",
    title: "Multi Step Form",
    description:
      "Multistep Form Application , where users can: Complete each step of the sequence, Go back to a previous step to update their selections, See a summary of their selections on the final step and confirm their order",
    link: "https://registration-multistepform.vercel.app/",
  },
  {
    id: 2,
    img: Project2,
    category: "UX design",
    title: "Task Managment",
    description:
      "This Project has 3 section: Posts, Album and to-dos Posts: using Json placeholder api to get posts, user also can create, update, delete Post and comments. Albums: using Json placehodler api to get data. Todos: user can change status of toDo.",
    link: "https://task-managment-9sfr.onrender.com",
  },
  {
    id: 3,
    img: Project3,
    category: "UX design",
    title: "Honey Movies",
    description:
      "Honey movies web app, using omdbapi.com , user can search movies",
    link: "https://honey-movies-mu.vercel.app",
  },
];

export default Projects;
