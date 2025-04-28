import React, { useState } from "react";
import PkmSearchForm from "./PkmSearchForm";
import PkmSpriteDisplay from "./PkmSpriteDisplay";

const PkmSpriteFetcher: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [spriteUrl, setSpriteUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const fetchPokemonSprite = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Pokémon not found!");
      }

      const data = await response.json();
      setSpriteUrl(data.sprites.other.showdown.front_default);
      setError("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setSpriteUrl("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchPokemonSprite();
  };

  return (
    <div>
      <h1>Search Pokémon Sprite</h1>
      <PkmSearchForm
        pokemonName={pokemonName}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <PkmSpriteDisplay
        pokemonName={pokemonName}
        spriteUrl={spriteUrl}
        error={error}
      />
    </div>
  );
};

export default PkmSpriteFetcher;
