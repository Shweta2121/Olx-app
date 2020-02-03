import { Injectable } from '@angular/core';
import { DataService } from "../classes/data-service";
import { ICategoryModel } from "../interfaces/common-model";
@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends DataService<ICategoryModel> {
  private categoriesDataDump: ICategoryModel[] = [
    {
      id: 1,
      name: "Cars",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 2,
      name: "Motorcycles",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 3,
      name: "Mobile Phones",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 4,
      name: "For Sale:Houses & Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 5,
      name: "Scooters",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 6,
      name: "Commercial Vehicles",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 7,
      name: "For Rent:Houses & Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    }
  ];
  constructor() {
    super();
    for (const category of this.categoriesDataDump) {
      this.add(category);
    }
  }
}
