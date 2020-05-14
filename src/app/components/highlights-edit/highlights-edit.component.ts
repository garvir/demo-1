import {Component, OnInit} from '@angular/core';
import {Post, PostTypes} from '../../types/post.interface';
import {DataService} from '../../services/data.service';
import {Author} from '../../types/author.interface';

@Component({
  selector: 'app-highlights-edit',
  templateUrl: './highlights-edit.component.html',
  styleUrls: ['./highlights-edit.component.css']
})
export class HighlightsEditComponent implements OnInit {
  published: Post[] = [];
  posts: Post[] = [];
  unpublished: Post[] = [];
  allPosts: Post[] = [];
  PostTypes = PostTypes;
  instantPublish = false;
  fileName: string;
  file: string;
  authors: Author[] = [];

  title: string = null;
  body = 'Lorem ipsum dolor';
  author: number = null;

  constructor(
    private readonly dataService: DataService
  ) {
  }

  ngOnInit() {
    this.dataService.posts.subscribe(posts => {
      this.posts = posts;
      this.published = posts.filter(post => post.posted);
      this.unpublished = posts.filter(post => !post.posted);
      this.allPosts = [...this.published, ...this.unpublished].slice(0, 12);
    });
    this.dataService.authors.subscribe((value: Author[]) => {
      this.authors = value;
    });
  }

  unpublish(index: number) {
    this.allPosts[index].posted = false;
    this.dataService.posts.next(this.allPosts);
  }

  publish(index: number) {
    this.allPosts[index].posted = true;
    this.dataService.posts.next(this.allPosts);
  }

  remove(index: number) {
    this.posts.splice(index, 1);
    this.dataService.posts.next(this.posts);
  }

  toggle() {
    this.instantPublish = !this.instantPublish;
  }

  openFileSelection() {
    document.querySelector<HTMLInputElement>('#file').click();
  }

  async onFile() {
    const file = document.querySelector<HTMLInputElement>('#file').files[0];
    this.fileName = file.name;
    try {
      this.file = await this.toBase64(file);
    } catch (e) {
    }
  }

  toBase64(file): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.toString());
      reader.onerror = error => reject(error);
    });
  }

  isFilled() {
    return !!(this.author && this.body && this.title);
  }

  create() {
    const newPost: Post = {
      title: this.title,
      body: this.body,
      image: this.file ? this.file : null,
      author: this.authors[this.author],
      posted: this.instantPublish
    };
    this.posts.push(newPost);
    this.dataService.posts.next(this.posts);
  }
}
