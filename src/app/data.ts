import { User } from './types';

export const users: User[] = [
    {
        id: 1, name: 'Rafo', todoList: [
            { id: 1, title: 'Gnal varsaviranoc' },
            { id: 2, title: 'Pamidor arnel' },
            { id: 3, title: 'React sovorel' },
        ]
    },

    {
        id: 2, name: 'Gugo', todoList: [
            { id: 4, title: 'Sovorel inputner' },
            { id: 5, title: 'Sovorel outputner' },
            { id: 6, title: 'Hac utel' },
        ]
    },

    {
        id: 3, name: 'Rob', todoList: [
            { id: 7, title: 'Hipotek pakel' },
            { id: 8, title: 'Gnal bank' },
        ]
    },
]