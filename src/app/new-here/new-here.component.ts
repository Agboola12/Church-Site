import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-here',
  templateUrl: './new-here.component.html',
  styleUrls: ['./new-here.component.css']
})
export class NewHereComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
  }

}
