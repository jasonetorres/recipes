# Recipe Finder

For the Datastax 12 Days of Codemas, I decided to create a simple React application that allows users to find recipes based on two ingredients. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and features Datastax products AstraDB and Langflow to create the database for recipe generation.

## Features

- **Ingredient Form**: Users can input two ingredients to search for recipes.
- **API Integration**: The application fetches recipes from an external API using the provided ingredients.
- **AstraDB**: Utilizes Datastax AstraDB for storing and retrieving recipe data efficiently.
- **Langflow**: Implements Langflow for natural language processing to enhance recipe search capabilities.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jasonetorres/recipes.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipes
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the application in development mode, run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits.

### Building for Production

To build the app for production, run:

```bash
npm run build
```

This will create a `build` folder with the production build of your app.

## Project Structure

- **src/App.js**: Main application component where the `fetchRecipes` function is defined.
  ```javascript:src/App.js
  startLine: 1
  endLine: 19
  ```

- **src/components/IngredientForm.js**: Component for the ingredient input form.
  ```javascript:src/components/IngredientForm.js
  startLine: 1
  endLine: 35
  ```

- **src/index.js**: Entry point of the application.
  ```javascript:src/index.js
  startLine: 1
  endLine: 17
  ```

- **public/index.html**: HTML template for the application.
  ```html:public/index.html
  startLine: 1
  endLine: 43
  ```

## Styling

The application uses CSS for styling. The main styles are located in:

- **src/components/IngredientForm.css**: Styles for the ingredient form.
  ```css:src/components/IngredientForm.css
  startLine: 1
  endLine: 49
  ```

## Testing

To run tests, use:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
