import { Article } from './Article';

export class Category{
    iDCatagory : number;
    code : string;
    designation : string;
    articles : Array<Article>;
}