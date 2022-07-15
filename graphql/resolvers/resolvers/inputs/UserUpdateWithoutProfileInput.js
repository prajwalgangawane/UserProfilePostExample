"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutAuthorNestedInput_1 = require("../inputs/PostUpdateManyWithoutAuthorNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutProfileInput = class UserUpdateWithoutProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorNestedInput_1.PostUpdateManyWithoutAuthorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutAuthorNestedInput_1.PostUpdateManyWithoutAuthorNestedInput)
], UserUpdateWithoutProfileInput.prototype, "posts", void 0);
UserUpdateWithoutProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutProfileInput", {
        isAbstract: true
    })
], UserUpdateWithoutProfileInput);
exports.UserUpdateWithoutProfileInput = UserUpdateWithoutProfileInput;
