"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileWhereUniqueInput = class ProfileWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileWhereUniqueInput.prototype, "userId", void 0);
ProfileWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileWhereUniqueInput", {
        isAbstract: true
    })
], ProfileWhereUniqueInput);
exports.ProfileWhereUniqueInput = ProfileWhereUniqueInput;
