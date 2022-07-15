import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ProfileOrderByWithRelationInput } from "../inputs/ProfileOrderByWithRelationInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
    profile?: ProfileOrderByWithRelationInput | undefined;
}
