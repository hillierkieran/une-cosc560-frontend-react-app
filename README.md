UNE - COSC60 Advanced Web Programming - Assignment 3

# Frontend React App

This project is a React frontend application that connects to a Laravel backend. It allows users to view blog posts, including a list of posts and individual post details, all fetched from an API. The project uses React Router for client-side navigation, modular CSS for styling, and custom hooks for data fetching and state management.

---

### GitHub Repository Location

**React**: [github.com/hillierkieran/une-cosc560-frontend-react-app](https://github.com/hillierkieran/une-cosc560-frontend-react-app)

**Laravel**: [github.com/hillierkieran/une-cosc560-backend-laravel](https://github.com/hillierkieran/une-cosc560-backend-laravel)

### Setup Instructions
For setup instructions, go to the [SETUP.md](./SETUP.md) file.

## Report

### Student Information

- **Student ID:** 220281036
- **Name:** Kieran Hillier
- **Email:** khillie2@myune.edu.au

### My Approach
My approach to developing this project involved breaking down the tasks into manageable steps and focusing on one aspect at a time:
 1. I started by setting up the project structure with basic file organisation.
 2. Then, I built the core site functionality: creating pages, routing, and initial state management.
 3. I focused on connecting the React frontend to the Laravel backend API, handling data fetching, and managing state.
 4. Once the API connection was stable, I worked on improving how data was handled, adding error and loading states for a more seamless user experience.
 5. I then focused on styling, using modular CSS to ensure a consistent and responsive UI.
 6. Finally, I added finishing touches, such as moving the base URL for the api connection to an environment varible.

### Challenges Faced
During development, I encountered several challenges:
- **Connecting to the Laravel backend API**: Figuring out how to handle the API responses, specifically that I needed to use the `data` section of the response, took some trial and error. I eventually realised how to extract the necessary data.
- **Code Modularity**: I aimed to make the code as modular and reusable as possible, especially for tasks like API requests and context management. This turned out to be trickier than expected, particularly when handling dependencies and state updates. It required significant refactoring to achieve the desired level of reusability.

### Extra Features
In addition to meeting the assessment requirements, I...
- Added custom components (`Error`, `Loading`) to handle various states of the application, improving the user experience, and;
- Implemented a caching mechanism using React Context to reduce unnecessary API calls and improve performance.
