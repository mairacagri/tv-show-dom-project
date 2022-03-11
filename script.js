//selecting all tags with id

let allEpisodes; //global var

function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
let episodeContainer = document.querySelector("#episode-wrapper");

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  
    
  return episodeList.forEach( (episode) => {
    let content = document.createElement("div");
    content.setAttribute("id", "content")

      //adding zero for seasons and  episodes under 10
      let twoDigit =(number) => {
        if(number < 10){
          return `0${number}`;
        }else {
          return number;
        }
    }
    
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

    console.log(content);

  });

  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}
// value input
let inputElem = document.getElementById("searchBar");

inputElem.addEventListener("input", (event)=>{
 let inputValue= event.target.value.toLowerCase();//showing all yor input value
 console.log(inputValue);
 let filteredEpisodes = allEpisodes.filter( (episode)=>{
  return (
    episode.name.toLowerCase().includes(inputValue) ||
    episode.summary.toLowerCase().includes(inputValue)
  );
 })
 episodeContainer.innerText = "";
 makePageForEpisodes(filteredEpisodes);
})



// searchEl.appendChild(inputEl);
// rootElem.appendChild(searchEl);
window.onload = setup;
