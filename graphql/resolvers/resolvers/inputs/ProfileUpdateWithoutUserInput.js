"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let ProfileUpdateWithoutUserInput = class ProfileUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateWithoutUserInput.prototype, "bio", void 0);
ProfileUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateWithoutUserInput", {
        isAbstract: true
    })
], ProfileUpdateWithoutUserInput);
exports.ProfileUpdateWithoutUserInput = ProfileUpdateWithoutUserInput;
