import { create } from "zustand";

export const useStore = create<Store>((set) => ({
  users: [{ id: 1, email: "", password: "", isAdmin: true }],
  photos: [
    {
      id: 1,
      userId: 1,
      src: "",
      name: "Sunrise",
      description: "Landscape sunrise",
      categoriesIds: [],
    },
  ],
  category: [],

  addPhoto: (newPhoto: Photo) =>
    set((state: Store) => ({ photos: [...state.photos, newPhoto] })),
}));
