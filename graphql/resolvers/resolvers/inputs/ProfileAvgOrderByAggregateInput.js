"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProfileAvgOrderByAggregateInput = class ProfileAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileAvgOrderByAggregateInput.prototype, "userId", void 0);
ProfileAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ProfileAvgOrderByAggregateInput);
exports.ProfileAvgOrderByAggregateInput = ProfileAvgOrderByAggregateInput;
