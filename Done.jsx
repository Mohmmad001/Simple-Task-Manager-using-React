import './App.css';
import Task from "./Task.jsx"
import { useContext } from 'react';
import { taskListContext } from './App.jsx';

export default function Done()
{
   
  const { tasksListData, setTaskToEdit } = useContext(taskListContext);
  console.log("DONE PAGE:", tasksListData);

   function ListTasks() {
       return tasksListData.filter((task) => {
             if(task.done){
                return true;
             }
             return false;
        }).map((task)=>{
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
