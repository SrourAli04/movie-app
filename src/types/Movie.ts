export default interface IMovie {
    id: number;
    title: string;
    imageUrl: string;
    release_date: string;
    rating: number;
    watched: boolean;
    inWishList: boolean;
}