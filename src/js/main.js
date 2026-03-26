const url = `https://api.github.com/users/gettyreal`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('profile-image').src = data.avatar_url;
        document.getElementById('profile-name').textContent = data.login || 'No Name Available';
    })
    .catch(error => console.error('Error fetching data:', error));