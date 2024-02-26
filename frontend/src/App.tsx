import {useState} from 'react';
import './App.css';
import {GetRandomImageUrl} from "../wailsjs/go/main/App";

function App() {
    const [randomImageUrl, setRandomImageUrl] = useState('');

    function getRandomImageUrl() {
        GetRandomImageUrl().then((result: string) => {
            setRandomImageUrl(result);
        })
    }

    return (
        <div id="App">
            <h1>Click below for a random dog!</h1>
            <img onClick={getRandomImageUrl} src={randomImageUrl} alt="No dog found" />
        </div>
    )
}

export default App
