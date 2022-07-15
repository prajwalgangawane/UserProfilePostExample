"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutProfileInput_1 = require("../inputs/UserCreateNestedOneWithoutProfileInput");
let ProfileCreateInput = class ProfileCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProfileInput_1.UserCreateNestedOneWithoutProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutProfileInput_1.UserCreateNestedOneWithoutProfileInput)
], ProfileCreateInput.prototype, "user", void 0);
ProfileCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateInput", {
        isAbstract: true
    })
], ProfileCreateInput);
exports.ProfileCreateInput = ProfileCreateInput;
