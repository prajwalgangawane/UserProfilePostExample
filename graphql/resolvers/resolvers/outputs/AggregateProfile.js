"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProfile = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileAvgAggregate_1 = require("../outputs/ProfileAvgAggregate");
const ProfileCountAggregate_1 = require("../outputs/ProfileCountAggregate");
const ProfileMaxAggregate_1 = require("../outputs/ProfileMaxAggregate");
const ProfileMinAggregate_1 = require("../outputs/ProfileMinAggregate");
const ProfileSumAggregate_1 = require("../outputs/ProfileSumAggregate");
let AggregateProfile = class AggregateProfile {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCountAggregate_1.ProfileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCountAggregate_1.ProfileCountAggregate)
], AggregateProfile.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileAvgAggregate_1.ProfileAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileAvgAggregate_1.ProfileAvgAggregate)
], AggregateProfile.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileSumAggregate_1.ProfileSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileSumAggregate_1.ProfileSumAggregate)
], AggregateProfile.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMinAggregate_1.ProfileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMinAggregate_1.ProfileMinAggregate)
], AggregateProfile.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMaxAggregate_1.ProfileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMaxAggregate_1.ProfileMaxAggregate)
], AggregateProfile.prototype, "_max", void 0);
AggregateProfile = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProfile", {
        isAbstract: true
    })
], AggregateProfile);
exports.AggregateProfile = AggregateProfile;
