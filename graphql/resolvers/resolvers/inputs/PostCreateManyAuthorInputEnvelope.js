"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyAuthorInput_1 = require("../inputs/PostCreateManyAuthorInput");
let PostCreateManyAuthorInputEnvelope = class PostCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyAuthorInput_1.PostCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateManyAuthorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
PostCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], PostCreateManyAuthorInputEnvelope);
exports.PostCreateManyAuthorInputEnvelope = PostCreateManyAuthorInputEnvelope;
