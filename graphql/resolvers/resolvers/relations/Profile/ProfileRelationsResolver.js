"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Profile_1 = require("../../../models/Profile");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let ProfileRelationsResolver = class ProfileRelationsResolver {
    async user(profile, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findUnique({
            where: {
                id: profile.id,
            },
        }).user({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Profile_1.Profile, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileRelationsResolver.prototype, "user", null);
ProfileRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], ProfileRelationsResolver);
exports.ProfileRelationsResolver = ProfileRelationsResolver;
