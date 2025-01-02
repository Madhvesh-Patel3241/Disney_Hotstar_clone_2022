let movies = [
    {
      name: "The Falcon and The Winter Soldier",
      des:
        "Sam Wilson and Bucky Barnes realize that their futures are anything but normal.",
      images: "images/slider 2.png"
    },
    {
      name: "Loki",
      des:
        "After stealing the Tesseract in “Avengers: Endgame,” Loki lands before the Time Variance Authority.",
      images: "images/slider 1.png"
    },
    {
      name: "Luca",
      des:
        "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
      images: "images/slider 5.png"
    },
    {
      name: "Raya and the Last Dragon",
      des:
        "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
      images: "images/slider 4.png"
    },
    {
      name: "WandaVision",
      des:
        "Wanda and Vision struggle to conceal their powers during dinner with Vision’s boss and his wife.",
      images: "images/slider 3.png"
    },
    {
        name: "Docter Strange",
        des:
          "Dr. Strange faces a difficult choice of whether to return to his life of luxury or to protect the world as the most powerful sorcerer in existence.",
        images: "images/slider 6.png"
    }
  ];
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; //track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    //create DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    //attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //setting up images
    imgElement.src = movies[slideIndex].images;
    slideIndex++;
  
    //setting element classnames
    slide.className = "slider";
    content.className = "slider-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (slide.length) {
      sliders[0].style.marginleft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //video cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  // card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerwidth = containerDimension.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerwidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerwidth + 200;
    });
  });
  