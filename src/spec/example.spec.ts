import { SuperComputer }  from '../app/super-computer';

describe('calculate', function () {

    it('should do super computation well!!', function () {

        const superComputer =  new SuperComputer();

        const computedValue = superComputer.compute(7);

        expect(computedValue).toBe(14);

    });
    
});