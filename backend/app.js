import Express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

export const loadFile = (file) => {
  const res = fs.readFileSync(file);
  if (res) return JSON.parse(res);

  return null;
};

export const server = () => {
  const app = Express();
  const filename = fileURLToPath(import.meta.url);
  const dirName = dirname(filename);

  app.use(cors());

  const list = loadFile('./assets/list.json');

  app.get('/list', async (request, response) => {
    if (!list) {
      response.status(404).json({ message: 'file is not found' });
    }

    response.send(list);
  });

  app.get('/mindmap', async (request, response) => {
    response.sendFile(`${dirName}/assets/mindMap.png`);
  });

  app.get('/list/:id', async (request, response) => {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      response.status(404).send('Not found');
    }

    const item = list.find((z) => z.id === id);
    response.send(item);
  });

  return app;
};
