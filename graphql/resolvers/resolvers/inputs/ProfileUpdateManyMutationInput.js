"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let ProfileUpdateManyMutationInput = class ProfileUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateManyMutationInput.prototype, "bio", void 0);
ProfileUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateManyMutationInput", {
        isAbstract: true
    })
], ProfileUpdateManyMutationInput);
exports.ProfileUpdateManyMutationInput = ProfileUpdateManyMutationInput;
