import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any=[
    {image:"assets/images/img_1.jpg",title:"title 1", userName:"user 1", avatar:"assets/images/person_1.jpg", date:"08/04/2023",},
    {image:"assets/images/img_2.jpg",title:"title 2", userName:"user 2", avatar:"assets/images/person_2.jpg", date:"15/04/2023",},
    {image:"assets/images/img_3.jpg",title:"title 3", userName:"user 3", avatar:"assets/images/person_3.jpg", date:"08/05/2023",},
    {image:"assets/images/img_1.jpg",title:"title 4", userName:"user 4", avatar:"assets/images/person_4.jpg", date:"25/04/2023",},
  ]
  title: string = "Latest News";
  constructor() { }

  ngOnInit() {
  }

}
