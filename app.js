const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello Express!');
});
app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});
app.get('/burgers', (req, res) => {
  res.send('We have juicy cheese burgers!');
});
app.get('/echo', (req, res) => {
  const responseText = `Here are some details of your request:
      Base URL: ${req.baseUrl}
      Host: ${req.hostname}
      Path: ${req.path}
    `;
  res.send(responseText);
});

app.get('/sum', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const c = a + b;
  if (!a || !b) {
    return res
      .status(400)
      .send('Please provide an initial integer: ? a=x & b=x');
  }
  const added = `The sum of ${a} & ${b} is ${c}`;
  res.send(added);
});

app.get('/cipher', (req, res) => {
  const shift = parseInt(req.query.shift);
  const text = req.query.text;
  const result = text
    .split('')
    .map((items) => String.fromCharCode(items.charCodeAt(0) + shift))
    .join('');
  if (!text || !shift) {
    return res
      .status(400)
      .send('Please provide the following query string: ? text=x & shift=x');
  }
  res.send(result);
});

app.get('/lotto', (req, res) => {
  const shift = parseInt(req.query.shift);
  const text = req.query.text
    .split('')
    .map((items) => {
      return String.fromCharCode(items.charCodeAt(0) + shift);
    })
    .join('');
  if (!text || !shift) {
    return res
      .status(400)
      .send('Please provide the following query string: ? text=x & shift=x');
  }
  res.send(result);
});
