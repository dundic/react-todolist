import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from './App';
import {TodolistHeader} from './TodolistHeader';


type TodolistPropsType = {
    title: string
    filter: FilterValuesType
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeFilter: (nextFilter: FilterValuesType) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: TodolistPropsType) {

    let [newTaskTitle, setNewTaskTitle] = useState('')
    let [error, setError] = useState<string | null>(null)


    function onChangeNewTitleHandler(e: ChangeEvent<HTMLInputElement>) {
        setNewTaskTitle(e.currentTarget.value)
    }

    function onKeyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }

    function addTask() {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim())
            setNewTaskTitle('')
        } else {
            setError('Field is required')
        }
    }

    const onAllClickHandler = () => props.changeFilter('all')
    const onActiveClickHandler = () => props.changeFilter('active')
    const onCompletedClickHandler = () => props.changeFilter('completed')


    //условный рендеринг
    const tasksLists = props.tasks.length === 0
            ? <span>Your todolist is empty</span>
            : <ul>
                {
                    props.tasks.map(t => {
                                const onRemoveHandler = () => {
                                    props.removeTask(t.id)
                                }
                                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                    props.changeTaskStatus(t.id, e.currentTarget.checked)
                                }
                                return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                                    <input type="checkbox"
                                           onChange={onChangeHandler}
                                           checked={t.isDone}
                                    />
                                    <span>{t.title}</span>
                                    <button onClick={onRemoveHandler}>x</button>
                                </li>
                            }
                    )
                }
            </ul>

    return (
            <div className={'todolist'}>
                <TodolistHeader titleHeader={props.title}/>
                <div>
                    <input className={error ? 'error' : ''}
                           value={newTaskTitle}
                           onChange={onChangeNewTitleHandler}
                           onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={() => addTask()}>+</button>
                    {error && <div className={'error-message'}>{error}</div>}
                </div>
                {tasksLists}
                <div>
                    <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All
                    </button>
                    <button className={props.filter === 'active' ? 'active-filter' : ''}
                            onClick={onActiveClickHandler}>Active
                    </button>
                    <button className={props.filter === 'completed' ? 'active-filter' : ''}
                            onClick={onCompletedClickHandler}>Completed
                    </button>
                </div>
            </div>
    )
}
