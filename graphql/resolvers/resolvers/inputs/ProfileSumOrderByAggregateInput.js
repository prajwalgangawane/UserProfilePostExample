"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProfileSumOrderByAggregateInput = class ProfileSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileSumOrderByAggregateInput.prototype, "userId", void 0);
ProfileSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileSumOrderByAggregateInput", {
        isAbstract: true
    })
], ProfileSumOrderByAggregateInput);
exports.ProfileSumOrderByAggregateInput = ProfileSumOrderByAggregateInput;
