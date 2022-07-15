"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileAvgOrderByAggregateInput_1 = require("../inputs/ProfileAvgOrderByAggregateInput");
const ProfileCountOrderByAggregateInput_1 = require("../inputs/ProfileCountOrderByAggregateInput");
const ProfileMaxOrderByAggregateInput_1 = require("../inputs/ProfileMaxOrderByAggregateInput");
const ProfileMinOrderByAggregateInput_1 = require("../inputs/ProfileMinOrderByAggregateInput");
const ProfileSumOrderByAggregateInput_1 = require("../inputs/ProfileSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProfileOrderByWithAggregationInput = class ProfileOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileOrderByWithAggregationInput.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCountOrderByAggregateInput_1.ProfileCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCountOrderByAggregateInput_1.ProfileCountOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileAvgOrderByAggregateInput_1.ProfileAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileAvgOrderByAggregateInput_1.ProfileAvgOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMaxOrderByAggregateInput_1.ProfileMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMaxOrderByAggregateInput_1.ProfileMaxOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMinOrderByAggregateInput_1.ProfileMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMinOrderByAggregateInput_1.ProfileMinOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileSumOrderByAggregateInput_1.ProfileSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileSumOrderByAggregateInput_1.ProfileSumOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_sum", void 0);
ProfileOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileOrderByWithAggregationInput", {
        isAbstract: true
    })
], ProfileOrderByWithAggregationInput);
exports.ProfileOrderByWithAggregationInput = ProfileOrderByWithAggregationInput;
