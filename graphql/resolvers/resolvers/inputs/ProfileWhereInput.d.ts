import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ProfileWhereInput {
    AND?: ProfileWhereInput[] | undefined;
    OR?: ProfileWhereInput[] | undefined;
    NOT?: ProfileWhereInput[] | undefined;
    id?: IntFilter | undefined;
    bio?: StringNullableFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: IntFilter | undefined;
}
