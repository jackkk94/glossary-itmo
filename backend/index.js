import Express from 'express';
import fs from 'fs';
import cors from 'cors';

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

  loadFile('./list.json', (data, err) => {
    if (err) {
      console.log(err);
      return;
    }

    list = data ?? [];
  });

  app.get('/list', async (request, response) => {
    response.send(list);
  });

  app.get('/list/:id', async (request, response) => {
    const id = Number(request.params.id);

    if (isNaN(id)) {
      res.status(404).send('Not found');
    }

    const item = list.find((z) => z.id === id);
    response.send(item);
  });
  app.listen(3000, '51.250.31.225');
};

main();
