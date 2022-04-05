import { v1 as uuid } from "uuid";
import car from "../src/utils/car";

jest.mock("uuid");

const getCurrentCarSpy = jest.spyOn(car, "getCurrentCar");

describe("addProdToCar", () => {
  beforeAll(() => {
    uuid
    //   .mockReturnValueOnce(123)
    //   .mockReturnValueOnce(null)
      .mockReturnValue("9999");
  });
  test("check_execute_uuid", () => {
    const newCar = car.addProdToCar("apple", 3);
    console.log(newCar);
    expect(uuid).toHaveBeenCalled();
    expect(uuid.mock.calls.length).toBe(1);
    expect(newCar).toEqual(
        [{ id: '9999', name: 'apple', count: 3 }],
      );
  });

});
