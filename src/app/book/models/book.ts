import { Category } from "src/app/category/models/category"
import { Author } from "../../author/models/author"
import { Review } from "./review"
import { User } from "src/app/user/models/user"
import { Rating } from "./rating"

export interface Book {
    _id: string
    title: string
    summary: string
    isbn: string
    author: Author[]
    genre: Category[]
    coverImage: string
    reviews: Review[]
    ratings: Rating[]
    wantToRead: User[]
    read: User[]
    currentlyReading: User[]
}

