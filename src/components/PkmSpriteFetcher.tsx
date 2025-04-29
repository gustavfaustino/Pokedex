import React, { useState } from "react";
import PkmSearchForm from "./PkmSearchForm";
import PkmSpriteDisplay from "./PkmDisplay";

const PkmSpriteFetcher: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [spriteUrl, setSpriteUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const fetchPokemonSprite = async () => {
    if (!pokemonName.trim()) {
      setError("Por favor, insira o nome de um Pokémon.");
      setSpriteUrl("");
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Pokémon não encontrado! Verifique o nome digitado.");
      }

      const data = await response.json();
      setSpriteUrl(data.sprites.other.showdown.front_default);
      setError("");
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocorreu um erro ao buscar o Pokémon."
      );
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
      <h1>PokeDex</h1>
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
