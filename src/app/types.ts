export type Todo = {
    id: number;
    title: string;
}

export type User = {
    id: number;
    name: string;
    todoList: Todo[];
}
export type Adress = {
        city: string;
        county: string  
}

export type Bank = {
    id: number;
    name: string;
    adress:Adress
}
