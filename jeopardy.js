const gameDiv = document.querySelector("#game");
const newdiv = document.createElement("div");
const restart = document.querySelector("#restart");
const start = document.querySelector("#start");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
const section5 = document.querySelector("#section5");
const section6 = document.querySelector("#section6");

// fetch("https://opentdb.com/api.php?amount=6")
//   .then((response) => response.json())
//   .then((data) => (questions = data))
//   .catch((error) => console.error(error));

async function search() {
  const cat1 = await axios.get(
    "https://opentdb.com/api.php?amount=6&category=15"
  );

  let questions1 = cat1.data.results;
  newdiv.innerHTML = questions1[0].category;
  newdiv.classList.add("title");
  section1.append(newdiv);
  putOn(questions1, section1);

  setTimeout(async () => {
    const cat2 = await axios.get(
      "https://opentdb.com/api.php?amount=6&category=9"
    );

    let questions2 = cat2.data.results;
    const newdiv = document.createElement("div");
    newdiv.innerHTML = questions2[0].category;
    newdiv.classList.add("title");
    section2.append(newdiv);
    putOn(questions2, section2);
  }, 5000);
  setTimeout(async () => {
    const cat3 = await axios.get(
      "https://opentdb.com/api.php?amount=6&category=21"
    );

    let questions3 = cat3.data.results;
    const newdiv = document.createElement("div");
    newdiv.innerHTML = questions3[0].category;
    newdiv.classList.add("title");
    section3.append(newdiv);
    putOn(questions3, section3);
  }, 12000);
  async function cat4Api() {
    const cat4 = await axios.get(
      "https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=6"
    );

    let questions4 = cat4.data;
    const newdiv = document.createElement("div");
    newdiv.innerHTML = questions4[0].category;
    newdiv.classList.add("title");
    section4.append(newdiv);
    putOnApi2(questions4, section4);
  }
  cat4Api();
  setTimeout(async () => {
    const cat5 = await axios.get(
      "https://the-trivia-api.com/api/questions?categories=science&limit=6"
    );

    let questions5 = cat5.data;
    const newdiv = document.createElement("div");
    newdiv.innerHTML = questions5[0].category;
    newdiv.classList.add("title");
    section5.append(newdiv);
    putOnApi2(questions5, section5);
  }, 5000);
  setTimeout(async () => {
    const cat6 = await axios.get(
      "https://the-trivia-api.com/api/questions?categories=geography&limit=6"
    );

    let questions6 = cat6.data;
    const newdiv = document.createElement("div");
    newdiv.innerHTML = questions6[0].category;
    newdiv.classList.add("title");
    section6.append(newdiv);

    putOnApi2(questions6, section6);
  }, 10000);
}

function putOn(quest, section) {
  for (let i = 0; i < quest.length; i++) {
    const newdiv = document.createElement("div");

    newdiv.innerHTML = "&#x3F;";
    let click = 0;
    newdiv.addEventListener("click", function () {
      click++;
      if (click === 1) {
        newdiv.innerHTML = quest[i].question;
      } else if (click === 2) {
        newdiv.innerHTML = quest[i].correct_answer;
      }
    });

    newdiv.classList.add("question");
    section.append(newdiv);
  }
}

function putOnApi2(quest, section) {
  for (let i = 0; i < quest.length; i++) {
    const newdiv = document.createElement("div");

    newdiv.innerHTML = "&#x3F;";
    let click = 0;
    newdiv.addEventListener("click", function () {
      click++;
      if (click === 1) {
        newdiv.innerHTML = quest[i].question;
      } else if (click === 2) {
        newdiv.innerHTML = quest[i].correctAnswer;
      }
    });

    newdiv.classList.add("question");
    section.append(newdiv);
  }
}

restart.addEventListener("click", function () {
  section1.innerHTML = "";
  section2.innerHTML = "";
  section3.innerHTML = "";
  section4.innerHTML = "";
  section5.innerHTML = "";
  section6.innerHTML = "";
});

start.addEventListener("click", search);
