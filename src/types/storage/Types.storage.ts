export type PostStorageBody = {
  file: File;
  invitationId?: string;
};

export type PostStorageResponse = {
  data: {
    status: string;
    message: string;
    url: string;
  };
};
