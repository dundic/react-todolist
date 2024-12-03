type TodolistHeaderPropsType = {
    titleHeader: string
}

export const TodolistHeader = ({titleHeader}: TodolistHeaderPropsType) => {
    return <h3>{titleHeader}</h3>
}