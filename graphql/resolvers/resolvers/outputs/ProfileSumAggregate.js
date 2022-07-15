"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileSumAggregate = class ProfileSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileSumAggregate.prototype, "userId", void 0);
ProfileSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProfileSumAggregate", {
        isAbstract: true
    })
], ProfileSumAggregate);
exports.ProfileSumAggregate = ProfileSumAggregate;
