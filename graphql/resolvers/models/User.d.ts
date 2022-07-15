import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    email: string;
    name?: string | null;
    password: string;
    posts?: Post[];
    profile?: Profile | null;
    _count?: UserCount | null;
}
