import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyCvuJyjsiiK1mnvTgO6QrmRyAW681AdMec';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".container"));