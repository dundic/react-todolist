import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

//CRUD
// - критерии компонента это повторяемость и дублирование
// - создание понятной структуры

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    //BLL
    const todolistTitle_1 = 'What to learn'
    const todolistTitle_2 = 'What to buy'
    const todolistTitle_3 = 'What to read'

    const tasks1: Array<TaskType> = [
         {id: 1, title: 'HTML&CSS', isDone: true},
         {id: 2, title: 'JS/TS', isDone: true},
         {id: 3, title: 'React', isDone: false}
    ]

    const tasks2: TaskType[] = [
        {id: 4, title: 'Meat', isDone: true},
        {id: 5, title: 'Beer', isDone: true},
        {id: 6, title: 'Water', isDone: true},
        {id: 7, title: 'Bread', isDone: false},
        {id: 8, title: 'Salad', isDone: false},
    ]


    return (
        <div className="App">
            <Todolist title={todolistTitle_1} tasks={tasks1}/>
            <Todolist title={todolistTitle_2} tasks={tasks2}/>
        </div>
    );
}

export default App;
