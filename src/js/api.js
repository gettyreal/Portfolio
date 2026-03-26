// GitHub API module - handles user profile fetching
export async function fetchProfile(username = 'gettyreal') {
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API responded with status ${response.status}`);
        const data = await response.json();
        return {
            avatar_url: data.avatar_url,
            login: data.login || 'No Name Available'
        };
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
        return null;
    }
}
