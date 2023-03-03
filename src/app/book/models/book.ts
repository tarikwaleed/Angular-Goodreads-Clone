import { Author } from "../../models/author"
import { Genre } from "../../models/genre"

export interface Book {
    id:number
    title:string
    isbn:string
    author:Author
    genre:Genre
    summary:string
    imageUrl:string
}

