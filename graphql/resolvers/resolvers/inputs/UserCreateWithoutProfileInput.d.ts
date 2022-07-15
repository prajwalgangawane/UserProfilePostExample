import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
export declare class UserCreateWithoutProfileInput {
    email: string;
    name?: string | undefined;
    password: string;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
