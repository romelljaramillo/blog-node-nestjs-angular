import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigType } from '@nestjs/config';
import config from '../config';
import { Posts } from './interfaces/post.interface';
import { UserService } from '../user/user.service';

@Injectable()
export class PostService {

  private urlPosts: string;

  private requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  };

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private http: HttpService,
    private readonly userService: UserService,
  ) {
    this.urlPosts = this.configService.api.posts;
  }

  create(createPostDto: CreatePostDto): Observable<AxiosResponse<Posts>> {
    try {
      return this.http.post(this.urlPosts, createPostDto, this.requestConfig)
        .pipe(map((resp) => resp.data));
    } catch (error) {
      console.error(error);
    }
  }

  findAll(): Observable<AxiosResponse<Posts[]>> {
    return this.http.get(this.urlPosts)
      .pipe(map(resp => {
        if (resp.status == 200 && resp.data.length === 0) {
          throw new NotFoundException('The requested record does not exist');
        } else {
          return resp.data;
        }
      }
      ));
  }

  findAllofUser(userId: number): Observable<AxiosResponse<Posts[]>> {
    return this.http.get(this.urlPosts, { params: { userId: userId } })
    .pipe(map((resp) => {
      if (resp.status == 200 && resp.data.length === 0) {
        throw new NotFoundException('The requested record does not exist');
      } else {
        return resp.data;
      }
    }
    ));
  }

  findOne(id: number): Observable<AxiosResponse<Posts>> {
    return this.http.get(this.urlPosts, { params: { id: id } })
      .pipe(map((resp) => {
        if (resp.status == 200 && resp.data.length === 0) {
          throw new NotFoundException('The requested record does not exist');
        } else {
          return resp.data[0];
        }
      }
      ));

  }

  update(id: number, updatePostDto: UpdatePostDto): Observable<any> {
    return this.http.put(this.urlPosts + '/' + id, updatePostDto, this.requestConfig)
      .pipe(map((resp) => resp.data));
  }

  remove(id: number) {
    return this.http.delete(this.urlPosts + '/' + id)
      .pipe(map((resp) => resp.data));
  }
}
