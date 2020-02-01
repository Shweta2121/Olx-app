import { IDataModel } from "./data-model";

export interface IProductModel extends IDataModel {
    images: string;
    price: string;
    desc: string;
    location: number;
    pdate: string;
    category: string;
}
export interface ILocationModel extends IDataModel {
    name: string;
}

export interface IFilterModels extends IDataModel {
    location: number,
}