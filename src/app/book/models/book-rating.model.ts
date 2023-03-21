export interface BookRatingModel {
    _id:string
    bookID:string,
    userID:string|undefined,
    rating:number
}
