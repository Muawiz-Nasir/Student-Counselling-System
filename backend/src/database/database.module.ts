// import { Module } from '@nestjs/common';
// import { Pool } from 'pg';

// @Module({
//   providers: [
//     {
//       provide: 'DATABASE_CONNECTION',
//       useFactory: async () => {
//         return new Pool({
//           type: 'postgres',
//           host: 'localhost',
//           port: 5432,
//           username: 'postgres',
//           password: 'test',
//           database: 'counselling-db',
//           entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//           synchronize: true,
//         });
//       },
//     },
//   ],
//   exports: ['DATABASE_CONNECTION'],
// })
// export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
