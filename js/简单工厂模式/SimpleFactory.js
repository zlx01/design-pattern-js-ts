class BenzCar {
  constructor() {
    this.name = "奔驰";
  }

  drive() {
    console.log(this.name + "开车了");
  }
}

class BmwCar {
  constructor() {
    this.name = "宝马";
  }

  drive() {
    console.log(this.name + "开车了");
  }
}

class CarFactory {
  constructor() {
    // 每次新增一款车这里都要修改
    this.cars = {
      benz: BenzCar,
      bmw: BmwCar,
    };
  }

  createCar(type) {
    return new this.cars[type]();
  }
}

class Driver {
  constructor() {
    this.carFactory = new CarFactory();
  }

  driveCar(type) {
    this.carFactory.createCar(type).drive();
  }
}

const driver = new Driver();
driver.driveCar("benz");
