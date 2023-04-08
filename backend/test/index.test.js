import supertest from 'supertest';

import { describe, expect, it, afterAll } from '@jest/globals';

import { server, loadFile } from '../app.js';

const app = server().listen(3000);
const request = supertest(app);
const list = loadFile('./assets/list.json');

describe('Test Counter', () => {
  it('Test /list', async () => {
    const res = await request.get('/list');
    expect(res.body).toStrictEqual(list);
  });

  it('Test /list/:id with correct id', async () => {
    const item = list[1];
    const { id } = item;
    const res = await request.get(`/list/${id}`);
    expect(res.body).toStrictEqual(item);
  });

  it('Test /list/:id with incorrect id', async () => {
    const res = await request.get('/list/wrong');
    expect(res.status).toBe(404);
    expect(res.text).toBe('Not found');
  });

  it('Test /mindmap', async () => {
    const res = await request.get('/mindmap');
    expect(res.status).toBe(200);
    expect(res.type).toBe('image/png');
    expect(res.body).toBeInstanceOf(Buffer);
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
