import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import App from "./App";

// Mock the axios module for all tests
jest.mock("axios");

axios.get = jest.fn(); // Initialize the mock

test("Search for a Pokémon by name and display result", async () => {
  // Mocking the resolved value from the axios GET request
  (axios.get as jest.Mock).mockResolvedValue({
    data: {
      id: 1,
      name: "bulbasaur",
      sprites: { front_default: "bulbasaur_sprite_url" },
    },
  });

  // Render the App component
  render(<App />);

  // Simulate user typing 'bulbasaur' in the search input
  const input = screen.getByPlaceholderText(/Enter Pokémon name or ID/i);
  fireEvent.change(input, { target: { value: "bulbasaur" } });

  // Simulate clicking the 'Search' button
  const button = screen.getByText(/search/i);
  fireEvent.click(button);

  // Await the result after the API response is resolved
  const pokemonName = await screen.findByText(/bulbasaur/i);
  const pokemonId = await screen.findByText(/#1/i);
  const pokemonImage = (await screen.findByAltText(/bulbasaur/i)) as HTMLImageElement;

  // Assertions to check if the correct Pokémon details are rendered
  expect(pokemonName).toBeInTheDocument();
  expect(pokemonId).toBeInTheDocument();
  expect(pokemonImage.src).toBe("bulbasaur_sprite_url");
});

test("Switch to next Pokémon by clicking Next button", async () => {
  // First mock response: Bulbasaur
  (axios.get as jest.Mock).mockResolvedValueOnce({
    data: {
      id: 1,
      name: "bulbasaur",
      sprites: { front_default: "bulbasaur_sprite_url" },
    },
  });

  // Second mock response: Ivysaur
  (axios.get as jest.Mock).mockResolvedValueOnce({
    data: {
      id: 2,
      name: "ivysaur",
      sprites: { front_default: "ivysaur_sprite_url" },
    },
  });

  // Render the App component
  render(<App />);

  // Simulate user searching for 'bulbasaur'
  fireEvent.change(screen.getByPlaceholderText(/Enter Pokémon name or ID/i), {
    target: { value: "bulbasaur" },
  });
  fireEvent.click(screen.getByText(/search/i));

  // Simulate clicking the 'Next' button
  const nextButton = await screen.findByText(/Next/i);
  fireEvent.click(nextButton);

  // Await the result for the next Pokémon (Ivysaur)
  const ivysaurName = await screen.findByText(/ivysaur/i);
  const ivysaurId = await screen.findByText(/#2/i);
  const ivysaurImage = (await screen.findByAltText(/ivysaur/i)) as HTMLImageElement;

  // Assertions to check if the next Pokémon (Ivysaur) is displayed correctly
  expect(ivysaurName).toBeInTheDocument();
  expect(ivysaurId).toBeInTheDocument();
  expect(ivysaurImage.src).toBe("ivysaur_sprite_url");
});
