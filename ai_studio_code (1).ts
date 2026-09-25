export interface MemoryPhotoItem {
  id: number;
  title: string;
  caption: string;
  emoji: string;
  customImage?: string;
  gradient: string;
}

export const BIRTHDAY_CONFIG = {
  // 💖 गर्लफ्रेंड और आपका नाम
  girlfriendName: "My Love",
  senderName: "Forever Yours",

  // ⏰ जन्मदिन की तारीख (रात 12:00 बजे के लिए)
  birthdayDate: new Date(Date.now() + 18 * 60 * 60 * 1000).toISOString(),
  showCountdown: true,

  // 🎁 इंट्रो स्क्रीन
  intro: {
    greeting: "Hey Beautiful ❤️",
    subtitle: "Someone has prepared a little surprise for you...",
    buttonText: "OPEN YOUR SURPRISE 🎁"
  },

  // 🎉 रिवील स्क्रीन
  reveal: {
    title: "Happy Birthday, My Love ❤️",
    subtitle: "May your day be filled with endless smiles, warmth, and all the happiness in the world.",
    buttonText: "Continue →"
  },

  // 📸 यादगार फ़ोटोज़
  memories: [
    {
      id: 1,
      title: "The Day We Met ✨",
      caption: "The moment my world became infinitely brighter and more colorful.",
      emoji: "✨",
      customImage: "",
      gradient: "from-rose-400 to-pink-300"
    },
    {
      id: 2,
      title: "Your Magical Smile 😊",
      caption: "Your laugh is my absolute favorite sound in the whole universe.",
      emoji: "🥰",
      customImage: "",
      gradient: "from-pink-400 to-rose-300"
    },
    {
      id: 3,
      title: "Our Quiet Adventures 🌸",
      caption: "With you, even the simplest walks feel like fairy tales.",
      emoji: "🌸",
      customImage: "",
      gradient: "from-amber-300 to-rose-300"
    },
    {
      id: 4,
      title: "Underneath the Stars 🌙",
      caption: "Late night talks and dreams we share together.",
      emoji: "💫",
      customImage: "",
      gradient: "from-purple-400 to-pink-300"
    },
    {
      id: 5,
      title: "Your Gentle Kindness 💖",
      caption: "The way you care for everyone makes me fall in love again every day.",
      emoji: "💝",
      customImage: "",
      gradient: "from-rose-400 to-red-300"
    },
    {
      id: 6,
      title: "My Favorite Person 🌟",
      caption: "Today and forever, my heart is happily yours.",
      emoji: "👑",
      customImage: "",
      gradient: "from-pink-500 to-rose-400"
    }
  ],

  // 💌 प्यार भरा ख़त
  letter: {
    title: "A Letter From My Heart 💌",
    salutation: "To the most wonderful girl in the world,",
    body: "Happy Birthday! Words will never be enough to capture how much you mean to me. You bring peace to my chaos, light to my darkest days, and warmth to every single moment. Thank you for simply being you. I wish for all your sweetest dreams to come true today and every single day.",
    closing: "Forever & Always Yours,",
  }
};