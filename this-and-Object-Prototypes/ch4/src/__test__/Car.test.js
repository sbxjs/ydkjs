import Car from '../Car';

const fakeLog = jest.fn().mockImplementation();
describe('Car (Old style)', () => {
  let car;
  beforeEach(() => {
    console.log = fakeLog;
  });
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  })

  describe('with default wheels', () => {
    beforeEach(() => {
      car = new Car();
    });

    it('has engines equals to 1', () => {
      expect(car.engines).toBe(1);
    });

    it('has default wheels equals to 4', () => {
      expect(car.wheels).toBe(4);
    });

    it('drive method is working', () => {
      car.drive();
      expect(fakeLog.mock.calls.length).toBe(3);
      expect(fakeLog).toBeCalledWith('Turning on my engine.');
      expect(fakeLog).toBeCalledWith('Steering and moving forward!');
      expect(fakeLog).toBeCalledWith('Rolling on all 4 wheels!');
    });
  });

  describe('with 8 wheels', () => {
    const wheels = 8;
    beforeEach(() => {
      car = new Car(wheels);
      console.log = fakeLog;
    });
    it('has engines equals to 1', () => {
      expect(car.engines).toBe(1);
    });

    it('has default wheels equals to 8', () => {
      expect(car.wheels).toBe(wheels);
    });

    it('drive method is working', () => {
      car.drive();
      expect(fakeLog.mock.calls.length).toBe(3);
      expect(fakeLog).toBeCalledWith('Turning on my engine.');
      expect(fakeLog).toBeCalledWith('Steering and moving forward!');
      expect(fakeLog).toBeCalledWith(`Rolling on all ${wheels} wheels!`);
    });
  });
});