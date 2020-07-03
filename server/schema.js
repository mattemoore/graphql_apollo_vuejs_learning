const { gql } = require ('apollo-server');

const typeDefs = gql`
    type Query {
        artists: [Artist]
        artist(artistID: ID!): [Artist]
        albums(artistID: ID!): [Album]    
    }

    type Artist {
        name: String!
        id: ID!
    }

    type Album {
        title: String!
        id: ID!
        artistID: ID!
        artist: Artist!
    }
`
module.exports = typeDefs;
