import React, {JSXElementConstructor} from "react";
import {TaskType} from "./App";
import {Button} from "./Button";
import {TodolistHeader} from "./TodolistHeader";
import {AddForm} from "./AddForm";
import {FilterButtons} from "./FilterButtons";


type TodolistPropsType = {
    title: string
    tasks: TaskType[]
}

export function Todolist(props: TodolistPropsType) {
    // условный рендеринг
    const tasksList = props.tasks.length === 0
            ? <span>Your todolist is empty</span>
            : <ul>
                {
                    props.tasks.map(t => {
                        return (
                                <li>
                                    <input type="checkbox" checked={t.isDone}/>
                                    <span>{t.title}</span>
                                </li>
                        )
                    })
                }
            </ul>

    return (
            <div className={'todolist'}>
                <TodolistHeader titleHeader={props.title}/>
                <AddForm/>
                {tasksList}
                <FilterButtons/>
            </div>
    )
}