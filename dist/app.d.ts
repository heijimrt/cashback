/// <reference types="node" />
import * as http from 'http';
export default class App {
    static bootstrap(): App;
    private app;
    constructor();
    run(port: number, callback?: () => void): http.Server;
    private setup;
    private routes;
}
