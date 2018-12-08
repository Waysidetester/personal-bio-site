import $ from 'jquery';

const bio = $('#navToBio');
const tech = $('#navToTechnologies');
const proj = $('#navToProjects');


const anchorDefault = () => {
  $('a').on('click', (e) => {
    e.preventDefault();
  });
};

const eventalizer = (buttonId, destination) => {
  buttonId.on('click', () => {
    const projectsSpot = $(destination).offset().top - $('nav').height();
    $('body').animate({ scrollTop: projectsSpot }, 1000);
    console.log(projectsSpot);
  });
};

const initScrolls = () => {
  anchorDefault();
  eventalizer(bio, '#bioPage');
  eventalizer(tech, '#tech-container');
  eventalizer(proj, '#projects-container');
};

export default { initScrolls };
