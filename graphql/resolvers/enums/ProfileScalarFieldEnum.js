"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProfileScalarFieldEnum;
(function (ProfileScalarFieldEnum) {
    ProfileScalarFieldEnum["id"] = "id";
    ProfileScalarFieldEnum["bio"] = "bio";
    ProfileScalarFieldEnum["userId"] = "userId";
})(ProfileScalarFieldEnum = exports.ProfileScalarFieldEnum || (exports.ProfileScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
    name: "ProfileScalarFieldEnum",
    description: undefined,
});
