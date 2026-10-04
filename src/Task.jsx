import "./Task.css";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { taskListContext } from "./App";
import { useContext } from "react";

export default function Task({ task, edit }) {
    const { tasksListData, setTasksList } = useContext(taskListContext);

    function handleCheck() {
        let tasks = [...tasksListData];
        tasks = tasks.map((obj) => {
            if (obj.id === task.id) {
                console.log(obj.done);
                return { ...obj, done: !obj.done };
            }

            return obj;
        });

        setTasksList(tasks);
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function handleDelete() {
        let tasks = [...tasksListData];

        tasks = tasks.filter((obj) => {
            if (obj.id === task.id) {
                return false;
            }

            return true;
        });

        setTasksList(tasks);
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function handleEdit() {
        edit(task);
    }

    return (
        <div className="task">

            <h1>{task.title}</h1>

            <div className="task-info">

                <p>{task.details}</p>

                <div className="actions">

                    <CheckIcon
                        className={`check ${task.done ? "done" : "not-done"}`}
                        onClick={handleCheck}
                    />

                    <EditIcon
                        className="edit"
                        onClick={handleEdit}
                    />

                    <DeleteIcon
                        className="delete"
                        onClick={handleDelete}
                    />

                </div>

            </div>

        </div>
    );
}