//selecting all tags with id

let allEpisodes; //global var


function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  createSelectedEpisodes(allEpisodes);
}
//adding zero for seasons and  episodes under 10...now its global
let twoDigit =(number) => {
  if(number < 10){
    return `0${number}`;
  }else {
    return number;
  }
}

let episodeContainer = document.querySelector("#episode-wrapper");
//showing all episodes
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  episodeContainer.innerHTML = "";  //cleaning the episodes on main page(first cleaning before the loop)
    
  return episodeList.forEach( (episode) => {
    let content = document.createElement("div");
    content.setAttribute("id", "content")

      
     
    
    //creating div for name of episode
    let nameEl = document.createElement("div");
    nameEl.className = "name";
    nameEl.innerHTML = `${episode.name} S${twoDigit(episode.season)} E${twoDigit(episode.number)}`;

    //creating  img 
    let divImg = document.createElement("div")
    divImg.className = "img-class";
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", episode.image.medium);
   
    //creating p for summary
    let summaryTextEl = document.createElement("p"); 
    summaryTextEl.className = "summary";
    summaryTextEl.innerHTML = episode.summary; 

    divImg.appendChild(imgEl);
    content.append(nameEl, divImg, summaryTextEl);
    episodeContainer.appendChild(content);

    // console.log(content);

  });

}
// level 200 search input
let inputElem = document.getElementById("searchBar");
// filtered searchBar
inputElem.addEventListener("input", (event)=>{
 let inputValue= event.target.value.toLowerCase();//showing all your input value
 console.log(inputValue);
 let filteredEpisodes = allEpisodes.filter( (episode)=>{
  return (
    episode.name.toLowerCase().includes(inputValue) ||
    episode.summary.toLowerCase().includes(inputValue)
  );
 })
 
 makePageForEpisodes(filteredEpisodes);
})

//level 300 select 
let selectEpisode = document.querySelector("#select");//from html
//for below https://javascript.plainenglish.io/how-to-get-the-selected-value-from-a-dropdown-list-using-javascript-52ab93ab1af7
 
const createSelectedEpisodes = (allEpisodes) => {
  allEpisodes.forEach( (episode)=>{
    let optionTag = document.createElement("option");//<option>Volvo</option> 
    optionTag.value = episode.id;   // <option value="volvo">Volvo</option>
    optionTag.innerHTML = `S${twoDigit(episode.season)} E${twoDigit(episode.number)} - ${episode.name} `; //SE01E01-winter is coming
    selectEpisode.appendChild(optionTag);
  })
};

selectEpisode.addEventListener("change", (event)=>{
  //console.log(event.target.value);
  
  let userEpisode = allEpisodes.filter( (episode)=>{
      let selectedEpisodeId = event.target.value;
      // console.log(selectedEpisodeId,episode.id);
      
      return episode.id == selectedEpisodeId;   //from all epsodes this filtered will be shown the 
    })
    console.log(userEpisode);
  
   //triggers after user select id
  makePageForEpisodes(userEpisode); //
});

window.onload = setup;
