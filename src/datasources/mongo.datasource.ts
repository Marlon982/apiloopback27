import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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
@lifeCycleObserver('datasource')
export class MongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Mongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Mongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
