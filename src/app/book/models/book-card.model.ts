import { Author } from "src/app/author/models/author"

export interface BookCardModel{

    _id:string
    author_name:string
    title:string
    coverImage:string
    summary:string
}