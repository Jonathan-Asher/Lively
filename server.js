import express from 'express';
import { creatPhotoJSON } from './api/index';

const port = process.env.port || 80;

const server = express();

server.set('view engine', 'ejs');

server.use(express.static('public'));

server.get('/*', (req, res) => {
  console.log(req.path.slice(1).toLowerCase());
  switch(req.path.slice(1).toLowerCase()) {
    case '':
    case 'harmony':
    case 'food':
    case 'meditation':
    case 'body':
    case 'login':
      creatPhotoJSON();
      res.render('index', {
        name: req.path.slice(1)
      });
      break;
    default:
      res.status(404).send('Not found');
  }
});

//server.use('/', (req, res, next) => {
//    let name = req.path.slice(1)[0].toUpperCase() + req.path.slice(2).toLowerCase()
//    res.render(name, { name });
//});

server.listen(port, () => {
  console.info('Listening on port ' + port);
});