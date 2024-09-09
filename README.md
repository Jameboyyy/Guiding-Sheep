# Guiding Sheep - Christian AI Chat Bot

## About the Project

**Guiding Sheep** is a real-time chat application designed to provide answers to questions about Christianity and faith. Powered by an AI trained to deliver responses aligned with Christian teachings, this bot serves as a spiritual guide for those seeking knowledge, encouragement, or simply answers to their questions about faith. Users can interact with the bot in a safe, respectful environment, receiving insights drawn from the Bible and Christian principles.

Whether you have questions about scripture, want to explore topics like prayer, forgiveness, or salvation, or simply need guidance in your spiritual journey, Guiding Sheep is here to help.

## Features

- **Real-Time Chat:** Engage in real-time conversations with the AI bot without needing to refresh the page.
- **AI-Powered Responses:** Get answers to your questions powered by OpenAI’s language model, customized to provide Christian-based guidance.
- **Bible Verse Integration:** Receive Bible verses relevant to your questions and discussions.
- **User Authentication:** Secure login and personalized experience, with saved chat history and tailored responses.
- **State Management with Redux:** Efficiently manage global state, including user authentication and chat history, using Redux.
- **Responsive Design:** Accessible on both desktop and mobile devices, ensuring a smooth user experience across all platforms.

## Tech Stack

### Front-End
- **React**: A modern JavaScript library for building user interfaces.
- **Socket.io**: For real-time, bidirectional communication between the client and server.
- **Redux**: For managing global state, including user authentication and chat history.

### Back-End
- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express**: A web application framework for Node.js, used to build the API and handle server logic.
- **Socket.io**: Used on the server side to handle WebSocket connections for real-time communication.
- **OpenAI API**: Powers the AI that responds to user queries with faith-based answers.

### Database
- **PostgreSQL**:

### Authentication
- **JWT (JSON Web Tokens):** Provides secure token-based user authentication.
- **bcrypt:** For securely hashing and storing user passwords.

### Deployment
- **Vercel:** For deploying the front-end application.
- **Heroku or AWS:** For deploying the back-end server and database.

