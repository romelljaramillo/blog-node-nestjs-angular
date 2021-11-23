import { ConsoleLogger, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { ConfigType } from '@nestjs/config';
import config from '../config';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {

  private urlUsers: string;

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
    this.urlUsers = this.configService.api.users;
  }

  create(createUserDto: CreateUserDto): Observable<AxiosResponse<User>> {
    try {
      return this.http.post(this.urlUsers, createUserDto, this.requestConfig)
        .pipe(map((resp) => resp.data));
    } catch (error) {
      console.error(error);
    }
  }

  findAll(): Observable<AxiosResponse<User[]>> {
    try {
      return this.http.get(this.urlUsers)
        .pipe(map((resp) => {
          console.log(resp.data);
          return resp.data
        }));
    } catch (error) {
      console.error(error);
    }
  }

  findOne(id: number): Observable<AxiosResponse<User>> {
      try {
        return this.http.get(this.urlUsers, { params: { id: id } })
          .pipe(map((resp) => {
            if (resp.status == 200 && resp.data.length === 0) {
              throw new NotFoundException('The requested record does not exist');
            } else {
              return resp.data[0];
            }
          }
          ));
      } catch (error) {
        console.error(error);
      }
  }

  update(id: number, updateUserDto: UpdateUserDto): Observable<AxiosResponse<User>> {
    return this.http.put(this.urlUsers + '/' + id, updateUserDto, this.requestConfig)
      .pipe(map((resp) => resp.data));
  }

  remove(id: number): Observable<AxiosResponse<any>> {
    return this.http.delete(this.urlUsers + '/' + id)
      .pipe(map((resp) => resp.data));
  }
}
