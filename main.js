let homeButton = document.getElementById('homeButton');
let projectsButton = document.getElementById('projectsButton');
let landingPage = document.getElementById("landingPage");
let projects = ['<div class="projectContainer"><div><img src="./projectPictures/PacMan1.png" class="projectPicture"></div><div class="projectTitle">Pac Man Exercise</div><div class="projectDescr">You can make as many Pac Men as you want and then deploy them across your screen. When they hit a boundary they turn around.</div><div><a class="linkButton" href="https://keith-howard.github.io/PacMan/">Read Me</a><a class="linkButton" href="https://github.com/Keith-Howard/PacMan.git">Code Repo</a></div></div>', 
                '<div class="projectContainer"><div><img src="./projectPictures/eyes.JPG" class="projectPicture"></div><div class="projectTitle">Eyes Exercise</div><div class="projectDescr">When you move your mouse across the screen the eyes follow your cursor.</div><div><a class="linkButton"href="https://keith-howard.github.io/Eyes/">Read Me</a><a class="linkButton" href="https://github.com/Keith-Howard/Eyes.git">Code Repo</a></div></div>',
                '<div class="projectContainer"><div><img src="./projectPictures/bostonMapScreenshot.jpg" class="projectPicture"></div><div class="projectTitle">Real Bus Tracker Exercise</div><div class="projectDescr">When given a longitude and lattitude in the city of Boston the program plots bus stops on a map in a mile radius from the given location.</div><div><a class="linkButton" href="https://keith-howard.github.io/Real-Time-Bus-Tracker/">Read Me</a><a class="linkButton" href="https://github.com/Keith-Howard/Real-Time-Bus-Tracker.git">Code Repo</a></div></div>']

let landingPageString = 
`<h1>Keith Howard's Portfolio</h1>
<div class="container2">
    <div id="profilePic" class="item1"><img src="githubpicture.jpeg"/></div>
    <div class="item2"><p class="normalText bio">Currently I am a project specialist for an electrical manufacturing company. Specializing in data center
        hardware. I have a bachelors degreed in Communications from Western Connecticut State University and an
        associates degree in Graphic Design from Pratt Institute. I am currently enrolled in MIT XPRO's Professional
        Certificate in Coding: Full Stack Development with MERN. This site is to preview work I have done while 
        I am enrolled. I am based out of Long Island NY.</p></div>
    <div class="contactContainer">
        <div class="item3"><p class="normalText">Email: Keithwhoward88@gmail.com</p></div>
        <div><a class="linkedIn linkButton" href="https://www.linkedin.com/in/keith-howard-2a55a455/">My Linkedin</a></div>
    </div>
    <div class="item4"><p>Youtube</p></div>
</div>`

homeButton.addEventListener("click", getLandingPage);
projectsButton.addEventListener("click", getProjectsPage);

function deleteDefaultTitle() {
    let titlesToRemove = document.getElementsByTagName("h1");
    for (let i = 0; i < titlesToRemove.length; i++) {
        let anchorTagList = titlesToRemove[i].getElementsByTagName("a");
        if (anchorTagList[i].origin === 'https://keith-howard.github.io') {
            titlesToRemove[i].remove();
        }
    }
}

function getLandingPage() {
    landingPage.innerHTML = landingPageString
}

function getProjectsPage() {
    htmlString = ""
    let projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('class', 'container2');
    let projectsHeading = document.createElement('div');
    for (let i = 0; i < projects.length; i++) {
        htmlString = htmlString + projects[i];
    }
    projectsHeading.innerHTML = "<h1>Keith Howard's Projects</h1>";
    projectsContainer.innerHTML = htmlString;
    landingPage.innerHTML = '';
    landingPage.appendChild(projectsHeading);
    landingPage.appendChild(projectsContainer);
}
deleteDefaultTitle();
getLandingPage()