import React from 'react';
import Header from './components/Header';
import Card from './components/Card';

import {useFetchUserData} from './utils/hooks';

const App = () => {

    const { error, isLoading  } = useFetchUserData();

    return(
        <div className='App'>
            <div className='mainSection'>
                <Header />
                {isLoading && <h2 className='message'>Loading Data</h2>}
                <Card />
                {error && <h2 className='message'>{error}</h2>}
            </div>
        </div>
    )
};

export default App;