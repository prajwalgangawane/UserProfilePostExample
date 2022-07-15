import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
export declare class ProfileRelationsResolver {
    user(profile: Profile, ctx: any): Promise<User>;
}
