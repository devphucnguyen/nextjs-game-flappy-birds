export interface IRanking {
    ranking?: number;
    score?: number;
    user?: User;
}

interface User {
    name?: string;
    phone?: string;
    email?: string;
    avatar?: string;
}
