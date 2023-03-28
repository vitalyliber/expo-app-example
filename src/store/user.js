import { atom } from "nanostores";

export const user = atom({ authorized: false });

export function authUser() {
  user.set({ ...user.get(), authorized: true });
}

export function logoutUser() {
  user.set({ ...user.get(), authorized: false });
}
