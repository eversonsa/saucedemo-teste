export type UserCredentials = {
  email: string;
  password: string;
};

export function getUserCredentials(): UserCredentials {
  return {
    email: 'standard_user',
    password: 'secret_sauce',
  };
}
