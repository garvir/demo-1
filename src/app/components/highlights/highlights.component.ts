import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Post, PostTypes} from '../../types/post.interface';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  posts: Post[] = [];
  PostTypes = PostTypes;
  postToShow: Post = null;
  constructor(
    private readonly dataService: DataService
  ) {
  }

  ngOnInit() {
    this.dataService.posts.subscribe(posts => {
      this.posts = posts
        .filter(post => post.posted)
        .slice(0, 8);
    });
  }

}
