var keyapid = '154dc2583c4b4c5100af5ea57b3694b7';
var baselink = 'https://api.themoviedb.org/3';
var baseimgmin = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
var baseimgmax = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces';
var datgen = new Array();
var film = "";
var datgent = [];
var datdah = [];
const region = window.navigator.language;

function datamo() {



}
function serarchgeners(typegen) {

  sessionStorage.setItem("idser", typegen);
  window.location.href = "serarch.html";



}

function infofilm(idfil) {


  sessionStorage.setItem('idfilm', idfil);

  window.location.href = 'film.html';



}


function percentageRating(rating) {


  return Math.ceil(rating * 10);
}



function timeConvert(runtime) {
  var hours = Math.floor(runtime / 60);
  var minutes = runtime % 60;
  return hours + "h" + minutes + "m";
}




function infofilmd() {


  var idf = sessionStorage.getItem("idfilm");




  let urlf = baselink + "/movie/" + idf + "?api_key=" + keyapid + "&language=en-US";
  fetch(urlf)
    .then((response) => response.json())
    .then((data) => {


      let ffd = "";
      let gens = "";



      for (gene of data['genres']) {
        gens += `<a href="#">${gene['name']}</a>`
      }

      document.getElementById("lfilm").innerHTML = "";
      ffd += `  
            <div class="card text-bg-dark p-0 m-0" style="    height: 450px;">
              <div class="bgcover"> </div>
              <img src="${baseimgmax + data['poster_path']}"
                class="card-img h-100 " alt="${data['original_title']}">
              <div class="card-img-overlay info ">
                <div class="row p-1">
                  <div class="col-md-3 mobine">
                    <div class="poster">
    
                      <img src="${baseimgmin + data['poster_path']}" class="imposter h-100"
                        alt="${data['original_title']}">
                      <div class="zoom">
                        <a href="#" class="no_click"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16">
                            <path
                              d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
                          </svg> Expand</a>
                      </div>
                    </div>
    
                  </div>
                  <div class="col-md-8 col-sm-12  mobinet text-align-left lh-lg">
                    <h2 class="card-title text-capitalize">${data['original_title']}</h2>
                    <div class="fact">
                      <span class="certification"><small>${data['original_language']}</small></span>
                      <span class="release"><small>${data['release_date']}</small></span>
                      <span class="genes"><small>
                      ${gens}
                      
                      </small></span>
                     
                        <span class="dure"><small>${timeConvert(data['runtime'])} 
                      
                      </small></span>
                    </div>
                    <div class="rating">
                      <span>User Score</span>
                
                              
   
                      <div class="circular-progress">
                      <div class="value-container">0%</div>
                    </div>

                     
                    </div>
                    <div class="Overview"><span>Overview</span>
                      <p class="card-text">${data['overview']}</p>
                    </div>
                    
    
    
                  </div>
    
                </div>
    
              </div>
            </div>
    
    
    
    `


      document.getElementById("lfilm").innerHTML += ffd;
      let progressBar = document.querySelector(".circular-progress");
      let valueContainer = document.querySelector(".value-container");

      let progressValue = 0;
      let progressEndValue = parseFloat(percentageRating(data['vote_average']));
      let speed = 50;

      let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
                  #4d5bf9 ${progressValue * 3.6}deg,
                  #cadcff ${progressValue * 3.6}deg
              )`;
        if (progressValue == progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
      creditsfilmd();
    })

  vedoifilm();
}
function creditsfilmd() {


  var idf = sessionStorage.getItem("idfilm");




  let urlac = baselink + "/movie/" + idf + "/credits?api_key=" + keyapid + "&language=en-US&Limit=10";
  fetch(urlac)
    .then((response) => response.json())
    .then((datac) => {


      let actfilm = "";
      let i = 0;
      document.getElementById("actfilm").innerHTML = " ";
      for (act of datac.cast) {
        if (i < 29 && act['profile_path'] != null) {
          i = i + 1;
          actfilm += `  
                  <div class="col-1 text-center card me-3 mt-1 p-0">
                  <img class=" w-100" src="${baseimgmin + act['profile_path']}"
                    alt="${act['original_name']}">
                  <div>
                    <h6>${act['original_name']}</h6>
                  </div>
                </div>
          
          
          `
        }
      }

      document.getElementById("actfilm").innerHTML += actfilm;
    })


}

function vedoifilm() {
  var idf = sessionStorage.getItem("idfilm");
  const urlv = baselink + "/movie/" + idf + "/videos?api_key=" + keyapid + "&language=en-US";

  document.getElementById("vedio").innerHTML += "";
  let i = 0;
  let ved = "";
  fetch(urlv)
    .then((response) => response.json())
    .then((datacv) => {





      for (vre of datacv.results) {
        if (i < 1) {
          i++;
          ved += `<iframe class="videotr" src="https://www.youtube.com/embed/${vre['key']}" title="" frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`}

      }

      document.getElementById("vedio").innerHTML += ved;
    })


}



function indextop() {
  let urlf = baselink + "/movie/popular?api_key=" + keyapid + "&language=en-US";
  fetch(urlf)
    .then((response) => response.json())
    .then((responser) => {










      var cars = [];
      document.getElementById("lafiche").innerHTML = " ";

      for (dt1 of responser.results) {




        cars['id'] = dt1['id'];
        cars['poster'] = dt1['poster_path'];
        cars['titre'] = dt1['original_title'];
        cars['genr'] = dt1['genre_ids'];


        datgen.push(dt1);
        //  console.log(datgen);
        var yu = JSON.stringify(dt1);
        sessionStorage.setItem('topfil', yu);

        film += `
            <div class="card   col-md-2 col-sm-2   m-2 p-0" style="border-radius: 22px;overflow: hidden;">
            <a onclick="infofilm('${dt1['id']}')" >
            <div class="hoverimg ">
            <div class="  titrpos p-0">
            <h6>${dt1['original_title']}</h6>
            </div>
           
            </div></a>
            <img class="card-body p-0" src="${baseimgmin + dt1['poster_path']}" alt="${dt1['original_title']}"/>
            
       
            </div>`





      };

      document.getElementById("lafiche").innerHTML += film;

    }
    )

}

listgeners();
function listgeners() {


  let urlg = baselink + "/genre/movie/list?api_key=" + keyapid + "&language=en-US";
  fetch(urlg)
    .then((response) => response.json())
    .then((responset) => {

      let gene = "";

      document.getElementById("listAZ").innerHTML = " ";
      for (dtg of responset.genres) {


        gene += `
            <span class="item1 col-2 text-uppercase fw-bold ">
            <a class="list-group-item list-group-item-action bg-dark nav-link fs-6"  onclick="serarchgeners('${dtg["id"]}')">
            ${dtg["name"]}</a>
            </span>
                 `
      };

      document.getElementById("listAZ").innerHTML += gene;

    }
    )

}
function serinfo() {


  let film = '';
  document.getElementById("lafichee").innerHTML = " ";
  let idfsg = JSON.parse(sessionStorage.getItem("idser"));





  let urlf = baselink + "/movie/popular?api_key=" + keyapid + "&language=en-US";
  fetch(urlf)
    .then((response) => response.json())
    .then((responserr) => {




        responserr.results.forEach(eldfs => {


          for (let i = 0; i < eldfs['genre_ids'].length; i++) {
            if (eldfs['genre_ids'][i] == idfsg) {
              film += `
                <div class="card  col-md-2 col-sm-4   m-2 p-0" style="border-radius: 22px;overflow: hidden;">
                   <a onclick="infofilm('${eldfs['id']}')" >
                   <div class="hoverimg">
                  </div></a>
                  <img class="card-body p-0" src="${baseimgmin + eldfs['poster_path']}" alt="${eldfs['original_title']}"/>
                  
                  <div class="card-footer p-0">
                  <h6>${eldfs['original_title']}</h6>
                  </div>
                  </div>`

            }
          }




        });

      
if( film!=""){
        document.getElementById("lafichee").innerHTML = film;
      }else{

        document.getElementById("lafichee").innerHTML = "ne pas";
      }
    });





}





