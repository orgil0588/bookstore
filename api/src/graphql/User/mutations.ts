
const params = `
username : String!
password: String!
role: String
`
const updateParams = `
username : String
password: String
role: String
`

export const mutations = `
register(${params}): User
login(${params}): User
`