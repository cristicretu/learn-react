import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";

export interface Meme {
  id: string;
  name: string;
  url: string;
}

function App() {
  const url = "https://api.imgflip.com/get_memes";
  const [memes, setMemes] = useState<Meme[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>();

  const removeSetMeme = () => {
    setSelectedMeme(null);
  };
  useEffect(() => {
    fetch(url).then((res) =>
      res.json().then((data) => setMemes(data.data.memes))
    );
  }, []);

  return !selectedMeme ? (
    <div className="mx-auto max-w-2xl bg-gray-100 border-2 border-gray-300 p-10">
      <h1 className="mx-auto font-bold text-3xl text-center mb-8">
        Choose a meme
      </h1>
      <div className="flex flex-col space-y-4 ">
        {memes.map((meme) => (
          <MemeCard
            key={meme.id}
            id={meme.id}
            name={meme.name}
            url={meme.url}
            setSelectedMeme={setSelectedMeme}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="mx-auto max-w-2xl bg-gray-100 border-2 border-gray-300 p-10">
      <button onClick={removeSetMeme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hover:scale-110 bg-gray-300 rounded-full p-1 transform h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <img
        className="w-96 mx-auto"
        alt={selectedMeme.name}
        src={selectedMeme.url}
      />
    </div>
  );
}

export default App;
