import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, Next } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { map } from 'rxjs/operators';
import { response } from 'express';


@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService
  ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':userId/users')
  findAllofUser(@Param('userId', ParseIntPipe) userId: number) {
    const resp = this.postService.findAllofUser(userId);
    return resp;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const resp = this.postService.findOne(id);
    return resp;
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove(id);
  }
}
