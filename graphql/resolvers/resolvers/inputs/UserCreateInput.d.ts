import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
export declare class UserCreateInput {
    email: string;
    name?: string | undefined;
    password: string;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
}
