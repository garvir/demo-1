export interface Post {
  type?: PostTypes;
  cases?: number;
  lastWeek?: number;
  image?: string;
  title: string;
  body: string;
  posted: boolean;
  author: {
    avatar: string;
    name: string;
    position: string
  };
}

export enum PostTypes {
  statistics = 'statistics'
}
