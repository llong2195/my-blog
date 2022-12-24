import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { UserService } from './user/user.service';
import { SecurityModule } from './security/security.module';
import { TokenModule } from './token/token.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { LikeModule } from './like/like.module';
import * as path from 'path';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => ({
        type: configService.get<string>('DATABASE_CONNECTION') as any,
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_DB_NAME'),
        entities: [__dirname + './**.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: 'all',
        logger: 'advanced-console',
        // ssl: {
        //   require: false,
        //   rejectUnauthorized: false,
        // },
      }),
      inject: [ConfigService],
    }),
    UserModule,
    PostModule,
    CommentModule,
    SecurityModule,
    TokenModule,
    AuthorizationModule,
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    LikeModule,
    TagModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {
    console.log(connection.isConnected);
  }
}
