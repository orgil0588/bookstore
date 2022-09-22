import Book from "../../models/Book"
const queries = {

    books: async (_root: any, _args: any) => {
        return Book.find()
    },

    getBook: async (_root: any, _args: any) => {
        return Book.findById(_args.id)
    }
}
const mutations = {
    createBook: async (_root: any, _args: any) => {
        const { name, desc, author, image, price, stars } = _args
        const newBook = {
            name, desc, author, image, price, stars
        };
        return await Book.create(newBook)
    },
    updateBook: async (_root: any, _args: any) => {
        const { id, name, desc, author, image, price, stars } = _args
        const doc: any = { name, desc, author, image, price, stars }
        return await Book.findByIdAndUpdate({ _id: id }, { ...doc })
    },
    deleteBook : async (_root:any, _args : any) => {
        return await Book.findByIdAndDelete({_id: _args.id})
    }

}

export const resolvers = { queries, mutations }