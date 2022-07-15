"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileAvgAggregate_1 = require("../outputs/ProfileAvgAggregate");
const ProfileCountAggregate_1 = require("../outputs/ProfileCountAggregate");
const ProfileMaxAggregate_1 = require("../outputs/ProfileMaxAggregate");
const ProfileMinAggregate_1 = require("../outputs/ProfileMinAggregate");
const ProfileSumAggregate_1 = require("../outputs/ProfileSumAggregate");
let ProfileGroupBy = class ProfileGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileGroupBy.prototype, "bio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProfileGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCountAggregate_1.ProfileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCountAggregate_1.ProfileCountAggregate)
], ProfileGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileAvgAggregate_1.ProfileAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileAvgAggregate_1.ProfileAvgAggregate)
], ProfileGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileSumAggregate_1.ProfileSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileSumAggregate_1.ProfileSumAggregate)
], ProfileGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMinAggregate_1.ProfileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMinAggregate_1.ProfileMinAggregate)
], ProfileGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMaxAggregate_1.ProfileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMaxAggregate_1.ProfileMaxAggregate)
], ProfileGroupBy.prototype, "_max", void 0);
ProfileGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProfileGroupBy", {
        isAbstract: true
    })
], ProfileGroupBy);
exports.ProfileGroupBy = ProfileGroupBy;
