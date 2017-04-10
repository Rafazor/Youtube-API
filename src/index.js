import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyCvuJyjsiiK1mnvTgO6QrmRyAW681AdMec';

YTSearch({key: API_KEY, term: 'Zalau'}, function(data) {
    console.log(data);
})

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".container"));