import { atom } from "jotai";

export const currentPageAtom = atom(0);

export const currentProgressAtom = atom(100);

export const currentSceneAtom = atom(1);

export const planeLoadedAtom = atom(false);

export const worldLoadedAtom = atom(false);

export const scrollToPageAtom = atom(null);

export const isButtonPressed = atom(false);

export const dataThemeAtom = atom("lighttheme");
