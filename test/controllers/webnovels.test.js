const app = require('../../app');
const request = require('supertest');
const webnovelsService = require('../../services/bd/webnovels');

const mockedWebNovels = [
    {id: 1, title: "Premier novel", date: '7/4/1980'}, 
    {id: 2, title: "Second novel", date: '7/4/2000'}, 
    {id: 3, title: "Troisième novel", date: '7/4/2023'}
];
jest.mock('../../services/bd/webnovels');

describe('get webnovels', () => {
    it('should return list of webnovels', async () => {
        // GIVEN
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

    it('should success when return empty list webnovels', async () => {
        // GIVEN
        webnovelsService.getAllNovels.mockReturnValueOnce([]);

        // WHEN
        const resp = await request(app).get('/webnovels');

        // THEN
        expect(resp.statusCode).toEqual(200);
        expect(resp.body.data).toHaveLength(0);
    });
});

describe('post webnovels', () => {
    it('should add webnovel successfully', async () => {

        webnovelsService.addWebnovel.mockReturnValueOnce([]);

        // When
        const resp = await request(app).post('/webnovels/add').send({
            title: 'Histoire',
            date: '2023-04-12'
        });

        // Then
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body.success).toBeTruthy();
    });
});