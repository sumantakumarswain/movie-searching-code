var movieNameElement = document.getElementById("movie-name")
 var searchBtn = document.getElementById("search-btn");
var movieSection = $("#movie-section");
var loadingElement = $("#loading")


 searchBtn.addEventListener("click",()=>{
  loadingElement.css({display : "block"})
  $.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${movieNameElement.value}`,(response)=>{
   
    loadingElement.css({display : "none"})
    movieNameElement.value = "";
    movieSection.html("")
    moviesData = response.Search;
    console.log(response)
  if(response.Response == "True"){

    for(var i = 0 ; i <moviesData.length; i++){

movieSection.append(`<div class="movie-wrapper">
<img src="${moviesData[i].Poster}" class="img"/>
<p><b>TITLE :</b>${moviesData[i].Title}</p>
<p><b>YEAR :</b> ${moviesData[i].Year} </p>
</div>`
   ) }
    }else{
      alert("404 MOVIE IS NOT FOUND")
    }
    
   loadingElement.css({display : "none"})
  })
})

 

