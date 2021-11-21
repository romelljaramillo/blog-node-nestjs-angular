import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
