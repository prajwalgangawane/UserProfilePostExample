"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileWhereInput_1 = require("../inputs/ProfileWhereInput");
let ProfileRelationFilter = class ProfileRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], ProfileRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], ProfileRelationFilter.prototype, "isNot", void 0);
ProfileRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileRelationFilter", {
        isAbstract: true
    })
], ProfileRelationFilter);
exports.ProfileRelationFilter = ProfileRelationFilter;
