import { User } from "src/app/user/models/user";
import { Book } from "./book";

export interface Rating {
    book: Book
    user: User
    rating: number

}
