var keyapid ='154dc2583c4b4c5100af5ea57b3694b7';
var baselink='https://api.themoviedb.org/3';
var baseimgmin='https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
var baseimgmax='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces';





 




function infofilmd(){


var idf=sessionStorage.getItem("idfilm");




let urlf=baselink+"/movie/"+idf+"?api_key="+keyapid+"&language=en-US";
    fetch(urlf)
    .then((response) => response.json())
    .then((data) => {
       
        console.log(data)
       let film = "";

       document.getElementById("lfilm").innerHTML = " ";
       film +`  <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-text">
            <h1>${data['original_title']}</h1>
          </span>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <img src="${data['poster_path']}" alt="${data['original_title']}" />
          </div>
          <div class="col-8">

            <span>Release date :</span><strong>${data['release_date']}</strong>
            <span>genres :</span><strong>${data['genres']}</strong>

            <span>production_companies :</span><strong>${data['production_companies']}</strong>
          </div>
        </div>

      </div>
`

document.getElementById("lfilm").innerHTML +=film;
    })


}






