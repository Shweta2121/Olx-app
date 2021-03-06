import { Injectable } from "@angular/core";
import { IProductModel } from "../interfaces/common-model";
import { DataService } from "../classes/data-service";

@Injectable({
  providedIn: "root"
})
export class ProductsService extends DataService<IProductModel> {
  public productDataDump: IProductModel[] = [
    {
      id: 1,
      images: "../../../assets/image/products/cars/car1.webp",
      price: 65000,
      desc: "Hyundai Elite I20 Sportz 1.2, 2018, Petrol",
      location: 1,
      pdate: "5 days ago",
      category: 1,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 2,
      images: "../../../assets/image/products/cars/car2.webp",
      price: 77000,
      desc: "Mahindra Others, 2011, Diesel",
      location: 2,
      pdate: "Today",
      category: 1,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 3,
      images: "../../../assets/image/products/cars/car3.webp",
      price: 78000,
      desc: "Maruti Suzuki Eeco 5 STR WITH A/C+HTR, 2017, Petrol",
      location: 3,
      pdate: "Today",
      category: 1,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 4,
      images: "../../../assets/image/products/cars/car4.webp",
      price: 79000,
      desc: "Maruti Suzuki Alto 800 Lxi, 2016, Petrol",
      location: 4,
      pdate: "Today",
      category: 1,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 5,
      images: "../../../assets/image/products/cars/car5.webp",
      price: 69000,
      desc: "Tata Indigo Ecs eCS LS TDI, 2015, Diesel",
      location: 5,
      pdate: "Today",
      category: 1,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 6,
      images: "../../../assets/image/products/motorcycles/motor1.webp",
      price: 98000,
      desc: "ROYAL ENFILED 1988 MODEL",
      location: 1,
      pdate: "6 days ago",
      category: 2,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 7,
      images: "../../../assets/image/products/motorcycles/motor2.webp",
      price: 91000,
      desc: "thunderbird 350 modified",
      location: 2,
      pdate: "Today",
      category: 2,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 8,
      images: "../../../assets/image/products/motorcycles/motor3.webp",
      price: 84000,
      desc: "Yamaha RX 100",
      location: 3,
      pdate: "Today",
      category: 2,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 9,
      images: "../../../assets/image/products/motorcycles/motor4.webp",
      price: 71000,
      desc: "Royal Enfield Diesel Bullet Model 2000 RS 125000",
      location: 4,
      pdate: "Today",
      category: 2,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 10,
      images: "../../../assets/image/products/motorcycles/motor5.webp",
      price: 99000,
      desc: "Foreign bike for ugent sale",
      location: 5,
      pdate: "Jan 23",
      category: 2,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 11,
      images: "../../../assets/image/products/mobilephones/mobile1.webp",
      price: 45000,
      desc: "11 Pro Max Green 64Gb one month used",
      location: 1,
      pdate: "Today",
      category: 3,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 12,
      images: "../../../assets/image/products/mobilephones/mobile2.webp",
      price: 46000,
      desc: "Sell or exchange my galaxy s8",
      location: 2,
      pdate: "Today",
      category: 3,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 13,
      images: "../../../assets/image/products/mobilephones/mobile3.webp",
      price: 47000,
      desc: "Samsung s6 clean set",
      location: 3,
      pdate: "Today",
      category: 3,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 14,
      images: "../../../assets/image/products/mobilephones/mobile4.webp",
      price: 48000,
      desc: "Samsung a50 new 4months used 4gb 64 full box warranty",
      location: 4,
      pdate: "Today",
      category: 3,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 15,
      images: "../../../assets/image/products/mobilephones/mobile5.webp",
      price: 49000,
      desc: "Oppo F7 4/64 gb",
      location: 5,
      pdate: "Today",
      category: 3,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 16,
      images: "../../../assets/image/products/salehouseapartment/house1.webp",
      price: 52000,
      desc: "4 cent only one customised villa in kazhakkoottam Menamkulam",
      location: 1,
      pdate: "Jan 18",
      category: 4,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 17,
      images: "../../../assets/image/products/salehouseapartment/house2.webp",
      price: 53000,
      desc: "One BHK furnished Digital Flat",
      location: 2,
      pdate: "Jan 18",
      category: 4,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 18,
      images: "../../../assets/image/products/salehouseapartment/house3.webp",
      price: 54000,
      desc: "4 BHK new House",
      location: 3,
      pdate: "Dec 19",
      category: 4,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 19,
      images: "../../../assets/image/products/salehouseapartment/house4.webp",
      price: 55000,
      desc: "New 1811sqft House For Sale",
      location: 4,
      pdate: "Today",
      category: 4,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 20,
      images: "../../../assets/image/products/salehouseapartment/house5.webp",
      price: 56000,
      desc: "Ready to move House LNCPE",
      location: 5,
      pdate: "Today",
      category: 4,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 21,
      images: "../../../assets/image/products/scooters/scooters1.webp",
      price: 57000,
      desc: "Yamaha rayzr for sale",
      location: 1,
      pdate: "Today",
      category: 5,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 22,
      images: "../../../assets/image/products/scooters/scooters2.webp",
      price: 58000,
      desc: "New Dio show room condition",
      location: 2,
      pdate: "Today",
      category: 5,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 23,
      images: "../../../assets/image/products/scooters/scooters3.webp",
      price: 59000,
      desc: "black colour,good condition,company spares.",
      location: 3,
      pdate: "Today",
      category: 5,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 24,
      images: "../../../assets/image/products/scooters/scooters4.webp",
      price: 61000,
      desc: "TvswegoForsale",
      location: 4,
      pdate: "Today",
      category: 5,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 25,
      images: "../../../assets/image/products/scooters/scooters5.webp",
      price: 62000,
      desc: "Honda Aviator 2014",
      location: 5,
      pdate: "Today",
      category: 5,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 26,
      images: "../../../assets/image/products/commercialvehicles/vec1.webp",
      price: 63000,
      desc: "2015 model Tata ace ht",
      location: 1,
      pdate: "Today",
      category: 6,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 27,
      images: "../../../assets/image/products/commercialvehicles/vec2.webp",
      price: 64000,
      desc: "Sports #willy #open #closed #thar #modifiedjeeps",
      location: 2,
      pdate: "Today",
      category: 6,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 28,
      images: "../../../assets/image/products/commercialvehicles/vec3.webp",
      price: 65000,
      desc: "Mahindra thar for sale 2 wd perfec condition all pepper clear",
      location: 3,
      pdate: "Today",
      category: 6,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 29,
      images: "../../../assets/image/products/commercialvehicles/vec4.webp",
      price: 66000,
      desc: "Petol Auto 2013,Next Test 9/2021, paper Clear",
      location: 4,
      pdate: "Today",
      category: 6,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 30,
      images: "../../../assets/image/products/commercialvehicles/vec5.webp",
      price: 67000,
      desc: "Swaraj Mazda tipper",
      location: 5,
      pdate: "Today",
      category: 6,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 31,
      images: "../../../assets/image/products/renthouseapartment/hou1.webp",
      price: 68000,
      desc: "2 BHK House - near Kariavattom - ideal for families -Technopark, LNCPE",
      location: 1,
      pdate: "Today",
      category: 7,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 32,
      images: "../../../assets/image/products/renthouseapartment/hou2.webp",
      price: 68000,
      desc: "3 BED ROOM APARTMENT FOR RENT AT KANIYAPURAM NEAR TECHNOCITY",
      location: 2,
      pdate: "Today",
      category: 7,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 33,
      images: "../../../assets/image/products/renthouseapartment/hou3.webp",
      price: 69000,
      desc: "New apartment with branded fitting s behind green field stadium",
      location: 3,
      pdate: "Today",
      category: 7,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 34,
      images: "../../../assets/image/products/renthouseapartment/hou4.webp",
      price: 15000,
      desc: "House for rent at powdikonam gandhinagar jn",
      location: 4,
      pdate: "Today",
      category: 7,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 35,
      images: "../../../assets/image/products/renthouseapartment/hou5.webp",
      price: 18000,
      desc: "3 bhk for rent",
      location: 5,
      pdate: "Today",
      category: 7,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
  ];
  constructor() {
    super();
    for (const product of this.productDataDump) {
      this.add(product)
    }
  }
}
