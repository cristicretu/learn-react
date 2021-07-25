import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
    const [Query, setQuery] = useState("Naruto");
    const [Results, setResults] = useState([]);

    const fetchData = () => {
        const url = `https://api.jikan.moe/v3/search/anime?q=${Query}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setResults([...data.results]);
            })
            .catch((error) => {
                alert("yoo error");
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center my-6 justify-center space-y-8 max-w-4xl mx-auto">
            {/* search box */}
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    className="bg-gray-200 border outline-none border-gray-300 rounded-l-md px-4 py-2"
                    placeholder="Naruto"
                />
                <button
                    onClick={fetchData}
                    className="bg-gray-300 rounded-r px-4 py-2 hover:bg-gray-500 hover:text-white transition"
                >
                    Search
                </button>
            </form>
            {/* component cards */}
            <div className="flex flex-col space-y-4">
                {Results.map((data, key) => (
                    <Card key={key} contents={data} />
                ))}
            </div>
        </div>
    );
}

export default App;
