export type GalleryItemType = 'overworld' | 'underground' | 'castle' | 'athletic' | 'water';

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  world: string;
  type: GalleryItemType;
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert';
  enemies?: string[];
  powerUps?: string[];
  secrets?: number;
  coinsAvailable?: number;
  timeLimit?: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "World 1-1",
    description: "The iconic first level where your adventure begins",
    image: "/img/world-1.webp",
    world: "1-1",
    type: "overworld",
    difficulty: "easy",
    enemies: ["Goomba", "Koopa Troopa"],
    powerUps: ["Super Mushroom", "Fire Flower"],
    secrets: 2,
    coinsAvailable: 25,
    timeLimit: 400
  },
  {
    id: 2,
    title: "World 1-2",
    description: "Underground pipes and coin-filled tunnels",
    image: "/img/world-1-2.webp",
    world: "1-2",
    type: "underground",
    difficulty: "easy",
    enemies: ["Goomba", "Piranha Plant"],
    powerUps: ["Super Mushroom"],
    secrets: 3,
    coinsAvailable: 50,
    timeLimit: 400
  },
  {
    id: 3,
    title: "World 1-4",
    description: "Bowser's fortress - cross the lava and grab the axe",
    image: "/img/clastle-fortress.webp",
    world: "1-4",
    type: "castle",
    difficulty: "medium",
    enemies: ["Bowser", "Fire Bar", "Podoboo"],
    powerUps: [],
    secrets: 1,
    coinsAvailable: 0,
    timeLimit: 300
  },
  {
    id: 4,
    title: "World 2-1",
    description: "A classic overworld run through the Mushroom Kingdom",
    image: "/img/world-2-1.webp",
    world: "2-1",
    type: "overworld",
    difficulty: "medium",
    enemies: ["Goomba", "Koopa Troopa", "Piranha Plant"],
    powerUps: ["Super Mushroom", "Starman"],
    secrets: 2,
    coinsAvailable: 35,
    timeLimit: 400
  },
  {
    id: 5,
    title: "World 2-2",
    description: "Swimming through coral and dodging Bloopers",
    image: "/img/coral-reef.webp",
    world: "2-2",
    type: "water",
    difficulty: "hard",
    enemies: ["Cheep Cheep", "Blooper"],
    powerUps: [],
    secrets: 1,
    coinsAvailable: 20,
    timeLimit: 400
  },
  {
    id: 6,
    title: "World 3-1",
    description: "Bouncing across platforms high above the ground",
    image: "/img/world-3-1.webp",
    world: "3-1",
    type: "athletic",
    difficulty: "medium",
    enemies: ["Koopa Paratroopa", "Lakitu", "Spiny"],
    powerUps: ["Fire Flower", "Starman"],
    secrets: 2,
    coinsAvailable: 40,
    timeLimit: 400
  },
  {
    id: 7,
    title: "World 4-2",
    description: "A maze-like underground level full of Buzzy Beetles",
    image: "/img/world-4-2.webp",
    world: "4-2",
    type: "underground",
    difficulty: "medium",
    enemies: ["Buzzy Beetle", "Goomba"],
    powerUps: ["Super Mushroom", "Fire Flower"],
    secrets: 3,
    coinsAvailable: 45,
    timeLimit: 400
  },
  {
    id: 8,
    title: "World 4-4",
    description: "A maze fortress guarded by Bowser's fire breath",
    image: "/img/world-4-4.webp",
    world: "4-4",
    type: "castle",
    difficulty: "hard",
    enemies: ["Bowser", "Fire Bar"],
    powerUps: [],
    secrets: 1,
    coinsAvailable: 0,
    timeLimit: 300
  },
  {
    id: 9,
    title: "World 6-1",
    description: "Tricky terrain with staircases and Hammer Bros",
    image: "/img/world-6-1.webp",
    world: "6-1",
    type: "overworld",
    difficulty: "hard",
    enemies: ["Hammer Bro", "Koopa Troopa"],
    powerUps: ["Super Mushroom", "1-Up Mushroom"],
    secrets: 3,
    coinsAvailable: 40,
    timeLimit: 400
  },
  {
    id: 10,
    title: "World 7-2",
    description: "Long underwater stretch guarded by Cheep Cheeps",
    image: "/img/world-7-2.webp",
    world: "7-2",
    type: "water",
    difficulty: "hard",
    enemies: ["Cheep Cheep", "Bloober"],
    powerUps: ["Starman"],
    secrets: 1,
    coinsAvailable: 15,
    timeLimit: 400
  },
  {
    id: 11,
    title: "World 8-4",
    description: "The final confrontation with the Koopa King",
    image: "/img/world-8-4.webp",
    world: "8-4",
    type: "castle",
    difficulty: "expert",
    enemies: ["Bowser", "Hammer Bro", "Fire Bar", "Podoboo"],
    powerUps: ["Fire Flower"],
    secrets: 0,
    coinsAvailable: 0,
    timeLimit: 400
  },
  {
    id: 12,
    title: "World 3-3",
    description: "Precision platforming over shifting Skewer blocks",
    image: "/img/world-3-3.webp",
    world: "3-3",
    type: "athletic",
    difficulty: "expert",
    enemies: ["Koopa Troopa", "Spiny"],
    powerUps: ["Super Mushroom", "Fire Flower", "Starman"],
    secrets: 3,
    coinsAvailable: 60,
    timeLimit: 400
  }
];

// Helper functions
export const getTypeStyle = (type: GalleryItemType): string => {
  const styles: Record<GalleryItemType, string> = {
    'overworld': 'bg-mario-green text-white',
    'underground': 'bg-mario-brown text-white',
    'castle': 'bg-mario-red text-white',
    'athletic': 'bg-mario-blue text-white',
    'water': 'bg-blue-600 text-white'
  };
  return styles[type] || 'bg-gray-600 text-white';
};

export const getDifficultyColor = (difficulty?: string): string => {
  const colors: Record<string, string> = {
    'easy': 'text-green-400',
    'medium': 'text-yellow-400',
    'hard': 'text-orange-400',
    'expert': 'text-red-400'
  };
  return difficulty ? colors[difficulty] || 'text-gray-400' : 'text-gray-400';
};

export const getItemsByType = (type: GalleryItemType): GalleryItem[] => {
  return galleryItems.filter(item => item.type === type);
};

export const getItemsByDifficulty = (difficulty: string): GalleryItem[] => {
  return galleryItems.filter(item => item.difficulty === difficulty);
};

export const getItemById = (id: number): GalleryItem | undefined => {
  return galleryItems.find(item => item.id === id);
};

export const getAllTypes = (): GalleryItemType[] => {
  return Array.from(new Set(galleryItems.map(item => item.type)));
};

export const getGalleryStats = () => {
  return {
    totalWorlds: galleryItems.length,
    totalLevels: galleryItems.filter(item => item.type === 'overworld').length,
    totalCastles: galleryItems.filter(item => item.type === 'castle').length,
    totalCoins: galleryItems.reduce((sum, item) => sum + (item.coinsAvailable || 0), 0),
    totalSecrets: galleryItems.reduce((sum, item) => sum + (item.secrets || 0), 0)
  };
};