<head>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-    1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <style>
            .container {
                position: absolute;
                top: 30%;
                left: 10%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                gap:25px;
            }
            .normalText {
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 20px;
            }
            .bio, .contactContainer {
                background-color:#d4b772;
                border: 1px solid #d4b772;
            }
            .contactContainer {
                height: 100px;
                width: 400px;
            }
            .projectContainer {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr  30px 50px 50px;
                gap:15px;
                width: 650px;
                text-align: center;
            }
            body {
                background: #EADBB7;
            }
            
            .navbar { 
                display: grid;
                grid-template-columns: 200px 200px 200px;
                grid-template-rows: 100px;
                height: 100px;
                justify-content: center;
            }
            .projectPicture {
                width: 250px;
                height: 250px;
            }
            .nav-link {
                font-size: 50px;  
            }
            #githubButton {
                position: absolute;
                top: 2%;
                left: 60%;
            }
            #projectsButton {
                position: absolute;
                top: 0%;
                left:38%;
                font-weight: bold;
                color: black;
            }
            #homeButton {
                position: absolute;
                top: 0%;
                left:20%;
                font-weight: bold;
                color: black;
            }
            h1 {
                position: absolute;
                top: 18%;
                left: 38%;
            }
            .linkButton {
                color: black;
                background-color: lightgray;
                border: 1px solid gray;
                border-radius: 10%;
                font-size: 20px;
                width: 1000px;
                height:500px;
                margin: 5px;
                text-decoration: none;
            }
            .projectTitle, .projectDescr {
                font-size: 20px;
            }
        </style>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-                    expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a id="homeButton" class="nav-link navButton" aria-current="page" href="#">Home</a>
                        <a id="projectsButton" class="nav-link navButton" href="#">Projects</a>
                        <a id="githubButton" class="nav-link navButton" href="https://github.com/Keith-Howard"><img src="./GitHub-Emblem.png" id="githubImage"></a>
                    </div>
                </div>
            </div>
        </nav>
            <div id="landingPage">
                <!--HTML string gets interted in here when pages loads and when Nav Bar buttons are clicked-->
            </div>    
        <script language="javascript">
            let homeButton = document.getElementById('homeButton');
            let projectsButton = document.getElementById('projectsButton');
            let landingPage = document.getElementById("landingPage");
            let projects = ['<div class="projectContainer"><div><img src="./projectPictures/PacMan1.png" class="projectPicture"></div><div class="projectTitle">Pac Man Exercise</div><div class="projectDescr">You can make as many Pac Men as you want and then deploy them across your screen. When they hit a boundary they turn around.</div><div><a class="linkButton"href="https://keith-howard.github.io/PacMan/">Read Me</a><a class="linkButton"href="https://github.com/Keith-Howard/PacMan.git">Code Repo</a></div></div>', 
                            '<div class="projectContainer"><div><img src="./projectPictures/eyes.JPG" class="projectPicture"></div><div class="projectTitle">Eyes Exercise</div><div class="projectDescr">When you move your mouse across the screen the eyes follow your cursor.</div><div><a class="linkButton"href="https://keith-howard.github.io/Eyes/">Read Me</a><a class="linkButton"href="https://github.com/Keith-Howard/Eyes.git">Code Repo</a></div></div>',
                            '<div class="projectContainer"><div><img src="./projectPictures/bostonMapScreenshot.jpg" class="projectPicture"></div><div class="projectTitle">Real Bus Tracker Exercise</div><div class="projectDescr">When given a longitude and lattitude in the city of Boston the program plots bus stops on a map in a mile radius from the given location.</div><div><a class="linkButton"href="https://keith-howard.github.io/Real-Time-Bus-Tracker/">Read Me</a><a class="linkButton"https://github.com/Keith-Howard/Real-Time-Bus-Tracker.git">Code Repo</a></div></div>']

            let landingPageString = 
            `<h1>Keith Howard's Portfolio</h1>
                <div class="container">
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
                projectsContainer.setAttribute('class', 'container');
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
        </script>
    </body>
