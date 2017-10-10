const request = require('supertest');
const express = require('express');
const app = require('../62_apiUsers');

describe('GET /user', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                console.log("End of first test...")
                done();
            });
    });

    after(function() {
        // runs after all tests in this block
        console.log("End of tests...");
    });
});