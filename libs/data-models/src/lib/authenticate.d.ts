
// Add a 'authenticate.d.ts' file to the lib folder and
// export the added data models from the data - models.module.ts file;
export interface Authenticate {
  username: string;
  email: string;
  password: string;
}
