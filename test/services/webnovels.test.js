const app = require('../../app');
const request = require('supertest');
const webnovelsService = require('../../services/bd/webnovels');

const mockedWebNovels = [
    {id: 1, title: "Premier novel", date: '7/4/1980'}, 
    {id: 2, title: "Second novel", date: '7/4/2000'}, 
    {id: 3, title: "Troisième novel", date: '7/4/2023'}
];
jest.mock('../../services/bd/webnovels');

describe('webnovels', () => {
    it('should return list of webnovels', async () => {
        // MOCK
        webnovelsService.getAllNovels.mockReturnValueOnce(mockedWebNovels);

        // WHEN
        const resp = await request(app).get('/webnovels');

        // THEN
        console.log(resp);
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('data');
        expect(resp.body.success).toBeTruthy();
        expect(resp.body.data).toHaveLength(3);
    });

    it('should throw error when return list of webnovels', async () => {
        // MOCK
        webnovelsService.getAllNovels.mockReturnValueOnce([])

        // WHEN
        const resp = await request(app).get('/webnovels');

        // THEN
        expect(resp.statusCode).toEqual(200);
        expect(resp.body.data).toHaveLength(0);
    });
});