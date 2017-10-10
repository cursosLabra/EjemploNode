const request = require('supertest');
const express = require('express');
const app = require('../62_apiUsers');


describe('GET /user', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /application\/json/)
            .expect(200, done);
    });
    it('respond with html', function(done) {
        request(app)
            .get('/users')
            .set('Accept', 'text/html')
            .expect('Content-Type', /text\/html/)
            .expect(200, done);
    });
    it('respond with xml', function(done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/xml')
            .expect('Content-Type', /application\/xml/)
            .expect(200, done);
    });
    it('respond with plain text', function(done) {
        request(app)
            .get('/users')
            .set('Accept', 'text/plain')
            .expect('Content-Type', /text\/plain/)
            .expect(200, done);
    });

});