"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'Mongo',
    connector: 'mongodb',
    url: 'mongodb://admin_Tic:Cicle1234-%2B@proyectociclo4-shard-00-00.qkpgb.mongodb.net:27017,proyectociclo4-shard-00-01.qkpgb.mongodb.net:27017,proyectociclo4-shard-00-02.qkpgb.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-8cqsx0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongoDataSource = class MongoDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongoDataSource.dataSourceName = 'Mongo';
MongoDataSource.defaultConfig = config;
MongoDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.Mongo', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], MongoDataSource);
exports.MongoDataSource = MongoDataSource;
//# sourceMappingURL=mongo.datasource.js.map