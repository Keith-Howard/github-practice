<body>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-      1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <style>
            #landingGrid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr;
                gap: 20px;
            }
            img {
                border-radius: 40%;
                width: 300px;
                height: 300px;
            }
            body {
                background: #EADBB7;
            }
            
            .navbar {
                background-color: ##e3f2fd; 
                border-radius: 5%;
            }
            title {
                color: #060606;
            }
        </style>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://github.com/Keith-Howard">Keith Howard</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-                    expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a id="homeButton" class="nav-link active" aria-current="page" href="#">Home</a>
                        <a id="projectsButton" class="nav-link" href="#">Projects</a>
                    </div>
                </div>
            </div>
        </nav>
        <div id="landingPageGrid">
            <img src="githubpicture.jpeg"/>
            <p>Keith is learning web development</p>
        </div>
        <div id="contactInfo">
            <footer>
                <p>Email: Keithwhoward88@gmail.com</p>
            </footer>
        </div>
        <script language="javascript">
            document.getElementsByTagName("h1").remove();
            let homeButton = document.getElementById("homeButton");
            let projectsButton = document.getElementById("projectsButton");
            let landingGrid = document.getElementById("landingPageGrid");
            
            homeButton.addEventListener("click", getLandingPage);
            projectsButton.addEventListener("click", getProjectsPage);
                
            function getLandingPage() {
                landingGrid.innerHTML = "<img src='githubpicture.jpeg'/><p>Keith is learning web development</p>";
            }
            
            function getProjectsPage() {
                let p = document.createElement("p");
                p.innerHTML = "Projects Page";
                landingGrid.innerHTML = "";
                landingGrid.appendChild(p);
            }
        </script>
</body>
