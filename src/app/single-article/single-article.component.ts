import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  title: string;
  body: string;
  userId: number;
  created_at: string;
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.postService.get(id).subscribe(data => {
      this.title = data.title;
      this.body = data.body;
      this.userId = data.userId;
      this.created_at = data.created_at;
    });
  }

}
