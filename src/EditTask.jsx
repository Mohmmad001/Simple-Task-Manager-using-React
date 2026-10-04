import "./EditTask.css"
import { useState } from "react";
import { taskListContext } from "./App";
import { useContext } from "react";


export default function EditTask({task, edit})
{
    const [taskData, setTask] = useState(task);
    const {tasksListData, setTasksList} = useContext(taskListContext);

    function handleTitleChange(event)
    {
        setTask({...taskData, title: event.target.value});
    }

    function handleDetailsChange(event)
    {
        setTask({...taskData, details: event.target.value});
    }

    function submitChange(event)
    {
        event.preventDefault();

        let taskDataCopy = tasksListData.map((obj) => {
            if (obj.id === taskData.id) {
                return taskData;
            }

            return obj;
        });

        setTasksList(taskDataCopy);
         window.localStorage.setItem("tasks", JSON.stringify(taskDataCopy));
        Cancel();
    }

    function Cancel()
    {
        edit(null);
    }

    return (
        <div className="edit-task">

            <form className="edit-form" onSubmit={submitChange}>

                <h1>Edit Task</h1>
                <hr />

                <input
                    type="text"
                    value={taskData.title}
                    onChange={handleTitleChange}
                />

                <input
                    type="text"
                    value={taskData.details}
                    onChange={handleDetailsChange}
                />

                <button type="submit">Okay</button>
                <button type="button" onClick={Cancel}>Cancel</button>

            </form>

        </div>
    );
}