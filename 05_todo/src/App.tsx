import React, { useState } from "react";
import DatePicker from "react-datepicker";
export interface Task {
    title: string;
    description?: string;
    date: Date;
    points: number;
    isCompleted: boolean;
}

function App() {
    const [title, setTitle] = useState<string>("");
    const [descr, setDescr] = useState<string>("");
    const [points, setPoints] = useState<number>(0);
    const [startDate, setStartDate] = useState<Date>(new Date());

    const [warning, setWarning] = useState<string>("");

    const [todos, setTodos] = useState<Array<Task>>([]);

    // TODO ADD LOCALSTORAGE
    // useEffect(() => {
    //     const existingTodos = localStorage.getItem("todos");
    //     // setTodos(existingTodos ? JSON.parse(existingTodos) : "");
    //     if (existingTodos) console.log(JSON.parse(existingTodos));
    // }, [todos]);

    const handleSubmit = () => {
        if (title.length < 1) {
            setWarning("Title is mandatory, please use a title for your todo!");
            return;
        }

        const newTask = [
            ...todos,
            {
                title: title,
                date: startDate,
                points: points,
                isCompleted: false,
                description: descr,
            },
        ];

        setTodos(newTask);
        // localStorage.setItem("todos", JSON.stringify(newTask));
        console.log(todos);
        clear();
    };

    const clear = () => {
        setTitle("");
        setDescr("");
        setPoints(0);
        setStartDate(new Date());
    };

    return (
        <div className="bg-blue-200 rounded-md max-w-2xl mx-auto h-screen">
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
                {warning && (
                    <h1 className="text-red-500 font-bold">{warning}</h1>
                )}
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
                    <div
                        className="bg-blue-300 flex flex-col rounded-md p-2"
                        key={todo.title}
                    >
                        <div className="flex justify-between items-center">
                            <h1>{todo.title}</h1>
                            <h3>
                                {todo.points}{" "}
                                {todo.points === 1 ? "point" : "points"}
                            </h3>
                        </div>
                        {/* <p>{todo.date}</p> */}
                        <p>{todo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
