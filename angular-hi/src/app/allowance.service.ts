import { Injectable, OnInit } from '@angular/core';
import { sha256 } from 'js-sha256';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AllowanceService 
{
  password: string = "ee70f2d7f9ce2c4c8aa36cf3ca0005bdfd70b2bc0f78372c5e7c2c3c7ab21588";
  isAllowed: boolean = false;
  allowanceChange: Subject<boolean> = new Subject<boolean>();
  constructor() 
  {
    this.allowanceChange.subscribe((value) => 
    {
      this.isAllowed = value;
    });
  }

  checkCredentials(): void
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
          this.allowanceChange.next(this.isAllowed);
        }
      }
    }
    while(!this.isAllowed)
  }
}
