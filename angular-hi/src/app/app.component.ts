import { Component, OnInit } from '@angular/core';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  password: string = "ee70f2d7f9ce2c4c8aa36cf3ca0005bdfd70b2bc0f78372c5e7c2c3c7ab21588";
  isAllowed: boolean = false;

  constructor() {};

  ngOnInit(): void
  {
    do
    {
      var input = prompt("Please enter the password:")
      if(input != null && input != '')
      {
        input = sha256(input)
        if(input == this.password)
        {
          this.isAllowed = true;
        }
      }
    }
    while(!this.isAllowed)
  }
}
