import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { TaskCard } from "./components/TaskCard";

export interface Task {
  title: string;
  description?: string;
  date: string;
  points: number;
  isCompleted: boolean;
  allTodos?: any;
  setAllTodos?: any;
}

function App() {
  const [title, setTitle] = useState<string>("");
  const [descr, setDescr] = useState<string>("");
  const [points, setPoints] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());

  const [warning, setWarning] = useState<string>("");

  const [todos, setTodos] = useState<Array<Task>>([]);

  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    if (existingTodos == null) {
      return;
    }
    const todosList = JSON.parse(existingTodos);
    setTodos((prevState) => [...prevState, ...todosList]);
  }, []);

  const handleSubmit = () => {
    if (title.length < 1) {
      setWarning("Title is mandatory, please use a title for your task!");
      return;
    } else {
      setWarning("");
    }

    const newTodo = {
      title: title,
      date: startDate.toISOString(),
      points: points,
      isCompleted: false,
      description: descr,
    };

    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    clear();
  };

  const clear = () => {
    setTitle("");
    setDescr("");
    setPoints(0);
    setStartDate(new Date());
  };

  return (
    <div className="bg-blue-200 rounded-md max-w-2xl mx-auto">
      <header className="flex  flex-col justify-center items-center pt-2">
        <h1 className="font-bold text-2xl"> TDooList </h1>
        <hr className="w-full bg-white border-solid	border-white border-2 mt-2" />
      </header>
      {/* create task */}
      <div className="bg-blue-300 p-10 flex flex-col space-y-4">
        <input
          type="text"
          value={title}
          className="rounded px-2"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {warning && <h1 className="text-red-500 font-bold">{warning}</h1>}
        <input
          type="text"
          value={descr}
          className="rounded px-2"
          placeholder="Description"
          onChange={(e) => setDescr(e.target.value)}
        />
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          className="px-2"
        />
        <div className="flex space-x-4 items-center">
          <h1>Number of points: </h1>
          <p>{points}</p>
          <button
            onClick={() => setPoints(points + 1)}
            className="bg-gray-100 rounded-md px-2 py-1"
          >
            Add points
          </button>
        </div>
        <button
          className="bg-gray-100 hover:bg-gray-900 hover:text-white transition rounded-md px-2 py-1"
          onClick={handleSubmit}
        >
          Save task
        </button>
      </div>
      {/* show tasks */}
      <div className="mt-2 px-4 py-2 flex flex-col space-y-4">
        {todos.map((todo) => (
          <TaskCard
            key={todo.title}
            title={todo.title}
            points={todo.points}
            description={todo.description}
            date={todo.date}
            isCompleted={todo.isCompleted}
            allTodos={todos}
            setAllTodos={setTodos}
          />
        ))}
      </div>
      {}
    </div>
  );
}

export default App;
