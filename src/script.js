gsap.registerPlugin(TextPlugin, EasePack);
const btn_menu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");
const loader = document.querySelector("#loader");

btn_menu.addEventListener("click", (e) => {
  menu.classList.toggle("hidden");
  response.classList.toggle("w-full");
});

const randomNumber = () =>{
  return Math.floor(Math.random() * 50);
} 
//funcion que genera un numero aleatorio

//Conecting to API
const getRickPage = async (page) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + page;
  const response = await fetch(url);
  const data = await response.json();
  divResponse = document.querySelector("#response");
  divResponse.innerHTML = "";
  data.results.map((character) => {
    divCharacter = document.createElement("div");
    divCharacter.innerHTML += `
        <div
    class="max-w-md card transform cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
    <div class="flex items-center justify-center p-4">
    <img
    class="rounded-xl"
    src="${character.image}"
    alt="character" />
    </div>
    <div class="flex justify-between p-6">
    <div class="flex items-center space-x-4">
    <img
    class="h-10 rounded-full"
    src="${character.image}"
    alt="" />
    <h1 class="text-lg font-bold text-gray-900">${character.name}</h1>
    </div>
    <div class="flex items-center space-x-6">
    <div class="flex items-center space-x-2">
    <span>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 text-gray-600"
    fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              </span>
              <span class="font-semibold text-gray-700">${randomNumber()}</span>
              </div>
              <div class="flex items-center space-x-2 pr-4">
          <span>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-red-600 hover:text-red-500"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd" />
          </svg>
          </span>
          <span class="font-semibold text-gray-700">${randomNumber()}</span>
          </div>
          </div>
          </div>
          </div>
          `;
    divResponse.appendChild(divCharacter);
  });
};



//Conecting to API Location


getRickPage(1);



setTimeout(() => {
  loader.remove();
  finished = true;
  document.querySelector("body").classList.remove("overflow-hidden");
  
}, 1500);

