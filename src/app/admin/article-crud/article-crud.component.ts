import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-crud',
  templateUrl: './article-crud.component.html',
  styleUrls: ['./article-crud.component.css']
})
export class ArticleCrudComponent implements OnInit {

  crud: string;

  id: number;
  title: string;
  body: string;
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crud = this.activatedRoute.snapshot.paramMap.get('crud');
    console.log(this.crud);
    if (this.crud === 'create') {
      console.log('create mode');
    } else {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.postService.get(id).subscribe(data => {
          this.id = data.id;
          this.title = data.title;
          this.body = data.body;
      });
    }
  }

  edit(id) {
    const data1 = {
      id: this.id,
      title: this.title,
      body: this.body,
    };
    this.postService.put(id, data1).subscribe(data => {
      this.id = data.id;
      this.title = data.title;
      this.body = data.body;
    });
    this.router.navigate(['/admin']);
  }

  create() {
    const data1 = {
      created_at: '2020-03-27',
      userId: 1,
      title : this.title,
      body: this.body
    };
    this.postService.add(data1).subscribe(data => {
      this.id = data.id;
      this.title = data.title;
      this.body = data.body;
    });
    this.router.navigate(['/admin']);
  }
}
