import './index.scss';
import $ from 'jquery';
import 'bootstrap';

const projects = [
  {
    title: 'Language Translator',
    screenshot: 'https://github.com/Waysidetester/language-translator/blob/master/snapshot.PNG?raw=true',
    alt: 'Language Translator Screenshot',
    description: 'A simple translator using JS objects and for loops to take a limited number of entries and print the translation to the DOM',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: '',
    githubUrl: 'https://github.com/Waysidetester/language-translator',
  },
  {
    title: 'Sorting Hat',
    screenshot: 'https://github.com/Waysidetester/sorting-hat/blob/master/Snapshot.PNG?raw=true',
    alt: 'Sorting Hat Screenshot',
    description: 'A simple RNG funtion to place pseudo students into fictional Harry Potter house names with conditional Bootstrap styling',
    technologiesUsed: 'HTML, Vanilla JavaScript, Bootstrap, Version Control with Github',
    available: true,
    url: '', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/Waysidetester/sorting-hat',
  },
];

const createProjectCards = () => {
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

createProjectCards();
