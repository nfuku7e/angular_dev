import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title: string;
  now: any;
  
  constructor() {
    setInterval ( 
      () => {this.now = new Date();},1000
    );

  }

  ngOnInit(): void {
    this.title = "Hello,World!";
  }

  today(): any{
    return this.now.toLocaleString();
  }

}
