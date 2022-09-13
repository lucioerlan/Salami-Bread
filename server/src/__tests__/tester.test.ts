import { getDateTime } from '..';

test('getDateTime', () => {
    const newDay = new Date();
    const Day = newDay.getDate()
    expect(getDateTime(Day)).toBe(
        13,
    );
});
