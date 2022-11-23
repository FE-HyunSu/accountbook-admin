import { atom } from 'recoil';

export const adminInfo = atom({
  key: 'user',
  default: {
    email: '',
  },
});
