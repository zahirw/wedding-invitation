export type PostStorageBody = {
  file: File;
};

export type PostStorageResponse = {
  data: {
    status: string;
    message: string;
  };
};
