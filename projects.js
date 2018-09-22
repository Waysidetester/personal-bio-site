const projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        alt: "Cat",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        alt: "Cat again",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
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