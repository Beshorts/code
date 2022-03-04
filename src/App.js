import React from 'react';
import Header from './components/Header';
import Card from './components/Card';


const App = () => {

    return(
        <div className='App'>
            <div className='mainSection'>
                <Header />
                <Card />
            </div>
        </div>
    )
};

export default App;