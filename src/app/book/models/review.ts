import { User } from "src/app/user/models/user"
import { Book } from "./book"


export interface Review {
    book: Book
    user: User
    review: number
}
