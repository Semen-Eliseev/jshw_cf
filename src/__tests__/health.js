
import { getStatusHealth } from "../health.js";

test('getStatusHealth Маг', () => {
    const list = [
        {
            name: 'Маг',
            health: 90
        },
    ];

    const result = getStatusHealth(list);
    expect(result).toBe(`healthy`);
});

test('getStatusHealth Маг1', () => {
    const list = [
        {
            name: 'Маг1',
            health: 50
        },
    ];

    const result = getStatusHealth(list);
    expect(result).toBe(`wounded`);
});

test('getStatusHealth Маг2', () => {
    const list = [
        {
            name: 'Маг2',
            health: 10
        },
    ];

    const result = getStatusHealth(list);
    expect(result).toBe(`critical`);
});
