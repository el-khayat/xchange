import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Array<Post> = [];

  constructor() {
    this.posts.push({
      id: 1,
      content: 'This is my first post',
      images: ['https://picsum.photos/200/300'],
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        image: 'https://picsum.photos/200/300',
        email: 'john@example.com',
      },
    });
    this.posts.push({
      id: 2,
      content: 'This is my secnd post',
      images: ['https://picsum.photos/200/301'],
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        image: 'https://picsum.photos/200/300',
        email: 'john@example.com',
      },
    });
    this.posts.push({
      id: 3,
      content: 'This is my 3rd post',
      images: ['https://picsum.photos/200/300'],
      user: {
        id: 2,
        firstName: 'mohamed',
        lastName: 'Doe',
        image: 'https://picsum.photos/200/300',
        email: 'john@example.com',
      },
    });
    this.posts.push({
      id: 4,
      content: 'This is my 4th post',
      images: ['https://picsum.photos/200/300'],
      user: {
        id: 3,
        firstName: 'kt',
        lastName: 'Doe',
        image: 'https://picsum.photos/200/300',
        email: 'john@example.com',
      },
    });
  }
}
