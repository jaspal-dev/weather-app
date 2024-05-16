# Weather App

## Live Path
`https://weather-app.projects.jaspal.dev`

## Description

The Weather App is a comprehensive tool designed to provide detailed weather forecasts. It offers 10-day future forecasts with hourly updates, displays the current temperature, and provides hourly forecasts for the current day. The app features both day and night modes for user comfort.

One of its key functionalities is preserving the location state. Even after refreshing the page, the app retains the search location query in the URL query, ensuring a seamless user experience.

## Technologies Used
**React**: Developed without using create-react-app or similar tools, the app was built entirely from scratch.  
**Webpack**: Custom webpack configuration was utilized, with a single webpack file serving both production and development environments.  
**Babel**: Integrated with webpack for transpiling JavaScript code.  
**React Fast Refresh**: Enabled hot reloading to facilitate rapid development iterations while maintaining component state.  
**Webpack Dev Server**: Implemented for live reloading during development
### Linting and Formatting Tools:
**Stylelint**: Ensured consistent CSS code formatting.  
**ESLint**: Enforced JavaScript code quality standards.  
**Prettier**: Automated code formatting to maintain a consistent style across the codebase.  
**Husky**: Configured Git hooks for automated tasks like linting and formatting before commits.  
**Lint-Staged**: Optimized linting and formatting processes by running them only on staged files.  
**Commitlint**: Enforced conventional commit message formats for clearer commit history.

## Installation
1. Clone the repository
1. Install extensions pack in vs code `https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack` 
1. Navigate to the project directory:
1. Install dependencies
`npm install`
## Usage
1. To start the development server: `npm start`
1. This will launch the app in your default web browser and automatically reload it whenever you change the code.
1. To build the production-ready bundle: `npm run build`
1. This command will build an optimised app in the dist directory.

## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.
