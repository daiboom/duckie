import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminalModule } from './terminal/terminal.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

const root = join(__dirname, '..', '../frontend/dist');

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: root,
    }),
    TerminalModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
