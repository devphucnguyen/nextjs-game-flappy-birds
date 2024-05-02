export interface IGameOver {
    curr: number;
    message: string;
}

export interface IMyScore {
    maxScore: number;
    currentRanking: number;
}

export interface IGift {
    id?: number;
    name?: string;
    detail?: IGiftDetail[];
    condition?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface IGiftDetail {
    gift?: string;
    capacity?: number;
    redeemed?: number;
}
