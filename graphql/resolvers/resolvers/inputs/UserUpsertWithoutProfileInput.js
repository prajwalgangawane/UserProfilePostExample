"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutProfileInput_1 = require("../inputs/UserCreateWithoutProfileInput");
const UserUpdateWithoutProfileInput_1 = require("../inputs/UserUpdateWithoutProfileInput");
let UserUpsertWithoutProfileInput = class UserUpsertWithoutProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutProfileInput_1.UserUpdateWithoutProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutProfileInput_1.UserUpdateWithoutProfileInput)
], UserUpsertWithoutProfileInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput)
], UserUpsertWithoutProfileInput.prototype, "create", void 0);
UserUpsertWithoutProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutProfileInput", {
        isAbstract: true
    })
], UserUpsertWithoutProfileInput);
exports.UserUpsertWithoutProfileInput = UserUpsertWithoutProfileInput;
