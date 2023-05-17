# Fine Tune Marine: Single Page Application

Fine Tune Marine is a single-page application designed to streamline all marine-related needs for small businesses. Built using React and deployed on Firebase, it offers an intuitive user interface, an easy-to-fill form connected to Formspree, and real-time weather information for a seamless user experience.

## Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Deployment](#deployment)
4. [Built With](#built-with)
5. [Contributing](#contributing)
6. [License](#license)
7. [Acknowledgments](#acknowledgments)

## Features

- **User-friendly interface**: Navigating through our diverse range of services is easy, as everything is accessible on one page.
- **Form Integration**: The form feature helps us understand your specific needs better, enabling us to provide tailored services.
- **Formspree**: The form is connected to Formspree, ensuring seamless form submissions and quick responses.
- **Real-time Weather API**: Integrated Weather API allows users to check the current weather conditions of their preferred location, ensuring safe and enjoyable marine activities.
https://www.weatherapi.com/docs/
- **Firebase Deployment**: The application is deployed using Firebase, ensuring a reliable, secure, and scalable platform.

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>= 14.x.x) and npm (>= 7.x.x)
- Firebase CLI (>= 9.x.x)

### Installation

1. Clone the repository:
git clone https://github.com/your_username_/FineTuneMarine.git
2. Navigate to the project directory:
cd FineTuneMarine
3. Install the required dependencies:
4. Set up the environment variables in a `.env` file in the root folder:
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
REACT_APP_FORMSPREE_API_URL=https://formspree.io/f/your_form_id
5. Start the development server:

npm start
Now, you can access the application at `http://localhost:3000/`.

## Deployment

To deploy the application on Firebase, follow these steps:

1. Build the project for production:
npm run build

2. Log in to Firebase:
firebase login

3. Initialize a Firebase project:
firebase init

During the initialization, select the `Hosting` option, choose an existing Firebase project or create a new one, and set the `build` folder as the public directory.

4. Deploy the application:
firebase deploy

The application is now live at your Firebase project URL.

## Built With

- [React](https://reactjs.org/)
- [Formspree](https://formspree.io/)
- [Firebase](https://firebase.google.com/)

## Contributing
 none

## License
All Rights Reserved

## Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)
- [OpenWeatherMap]

