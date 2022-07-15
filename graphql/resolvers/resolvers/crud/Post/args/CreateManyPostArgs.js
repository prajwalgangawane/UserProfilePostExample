"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyInput_1 = require("../../../inputs/PostCreateManyInput");
let CreateManyPostArgs = class CreateManyPostArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyInput_1.PostCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPostArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPostArgs.prototype, "skipDuplicates", void 0);
CreateManyPostArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPostArgs);
exports.CreateManyPostArgs = CreateManyPostArgs;
