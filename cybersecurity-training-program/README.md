# Cybersecurity Awareness Training Platform

A simplified, interactive web application for cybersecurity awareness training.

## Overview

This platform delivers short, interactive cybersecurity training modules with gamified elements to improve user engagement and knowledge retention.

## Key Features

- Interactive modules covering common threats (phishing, malware, password security)
- Gamified elements (points, badges, leaderboards)
- Personalized feedback and progress tracking
- Simple, intuitive user interface
- Secure data storage and user authentication

## Technologies Used

- Frontend: React.js
- Backend: Node.js with Express.js
- Database: MongoDB
- Authentication and Hosting: Firebase
- Visualization: Chart.js

## Setup Instructions

(Setup instructions will be added here)

## Project Structure

Backend Structure
- server.js - The main Express server file
- .env - Environment variables for MongoDB connection, JWT secret, etc.
- /models/ - Contains database models:

  - User.js - User model with authentication methods
  - Module.js - Training module content model
  - Progress.js - User progress tracking model


- /routes/ - API routes:

  - users.js - User registration, login, profile routes
  - modules.js - Routes for fetching and creating  training modules
  - progress.js - Routes for tracking user progress


- /middleware/ - Contains middleware functions:

  - auth.js - JWT authentication middleware

Frontend Structure
- /src/ - React source code

  - index.js & App.js - Main application setup with routing
  - /components/ - Reusable UI components

    - /layout/ - Layout components (Navbar, Footer)
    - /routing/ - PrivateRoute component for authentication


  - /pages/ - Page components for different routes

    - Home.js - Landing page
    - Dashboard.js - User dashboard showing progress
    - Other pages for login, registration, modules listing, etc.


  - /context/ - React context for state management

    - AuthContext.js - Authentication state management