let movies = [
    {
        name: "falcon and the winter soldier",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et venian excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image: "images/slider-1.png"
    },
    {
        name: "loki",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et venian excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image: "images/slider-2.png"
    },
    {
        name: "wanda vision",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et venian excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image: "images/slider-3.png"
    },
    {
        name: "raya and the last dragon",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et venian excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image: "images/slider-4.png"
    },
    {
        name: "luca",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et venian excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image: "images/slider-5.png"
    }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //Track the current slide

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].desc));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-desc";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);


// Video cards

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

// Card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtn = [...document.querySelectorAll(".pre-btn")];
let nxtBtn = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth + 200;
    });

    preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});