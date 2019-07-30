import CarClass from '../CarClass';

const fakeLog = jest.fn().mockImplementation();
describe('Car (New style)', () => {
  /**
   * @type {CarClass}
   */
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
      car = new CarClass();
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
      car = new CarClass(wheels);
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
      expect(fakeLog.mock.calls[0][0]).toBe('Turning on my engine.');
      expect(fakeLog.mock.calls[1][0]).toBe('Steering and moving forward!');
      expect(fakeLog.mock.calls[2][0]).toBe(`Rolling on all ${wheels} wheels!`);
    });

    it('drive method is working (with toBeCalledWith)', () => {
      car.drive();
      expect(fakeLog.mock.calls.length).toBe(3);
      expect(fakeLog).toBeCalledWith('Turning on my engine.');
      expect(fakeLog).toBeCalledWith('Steering and moving forward!');
      expect(fakeLog).toBeCalledWith(`Rolling on all ${wheels} wheels!`);
    });
  });
});