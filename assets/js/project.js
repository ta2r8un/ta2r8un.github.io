AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "earning app",
    cardImage: "data:image/jpeg;base64,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",
    description: "A quiz app built using basic react.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Chess Engine",
    cardImage: "assets/images/project-page/chess.jpg",
    description: "A chess engine for a popular game dev engine.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Flappy Bird",
    cardImage: "assets/images/project-page/flappybird.png",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Exercise Tracker",
    cardImage: "assets/images/project-page/exercise.jpg",
    description: "Exercise tracker built using basic redux.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Recipe Ingredient Parser",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    tagimg:
      "data:image/png;base64,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",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Poker Game",
    cardImage: "assets/images/project-page/poker.jpg",
    description: "Poker game built using typescript.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Personal Book Library",
    cardImage: "assets/images/project-page/book.png",
    description: "Personal book library app built using JavaScript.",
    tagimg:
      "data:image/png;base64,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",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Minesweeper Game",
    cardImage: "assets/images/project-page/minesweeper.jpg",
    description:
      "Minesweeper Game built using python Object Oriented Programming.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Battery Life Calculator",
    cardImage: "assets/images/project-page/battery.png",
    description: "Built battery life calculator using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Movie Recommendation System",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Tensorflow.",
    tagimg:
      "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Music Recommendation Engine",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
