export interface OrnamentData {
  id: string;
  position: [number, number, number];
  color: string;
  type: 'sphere' | 'diamond' | 'box';
  scale: number;
}

export interface WishState {
  recipient: string;
  message: string;
  isLoading: boolean;
  isOpen: boolean;
}