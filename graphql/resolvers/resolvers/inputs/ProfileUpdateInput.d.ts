import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProfileNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProfileNestedInput";
export declare class ProfileUpdateInput {
    bio?: NullableStringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutProfileNestedInput | undefined;
}
