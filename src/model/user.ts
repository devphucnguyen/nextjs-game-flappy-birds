export interface ISession {
    access_token: string;
}

export interface IWhoAmI {
    user: User;
    game: Game;
}

export interface Game {
    maxScore: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    avatar: string;
    createdAt: Date;
}
