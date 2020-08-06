import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());//Introduzir um pacote para converter uma requisição para json
app.use(routes);


app.listen(3333);//ouvir requisições http;  porta: 3333

