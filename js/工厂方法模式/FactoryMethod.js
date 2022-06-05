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

class BenzFactory {
  createCar() {
    return new BenzCar();
  }
}

class BmwFactory {
  createCar() {
    return new BmwCar();
  }
}

class Driver {
  driveCar(factory) {
    factory.createCar().drive();
  }
}

const driver = new Driver();
// 客户端要维护工厂实例
driver.driveCar(new BenzFactory());
