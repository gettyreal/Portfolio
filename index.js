const url = `https://api.github.com/users/gettyreal`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('profile-image').src = data.avatar_url;
        document.getElementById('profile-name').textContent = data.login || 'No Name Available';
    })
    .catch(error => console.error('Error fetching data:', error));
/*
const home = document.getElementById('home');
const projects = document.getElementById('projects');
const contsct = document.getElementById('contact');

function homeLink() {
    home.classList.add('linkActive');
    projects.classList.remove('linkActive');
    contact.classList.remove('linkActive');

}

function projectsLink() {
    projects.classList.add('linkActive');
    home.classList.remove('linkActive');
    contact.classList.remove('linkActive');

}

function contactLink () {
    contact.classList.add('linkActive');
    projects.classList.remove('linkActive');
    home.classList.remove('linkActive');
}
*/