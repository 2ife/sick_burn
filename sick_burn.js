const stateTitle = document.getElementById("stateTitle"),
  imageContainer = document.querySelector(".imageContainer"),
  explanation = document.getElementById("explanation"),
  sayingLine = document.getElementById("sayingLine"),
  sayingPerson = document.getElementById("sayingPerson"),
  linkContainer = document.querySelector(".linkContainer");

getRandom = (len) => {
  return Math.floor(Math.random() * len);
};

checkState = () => {
  const urlSearch = window.location.search,
    state = urlSearch.slice(urlSearch.indexOf("=") + 1);
  if (state == "perfect") {
    return 0;
  } else if (state == "good") {
    return 1;
  } else if (state == "soso") {
    return 2;
  } else if (state == "bad") {
    return 3;
  } else if (state == "worst") {
    return 4;
  } else if (state == "consolation") {
    return 5;
  } else {
    const link = document.createElement("a"),
      href = "index.html";
    link.href = href;
    link.click();
  }
};

setTitle = (number) => {
  stateTitle.innerText = DataSet[number].title;
  if (number === 5){
    document.title = '위로 | 팩폭문학가'
  }
};

setImage = (number) => {
  const img = document.createElement("img"),
    src = DataSet[number].image_url,
    alt = DataSet[number].title;
  img.src = src;
  img.alt = alt;
  imageContainer.appendChild(img);
};

setContent = (number) => {
  const explanationList = DataSet[number].content,
    randomNumber = getRandom(explanationList.length);
  explanation.innerText = explanationList[randomNumber];
};

setSaying = (number) => {
  const sayingList = DataSet[number].saying,
    randomNumber = getRandom(sayingList.length);
  sayingLine.innerText = sayingList[randomNumber].line;
  sayingPerson.innerText = `-${sayingList[randomNumber].person}-`;
};

setLink = (number) => {
  const link = document.createElement("a"),
    linkList = DataSet[number].link,
    randomNumber = getRandom(linkList.length),
    href = linkList[randomNumber];
  let text;
  if (number === 5) {
    text = "위로 영상";
  } else {
    text = "동기부여 영상";
  }
  link.href = href;
  link.innerText = text;
  linkContainer.prepend(link);
};

setPage = (number) => {
  setTitle(number);
  setImage(number);
  setContent(number);
  setSaying(number);
  setLink(number);
};

init = () => {
  const stateNumber = checkState();
  setPage(stateNumber);
};

init();
