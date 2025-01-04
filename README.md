# Candidate Search App

## Description
The Candidate Search App allows users to search for GitHub users by username or retrieve a random list of GitHub users. It leverages the GitHub API to fetch user profiles, displaying basic information such as their avatar, username, and a link to their GitHub profile.

---

## Features
- Search for specific GitHub users by username.
- Fetch a random list of GitHub users when no username is provided.
- Display user avatars, usernames, and links to their GitHub profiles.
- Simple, responsive UI for easy navigation and usability.
- Error handling for invalid queries and API issues.

---

## Getting Started

### Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/candidate-search-app.git
   cd candidate-search-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create an `env` folder in the root directory.
   - Add a `.env` file inside the `env` folder with the following content:
     ```plaintext
     VITE_GITHUB_TOKEN=your_github_personal_access_token
     ```
   - Replace `your_github_personal_access_token` with a valid GitHub Personal Access Token. Ensure it has the `read:user` scope.

### Running the App
To start the development server:
```bash
npm run dev
```

Access the app at [http://localhost:3000](http://localhost:3000).

### Building for Production
To create a production build:
```bash
npm run build
```
The production-ready files will be in the `dist` folder.

### Deploying
Deploy the contents of the `dist` folder to a hosting platform such as Render, Netlify, or Vercel. Ensure the `VITE_GITHUB_TOKEN` environment variable is configured in your hosting platform’s settings.

---

## Usage

1. Open the app in your browser.
2. Enter a GitHub username in the search bar and click **Search** to fetch that user's profile.
3. Leave the search bar empty and click **Search** to retrieve a random list of GitHub users.
4. Click on a user's name or avatar to open their GitHub profile in a new tab.

---

## Dependencies
- **React**: Frontend framework.
- **TypeScript**: For type safety.
- **Vite**: Fast build tool for modern web apps.

---

## Issues and Contributions
If you encounter any issues or would like to contribute, feel free to create an issue or submit a pull request on GitHub.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

