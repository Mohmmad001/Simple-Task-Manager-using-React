import './App.css';
import { createContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import All from './All.jsx';
import Done from './done.jsx';
import NotDone from './NotDone.jsx';
import Container from './Container.jsx';
import Header from './Header.jsx';
import NavList from './NavList.jsx';
import AddTask from './AddTask.jsx';
import EditTask from './EditTask.jsx';


let check = window.localStorage.getItem("tasks");

export const TasksList = check
    ? JSON.parse(check)
    : [
        { id: 1, title: "task1", details: "this is task1", done: false },
        { id: 2, title: "task2", details: "this is task2", done: false }
    ];

if (!check) {
    window.localStorage.setItem("tasks", JSON.stringify(TasksList));
}


export const taskListContext = createContext();

function App() {
    const [tasksListData, setTasksList] = useState(TasksList);
    const [nextId, setNextId] = useState(4);
    const [taskToEdit, setTaskToEdit] = useState(null);

    console.log(tasksListData);

    return (
        <taskListContext.Provider
            value={{
                tasksListData,
                setTasksList,
                nextId,
                setNextId,
                taskToEdit,
                setTaskToEdit
            }}
        >
            <Container>
                <Header />
                <NavList />

                <Routes>
                    <Route path="/home" element={<All />} />
                    <Route path="/done" element={<Done />} />
                    <Route path="/not-done" element={<NotDone />} />
                    <Route path="*" element={<h1>404 page was not found</h1>} />
                </Routes>

                <AddTask id={nextId} setNextId={setNextId} />

                {taskToEdit &&
                    <EditTask task={taskToEdit} edit={setTaskToEdit} />
                }

            </Container>
        </taskListContext.Provider>
    );
}

export default App;