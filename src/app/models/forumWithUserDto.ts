export interface ForumWithUserDTO {
    idForum?: number;
    question: string;
    content: string;
    title: string;
    creationDate: string; // Consider changing to a Date type if needed
    user: {
      id?: number;
      username: string;
      email: string;
    };
  }
  