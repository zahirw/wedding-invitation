import { User } from "../user/Types.users";

export type Invitation = {
  id: string;
  slug: string;
  groomName: string;
  brideName: string;
  date: Date;
  venue: string;
  template: string;
  user: User;
};

export type GetInvitationsParams = {
  page: number;
  limit: number;
  skip: number;
};

export type PostInvitationsBody = {
  groomName: string;
  brideName: string;
  date: Date;
  venue: string;
  template: string;
  slug: string;
  userId: string;
};

export type GetInvitationsResponse = {
  data: Invitation[];
  meta: {
    totalInvitations: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
};

export type PostInvitationResponse = {
  invitation: Invitation;
};
