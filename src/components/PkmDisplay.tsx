import React from "react";
import { PkmSpriteDisplayProps } from "../types/PkmSpriteDisplay";

const PkmSpriteDisplay: React.FC<PkmSpriteDisplayProps> = ({
  pokemonName,
  spriteUrl,
  error,
}) => {
  return (
    <div>
      {error && <p>{error}</p>}

      {spriteUrl && (
        <div>
          <img src={spriteUrl} alt={pokemonName} />
        </div>
      )}
    </div>
  );
};

export default PkmSpriteDisplay;
