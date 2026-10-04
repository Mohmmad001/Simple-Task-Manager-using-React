import "./AddTask.css";
import { useState } from "react";
import { taskListContext } from "./App";
import { useContext } from "react";

export default function AddTask({id, setNextId})
{
    const [formData, setForm] = useState({
        id: id,
        title: "",
        details: "",
        done: false
    });

    const {tasksListData, setTasksList} = useContext(taskListContext);

    function HandleInputTitle(event)
    {
        setForm({...formData, title:event.target.value});
    }

    function HandleInputDetails(event)
    {
        setForm({...formData, details:event.target.value});
    }

    function CreateTask()
    {
        const newTasks = [
            ...tasksListData,
            {
                id:id,
                title: formData.title,
                details: formData.details,
                done:false
            }
        ];

        setTasksList(newTasks);

        setNextId(id + 1);

        window.localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    return (
        <div className="add-task">
            <form>

                <div className="inputs">

                    <input
                        type="text"
                        placeholder=" Add new task"
                        value={formData.title}
                        onChange={HandleInputTitle}
                    />

                    <input
                        type="text"
                        placeholder=" task details"
                        value={formData.details}
                        onChange={HandleInputDetails}
                    />

                </div>

                <button type="button" onClick={CreateTask}>
                    Add
                </button>

            </form>
        </div>
    );
}