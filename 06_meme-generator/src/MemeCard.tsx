interface Props {
  id?: string;
  name: string;
  url: string;
  setSelectedMeme?: any;
}

export const MemeCard: React.FC<Props> = ({
  id,
  name,
  url,
  setSelectedMeme,
}) => {
  const handleMemeSelect = () => {
    setSelectedMeme({ id: id, name: name, url: url });
  };

  return (
    <button
      onClick={handleMemeSelect}
      className="bg-gray-200 rounded-md flex overflow-hidden transform transition hover:scale-105 hover:bg-red-300"
    >
      <img className="w-80" alt={name} src={url} />
      <h1 className=" mx-auto my-auto p-2 font-semibold text-xl">{name}</h1>
    </button>
  );
};

export default MemeCard;
