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

export type Media = {
  id: string;
  url: string;
  type: string;
  description: string;
  createdAt: Date;
};
