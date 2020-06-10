import React from "react";
import styles from "./PokemonItem.module.scss";

const PokemonItem = ({ pokemon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardName}>{pokemon.name}</div>
            <div className={styles.cardImage}>
                <img src={pokemon.imageUrl} alt={pokemon.name} />
            </div>
            <div className={styles.cardInfo}>
                <p>{pokemon.supertype}</p>
                <p>{pokemon.subtype}</p>
                <p>{pokemon.rarity}</p>
            </div>
        </div>
    );
};

export default PokemonItem;
