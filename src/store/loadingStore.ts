import { create } from "zustand";

const useLoadingStore = create((set) => ({
  loading: true,
  hasErrors: false,
  setLoading: (isLoading: boolean) => set({ loading: isLoading }),
}));

export default useLoadingStore;
