const graphql = require('graphql')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql

const movies = [
    {id: 1, name: 'About Time', genre: 'Drama'},
    {id: 2, name: 'The Gentlemen', genre: 'Gansta'},
    {id: 3, name: 'Ford vs Ferrari', genre: 'Sport'},
    {id: 4, name: 'Aviator', genre: 'Science'}
]

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return movies.find(movie => movie.id == args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({query: Query})