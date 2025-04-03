'use client';
import React, { useState } from "react";
import "./Pokedex.css";

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
}

export default function Page() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  async function getPokemon() {
    if (!searchTerm) {
      alert("Please enter a Pokémon name.");
      return;
    }

    setLoading(true);
    setPokemon(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);

      if (!response.ok) {
        alert("You probably misspelled the name or used uppercase. Try again!");
        throw new Error("Pokémon not found");
      }

      const data: Pokemon = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1 className="title">Pokédex</h1>

      <div className="search-bar">
        <input
          style={{width:700}}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Pokémon Name [ONLY LOWERCASE]"
          className="search-input"
        />
        <button onClick={getPokemon} className="search-button">Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {pokemon && (
        <div className="pokedex">
          <div className="pokedex-screen">
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>

          <div className="pokedex-info">
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
          </div>


          <div className="light red-light"></div>
          <div className="light blue-light"></div>
        </div>
      )}
    </div>
  );
}
