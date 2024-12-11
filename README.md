# Christmas Cookie Recipe Finder

## Overview
The Christmas Cookie Recipe finder was built for the 12 Days of Codemas event by Datastax. It is a web application built with React that allows users to search for delicious cookie recipes. This application leverages AstraDB as its backend to store and retrieve recipe data efficiently.

## Features
- **Search for Cookie Recipes**: Users can enter keywords to find cookie recipes that match their search criteria.
- **Recipe Display**: The application displays a list of recipes based on the search results, allowing users to select and view detailed information about each recipe.
- **Responsive Design**: The application is designed to be user-friendly and responsive, ensuring a great experience on both desktop and mobile devices.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **AstraDB**: A cloud-native database service that provides a scalable and reliable backend for storing recipe data.
- **Axios**: A promise-based HTTP client for making requests to the AstraDB API.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- An AstraDB account with a keyspace set up for storing cookie recipes.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cookie-recipe-search-tool.git
   cd cookie-recipe-search-tool
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of the project and add your AstraDB credentials:
   ```plaintext
   REACT_APP_ASTRA_DB_TOKEN=your_astra_db_token
   REACT_APP_ASTRA_DB_KEYSPACE=your_keyspace_name
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- Enter a keyword in the search bar to find cookie recipes.
- Click on a recipe to view its details.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks and Merry Christmas.