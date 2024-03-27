import { User } from '@constants/types';
import { create } from 'zustand';
type AuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useAuthStore = create<AuthStore>(set => ({
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null,
  setUser(user) {
    set({ user });
  },
}));

export default useAuthStore;
