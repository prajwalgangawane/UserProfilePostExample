"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneProfileArgs_1 = require("./args/UpdateOneProfileArgs");
const Profile_1 = require("../../../models/Profile");
const helpers_1 = require("../../../helpers");
let UpdateOneProfileResolver = class UpdateOneProfileResolver {
    async updateOneProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProfileArgs_1.UpdateOneProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneProfileResolver.prototype, "updateOneProfile", null);
UpdateOneProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], UpdateOneProfileResolver);
exports.UpdateOneProfileResolver = UpdateOneProfileResolver;
