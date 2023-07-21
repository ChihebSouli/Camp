export interface CommentWithUserDto {
    idComment?: number;
    content: string;
    creationDate: string; // Consider changing to a Date type if needed
    user: {
      id?: number;
      username: string;
      email: string;
    };
  }
