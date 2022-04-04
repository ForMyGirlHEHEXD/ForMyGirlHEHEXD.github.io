import { Component, OnInit } from '@angular/core';
import { sha256 } from 'js-sha256';
import { AllowanceService } from './allowance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  isAllowed: boolean = false;

  constructor(private allowanceService: AllowanceService) {};

  ngOnInit(): void
  {
    this.allowanceService.allowanceChange.subscribe((allowance: boolean) => 
    {this.isAllowed = allowance;});
    this.allowanceService.checkCredentials();
  }
}
