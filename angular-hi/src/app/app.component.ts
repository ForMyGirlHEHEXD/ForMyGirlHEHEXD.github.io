import { Component, OnInit } from '@angular/core';
import { Message, sha256 } from 'js-sha256';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  password: string = "882e66eb2fb78060b68d3b1306bd6cc7349e6d55bf468a2858e32f208a07b1df";
  isAllowed: boolean = false;
  title = 'Hi';

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
          this.isAllowed = !this.isAllowed;
        }
      }
    }
    while(!this.isAllowed)
  }
}
