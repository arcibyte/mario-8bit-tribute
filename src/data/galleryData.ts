export type GalleryItemType = 'level' | 'castle' | 'underground' | 'sky' | 'water' | 'ice' | 'desert' | 'volcano' | 'forest' | 'ghost';

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
    image: "/api/placeholder/400/300",
    world: "1-1",
    type: "level",
    difficulty: "easy",
    enemies: ["Goomba", "Koopa Troopa"],
    powerUps: ["Super Mushroom", "Fire Flower"],
    secrets: 2,
    coinsAvailable: 25,
    timeLimit: 400
  },
  {
    id: 2,
    title: "Castle Fortress",
    description: "Bowser's fortress - face the final challenge",
    image: "/api/placeholder/400/300",
    world: "1-4",
    type: "castle",
    difficulty: "hard",
    enemies: ["Bowser", "Fire Bar", "Podoboo"],
    powerUps: [],
    secrets: 1,
    coinsAvailable: 0,
    timeLimit: 300
  },
  {
    id: 3,
    title: "Underground Cavern",
    description: "Secret underground world full of coins",
    image: "/api/placeholder/400/300",
    world: "1-2",
    type: "underground",
    difficulty: "medium",
    enemies: ["Goomba", "Piranha Plant"],
    powerUps: ["Super Mushroom"],
    secrets: 3,
    coinsAvailable: 50,
    timeLimit: 400
  },
  {
    id: 4,
    title: "Sky Paradise",
    description: "High above the clouds on floating platforms",
    image: "/api/placeholder/400/300",
    world: "2-1",
    type: "sky",
    difficulty: "medium",
    enemies: ["Lakitu", "Spiny", "Paratroopa"],
    powerUps: ["Super Mushroom", "Starman"],
    secrets: 2,
    coinsAvailable: 35,
    timeLimit: 400
  },
  {
    id: 5,
    title: "Coral Reef",
    description: "Swimming with the fishes in deep waters",
    image: "/api/placeholder/400/300",
    world: "2-2",
    type: "water",
    difficulty: "hard",
    enemies: ["Cheep Cheep", "Blooper"],
    powerUps: [],
    secrets: 1,
    coinsAvailable: 20,
    timeLimit: 300
  },
  {
    id: 6,
    title: "Frozen Tundra",
    description: "Slippery frozen adventure with icy challenges",
    image: "/api/placeholder/400/300",
    world: "3-1",
    type: "ice",
    difficulty: "expert",
    enemies: ["Spiny", "Hammer Bro"],
    powerUps: ["Fire Flower", "Starman"],
    secrets: 4,
    coinsAvailable: 40,
    timeLimit: 350
  },
  {
    id: 7,
    title: "Desert Mirage",
    description: "Hot sandy plains with hidden treasures",
    image: "/api/placeholder/400/300",
    world: "3-2",
    type: "desert",
    difficulty: "medium",
    enemies: ["Dry Bones", "Fire Snake"],
    powerUps: ["Super Mushroom", "Fire Flower"],
    secrets: 3,
    coinsAvailable: 45,
    timeLimit: 400
  },
  {
    id: 8,
    title: "Volcanic Valley",
    description: "Lava-filled danger zone with fire everywhere",
    image: "/api/placeholder/400/300",
    world: "4-1",
    type: "volcano",
    difficulty: "expert",
    enemies: ["Podoboo", "Fire Bro", "Hothead"],
    powerUps: ["Fire Flower"],
    secrets: 2,
    coinsAvailable: 30,
    timeLimit: 300
  },
  {
    id: 9,
    title: "Mushroom Forest",
    description: "Giant mushrooms and thick vegetation",
    image: "/api/placeholder/400/300",
    world: "4-2",
    type: "forest",
    difficulty: "medium",
    enemies: ["Piranha Plant", "Wiggler", "Buzzy Beetle"],
    powerUps: ["Super Mushroom", "1-Up Mushroom"],
    secrets: 5,
    coinsAvailable: 55,
    timeLimit: 400
  },
  {
    id: 10,
    title: "Ghost House",
    description: "Spooky mansion filled with Boos and mysteries",
    image: "/api/placeholder/400/300",
    world: "4-3",
    type: "ghost",
    difficulty: "hard",
    enemies: ["Boo", "Big Boo", "Dry Bones"],
    powerUps: ["Starman"],
    secrets: 4,
    coinsAvailable: 15,
    timeLimit: 350
  },
  {
    id: 11,
    title: "Bowser's Castle",
    description: "The final confrontation with the Koopa King",
    image: "/api/placeholder/400/300",
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
    title: "Cloud Gardens",
    description: "Peaceful clouds with bouncing platforms",
    image: "/api/placeholder/400/300",
    world: "5-1",
    type: "sky",
    difficulty: "easy",
    enemies: ["Paratroopa", "Koopa Troopa"],
    powerUps: ["Super Mushroom", "Fire Flower", "Starman"],
    secrets: 3,
    coinsAvailable: 60,
    timeLimit: 400
  }
];

// Helper functions
export const getTypeStyle = (type: GalleryItemType): string => {
  const styles: Record<GalleryItemType, string> = {
    'level': 'bg-mario-green text-white',
    'castle': 'bg-mario-red text-white',
    'underground': 'bg-mario-brown text-white',
    'sky': 'bg-mario-blue text-white',
    'water': 'bg-blue-600 text-white',
    'ice': 'bg-blue-300 text-blue-900',
    'desert': 'bg-yellow-600 text-white',
    'volcano': 'bg-red-700 text-white',
    'forest': 'bg-green-700 text-white',
    'ghost': 'bg-purple-700 text-white'
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
    totalLevels: galleryItems.filter(item => item.type === 'level').length,
    totalCastles: galleryItems.filter(item => item.type === 'castle').length,
    totalCoins: galleryItems.reduce((sum, item) => sum + (item.coinsAvailable || 0), 0),
    totalSecrets: galleryItems.reduce((sum, item) => sum + (item.secrets || 0), 0)
  };
};