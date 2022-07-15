"use strict";
var ProfileWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ProfileWhereInput = ProfileWhereInput_1 = class ProfileWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProfileWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ProfileWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProfileWhereInput.prototype, "userId", void 0);
ProfileWhereInput = ProfileWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileWhereInput", {
        isAbstract: true
    })
], ProfileWhereInput);
exports.ProfileWhereInput = ProfileWhereInput;
