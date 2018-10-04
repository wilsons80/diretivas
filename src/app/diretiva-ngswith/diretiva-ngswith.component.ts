import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswith',
  templateUrl: './diretiva-ngswith.component.html',
  styleUrls: ['./diretiva-ngswith.component.css']
})
export class DiretivaNgswithComponent implements OnInit {

  aba: string = "home";

  constructor() { }

  ngOnInit() {
  }

}
