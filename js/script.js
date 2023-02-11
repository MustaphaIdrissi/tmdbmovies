var keyapid = '154dc2583c4b4c5100af5ea57b3694b7';
var baselink = 'https://api.themoviedb.org/3';
var baseimgmin = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
var baseimgmax = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces';
const datgen=new Array();

const region=window.navigator.language;



function serarchgeners(typegen){

 

  let urlfd = baselink + "/discover/movie?api_key=" + keyapid +"&language=en-US&with_watch_monetization_types="+typegen;

  fetch(urlfd)
      .then((response) => response.json())
      .then((datdah) => {


       
   
var dt=JSON.stringify(datdah.results);
     
        sessionStorage.setItem('serchg',dt );

      
window.location.href="serarch.html";
   
      })

  
 

}   

function infofilm(idfil) {


    sessionStorage.setItem('idfilm', idfil);

    window.location.href = 'film.html';



}


function percentageRating(rating) {
    return Math.ceil(rating *10);
  }
function timeConvert(runtime) {
    var hours = Math.floor(runtime / 60);
    var minutes = runtime % 60;
    return hours + "h" + minutes+ "m";
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
            
            document.getElementById("lfilm").innerHTML = " ";
            ffd += `  
            <div class="card text-bg-dark p-0 m-0" style="    height: 450px;">
              <div class="bgcover"> </div>
              <img src="${baseimgmax + data['poster_path']}"
                class="card-img h-100 " alt="${data['original_title']}">
              <div class="card-img-overlay info ">
                <div class="row p-1">
                  <div class="col-3">
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
                  <div class="col-8 text-align-left lh-lg">
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
                    <div>
                      <span>User Score</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${percentageRating(data['vote_average'])}%;" aria-valuenow="${percentageRating(data['vote_average'])}%"
                          aria-valuemin="0" aria-valuemax="100">${percentageRating(data['vote_average'])}%</div>
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
            creditsfilmd();
        })


}
function creditsfilmd() {


    var idf = sessionStorage.getItem("idfilm");




    let urlac = baselink + "/movie/" + idf + "/credits?api_key=" + keyapid + "&language=en-US";
    fetch(urlac)
        .then((response) => response.json())
        .then((datac) => {

            
        let actfilm="";
            let i=0;
            document.getElementById("actfilm").innerHTML = " ";
            for (act of datac.cast) {
                if(i<29 && act['profile_path'] != null){
                  i=i+1;
                  actfilm += `  
                  <div class="col-1 text-center card me-3 mt-1 p-0">
                  <img class=" w-100" src="${baseimgmin +act['profile_path']}"
                    alt="${act['original_name']}">
                  <div>
                    <h6>${act['original_name']}</h6>
                  </div>
                </div>
          
          
          `
                }}

            document.getElementById("actfilm").innerHTML += actfilm;
        })


}





function indextop() {
    let urlf = baselink + "/movie/popular?api_key=" + keyapid + "&language=en-US";
    fetch(urlf)
        .then((response) => response.json())
        .then((responser) => {








     

            let film = "";

            document.getElementById("lafiche").innerHTML = " ";

            for (dt1 of responser.results) {

           

              const cars = [];
              cars['id']= dt1['id'];
              cars['poster']= dt1['poster_path'];
              cars['titre']= dt1['original_title'];
              cars['genr']=dt1['genres'];


              datgen.push(cars);
             
            
                film += `
            <div class="card  col-md-2 col-sm-4   m-2 p-0" style="border-radius: 22px;overflow: hidden;">
            <a onclick="infofilm('${dt1['id']}')" >
            <div class="hoverimg">
            </div></a>
            <img class="card-body p-0" src="${baseimgmin + dt1['poster_path']}" alt="${dt1['original_title']}"/>
            
            <div class="card-footer p-0">
            <h6>${dt1['original_title']}</h6>
            </div>
            </div>`





            };

            document.getElementById("lafiche").innerHTML += film;

        }
        )

}

listgeners();
function listgeners(){


let urlg=  baselink + "/genre/movie/list?api_key=" + keyapid + "&language=en-US";
fetch(urlg)
.then((response) => response.json())
.then((responset) => {

  let gene = "";
 
       document.getElementById("listAZ").innerHTML = " ";
        for (dtg of responset.genres) {

          
            gene += `
                    <li class='list-group-item bg-dark'><a class="list-group-item list-group-item-action" onclick="serarchgeners('${dtg["name"]}')" >${dtg["name"]}</a></li>`
        };

document.getElementById("listAZ").innerHTML += gene ;
}
)

}
