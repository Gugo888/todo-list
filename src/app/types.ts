export type Todo = {
    id: number;
    title: string;
}

export type User = {
    id: number;
    name: string;
    todoList: Todo[];
}