"use strict"
// localStorage.clear()

/******* READ API *******/




const main = document.querySelector("main")
const API_KEY = "api_key=2263815fb012ff3af28c7f62dc94e644"
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY
const imageUrl = 'https://image.tmdb.org/t/p/w500'
const tags = document.querySelector(".tags")

const movieArr = []
let searchMovie = []

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
]

settingGenre()
function settingGenre() {
  tags.innerHTML = ''
  genres.forEach(genre => {
    const genreDiv = document.createElement("div")
    genreDiv.classList.add("tag")
    genreDiv.id=genre.id
    genreDiv.innerText = genre.name
    tags.appendChild(genreDiv)
  })
}

getMovies(API_URL)

function getMovies(url) {
	fetch(url).then(res => res.json()).then(data => {
		showMovies(data.results)
    searchMovie = data.results;
	})
}

const movieReview = JSON.parse(localStorage.getItem("review")) || [];


function showMovies(data) {
  main.innerHTML = ""
  data.forEach(movie => {
    movieArr.push(movie)
    const {title, poster_path, vote_average, overview} = movie
    const movieEl = document.createElement("div")
    movieEl.classList.add("movie")
    
    movieEl.innerHTML = `
    <img src="${imageUrl + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3 class="movie-title">${title}</h3>
          <span class="">${vote_average}</span>
          <div class="overview">
          ${overview}
        </div>
        </div>
        <div class="favorite">
          <i class="fa-solid fa-heart favorite-font"></i>
        <div>
    `
    
    main.appendChild(movieEl)
  });

  const movies = document.querySelectorAll(".movie");
  for (let i = 0 ; i < movies.length; i++) {
    movies[i].addEventListener("click", function() {
      localStorage.clear();
      console.log(movies[i].textContent);
      movieReview.push(movies[i].innerHTML);
      localStorage.setItem("review", JSON.stringify(movieReview));
      window.location.href = "movie-review.html";
    })
  }
}



/******* CODE *******/


class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
}

const user = JSON.parse(localStorage.getItem("user")) || []

const container = document.querySelector(".container")
const sidebar = document.querySelector(".sidebar")
const sidebarRegisterBtn = document.querySelector(".sidebar-register-btn")
const sidebarLogInBtn = document.querySelector(".sidebar-log-in-btn")
const sidebarIconTexts = document.querySelectorAll(".sidebar-span")
const registerForm = document.querySelector(".register-form")
const registerRemoverBtn = document.querySelector(".register-remover")
const regUsername = document.querySelector(".reg-username")
const regEmail = document.querySelector(".reg-email")
const regPassword = document.querySelector(".reg-password")
const regRepeatPassword = document.querySelector(".reg-repeat-password")
const registrationBtn = document.querySelector(".reg-btn")
const allRegistrationInp = document.querySelectorAll(".reg-inp")
const logInForm = document.querySelector(".log-in-form")
const logInFormRemoverBtn = document.querySelector(".remover")
const logInBtn = document.querySelector(".log-in-btn")
const logInUsernameInp = document.querySelector(".log-in-username")
const logInPasswordInp = document.querySelector(".log-in-password")
const allLogInInp = document.querySelectorAll(".log-in-inp")
const sidebarUser = document.querySelector(".sidebar-user")
const sidebarUserName = document.querySelector(".user-name")
const sidebarRegister = document.querySelector(".sidebar-register")
const sidebarLogin = document.querySelector(".sidebar-log-in")
const sidebarLogOut = document.querySelector(".sidebar-log-out")
const hamburger = document.querySelector(".hamburger-content")
const navSearch = document.querySelector(".nav-search-input")
const searchIcon = document.querySelector(".search-icon")
const navLogo = document.querySelector(".nav-logo")




sidebar.addEventListener("mouseover", function() {
    sidebar.style.width = "200px"
    sidebarRegisterBtn.style.width = "150px"
    sidebarLogInBtn.style.width = "150px"
    for (const i of sidebarIconTexts) {
        i.style.display = "block"
    }
})

