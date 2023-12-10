import { create } from "zustand";

type ReservationAlert = {
  title: string;
  body: string;
};

type ReservationState = {
  reservationAlert: ReservationAlert | null;
};

const reservationStore = create<ReservationState>((set) => ({
  reservationAlert: null,
  setReservationAlert: (data: ReservationAlert) =>
    set({ reservationAlert: data }),
}));

export default reservationStore;
