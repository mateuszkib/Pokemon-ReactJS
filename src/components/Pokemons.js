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
    }, [page]);

    const getPokemons = async () => {
        let data = await fetch(`${API_URL}?page=${page}&pageSize=${pageSize}`);
        let result = await data.json();
        let { cards } = result;

        if (page === 1) {
            setPokemons(cards);
        } else {
            setPokemons([...pokemons, ...cards]);
        }

        return result;
    };

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <>
            <div className={styles.wrapper}>
                {pokemons.map((pokemon) => (
                    <PokemonItem key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <div className={styles.button}>
                <button onClick={loadMore}>Load More</button>
            </div>
        </>
    );
};

export default Pokemons;
