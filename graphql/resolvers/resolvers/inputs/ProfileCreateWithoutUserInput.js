"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileCreateWithoutUserInput = class ProfileCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "bio", void 0);
ProfileCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateWithoutUserInput", {
        isAbstract: true
    })
], ProfileCreateWithoutUserInput);
exports.ProfileCreateWithoutUserInput = ProfileCreateWithoutUserInput;
