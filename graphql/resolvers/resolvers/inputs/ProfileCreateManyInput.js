"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileCreateManyInput = class ProfileCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateManyInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileCreateManyInput.prototype, "userId", void 0);
ProfileCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateManyInput", {
        isAbstract: true
    })
], ProfileCreateManyInput);
exports.ProfileCreateManyInput = ProfileCreateManyInput;
