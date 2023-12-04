let webnovels = [
    {id: 1, title: "Premier novel", chapiter: [{number: 1, title: "Premier chapitre"}]}, 
    {id: 2, title: "Second novel", chapiter: [{number: 2, title: "Deuxième chapitre"}]}, 
    {id: 3, title: "Troisième novel", chapiter: [{number: 3, title: "Troisième chapitre"}]}
];

exports.getAllNovels = () => {
    return webnovels;
};