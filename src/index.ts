import 'reflect-metadata';
import App from './app';
import { createConnection } from 'typeorm';

/**
 * Application Bootstrap
 */
App.bootstrap();


createConnection()
  .then(async connection => {
    // here you can start to work with your entities
  }).catch(error => console.log(error));