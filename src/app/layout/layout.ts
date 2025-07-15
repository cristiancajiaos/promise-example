import { Component, OnInit } from '@angular/core';
import { Post } from '../classes/post';
import { PostService } from '../services/post-service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {

  public posts: Post[] = [];
  public postsBar: Post[] = [];

  constructor(
    private postsService: PostService
  ) {}

  ngOnInit(): void {
      this.getPosts();
      this.foo();
  }

  public getPosts(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  public foo(): void {
    this.postsService.postsFoo().then((resolve) => {
      this.postsBar = resolve;
    }).catch(reject => {
      console.log(reject);
    });

  }

}
