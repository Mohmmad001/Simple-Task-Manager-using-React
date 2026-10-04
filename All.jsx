import './App.css';
import Task from "./Task.jsx"
import { useContext } from 'react';
import { taskListContext } from './App.jsx';


export default function All()
{
   
    const { tasksListData, setTaskToEdit } = useContext(taskListContext);
    
   function ListTasks() {
        return tasksListData.map((task) => {
            return (
                <Task
                    key={task.id}
                    task={task}
                    edit={setTaskToEdit}     
                />
            );
        });
    }

    return (
                  <div className="task-area"> 
                    {ListTasks()}
                  </div>     
        
                       
        
                       
    );
}
