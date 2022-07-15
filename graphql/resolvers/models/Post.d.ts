import { User } from "../models/User";
export declare class Post {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content?: string | null;
    published: boolean;
    author?: User;
    authorId: number;
}
