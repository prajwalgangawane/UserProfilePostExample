"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutProfileNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutProfileNestedInput");
let ProfileUpdateInput = class ProfileUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProfileNestedInput_1.UserUpdateOneRequiredWithoutProfileNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutProfileNestedInput_1.UserUpdateOneRequiredWithoutProfileNestedInput)
], ProfileUpdateInput.prototype, "user", void 0);
ProfileUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateInput", {
        isAbstract: true
    })
], ProfileUpdateInput);
exports.ProfileUpdateInput = ProfileUpdateInput;
