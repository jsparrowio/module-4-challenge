const myDoc = document;
// Creates logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleEl = myDoc.querySelector('#toggle');
const bodyEl = myDoc.querySelector('body');
checkTheme();

function setThemeLight() {
  localStorage.setItem('theme', 'light');
  const root = document.documentElement;
  root.style.setProperty('--circle-color', '#ffb100');
  bodyEl.classList.remove('dark');
  bodyEl.classList.add('light');
  toggleEl.textContent = '🌟';
  theme = 'light';
  return;
}

function setThemeDark() {
  localStorage.setItem('theme', 'dark');
  const root = document.documentElement;
  root.style.setProperty('--circle-color', '#007bff');
  bodyEl.classList.remove('light');
  bodyEl.classList.add('dark');
  toggleEl.textContent = '🌑';
  theme = 'dark';
  return;
}

function checkTheme() {
  let theme = localStorage.getItem('theme');
  if (!theme) {
    setThemeLight();
    return;
  } else if (theme === 'light') {
    setThemeLight();
    return;
  } else {
    setThemeDark();
    return;
  }
}

toggleEl.addEventListener('click', function () {
  let theme = localStorage.getItem('theme');
  if (theme === 'light') {
    setThemeDark();
  } else {
    setThemeLight();
  }
});
// Creates a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const posts = JSON.parse(localStorage.getItem('posts'));
  return posts || [];
}
// Creates a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blogPost) {
  const posts = readLocalStorage();
  posts.push(blogPost);
  localStorage.setItem('posts', JSON.stringify(posts));
}
// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};