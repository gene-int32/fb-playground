export type UID = number;

export type User = {
  uid: UID;
  email: string;
  firstName: string;
  lastName: string;
  status: 'Active';
  role: 'Admin' | 'Regular';
};
