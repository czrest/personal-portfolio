import { atom } from "jotai";

export const currentPageAtom = atom(0);

export const scene1Atom = atom(false);

export const currentSceneAtom = atom(1);

export const planeLoadedAtom = atom(false);

export const worldLoadedAtom = atom(false);

export const scrollToPageAtom = atom("welcome");

export const isButtonPressed = atom(false);