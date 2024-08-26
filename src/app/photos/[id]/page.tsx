type Params = { id: string };

export default function Photo({ params }: { params: Params }) {
  return <h1>Photo {params.id}</h1>;
}
