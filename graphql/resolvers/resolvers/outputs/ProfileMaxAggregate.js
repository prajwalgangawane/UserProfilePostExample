"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileMaxAggregate = class ProfileMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileMaxAggregate.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileMaxAggregate.prototype, "userId", void 0);
ProfileMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProfileMaxAggregate", {
        isAbstract: true
    })
], ProfileMaxAggregate);
exports.ProfileMaxAggregate = ProfileMaxAggregate;
