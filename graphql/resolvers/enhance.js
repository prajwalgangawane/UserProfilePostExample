"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Post: crudResolvers.PostCrudResolver,
    Profile: crudResolvers.ProfileCrudResolver,
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    Post: {
        aggregatePost: actionResolvers.AggregatePostResolver,
        createManyPost: actionResolvers.CreateManyPostResolver,
        createOnePost: actionResolvers.CreateOnePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        deleteOnePost: actionResolvers.DeleteOnePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        posts: actionResolvers.FindManyPostResolver,
        post: actionResolvers.FindUniquePostResolver,
        groupByPost: actionResolvers.GroupByPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        updateOnePost: actionResolvers.UpdateOnePostResolver,
        upsertOnePost: actionResolvers.UpsertOnePostResolver
    },
    Profile: {
        aggregateProfile: actionResolvers.AggregateProfileResolver,
        createManyProfile: actionResolvers.CreateManyProfileResolver,
        createOneProfile: actionResolvers.CreateOneProfileResolver,
        deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
        deleteOneProfile: actionResolvers.DeleteOneProfileResolver,
        findFirstProfile: actionResolvers.FindFirstProfileResolver,
        profiles: actionResolvers.FindManyProfileResolver,
        profile: actionResolvers.FindUniqueProfileResolver,
        groupByProfile: actionResolvers.GroupByProfileResolver,
        updateManyProfile: actionResolvers.UpdateManyProfileResolver,
        updateOneProfile: actionResolvers.UpdateOneProfileResolver,
        upsertOneProfile: actionResolvers.UpsertOneProfileResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    }
};
const crudResolversInfo = {
    Post: ["aggregatePost", "createManyPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "posts", "post", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"],
    Profile: ["aggregateProfile", "createManyProfile", "createOneProfile", "deleteManyProfile", "deleteOneProfile", "findFirstProfile", "profiles", "profile", "groupByProfile", "updateManyProfile", "updateOneProfile", "upsertOneProfile"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"]
};
const argsInfo = {
    AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyPostArgs: ["data", "skipDuplicates"],
    CreateOnePostArgs: ["data"],
    DeleteManyPostArgs: ["where"],
    DeleteOnePostArgs: ["where"],
    FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePostArgs: ["where"],
    GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPostArgs: ["data", "where"],
    UpdateOnePostArgs: ["data", "where"],
    UpsertOnePostArgs: ["where", "create", "update"],
    AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyProfileArgs: ["data", "skipDuplicates"],
    CreateOneProfileArgs: ["data"],
    DeleteManyProfileArgs: ["where"],
    DeleteOneProfileArgs: ["where"],
    FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProfileArgs: ["where"],
    GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProfileArgs: ["data", "where"],
    UpdateOneProfileArgs: ["data", "where"],
    UpsertOneProfileArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Post: relationResolvers.PostRelationsResolver,
    Profile: relationResolvers.ProfileRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    Post: ["author"],
    Profile: ["user"],
    User: ["posts", "profile"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Post: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    Profile: ["id", "bio", "userId"],
    User: ["id", "email", "name", "password"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
    PostGroupBy: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
    ProfileGroupBy: ["id", "bio", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "email", "name", "password", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_all"],
    PostAvgAggregate: ["id", "authorId"],
    PostSumAggregate: ["id", "authorId"],
    PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    ProfileCountAggregate: ["id", "bio", "userId", "_all"],
    ProfileAvgAggregate: ["id", "userId"],
    ProfileSumAggregate: ["id", "userId"],
    ProfileMinAggregate: ["id", "bio", "userId"],
    ProfileMaxAggregate: ["id", "bio", "userId"],
    UserCount: ["posts"],
    UserCountAggregate: ["id", "email", "name", "password", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "email", "name", "password"],
    UserMaxAggregate: ["id", "email", "name", "password"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "author", "authorId"],
    PostOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "author", "authorId"],
    PostWhereUniqueInput: ["id"],
    PostOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_count", "_avg", "_max", "_min", "_sum"],
    PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    ProfileWhereInput: ["AND", "OR", "NOT", "id", "bio", "user", "userId"],
    ProfileOrderByWithRelationInput: ["id", "bio", "user", "userId"],
    ProfileWhereUniqueInput: ["id", "userId"],
    ProfileOrderByWithAggregationInput: ["id", "bio", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bio", "userId"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "password", "posts", "profile"],
    UserOrderByWithRelationInput: ["id", "email", "name", "password", "posts", "profile"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "email", "name", "password", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "password"],
    PostCreateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
    PostUpdateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
    PostCreateManyInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "content", "published"],
    ProfileCreateInput: ["bio", "user"],
    ProfileUpdateInput: ["bio", "user"],
    ProfileCreateManyInput: ["id", "bio", "userId"],
    ProfileUpdateManyMutationInput: ["bio"],
    UserCreateInput: ["email", "name", "password", "posts", "profile"],
    UserUpdateInput: ["email", "name", "password", "posts", "profile"],
    UserCreateManyInput: ["id", "email", "name", "password"],
    UserUpdateManyMutationInput: ["email", "name", "password"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    BoolFilter: ["equals", "not"],
    UserRelationFilter: ["is", "isNot"],
    PostCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostAvgOrderByAggregateInput: ["id", "authorId"],
    PostMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostSumOrderByAggregateInput: ["id", "authorId"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    ProfileCountOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileAvgOrderByAggregateInput: ["id", "userId"],
    ProfileMaxOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileMinOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileSumOrderByAggregateInput: ["id", "userId"],
    PostListRelationFilter: ["every", "some", "none"],
    ProfileRelationFilter: ["is", "isNot"],
    PostOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "email", "name", "password"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "email", "name", "password"],
    UserMinOrderByAggregateInput: ["id", "email", "name", "password"],
    UserSumOrderByAggregateInput: ["id"],
    UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutProfileNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProfileUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    UserCreateWithoutPostsInput: ["email", "name", "password", "profile"],
    UserCreateOrConnectWithoutPostsInput: ["where", "create"],
    UserUpsertWithoutPostsInput: ["update", "create"],
    UserUpdateWithoutPostsInput: ["email", "name", "password", "profile"],
    UserCreateWithoutProfileInput: ["email", "name", "password", "posts"],
    UserCreateOrConnectWithoutProfileInput: ["where", "create"],
    UserUpsertWithoutProfileInput: ["update", "create"],
    UserUpdateWithoutProfileInput: ["email", "name", "password", "posts"],
    PostCreateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"],
    PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
    PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
    ProfileCreateWithoutUserInput: ["bio"],
    ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
    PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    ProfileUpsertWithoutUserInput: ["update", "create"],
    ProfileUpdateWithoutUserInput: ["bio"],
    PostCreateManyAuthorInput: ["id", "createdAt", "updatedAt", "title", "content", "published"],
    PostUpdateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
