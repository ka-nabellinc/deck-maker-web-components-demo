export interface DMCardData {
  main_card_id: number;
  thumbnail_url: string | null;
  large_image_url: string | null;
}

export interface DMDeckData {
  dm_deck_id: string;
  uid: string;
  author_display_name: string | null;
  likes: number;
  name: string;
  thumbnail_url: string | null;
  regulation_type: "advance" | "original" | "2block" | "party" | "none" | null;
  dm_deck_type_id: string;
  legend: boolean;
  zeron: boolean;
  dorumagedon: boolean;
  has_fire: boolean;
  has_water: boolean;
  has_light: boolean;
  has_dark: boolean;
  has_nature: boolean;
  has_zero: boolean;
  main_cards: DMCardData[];
  gr_cards: DMCardData[];
  hyper_spatial_cards: DMCardData[];
  created_at: number;
  updated_at: number;
  views: number;
}
