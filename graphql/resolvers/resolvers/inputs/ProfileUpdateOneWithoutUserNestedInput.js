"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateOrConnectWithoutUserInput_1 = require("../inputs/ProfileCreateOrConnectWithoutUserInput");
const ProfileCreateWithoutUserInput_1 = require("../inputs/ProfileCreateWithoutUserInput");
const ProfileUpdateWithoutUserInput_1 = require("../inputs/ProfileUpdateWithoutUserInput");
const ProfileUpsertWithoutUserInput_1 = require("../inputs/ProfileUpsertWithoutUserInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileUpdateOneWithoutUserNestedInput = class ProfileUpdateOneWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateOrConnectWithoutUserInput_1.ProfileCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreateOrConnectWithoutUserInput_1.ProfileCreateOrConnectWithoutUserInput)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpsertWithoutUserInput_1.ProfileUpsertWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpsertWithoutUserInput_1.ProfileUpsertWithoutUserInput)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "update", void 0);
ProfileUpdateOneWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateOneWithoutUserNestedInput", {
        isAbstract: true
    })
], ProfileUpdateOneWithoutUserNestedInput);
exports.ProfileUpdateOneWithoutUserNestedInput = ProfileUpdateOneWithoutUserNestedInput;
