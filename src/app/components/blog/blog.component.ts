import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articlesTab: any = [
    {image:"assets/images/img_1.jpg",date:"05/04/2023", title:"title 1", description:"description 1"},
    {image:"assets/images/img_2.jpg",date:"08/04/2023", title:"title 2", description:"description 2"},
    {image:"assets/images/img_3.jpg",date:"20/04/2023", title:"title 3", description:"description 3"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
