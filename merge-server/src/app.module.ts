import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioMergeModule } from './audio-merge/audio-merge.module';
import { TrimMergeModule } from './trim-merge/trim-merge.module';

@Module({
  imports: [AudioMergeModule, TrimMergeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
