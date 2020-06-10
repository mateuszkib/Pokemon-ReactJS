import React, { useState, useEffect } from "react";
import styles from "./Pokemons.module.scss";
import PokemonItem from "./PokemonItem";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    const pageSize = 4;
    const API_URL = "https://api.pokemontcg.io/v1/cards";

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = async () => {
        await fetch(`${API_URL}?page=${page}&pageSize=${pageSize}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPokemons(data.cards);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles.wrapper}>
            {pokemons.map((pokemon) => (
                <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default Pokemons;
