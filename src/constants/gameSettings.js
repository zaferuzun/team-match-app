// Takım Tanımlamaları
export const TEAMS = {
  RED: {
    ID: 'red',
    NAME: 'Red Team',
    COLOR: 'text-red-600',
    BG: 'bg-red-50',
    BORDER: 'border-red-500'
  },
  BLUE: {
    ID: 'blue',
    NAME: 'Blue Team',
    COLOR: 'text-blue-600',
    BG: 'bg-blue-50',
    BORDER: 'border-blue-500'
  }
};

// Ana Oyun Modları
export const MAIN_MODES = {
  SELECTIVE: 'Seçimli Maç',
  NORMAL: 'Normal Maç'
};

// Alt Oyun Modları
export const SUB_MODES = {
  [MAIN_MODES.SELECTIVE]: [
    'Her ligden bir takım', 
    'İngiltere Karma', 
    'Karşılıklı Serbest Seçim', 
    'Karşılıklı Yasaklı', 
    'Aynı Ligden Alma Seçim'
  ],
  [MAIN_MODES.NORMAL]: [
    'Derbi', 
    'Aynı Ligden Alma', 
    'İngiltere Liginden Seçim'
  ],
  RANDOM: 'Random Seç'
};

// Maç Ayarları
export const GAME_CONFIG = {
  DEFAULT_STADIUM: 'Arena Merkezi',
  MIN_DURATION: 10,
  MAX_DURATION: 15,
  SIDES: {
    LEFT: 'SOL',
    RIGHT: 'SAĞ'
  },
  SELECTION_METHODS: {
    MANUAL: 'Manuel',
    RANDOM: 'Random'
  }
};

// Uygulama Sayfaları (Navigation)
export const PAGES = {
  TEAMS_INIT: 'teams-init',
  MODE_SETUP: 'mode-setup',
  GAME_CONFIG: 'game-config',
  ARENA: 'arena'
};