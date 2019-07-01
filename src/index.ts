import 'reflect-metadata';
import App from './app';
import { createConnection } from 'typeorm';

createConnection()
  .then(async connection => {
    /**
     * Application Bootstrap
     */
    App.bootstrap();
  }).catch(error => console.error(error));