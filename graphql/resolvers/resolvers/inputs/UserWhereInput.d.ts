import { IntFilter } from "../inputs/IntFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ProfileRelationFilter } from "../inputs/ProfileRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    password?: StringFilter | undefined;
    posts?: PostListRelationFilter | undefined;
    profile?: ProfileRelationFilter | undefined;
}
