export interface Evironment {
  production: boolean;
  firebaseConfig: FirebaseConfig;
}

export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};
