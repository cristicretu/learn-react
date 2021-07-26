import Card from "./components/Card";
import { useState, useEffect } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function App() {
    const [Query, setQuery] = useState("Naruto");
    const [Results, setResults] = useState([]);
    const [showFav, setShowFav] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const fetchData = () => {
        const url = `https://api.jikan.moe/v3/search/anime?q=${Query}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.results);
                setResults([...data.results]);
            })
            .catch((error) => {
                alert("Error while fetching data, check console");
                console.log(error);
            });
    };

    const changeFav = () => {
        setShowFav(!showFav);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center my-6 justify-center space-y-8 max-w-4xl mx-auto">
            {/* search box */}
            <div className="flex flex-row space-x-8">
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

                {/* toggle button */}
                <div className="flex justify-center space-x-2 items-center">
                    <div
                        className={classNames(
                            "relative rounded-full w-12 h-6 transition duration-200 ease-linear",
                            showFav === true ? "bg-green-400" : "bg-gray-400"
                        )}
                    >
                        <label
                            htmlFor="toggle"
                            className={classNames(
                                "absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer",
                                showFav === true
                                    ? "translate-x-full border-green-400"
                                    : "translate-x-0 border-gray-400"
                            )}
                        />
                        <input
                            type="checkbox"
                            id="toggle"
                            name="toggle"
                            className="appearance-none w-full h-full active:outline-none focus:outline-none"
                            onClick={changeFav}
                        />
                    </div>
                    <h1>Show favorites</h1>
                </div>
            </div>
            {/* component cards */}
            <div className="flex flex-col space-y-4">
                {showFav &&
                    favorites.map((data, key) => (
                        <Card
                            className="transition"
                            key={key}
                            contents={data}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    ))}
                {!showFav &&
                    Results.map((data, key) => (
                        <Card
                            className="transition"
                            key={key}
                            contents={data}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    ))}
            </div>
        </div>
    );
}

export default App;
