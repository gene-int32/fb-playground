import { UID } from './user.type';

export type Project = {
  id: number;
  name: string;
  assigned: UID;
  status: 'New' | 'Opened' | 'Closed';
  created: Date;
};
