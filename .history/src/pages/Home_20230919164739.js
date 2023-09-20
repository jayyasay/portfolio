import React from 'react';
import { GlobalStyle  } from '../components/Navigation';

const H2 = styled.h2`
    color: var(--text-primary);
`

const Home = () => {
    return (
        <>
        <GlobalStyle />
        <H2>Home</H2>
        </>
    )
};

export default Home;