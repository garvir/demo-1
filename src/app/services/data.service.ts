import {Injectable} from '@angular/core';
import {Post} from '../types/post.interface';
import {Project} from '../types/project.interface';
import {BehaviorSubject} from 'rxjs';
import {Author} from '../types/author.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fetchHeaders = new Headers({
    'Content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });
  posts: BehaviorSubject<Post[]> = new BehaviorSubject([]);
  projects: BehaviorSubject<Project[]> = new BehaviorSubject([]);
  authors: BehaviorSubject<Author[]> = new BehaviorSubject([]);
  notification: BehaviorSubject<boolean> = new BehaviorSubject(true);
  mode: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {
    this.loadData();
  }

  async load<T>(url: string, method: string): Promise<T> {
    return (await fetch(url, {method, headers: this.fetchHeaders})).json();
  }

  async loadData() {
    this.posts.next(await this.load('/assets/data/posts.json', 'get'));
    this.projects.next(await this.load('/assets/data/projects.json', 'get'));
    this.authors.next(await this.load('/assets/data/authors.json', 'get'));
  }
}
