// Tiny shared store so the 3D scene (code-split, home route only) can report its
// real loading progress to the Preloader (which lives in the root layout).
// Keeping this dependency-free means Three.js stays out of every page's bundle.

let state = { progress: 0, active: false, has3D: false, revealed: false };
const listeners = new Set();

const emit = () => listeners.forEach((fn) => fn(state));

export const loadStore = {
  getState: () => state,

  // Called from the 3D scene with drei's useProgress values
  setProgress: (progress, active) => {
    state = { ...state, progress, active };
    emit();
  },

  // Marks that this page actually has a 3D scene to wait for
  setHas3D: (has3D) => {
    if (state.has3D === has3D) return;
    state = { ...state, has3D };
    emit();
  },

  // Flipped true by the Preloader the moment it starts revealing the site,
  // so entrance animations can play AFTER the loader (not hidden behind it).
  setRevealed: (revealed) => {
    if (state.revealed === revealed) return;
    state = { ...state, revealed };
    emit();
  },

  subscribe: (fn) => {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
};
