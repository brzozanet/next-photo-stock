type User = {
  id: number;
  email: string;
  password: string;
  isAdmin: boolean;
};

type Photo = {
  id: number;
  userId: number; // owner or buyer (not and)
  src: string;
  name: string;
  description: string;
  categoriesIds: number[];
};

type Category = {
  id: number;
  name: string;
};

type Store = {
  users: User[];
  photos: Photo[];
  category: Category[];

  addPhoto: (newPhoto: Photo) => void;
};
