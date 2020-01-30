import { Injectable } from "@angular/core";
import { IProductModel } from "../interfaces/common-model";
import { DataService } from "../classes/data-service";

@Injectable({
  providedIn: "root"
})
export class ProductsService extends DataService<IProductModel> {
  private productDataDump: IProductModel[] = [
    {
      id: 1,
      images: "../../../assets/image/products/cars/car1.webp",
      price: "6,50,000",
      desc: "Hyundai Elite I20 Sportz 1.2, 2018, Petrol",
      location: "Delhi",
      pdate: "5 days ago",
      category: "car",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 2,
      images: "../../../assets/image/products/cars/car2.webp",
      price: "1,50,000",
      desc: "Mahindra Others, 2011, Diesel",
      location: "Mumbai",
      pdate: "Today",
      category: "car",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 3,
      images: "../../../assets/image/products/cars/car3.webp",
      price: "4,05,000",
      desc: "Maruti Suzuki Eeco 5 STR WITH A/C+HTR, 2017, Petrol",
      location: "Punjab",
      pdate: "Today",
      category: "car",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 4,
      images: "../../../assets/image/products/cars/car4.webp",
      price: "2,40,000",
      desc: "Maruti Suzuki Alto 800 Lxi, 2016, Petrol",
      location: "Haryana",
      pdate: "Today",
      category: "car",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 5,
      images: "../../../assets/image/products/cars/car5.webp",
      price: "1,90,000",
      desc: "Tata Indigo Ecs eCS LS TDI, 2015, Diesel",
      location: "Rajasthan",
      pdate: "Today",
      category: "car",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 6,
      images: "../../../assets/image/products/motorcycles/motor1.webp",
      price: "1,20,000",
      desc: "ROYAL ENFILED 1988 MODEL",
      location: "Delhi",
      pdate: "6 days ago",
      category: "Motor Cycle",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 7,
      images: "../../../assets/image/products/motorcycles/motor2.webp",
      price: "1,30,000",
      desc: "thunderbird 350 modified",
      location: "Mumbai",
      pdate: "Today",
      category: "Motor Cycle",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 8,
      images: "../../../assets/image/products/motorcycles/motor3.webp",
      price: "1,10,000",
      desc: "Yamaha RX 100",
      location: "Punjab",
      pdate: "Today",
      category: "Motor Cycle",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 9,
      images: "../../../assets/image/products/motorcycles/motor4.webp",
      price: "1,25,000",
      desc: "Royal Enfield Diesel Bullet Model 2000 RS 125000",
      location: "Haryana",
      pdate: "Today",
      category: "Motor Cycle",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 10,
      images: "../../../assets/image/products/motorcycles/motor5.webp",
      price: "1,00,000",
      desc: "Foreign bike for ugent sale",
      location: "Rajasthan",
      pdate: "Jan 23",
      category: "Motor Cycle",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 11,
      images: "../../../assets/image/products/mobilephones/mobile1.webp",
      price: "90,000",
      desc: "11 Pro Max Green 64Gb one month used",
      location: "Delhi",
      pdate: "Today",
      category: "Mobile Phones",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 12,
      images: "../../../assets/image/products/mobilephones/mobile2.webp",
      price: "22,000",
      desc: "Sell or exchange my galaxy s8",
      location: "Mumbai",
      pdate: "Today",
      category: "Mobile Phones",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 13,
      images: "../../../assets/image/products/mobilephones/mobile3.webp",
      price: "8,700",
      desc: "Samsung s6 clean set",
      location: "Punjab",
      pdate: "Today",
      category: "Mobile Phones",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 14,
      images: "../../../assets/image/products/mobilephones/mobile4.webp",
      price: "12,000",
      desc: "Samsung a50 new 4months used 4gb 64 full box warranty",
      location: "Haryana",
      pdate: "Today",
      category: "Mobile Phones",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 15,
      images: "../../../assets/image/products/mobilephones/mobile5.webp",
      price: "8,990",
      desc: "Oppo F7 4/64 gb",
      location: "Rajasthan",
      pdate: "Today",
      category: "Mobile Phones",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 16,
      images: "../../../assets/image/products/salehouseapartment/house1.webp",
      price: "44,00,000",
      desc: "4 cent only one customised villa in kazhakkoottam Menamkulam",
      location: "Delhi",
      pdate: "Jan 18",
      category: "Sale House and Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 17,
      images: "../../../assets/image/products/salehouseapartment/house2.webp",
      price: "30,00,000",
      desc: "One BHK furnished Digital Flat",
      location: "Mumbai",
      pdate: "Jan 18",
      category: "Sale House and Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 18,
      images: "../../../assets/image/products/salehouseapartment/house3.webp",
      price: "54,00,000",
      desc: "4 BHK new House",
      location: "Punjab",
      pdate: "Dec 19",
      category: "Sale House and Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 19,
      images: "../../../assets/image/products/salehouseapartment/house4.webp",
      price: "55,00,000",
      desc: "New 1811sqft House For Sale",
      location: "Haryana",
      pdate: "Today",
      category: "Sale House and Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 20,
      images: "../../../assets/image/products/salehouseapartment/house5.webp",
      price: "68,00,000",
      desc: "Ready to move House LNCPE",
      location: "Rajasthan",
      pdate: "Today",
      category: "Sale House and Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 21,
      images: "../../../assets/image/products/scooters/scooters1.webp",
      price: "33,000",
      desc: "Yamaha rayzr for sale",
      location: "Delhi",
      pdate: "Today",
      category: "Scooter",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 22,
      images: "../../../assets/image/products/scooters/scooters2.webp",
      price: "75,000",
      desc: "New Dio show room condition",
      location: "Mumbai",
      pdate: "Today",
      category: "Scooter",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 23,
      images: "../../../assets/image/products/scooters/scooters3.webp",
      price: "20,000",
      desc: "black colour,good condition,company spares.",
      location: "Punjab",
      pdate: "Today",
      category: "Scooter",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 24,
      images: "../../../assets/image/products/scooters/scooters4.webp",
      price: "14,000",
      desc: "TvswegoForsale",
      location: "Haryana",
      pdate: "Today",
      category: "Scooter",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 25,
      images: "../../../assets/image/products/scooters/scooters5.webp",
      price: "25,000",
      desc: "Honda Aviator 2014",
      location: "Rajasthan",
      pdate: "Today",
      category: "Scooter",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 26,
      images: "../../../assets/image/products/commercialvehicles/vec1.webp",
      price: "1,95,000",
      desc: "2015 model Tata ace ht",
      location: "Mumbai",
      pdate: "Today",
      category: "Vehicles",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 27,
      images: "../../../assets/image/products/commercialvehicles/vec2.webp",
      price: "3,80,500",
      desc: "Sports #willy #open #closed #thar #modifiedjeeps",
      location: "Delhi",
      pdate: "Today",
      category: "Vehicles",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 28,
      images: "../../../assets/image/products/commercialvehicles/vec3.webp",
      price: "4,15,000",
      desc: "Mahindra thar for sale 2 wd perfec condition all pepper clear",
      location: "Punjab",
      pdate: "Today",
      category: "Vehicles",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 29,
      images: "../../../assets/image/products/commercialvehicles/vec4.webp",
      price: "75,000",
      desc: "Petol Auto 2013,Next Test 9/2021, paper Clear",
      location: "Haryana",
      pdate: "Today",
      category: "Vehicles",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 30,
      images: "../../../assets/image/products/commercialvehicles/vec5.webp",
      price: "8,75,000",
      desc: "Swaraj Mazda tipper",
      location: "Rajasthan",
      pdate: "Today",
      category: "Vehicles",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 31,
      images: "../../../assets/image/products/renthouseapartment/hou1.webp",
      price: "11,500",
      desc: "2 BHK House - near Kariavattom - ideal for families -Technopark, LNCPE",
      location: "Delhi",
      pdate: "Today",
      category: "Rent House and Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 32,
      images: "../../../assets/image/products/renthouseapartment/hou2.webp",
      price: "20,000",
      desc: "3 BED ROOM APARTMENT FOR RENT AT KANIYAPURAM NEAR TECHNOCITY",
      location: "Mumbai",
      pdate: "Today",
      category: "Rent House and Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 33,
      images: "../../../assets/image/products/renthouseapartment/hou3.webp",
      price: "12,000",
      desc: "New apartment with branded fitting s behind green field stadium",
      location: "Punjab",
      pdate: "Today",
      category: "Rent House and Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 34,
      images: "../../../assets/image/products/renthouseapartment/hou4.webp",
      price: "15,000",
      desc: "House for rent at powdikonam gandhinagar jn",
      location: "Haryana",
      pdate: "Today",
      category: "Rent House and Apartment",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 35,
      images: "../../../assets/image/products/renthouseapartment/hou5.webp",
      price: "18,000",
      desc: "3 bhk for rent",
      location: "Rajasthan",
      pdate: "Today",
      category: "Rent House and Apartment",
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
