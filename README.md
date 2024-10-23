```markdown
# Pokémon Search App

Welcome to the Pokémon Search App! This application allows users to search for Pokémon by name or ID, view their details, and navigate through the Pokémon using Previous and Next buttons.

## Live Demo

You can view the live application [here](https://pokemon-search-app-ashen.vercel.app/).

## Features

- Search for Pokémon by name or ID.
- Display Pokémon details, including name, ID, and sprite image.
- Navigate through Pokémon with Previous and Next buttons.
- Responsive design with Tailwind CSS.
- Caching mechanism to store fetched Pokémon data in local storage.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Axios (for API calls)
- Vite (for development server)

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js: https://nodejs.org/ (v14 or later)
- npm: https://www.npmjs.com/get-npm (comes with Node.js)

## Getting Started

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

Clone this repository to your local machine using:

```bash
git clone https://github.com/Tekdokto/pokemon-search.git
```

Replace `Tekdokto` with your GitHub username or the appropriate path.

### 2. Navigate to the Project Directory

Change to the project directory:

```bash
cd pokemon-search
```

### 3. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 4. Start the Development Server

Start the development server with the following command:

```bash
npm start
```

This will launch the application in your default web browser, typically at `http://localhost:3000`.

### 5. Build for Production

To create an optimized build for production, run:

```bash
npm run build
```

The output will be located in the `dist` directory.

## Folder Structure

```plaintext
my-pokemon-app/
├── public/                  # Static files
│   └── index.html          # Entry point for the application
├── src/                     # Source files
│   ├── components/          # React components
│   │   └── Pokemon.tsx      # Component to display Pokémon details
│   ├── managements/         # Hooks and management files
│   │   └── hooks/           # Custom hooks for API management
│   │       └── api.ts       # API logic
│   ├── App.tsx              # Main application component
│   ├── index.css            # Main CSS file for styles
│   ├── index.tsx            # Entry point for the React app
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Usage

1. Open the application in your web browser.
2. Enter the name or ID of a Pokémon in the input field.
3. Click the **Search** button to fetch and display the Pokémon's details.
4. Use the **Previous** and **Next** buttons to navigate through Pokémon.

## Caching Mechanism

The application caches Pokémon data in the browser's local storage. This prevents unnecessary API calls for previously fetched Pokémon.

To clear the cache for a specific Pokémon, you can modify the code in the `clearCachedPokemon` function in the `api.ts` file.

## Testing

The application includes automated tests using Jest and Testing Library. To run the tests, execute the following command:

```bash
npm test
```

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is open source and available under the MIT License as the LICENSE.

## Acknowledgements

- PokéAPI: https://pokeapi.co/ for providing Pokémon data.
- Tailwind CSS: https://tailwindcss.com/ for the beautiful UI framework.
- React: https://reactjs.org/ for building user interfaces.
- Vercel: https://vercel.com/ for deploying the pokemon search application
```
