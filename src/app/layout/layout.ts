import { Component, OnInit } from '@angular/core';
import { Post } from '../classes/post';
import { PostService } from '../services/post-service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {

  public posts: Post[] = [];

  constructor(
    private postsService: PostService
  ) {}

  ngOnInit(): void {
      this.getPosts();
  }

  public getPosts(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
