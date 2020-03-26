import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  postList: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostList().subscribe(data => this.postList = data);
  }

}
