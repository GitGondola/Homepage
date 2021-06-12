document.querySelector('.js-form')?.addEventListener('submit', e => {
  e.preventDefault();

  submitDDG();
});

document.getElementById("button_g").addEventListener("click", submitG)
document.getElementById("button_gi").addEventListener("click", submitGI)

function submitDDG(){
  window.location.href = "https://duckduckgo.com/?q=" + document.getElementById("search_bar").value


}

function submitG(){
  window.location.href = "https://duckduckgo.com/?q=!g " + document.getElementById("search_bar").value
}

function submitGI(){
  window.location.href = "https://duckduckgo.com/?q=!gi " + document.getElementById("search_bar").value
}
