const token = import.meta.env.VITE_GITHUB_TOKEN;
console.log(token);

if (!token) {
  throw new Error('GitHub API token is missing. Check the .env file.');
}

const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Invalid API response. Check the network tab.');
    }
    return data;
  } catch (err) {
    console.error('Error fetching GitHub users:', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Invalid API response. Check the network tab.');
    }
    return data;
  } catch (err) {
    console.error(`Error fetching GitHub user "${username}":`, err);
    return null;
  }
};

export { searchGithub, searchGithubUser };
