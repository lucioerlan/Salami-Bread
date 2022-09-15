import PaginationHelper from '../Pagination.helper';

interface ITest {
    page: string;
    limit: number;
    data: object[];
}

describe('Pagination helper', () => {
    const test: ITest = {
        page: '1',
        limit: 10,
        data: [
            {
                id: 1,
                name: 'test',
            },
        ],
    };

    it('should return an object with data and meta', () => {
        const result = PaginationHelper._limit(
            test.page,
            test.limit,
            test.data as [],
        );

        expect(result).toStrictEqual({
            data: [
                {
                    id: 1,
                    name: 'test',
                },
            ],
            meta: {
                page: 1,
                limit: 10,
            },
        });
    });
});
