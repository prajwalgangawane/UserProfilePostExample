import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ProfileOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    bio?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
}
