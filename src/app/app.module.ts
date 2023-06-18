import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from 'src/reports/reports.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ReportsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
