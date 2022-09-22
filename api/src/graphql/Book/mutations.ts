
const params = `
name : String!
desc: String!
author: String!
image : String
price: Int!
stars: Float
`
const updateParams = `
id: String!
name : String
desc: String
author: String
image : String
price: Int
stars: Float
`

export const mutations = `
createBook(${params}): Book
updateBook(${updateParams} ): Book
deleteBook(id:String!) : Book
`