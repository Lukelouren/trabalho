export interface Photo {
    id: string;
    url: string;
    type: string; // e.g., 'plastic', 'paper', 'metal', etc.
}

export interface Points {
    totalPoints: number;
    pointsBreakdown: Record<string, number>; // e.g., { plastic: 10, paper: 5 }
}

const pointsCriteria: Record<string, number> = {
    plastic: 10,
    paper: 5,
    metal: 15,
    glass: 20,
};

export function calculatePoints(photo: Photo): Points {
    const points = pointsCriteria[photo.type] || 0;
    return {
        totalPoints: points,
        pointsBreakdown: {
            [photo.type]: points,
        },
    };
}