import { getRobots } from "./array"

describe('Pruebas robots', () => {
    it('Debe regresar al menos 3 robots y contener a megaman y ultron', () => {
        const res = getRobots();

        expect( res.length ).toBeGreaterThanOrEqual(4);
        expect( res ).toContain('megaman')
        expect( res ).toContain('ultron')
    })
})