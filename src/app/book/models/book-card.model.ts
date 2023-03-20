import { Author } from "src/app/author/models/author"

export interface BookCardModel{

    _id:string
    title:string
    summary:string
    author:Author
    coverImage:string
}