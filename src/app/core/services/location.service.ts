import { Injectable } from '@angular/core';
import { ILocationModel } from "../interfaces/common-model";
import { DataService } from "../classes/data-service";


@Injectable({
  providedIn: 'root'
})
export class LocationService extends DataService<ILocationModel>  {
  private locationDataDump: ILocationModel[] = [
    {
      id: 1,
      name: "Delhi",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 2,
      name: "Mumbai",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 3,
      name: "Punjab",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 4,
      name: "Haryana",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 5,
      name: "Rajasthan",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
  ]
  constructor() {
    super();
    for (const location of this.locationDataDump) {
      this.add(location);
    }
  }
}
