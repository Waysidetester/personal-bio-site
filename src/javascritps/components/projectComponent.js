import $ from 'jquery';
import projectData from '../data/projectData';

const createProjectCards = (projects) => {
  let newCard = '';
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].available) {
      newCard = ''; // empties newCard for new text
      newCard += `<section class='card'>
        <h4 class='card-title'>${projects[i].title}</h4>
        <a href='${projects[i].url}'><img class='card-img-top' src='${projects[i].screenshot}' alt='${projects[i].alt}'/></a>
        <p class='card-text'>${projects[i].description}</p>
        <p class='card-text'>${projects[i].technologiesUsed}</p>
        <a class='card-text' href='${projects[i].githubUrl}'>Github Repository</a>
        </section>`;
    } else {
      newCard = '';
    }
    $('#projectsPage').append(newCard);
  }
};

const projectInit = () => {
  projectData.projectsAjax()
    .then((data) => {
      createProjectCards(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { projectInit };
