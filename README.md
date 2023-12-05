# Random Activity Generator

This project consists of a simple web application that generates random activities for users based on different categories and the number of participants. It comprises a backend built with Express.js and a front end created using React with Vite.

## Backend

### Technologies Used:
- **Express.js**: Handling API requests and responses
- **Axios**: Making HTTP requests to an external API
- **Body-parser**: Parsing incoming request bodies in the middleware

### Running the Backend:
1. Install dependencies: `npm install`
2. Run the server: `npm start`
3. The server will be running on port 3001 by default.

The backend provides two routes:
- `GET /`: Fetches a random activity from the [Bored API](https://www.boredapi.com/) and returns the data.
- `POST /`: Accepts user-selected type and number of participants, filters activities accordingly, and returns a random result.

## Frontend

### Technologies Used:
- **React**: Building the user interface
- **Axios**: Handling HTTP requests to the backend API

### Running the Frontend:
1. Install dependencies: `npm install`
2. Start the application: `npm run dev`
3. Access the application at [http://localhost:3000](http://localhost:5173) in the browser.

The frontend consists of:
- **App.js**: Fetches a random activity from the backend and displays it.
- **Header.js**: Allows users to select activity types and the number of participants to filter activities.
- **Card.js**: Renders the random activity details fetched from the backend.

## How to Use:

1. Upon starting the application, a random activity is displayed.
2. Use the dropdown menus in the header section to filter activities based on type and the number of participants.
3. Click the "Go" button to get a random activity matching the selected criteria.

### Additional Files:

- **options.js**: Contains predefined options for activity types and the number of participants.

## Getting Started:

1. Clone this repository.
2. Set up the backend and frontend as mentioned in the respective sections.
3. Run both the backend and frontend servers concurrently.
4. Access the frontend application in the browser.

Feel free to contribute, report issues, or suggest enhancements by creating pull requests or raising issues.
