export interface Candidate {
    id: number;
    login: string; // GitHub username
    avatar_url: string; // URL to the user's avatar
    html_url: string; // URL to the user's GitHub profile
    [key: string]: any; // Optional: To account for any extra fields
  }
  