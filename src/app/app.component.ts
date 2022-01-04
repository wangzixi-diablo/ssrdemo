import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    console.log('Ethan View Init');
  }
  ngOnInit(): void {
    console.log('Ethan init');
  }
  title = 'jerryssr test';
}
