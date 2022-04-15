<head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-    1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <style>
                #landingGrid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-templat-rows: 1fr 1fr;
                }
                img {
                border-radius: 40%;
                }
        </style>
</head>
<body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="https://github.com/Keith-Howard">Keith Howard</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <!--<a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                  <a class="nav-link" href="./projects.html">Projects</a>-->
                  <button type= "button" class="nav-link active" aria-current="page" onClick="getLandingPage()">Home</button>
                  <button type= "button" class="nav-link" onClick="getProjectsPage()">Projects</button>
                </div>
              </div>
            </div>
        </nav>
  <div id="landingGrid">
          <img src="githubpicture.jpeg"/>
          <p>Keith is learning web development</p>
  </div>
  <div id="contactInfo">
          <footer>
                  <p>Email: Keithwhoward88@gmail.com</p>
          </footer>
  </div>
  <!--<script>
          let landingGrid = document.getElementById('landingGrid');
          
          function getLandingPage() {
          landingGrid.innerHTML = '<img src="githubpicture.jpeg"/>
                                   <p>Keith is learning web development</p>';
          }
          
          function getProjectsPage() {
          let p = document.createElement('p');
          p.innerHTML = 'Projects Page';
          landingGrid.innerHTML = '';
          landingGrid.appendChild(p);
          }
  </script>-->
</body>
