import * as Game from 'Game';
import Engine from 'Engine'

describe('Game', () => {
    it('should be defined', () => {
        expect(Game).toBeDefined();
        // expect(Game.default).toBeDefined();
        // expect(Game.Engine).toBeDefined();
    })
})

describe('Game/Engine', () => {
    let engine;
    beforeEach(() => {
        engine = new Engine({ctx:{}});
    })
    it('shuld add stuff to objects', () => {
        expect(engine.objects).toBeDefined();
        let obj = {test:'obj'}
        engine.register(obj);
        expect(engine.objects[0]).toBe(obj)
    });
    it('should give objects destroy', () => {
        let obj = {};
        engine.register(obj);
        expect(obj.destroy).toBeDefined();
        obj.destroy();
        expect(engine.objects.length).toBe(0)
    });
    
})