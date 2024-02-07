export interface YGDeckData {
  yg_deck_id: string;
  uid: string;
  author_display_name: string | null
  likes: number
  name: string;
  thumbnail_url: string | null;
  regulation_type: 'limit' | 'masterDuel' | 'none' | null;
  yg_deck_type_id: string; // FIXME DEMOでは名前も返す
  legend: boolean;
  main_sort_mode: 'byLevelDesc' | 'byLevelAsc' | 'byNum' | 'byManual'; // FIXME DEMOでは並べ替え不要？
  extra_sort_mode: 'byLevelDesc' | 'byLevelAsc' | 'byNum' | 'byManual';
  side_sort_mode: 'byLevelDesc' | 'byLevelAsc' | 'byNum' | 'byManual';
  main_cards: { main_card_id: number; thumbnail_url: string | null; large_image_url: string | null }[];
  extra_cards: { main_card_id: number; thumbnail_url: string | null; large_image_url: string | null }[];
  side_cards: { main_card_id: number; thumbnail_url: string | null; large_image_url: string | null }[];
  created_at: number;
  updated_at: number;
  views: number;
}

export interface DMDeckData {
  dm_deck_id: string;
  uid: string;
  author_display_name: string | null
  likes: number
  name: string;
  thumbnail_url: string | null;
  regulation_type: "advance" | "original" | "2block" | 'party' | "none" | null;
  dm_deck_type_id: string;
  legend: boolean;
  main_sort_mode: 'byCost' | 'byCivilization' | 'byNum' | 'bySubType' | 'byManual';
  gr_sort_mode: 'byCost' | 'byCivilization' | 'byNum' | 'bySubType' | 'byManual';
  hyper_spatial_sort_mode: 'byCost' | 'byCivilization' | 'byNum' | 'bySubType' | 'byManual';
  zeron: boolean;
  dorumagedon: boolean;
  has_fire: boolean;
  has_water: boolean;
  has_light: boolean;
  has_dark: boolean;
  has_nature: boolean;
  has_zero: boolean;
  main_cards: { main_card_id: number; thumbnail_url: string | null; large_image_url: string | null }[];
  gr_cards: { main_card_id: number; thumbnail_url: string | null; large_image_url: string | null }[];
  hyper_spatial_cards: { main_card_id: number; thumbnail_url: string | null; large_image_url: string | null }[];
  created_at: number;
  updated_at: number;
  views: number;
}