// Creates a variable that selects the main element, and a variable that selects the back button element
const mainEl = myDoc.querySelector('main');
const backButton = myDoc.querySelector('#back');
// Creates a function that builds an element and appends it to the DOM
    function buildPosts () {
        const posts = readLocalStorage();
        for (let i = 0; i < posts.length; i++) {
        const articleEl = myDoc.createElement('article');
        articleEl.classList.add('card');
        mainEl.appendChild(articleEl);
        const h2El = myDoc.createElement('h2');
        h2El.textContent = posts[i].title;
        articleEl.appendChild(h2El);
        const contentEl = myDoc.createElement('blockquote');
        contentEl.textContent = posts[i].content;
        articleEl.appendChild(contentEl);
        const pEl = myDoc.createElement('p');
        pEl.textContent = `Posted by ${posts[i].username}`;
        articleEl.appendChild(pEl);
        }
    }
// Creates a function that handles the case where there are no blog posts to display
function noPosts() {
const storedData = JSON.parse(localStorage.getItem('posts'));
  if (!storedData) {
        const h2El = myDoc.createElement('h2')
        h2El.textContent = "No Blog posts yet...";
        mainEl.appendChild(h2El);
    }
}
// Creates a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const posts = readLocalStorage();
    if(posts.length > 0) {
        buildPosts()
    } else {
        noPosts()
    }
}
// Calls the `renderBlogList` function
renderBlogList();
// Redirects to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function () {
    redirectPage('./index.html');
});