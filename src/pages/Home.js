import React from 'react';

import Search from '../components/Search';
import Cluster from '../components/Cluster';

const Home = (props) => (
    <>
        <section className="home">
            <h1>Welcome to the Rick and Morty World!</h1>
            <h2>What are you looking for?</h2>
            <Search />
            <Cluster />
        </section>
    </>
)

export default Home;