import dayjs, { Dayjs } from 'dayjs';
import { create } from 'zustand';

export type PassengerData = {
  adults: number;
  children: {
    age: number;
  }[];
  rooms: number;
};

type HeaderSearchStore = {
  passengerData: PassengerData;
  destination: string;
  duration: [Dayjs, Dayjs];
  setPassengerData: (data: PassengerData) => void;
  setDestination: (value: string) => void;
  setDuration: (dateRange: any) => void;
};

const useHeaderSearch = create<HeaderSearchStore>(set => ({
  destination: '',
  duration: [dayjs(), dayjs().clone().add(1, 'day')],
  passengerData: {
    adults: 2,
    children: [],
    rooms: 1,
  },
  setPassengerData(data) {
    set({
      passengerData: data,
    });
  },
  setDestination(value) {
    set({
      destination: value,
    });
  },
  setDuration(dateRange) {
    set({
      duration: dateRange,
    });
  },
}));

export default useHeaderSearch;
