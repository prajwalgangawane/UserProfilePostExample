"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileCountAggregate = class ProfileCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileCountAggregate.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileCountAggregate.prototype, "_all", void 0);
ProfileCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProfileCountAggregate", {
        isAbstract: true
    })
], ProfileCountAggregate);
exports.ProfileCountAggregate = ProfileCountAggregate;
