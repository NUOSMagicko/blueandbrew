import { create } from 'zustand';

type animationState = {
  isAnimationPlayed: boolean;
  setIsAnimationPlayed: (state: boolean) => void;
};

const useAnimationCreateStore = create<animationState>((set) => ({
  isAnimationPlayed: false,
  setIsAnimationPlayed: (state: boolean) => set({ isAnimationPlayed: state }),
}));

export default useAnimationCreateStore;
