import { IDataModel } from "./data-model";

export interface IProductModel extends IDataModel {
    images: string;
    price: string;
    desc: string;
    location: string;
    pdate: string;
    category: string;
}