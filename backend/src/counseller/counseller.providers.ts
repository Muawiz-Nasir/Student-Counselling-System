import { DataSource } from 'typeorm';
import { Counseller } from './entities/counseller.entity';

export const counsellerProviders = [
  {
    provide: 'COUNSELLER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Counseller),
    inject: ['DATA_SOURCE'],
  },
];
