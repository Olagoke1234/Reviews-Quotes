const reviews = [
  {
    id: 1,
    name: "Sally Holly",
    job: "WEB DEVELOPER",
    img: "https://res.cloudinary.com/dahy3xbvo/image/upload/v1643108640/image/Sally_Holly_guarjv.png",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligend mollitia delectus, cumque tenetur dolorum, iure ullam culpa iusto,accusamus pariatur reprehenderit non. Sit recusandae nisi,reprehenderit voluptatibus esse facere voluptatem?",
  },
  {
    id: 2,
    name: "Rohan Mesh",
    job: "INTERN",
    img: "https://res.cloudinary.com/dahy3xbvo/image/upload/v1643108633/image/Rohan_Mesh_zl9uv2.png",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligend mollitia delectus, cumque tenetur dolorum, iure ullam culpa iusto,accusamus pariatur reprehenderit non. Sit recusandae nisi,reprehenderit voluptatibus esse facere voluptatem?",
  },
  {
    id: 3,
    name: "Aliya Samil",
    job: "WEB DESIGNER",
    img: "https://res.cloudinary.com/dahy3xbvo/image/upload/v1643108619/image/Aliya_Samil_jbc8hx.png",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligend mollitia delectus, cumque tenetur dolorum, iure ullam culpa iusto,accusamus pariatur reprehenderit non. Sit recusandae nisi,reprehenderit voluptatibus esse facere voluptatem?",
  },
  {
    id: 4,
    name: "Brandon June",
    job: "THE BOSS",
    img: "https://res.cloudinary.com/dahy3xbvo/image/upload/v1643108605/image/Brandon_June_czl3mj.png",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligend mollitia delectus, cumque tenetur dolorum, iure ullam culpa iusto,accusamus pariatur reprehenderit non. Sit recusandae nisi,reprehenderit voluptatibus esse facere voluptatem?",
  },
];

const img = document.querySelector("#person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.querySelector("#random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  void showPerson(currentItem);
});
