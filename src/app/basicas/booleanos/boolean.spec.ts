
import { getBool } from "./boolean"

describe('Pruebas Booleans' , () => {
    it('Must supply true' , () => {
        const res = getBool();

        expect( res ).toBeTruthy();
    })
});