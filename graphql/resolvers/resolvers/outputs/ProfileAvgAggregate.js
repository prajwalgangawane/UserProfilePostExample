"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileAvgAggregate = class ProfileAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileAvgAggregate.prototype, "userId", void 0);
ProfileAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProfileAvgAggregate", {
        isAbstract: true
    })
], ProfileAvgAggregate);
exports.ProfileAvgAggregate = ProfileAvgAggregate;
