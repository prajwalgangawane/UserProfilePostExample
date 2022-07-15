import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    title: string;
    content?: string | undefined;
    published?: boolean | undefined;
    author: UserCreateNestedOneWithoutPostsInput;
}
