import { atom } from "nanostores";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const user = atom({ authorized: false });

export async function authUser() {
  await AsyncStorage.setItem("authorized", "true");
  user.set({ ...user.get(), authorized: true });
}

export async function logoutUser() {
  await AsyncStorage.setItem("authorized", "false");
  user.set({ ...user.get(), authorized: false });
}

export async function syncWithStorage() {
  const value = await AsyncStorage.getItem("authorized");
  user.set({ ...user.get(), authorized: value === "true" });
}
