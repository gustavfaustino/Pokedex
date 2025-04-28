import React from "react";
import { PkmSearchFormProps } from "../types/PkmSearchForm";

const PkmSearchForm: React.FC<PkmSearchFormProps> = ({ pokemonName, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={pokemonName}
        onChange={onInputChange}
        placeholder="Enter a Pokemon name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PkmSearchForm;