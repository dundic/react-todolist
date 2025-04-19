import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    //BLL
    let [tasks, setNextTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS/TS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
    ])
   let [filter, setNextFilter] = useState<FilterValuesType>('all')

    let filteredTasks: Array<TaskType> = tasks

    if (filter === 'active') {
        filteredTasks = tasks.filter(t => !t.isDone)
    }

    if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.isDone)
    }

    const changeFilter = (nextFilter: FilterValuesType) => {
        setNextFilter(nextFilter)
    }

    const changeStatus =(taskId: string, isDone: boolean) => {
        let task = tasks.find( t => t.id === taskId)
        if(task) {
            task.isDone = isDone
        }
        setNextTasks([...tasks])

    }

    const removeTask = (taskId: string) => {
        const nextState: Array<TaskType> = tasks.filter(t => t.id !== taskId)
        setNextTasks(nextState)

    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false,
        }
        const newTasks: Array<TaskType> = [newTask, ...tasks]
        setNextTasks(newTasks)
    }

    //UI
    return (
            <div className="App">
                <Todolist
                        title="What to learn"
                        tasks={filteredTasks}
                        removeTask={removeTask}
                        addTask={addTask}
                        changeFilter={changeFilter}
                        changeTaskStatus={changeStatus}
                        filter={filter}
                />
            </div>
    );
}

export default App;
