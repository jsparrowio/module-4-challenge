// Creates a variable that selects the form element and varibles that select certain IDs of the form
const formEl = myDoc.querySelector('form');
const formSubmitEl = myDoc.querySelector('#submit');
const errorEl = myDoc.querySelector('#error');
// Creates a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function submitForm(event) {
    event.preventDefault();
    const usernameInput = myDoc.querySelector('#username');
    const titleInput = myDoc.querySelector('#title');
    const contentInput = myDoc.querySelector('#content');
    if (usernameInput.value !== '' && titleInput.value !== '' && contentInput.value !== '') {
    const blogPost = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value
      }
     storeLocalStorage(blogPost);
     redirectPage('./blog.html');
    } else {
      errorEl.textContent = "Please complete the form.";
    }
}
// Adds an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', submitForm);