sidebar.addEventListener("mouseout", function() {
    sidebar.style.width = "90px"
    sidebarRegisterBtn.style.width = "70px"
    sidebarLogInBtn.style.width = "70px"
    for (const i of sidebarIconTexts) {
        i.style.display = "none"
    }
})

sidebarRegisterBtn.addEventListener("click", function() {
    registerForm.style.display = "block"
    container.style.opacity = "0.2"
})

registerRemoverBtn.addEventListener("click", function() {
    container.style.opacity = "1"
    registerForm.style.display = "none"
    for (const i of allRegistrationInp) {
        i.style.borderColor = "#444"
    }
})

registrationBtn.addEventListener("click", function() {
    const userIn = user.findIndex(i=> i.username === regUsername.value)
    if (userIn === -1) {
        if (regUsername.value.length >= 4) {
            if (regPassword.value.length >= 8 && regPassword.value.length >= 8) {
                if (regPassword.value === regRepeatPassword.value) {
                    const obj = new User(regUsername.value, regPassword.value)
                    user.push(obj)
                    localStorage.setItem("user", JSON.stringify(user))
                    registerForm.style.display = "none"
                    container.style.opacity = "1"
                } else {
                    regPassword.style.borderColor = "red"
                    regRepeatPassword.style.borderColor = "red"
                }
            } else {
                regPassword.style.borderColor = "red"
                regRepeatPassword.style.borderColor = "red"
            }
        } else {
            regUsername.style.borderColor = "red"
        }
    } else {
        for (const i of allRegistrationInp) {
            i.style.borderColor = "red"
        }
    }
    
    for (const i of allRegistrationInp) {
        i.value = ""
    }
})

sidebarLogInBtn.addEventListener("click", function() {
    logInForm.style.display = "block"
    container.style.opacity = "0.2"
})

logInFormRemoverBtn.addEventListener("click", function() {
    logInForm.style.display = "none"
    container.style.opacity = "1"
})

logInBtn.addEventListener("click", function() {
    console.log(user)
    for (const i of user) {
        if (i.username === logInUsernameInp.value) {
            if (i.password === logInPasswordInp.value) {
                sidebarUser.style.display = "block"
                sidebarUserName.textContent = `${i.username}`
                sidebarRegister.style.display = "none"
                sidebarLogin.style.display = "none"
                logInForm.style.display = "none"
                container.style.opacity = "1"
                sidebarLogOut.style.display = "block"
                for (const i of allLogInInp) {
                  i.value = ""
                  i.style.borderColor = "#777"
                }
            } else {
                logInPasswordInp.style.borderColor = "red"
            }
        } else {
            logInUsernameInp.style.borderColor = "red"
        }
    }
    for (const i of allLogInInp) {
        i.value = ""
    }
})

sidebarLogOut.addEventListener("click", function() {
    sidebarUser.style.display = "none"
    sidebarRegister.style.display = "block"
    sidebarLogin.style.display = "block"
    sidebarLogOut.style.display = "none"
})

let counter = 1
hamburger.addEventListener("click", ()=> {
  counter++
  if (counter % 2 == 0) {
    tags.style.display = "flex"
  } else {
    tags.style.display = "none"
  }
})

function baseMovie (){
  for (let movie of movieArr) {
    const {title, poster_path, vote_average, overview} = movie
    const movieEl = document.createElement("div")
    movieEl.classList.add("movie")
    movieEl.innerHTML = `
    <img src="${imageUrl + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="">${vote_average}</span>
          <div class="overview">
          ${overview}
        </div>
        </div>
        <div class="favorite">
        <i class="fa-solid fa-heart favorite-font"></i>
        <div>
    `
    main.appendChild(movieEl)
  }
}

navSearch.addEventListener("keyup", function() {
  const filterMovie = searchMovie.filter(movie=> movie.title.toLowerCase().slice(0, navSearch.value.length) === navSearch.value.toLowerCase().slice(0, navSearch.value.length));
  main.style.justifyContent = "space-around";
  main.style.flexWrap = "wrap";
  main.innerHTML = "";
  showMovies(filterMovie);
  console.log(movieArr);
})

navLogo.addEventListener("click", function() {
  navSearch.value = "";
  getMovies(API_URL)
})

