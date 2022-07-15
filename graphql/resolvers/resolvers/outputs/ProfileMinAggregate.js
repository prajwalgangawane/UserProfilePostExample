"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileMinAggregate = class ProfileMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileMinAggregate.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileMinAggregate.prototype, "userId", void 0);
ProfileMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProfileMinAggregate", {
        isAbstract: true
    })
], ProfileMinAggregate);
exports.ProfileMinAggregate = ProfileMinAggregate;
