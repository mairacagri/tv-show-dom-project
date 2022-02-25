//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  // console.log(allEpisodes);
  // let card_box
  makePageForEpisodes(allEpisodes);
}

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
    let nameEl = document.createElement("div-name");
    nameEl.className = "name";
    nameEl.innerHTML = `${episode.name} S${twoDigit(episode.season)}E${twoDigit(episode.number)}`;

    //creating div for season number
    let seasonNumEl = document.createElement("div-season-number"); 
    // seasonNumEl.classList.add("seasonEl")
    // seasonNumEl.className = "season-number";

    //creating  div for episode number
    let episodeNumEl = document.createElement("div-episode-number");
    // episodeNumEl.className = "episode-number"
    let imgDiv = document.createElement("div");
    imgDiv.className = "image";
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", episode.image.medium);
   
    //creating p for summary...but its already exist there
    let summaryTextEl = document.createElement("p"); 
    summaryTextEl.className = "summary";
    // kinda replacing existed p 
    summaryTextEl.innerHTML = episode.summary; 

   

    content.appendChild(nameEl);
    content.appendChild(seasonNumEl);
    content.appendChild(episodeNumEl);
    content.appendChild(summaryTextEl);
    content.appendChild(imgDiv);
    imgDiv.appendChild(imgEl);
    rootElem.appendChild(content);
    console.log(content);

  });

  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
