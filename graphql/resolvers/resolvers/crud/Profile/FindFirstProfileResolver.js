"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstProfileArgs_1 = require("./args/FindFirstProfileArgs");
const Profile_1 = require("../../../models/Profile");
const helpers_1 = require("../../../helpers");
let FindFirstProfileResolver = class FindFirstProfileResolver {
    async findFirstProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProfileArgs_1.FindFirstProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProfileResolver.prototype, "findFirstProfile", null);
FindFirstProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], FindFirstProfileResolver);
exports.FindFirstProfileResolver = FindFirstProfileResolver;
