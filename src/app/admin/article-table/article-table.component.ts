import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})
export class ArticleTableComponent implements OnInit {
  postList: Post[] = [];
  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postService.getPostList().subscribe(data => this.postList = data);
  }

  create() {
    const crud = 'create';
    this.router.navigate(['/admin/article/', crud]);
  }

  view(id) {
    const crud = 'view';
    this.router.navigate(['/admin/article/', crud, id]);
  }

  edit(id) {
    const crud = 'edit';
    this.router.navigate(['/admin/article/', crud, id]);
  }

  delete(id) {
    this.postService.delete(id).subscribe(data => this.postList = data);
    this.ngOnInit();
  }

}
