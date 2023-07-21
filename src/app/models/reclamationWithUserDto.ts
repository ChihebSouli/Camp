export interface ReclamationWithUserDto {
    idRec?: number;
    title: string;
    dateRec: string; 
    description: string;
    status : string;
    response : string;
    user: {
      id?: number;
      username: string;
      email: string;
    };
  }
