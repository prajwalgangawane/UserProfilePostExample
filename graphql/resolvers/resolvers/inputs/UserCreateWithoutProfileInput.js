"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
let UserCreateWithoutProfileInput = class UserCreateWithoutProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutProfileInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutProfileInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutProfileInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutProfileInput.prototype, "posts", void 0);
UserCreateWithoutProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutProfileInput", {
        isAbstract: true
    })
], UserCreateWithoutProfileInput);
exports.UserCreateWithoutProfileInput = UserCreateWithoutProfileInput;
