import { Task } from "../App";
import { useState, useEffect } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const TaskCard = (props: Task) => {
  const [completed, setCompleted] = useState<boolean>(props.isCompleted);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const handleDelete = () => {
    setIsDeleted(true);
    props.setAllTodos(
      props.allTodos.splice(props.allTodos.indexOf(props.title) - 1, 1)
    );

    localStorage.setItem("todos", JSON.stringify(props.allTodos));
  };

  // TODO implement completed function
  const handleComplete = () => {
    setCompleted(!completed);
    // props.isCompleted = completed;
  };

  return isDeleted === false ? (
    <div className="bg-blue-300 flex flex-col rounded-md p-2">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <h1 className="font-semibold text-2xl">{props.title}</h1>
          {/* <div> */}
          <div className="flex justify-center space-x-2 items-center">
            <div
              className={classNames(
                "relative rounded-full w-12 h-6 transition duration-200 ease-linear",
                completed === true ? "bg-green-400" : "bg-gray-400"
              )}
            >
              <input
                type="checkbox"
                id="toggle"
                name="toggle"
                className="appearance-none w-full h-full active:outline-none focus:outline-none"
                onClick={handleComplete}
              />
            </div>
            <h1>Completed</h1>
          </div>
          <button
            className="flex space-x-2 items-center"
            onClick={handleDelete}
          >
            <h2>Delete</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>{" "}
          </button>
        </div>
        <h3 className="text-gray-600">
          {props.points} {props.points === 1 ? "point" : "points"}
        </h3>
      </div>
      <p className="text-gray-600 text-sm">{props.date}</p>
      <p>{props.description}</p>
    </div>
  ) : (
    <h1></h1>
  );
};
