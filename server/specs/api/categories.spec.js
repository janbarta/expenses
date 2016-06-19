const request = require('supertest');
const app = require('../../app');
const chai = require('chai');
const expect = chai.expect;

describe('categories', function() {
    it('should get categories from API', function(done) {
        request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(function(res) {

                expect(res.body).to.not.be.empty;
                expect(res.body).to.have.length.at.least(2);
            })
            .expect(200, done);
    });
});