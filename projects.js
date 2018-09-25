const projects = [
    {
        title: "Language Translator", 
        screenshot: "./imgs/lang-translator.PNG", 
        alt: "Language Translator Screenshot",
        description: "A simple translator using JS objects and for loops to take a limited number of entries and print the translation to the DOM",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "", 
        githubUrl: "https://github.com/Waysidetester/language-translator"
    },
    {
        title: "Sorting Hat", 
        screenshot: "https://github.com/Waysidetester/sorting-hat/blob/master/Snapshot.PNG?raw=true", 
        alt: "Sorting Hat Screenshot",
        description: "A simple RNG funtion to place pseudo students into fictional Harry Potter house names with conditional Bootstrap styling",
        technologiesUsed: "HTML, Vanilla JavaScript, Bootstrap, Version Control with Github",
        available: true,
        url: "", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/Waysidetester/sorting-hat"
    }
];

const printToDom = (stringToPrint, divID) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += stringToPrint;
};

const createProjectCards = () => {
    let newCard = '';
    for (i = 0; i < projects.length; i++) {
        if (projects[i].available) {
            newCard = ''; // empties newCard for new text
            newCard += `<section class="projectCard">`;
            newCard +=      `<h4 class="projectTitle">${projects[i].title}</h4>`;
            newCard +=      `<a class="screenShot" href="${projects[i].url}"><img src="${projects[i].screenshot}" alt="${projects[i].alt}"/></a>`;
            newCard +=      `<p class="projectDescription">${projects[i].description}</p>`;
            newCard +=      `<p class="projectTechUsed">${projects[i].technologiesUsed}</p>`;
            newCard +=      `<a href="${projects[i].githubUrl}">Github Repository</a>`;
            newCard += `</section>`;
        } else {
            newCard = '';
        }
    printToDom(newCard, "projectsPage");
    }
};

createProjectCards();