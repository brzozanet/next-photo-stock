"use client";

import { useStore } from "@/store/store";
type Params = { id: string };

console.log(useStore);

export default function AddPhoto({ params }: { params: Params }) {
  const { addPhoto }: Store = useStore();

  return (
    <>
      <button
        onClick={() =>
          addPhoto({
            id: 2,
            userId: 1,
            src: "",
            name: "Sunset",
            description: "Landscape sunset",
            categoriesIds: [],
          })
        }
      >
        Add
      </button>
    </>
  );
}
