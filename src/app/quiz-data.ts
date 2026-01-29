// Quiz Questions
export const questions = [
  {
    id: 1,
    question: "It's Monday morning and you're running late. You...",
    answers: [
      { text: "Grab whatever's fastest and go", personality: "busy-bee" },
      { text: "Still make time for my usual ritual", personality: "cozy-comforter" },
      { text: "Try that new place on the way - adventure awaits!", personality: "bold-adventurer" },
      { text: "Make a perfect cup at home, like always", personality: "classic-traditionalist" },
    ],
  },
  {
    id: 2,
    question: "Your ideal coffee shop vibe is...",
    answers: [
      { text: "Cozy couches and warm lighting", personality: "cozy-comforter" },
      { text: "Minimal and modern - clean lines, good wifi", personality: "smooth-operator" },
      { text: "Quirky and eclectic with local art everywhere", personality: "creative-soul" },
      { text: "Classic café feel - wood, leather, newspapers", personality: "classic-traditionalist" },
    ],
  },
  {
    id: 3,
    question: "A friend asks for a coffee recommendation. You say...",
    answers: [
      { text: "Try the single origin pour over - it's incredible", personality: "bold-adventurer" },
      { text: "You can't go wrong with a good latte", personality: "smooth-operator" },
      { text: "Get the lavender honey thing - trust me", personality: "creative-soul" },
      { text: "Just get a cappuccino - it's perfect", personality: "classic-traditionalist" },
    ],
  },
  {
    id: 4,
    question: "How do you feel about trying new coffee drinks?",
    answers: [
      { text: "Always! The weirder the better", personality: "bold-adventurer" },
      { text: "Sometimes, if someone recommends it", personality: "smooth-operator" },
      { text: "I like creating my own custom orders", personality: "creative-soul" },
      { text: "I know what I like - why mess with it?", personality: "classic-traditionalist" },
    ],
  },
  {
    id: 5,
    question: "What matters most in your daily coffee?",
    answers: [
      { text: "Speed and efficiency", personality: "busy-bee" },
      { text: "Comfort and consistency", personality: "cozy-comforter" },
      { text: "Quality and craftsmanship", personality: "classic-traditionalist" },
      { text: "Something that matches my mood", personality: "creative-soul" },
    ],
  },
  {
    id: 6,
    question: "Pick a coffee superpower:",
    answers: [
      { text: "Never wait in line", personality: "busy-bee" },
      { text: "Every cup tastes like a warm hug", personality: "cozy-comforter" },
      { text: "Discover amazing hidden cafés anywhere", personality: "bold-adventurer" },
      { text: "Perfectly balance any flavor combination", personality: "smooth-operator" },
    ],
  },
  {
    id: 7,
    question: "Your coffee order at a new place?",
    answers: [
      { text: "Whatever's fastest to make", personality: "busy-bee" },
      { text: "Ask the barista what's special here", personality: "bold-adventurer" },
      { text: "My usual - I stick with what works", personality: "cozy-comforter" },
      { text: "Something off-menu or customized", personality: "creative-soul" },
    ],
  },
];

// Personality Types
export const personalities = {
  "bold-adventurer": {
    name: "The Bold Adventurer",
    emoji: "🌟",
    description:
      "You treat every cup like an opportunity to discover something new. While others play it safe, you're asking the barista what's weird and wonderful today. Life's too short for boring coffee!",
    drink: "Double Shot Espresso or Single Origin Pour Over",
    drinkDescription: "Something with character that tells a story",
    color: "amber",
  },
  "cozy-comforter": {
    name: "The Cozy Comforter",
    emoji: "☕",
    description:
      "For you, coffee is a ritual of comfort. It's not just a drink - it's a warm hug in a mug, a moment of peace in a chaotic world. You know that the best things in life are worth savoring.",
    drink: "Vanilla Latte or Chai Latte",
    drinkDescription: "Warm, sweet, and feels like home",
    color: "orange",
  },
  "busy-bee": {
    name: "The Busy Bee",
    emoji: "⚡",
    description:
      "You've got places to be and things to do! Coffee is your rocket fuel, your productivity partner, your 'let's make things happen' juice. Efficiency is your middle name.",
    drink: "Cold Brew or Americano",
    drinkDescription: "Fast, effective, no-nonsense caffeine",
    color: "yellow",
  },
  "smooth-operator": {
    name: "The Smooth Operator",
    emoji: "✨",
    description:
      "You've got taste and you know it. Not too bold, not too basic - you find the perfect balance in everything. People come to you for recommendations because you just... get it.",
    drink: "Oat Milk Latte or Flat White",
    drinkDescription: "Perfectly balanced, universally loved",
    color: "stone",
  },
  "creative-soul": {
    name: "The Creative Soul",
    emoji: "🎨",
    description:
      "Your coffee order is an extension of your artistic spirit. Why have regular when you can have extraordinary? You see flavor combinations others don't even know exist.",
    drink: "Lavender Honey Latte or Mocha with Orange Zest",
    drinkDescription: "Unique, inspired, a little unexpected",
    color: "purple",
  },
  "classic-traditionalist": {
    name: "The Classic Traditionalist",
    emoji: "👔",
    description:
      "You appreciate the craft, the history, the way things were meant to be done. No frills, no fuss - just excellent coffee made the right way. There's an elegance in simplicity.",
    drink: "Black Coffee or Cappuccino",
    drinkDescription: "Timeless, refined, perfectly executed",
    color: "slate",
  },
};

export type PersonalityKey = keyof typeof personalities;
