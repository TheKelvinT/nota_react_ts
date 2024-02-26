import { create } from "zustand";

type ReservationConfig = {
  title: string;
  to: Date;
  from: Date;
};

type ReservationState = {
  reservationConfig: ReservationConfig | null;
};

const reservationStore = create<ReservationState>((set) => ({
  reservationConfig: null,
  setReservationConfig: (data: ReservationConfig) =>
    set({ reservationConfig: data }),
}));

export default reservationStore;
