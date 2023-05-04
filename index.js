
const express = require('express');
const  { graphqlHTTP } = require('express-graphql')

const schema = require('./data/schema')

const resolvers = require('./data/resolvers');

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
