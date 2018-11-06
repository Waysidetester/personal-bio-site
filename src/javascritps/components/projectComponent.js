import $ from 'jquery';
import projectData from '../data/projectData';

const createProjectCards = (projects) => {
  let newCard = '';
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].available) {
      newCard = ''; // empties newCard for new text
      newCard += `<div class='card m-2'>
          <div class="m-4">
            <h4 class='card-title'>${projects[i].title}</h4>
            <a href='${projects[i].githubUrl}' target="_blank">
              <img class='card-img-top' src='${projects[i].screenshot}' alt='${projects[i].alt}'/>
            </a>
            <p class='card-text'>${projects[i].description}</p>
            <p class='card-text'>${projects[i].technologiesUsed}</p>
            <a class='card-text' href='${projects[i].githubUrl}' target="_blank">Github Repository</a>
          </div>
        </div>`;
    } else {
      newCard = '';
    }
    $('#projectsPage').append(newCard);
  }
};

const projectInit = () => {
  projectData.projectsAxios()
    .then((data) => {
      createProjectCards(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { projectInit };
