import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([
    '1',
    '2',
    '3',
  ])
});

app.listen(3333);
