"use client";

import { useStore } from "@/store/store";
type Params = { id: string };

console.log(useStore);

export default function Photo({ params }: { params: Params }) {
  const { photos }: Store = useStore();

  return (
    <>
      <h1>Photo {params.id}</h1>
      <p>{photos[params.id - 1].name}</p>
    </>
  );
}
