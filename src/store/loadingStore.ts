import {create} from 'zustand';


type LoadingState = {
    isLoading: boolean;
    setLoading: (isLoading: boolean) => void;
  };
  
const useLoadingStore = create((set) => ({
  isLoading: false,
  setLoading: () => set((state)=>({isLoading: state.isLoading}))
}));

export const useLoading = () => useLoadingStore((state) => state.isLoading);
export const useSetLoading = () => useLoadingStore((state) => state.setLoading);
