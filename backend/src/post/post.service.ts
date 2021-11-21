import { Inject, Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { map, Observable } from 'rxjs';
import { ConfigType } from '@nestjs/config';
import config from '../config';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostService {

  private urlPosts: string;

  private requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    params: {
      param1: 'YOUR_VALUE_HERE'
    },
  };

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private http: HttpService
  ) {
    this.urlPosts = this.configService.api.posts;
  }
  
  create(createPostDto: CreatePostDto): Observable<AxiosResponse<Post>> {
    try {
      return this.http.post(this.urlPosts, createPostDto, this.requestConfig)
        .pipe(map((resp) => resp.data));
    } catch (error) {
      console.error(error);
    }
  }

  findAll(): Observable<AxiosResponse<Post[]>> {
    try {
      return this.http.get(this.urlPosts)
        .pipe(map((resp) => resp.data));
    } catch (error) {
      console.error(error);
    }
  }

  findOne(id: number) {
    return this.http.get(this.urlPosts, { params: { id: id } })
      .pipe(map((resp) => resp.data));
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.http.put(this.urlPosts + '/' + id, updatePostDto, this.requestConfig)
      .pipe(map((resp) => resp.data));
  }

  remove(id: number) {
    return this.http.delete(this.urlPosts + '/' + id)
      .pipe(map((resp) => resp.data));
  }
}
