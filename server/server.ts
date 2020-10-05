import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, 'static')));

app.get('/api/hello-world', (req, res) => {
  res.send({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
