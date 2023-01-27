import Express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 3000;
const app = Express();

app.use(cors());

const loadFile = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.log(err);
      callback(null, err);
      return;
    }

    callback(JSON.parse(data), null);
  });
};

const main = async () => {
  let list = [];

  loadFile('./assets/list.json', (data, err) => {
    if (err) {
      console.log(err);
      return;
    }

    list = data ?? [];
  });

  app.get('/list', async (request, response) => {
    response.send(list);
  });

  app.get('/mindmap', async (request, response) => {
    response.sendFile(__dirname + '/assets/mindMap.png');
  });

  app.get('/list/:id', async (request, response) => {
    const id = Number(request.params.id);

    if (isNaN(id)) {
      res.status(404).send('Not found');
    }

    const item = list.find((z) => z.id === id);
    response.send(item);
  });
  app.listen(PORT);
};

main();
