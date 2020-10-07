const request = require('supertest').agent('https://localhost:3443');

describe('APIs Tester', function () {
    it('should test user API', function (done) {
        request
            .get('/users')
            .trustLocalhost()
            .expect(200, done);
    })
})