"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const client_1 = require("@prisma/client");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("../graphql/resolvers");
const prisma = new client_1.PrismaClient({
    log: ['info', 'error', 'query', 'warn']
});
const port = process.env.APP_PORT;
async function main() {
    const app = (0, express_1.default)();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: resolvers_1.resolvers,
            validate: true
        }),
        context: () => ({ prisma }),
        csrfPrevention: true,
        cache: "bounded",
        plugins: []
    });
    try {
        await apolloServer.start();
        apolloServer.applyMiddleware({ app });
    }
    catch (err) {
        console.log(err);
    }
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}
main()
    .catch(e => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=index.js.map