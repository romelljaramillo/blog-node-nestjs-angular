import { Inject, Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateCommentDto, UpdateCommentDto } from './dto/create-comment.dto';
import { ConfigType } from '@nestjs/config';
import config from '../config';
import { Comment } from './interfaces/comment.interface';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class CommentsService {

  private urlCommens: string;

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
    this.urlCommens = this.configService.api.comments;
  }
  
  create(createCommentDto: CreateCommentDto): Observable<AxiosResponse<Comment>> {
    try {
      return this.http.post(this.urlCommens, createCommentDto, this.requestConfig)
        .pipe(map((resp) => resp.data));
    } catch (error) {
      console.error(error);
    }
  }

  findAll(): Observable<AxiosResponse<Comment>> {
    try {
      return this.http.get(this.urlCommens)
        .pipe(map((resp) => resp.data));
    } catch (error) {
      console.error(error);
    }
  }

  findOne(id: number): Observable<AxiosResponse<Comment>> {
    return this.http.get(this.urlCommens, { params: { id: id } })
      .pipe(map((resp) => resp.data));
  }

  update(id: number, updateCommentDto: UpdateCommentDto): Observable<AxiosResponse<Comment>> {
    return this.http.put(this.urlCommens + '/' + id, updateCommentDto, this.requestConfig)
      .pipe(map((resp) => resp.data));
  }

  remove(id: number): Observable<AxiosResponse<Comment>> {
    return this.http.delete(this.urlCommens + '/' + id)
      .pipe(map((resp) => resp.data));
  }
}
