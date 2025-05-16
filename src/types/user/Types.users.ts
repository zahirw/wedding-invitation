export type User = {
  id: string;
  name: string;
  email: string;
};

export type GetUsersParams = {
  page: number;
  limit: number;
  skip: number;
};

export type PostUsersBody = {
  name: string;
  email: string;
  password: string;
};

export type GetUsersResponse = {
  data: User[];
  meta: {
    totalUsers: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
};

export type PostUserResponse = {
  user: User;
};
