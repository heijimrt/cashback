import * as express from 'express';
export declare class Swagger {
    /**
     * Configure setup for swagger feature
     *
     * @param app {express.Application}
     */
    static setup(app: express.Application): void;
    /**
     * Return spec options
     */
    private static getOptions;
}
