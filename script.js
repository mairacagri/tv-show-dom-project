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

    let divTitle = document.createElement("div");
    divTitle.className = "div-title";

    let nameEl = document.createElement("div-name");//creating div for name of episode
    // nameEl.classList.add("name");
    nameEl.className = "name";

    let seasonNumEl = document.createElement("div-season-number"); //creating div for season number
    // seasonNumEl.classList.add("seasonEl")
    seasonNumEl.className = "season-number";

    let episodeNumEl = document.createElement("div-episode-number");//creating  div for episode number
    episodeNumEl.className = "episode-number"

    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", episode.image.medium);
    // imgEl.src = ""; //need to find a way to add src
    // imgEl.alt = "photo of awesome Game Of Thrones " 
    let summaryTextEl = document.createElement("p"); //creating p for summary...but its already exist there
    summaryTextEl.className = "summary";
    summaryTextEl.innerHTML = episode.summary; // kinda replacing existed p 

    //adding zero for seasons and  episodes under 10
    let twoDigit =(number) => {
        if(number < 10){
          return `0${number}`;
        }else {
          return number;
        }
    }
    divTitle.innerHTML = `${episode.name} - S${twoDigit(episode.season)}E${twoDigit(episode.number)}` 

    divTitle.appendChild(nameEl);
    divTitle.appendChild(seasonNumEl);
    divTitle.appendChild(episodeNumEl);
    divTitle.appendChild(summaryTextEl);
    content.appendChild(divTitle);
    content.appendChild(imgEl);
    rootElem.appendChild(content);
    console.log(content);


    // content.appendChild(nameEl);
    // content.appendChild(seasonNumEl);
    // content.appendChild(episodeNumEl);
    // content.appendChild(summaryTextEl)

  });

  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
