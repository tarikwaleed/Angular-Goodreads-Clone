import { Category } from "src/app/category/models/category"
import { Author } from "../../author/models/author"

export interface Book {
    id:number
    title:string
    isbn:string
    author:Author
    category:Category
    summary:string
    imageUrl:string
}

