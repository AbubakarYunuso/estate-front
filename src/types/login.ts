export type userDataType = {
    id: string;
    _id: string;
    fullName: string;
    email: string;
    password: string;
  };
  
  export type LoginResponse = {
    token: string;
    error: string | null;
    user: userDataType;
  
  };