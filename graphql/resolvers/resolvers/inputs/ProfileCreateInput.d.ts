import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";
export declare class ProfileCreateInput {
    bio?: string | undefined;
    user: UserCreateNestedOneWithoutProfileInput;
}
