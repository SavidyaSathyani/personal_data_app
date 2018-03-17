import http from 'http';
import assert from 'assert';

describe('Test /person route', () => {
  it('should return 200', done => {
    http.get('http://localhost:3000/person', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});