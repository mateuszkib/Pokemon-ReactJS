import React from "react";
import Header from "./layout/Header";
import Pokemons from "./components/Pokemons";
import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.app}>
            <main>
                <Header />
                <Pokemons />
            </main>
        </div>
    );
}

export default App;
