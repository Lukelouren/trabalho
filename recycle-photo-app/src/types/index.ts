export interface Photo {
    id: string;
    url: string;
    description: string;
    recyclable: boolean;
}

export interface Points {
    totalPoints: number;
    pointsEarned: number;
    pointsHistory: Array<{
        photoId: string;
        points: number;
        date: Date;
    }>;
}