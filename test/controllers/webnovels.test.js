const app = require('../../app');

const mockedWebNovels = [
    {id: 1, title: "Premier novel", chapiter: [{number: 1, title: "Premier chapitre"}]}, 
    {id: 2, title: "Second novel", chapiter: [{number: 2, title: "Deuxième chapitre"}]}, 
    {id: 3, title: "Troisième novel", chapiter: [{number: 3, title: "Troisième chapitre"}]}
]

describe('webnovels', () => {
    it('should return list of webnovels', () => {
        // GIVEN
        const result = mockedWebNovels;

        // WHEN


        // THEN
        console.log(result);
        expect(result).not.toBeNull();
        expect(result).toHaveLength(3);
    });

    it('should throw error when return list of webnovels', () => {
        // GIVEN
        const result = null;

        // WHEN


        // THEN
        console.log(result);
        expect(() => {
            expect(result).not.toBeNull();
        }).toThrow();

        expect(() => {
            expect(result).toHaveLength(3);
        }).toThrow();
    });
});