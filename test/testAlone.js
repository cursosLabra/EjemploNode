const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'tobi' });
});

describe('GET /users', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});