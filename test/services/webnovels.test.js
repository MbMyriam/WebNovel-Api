const app = require('../../app');
const request = require('supertest');
const webnovelsService = require('../../services/webnovels');

const mockedWebNovels = [
    {id: 1, title: "Premier novel", chapiter: [{number: 1, title: "Premier chapitre"}]}, 
    {id: 2, title: "Second novel", chapiter: [{number: 2, title: "Deuxième chapitre"}]}, 
    {id: 3, title: "Troisième novel", chapiter: [{number: 3, title: "Troisième chapitre"}]}
];
jest.mock('../../services/webnovels');

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