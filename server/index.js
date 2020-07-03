const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const ChinookAPI = require('./chinook');
const resolvers = require('./resolvers');

const dataSources = () => ({
  chinookAPI: new ChinookAPI()
});

const context = () => {
  return {foo: "bar"}
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  introspection: true,
  playground: true
});

if (process.env.NODE_ENV !== 'test') {
  server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
      console.log(`🚀 app running at ${url}`)
    });
}
