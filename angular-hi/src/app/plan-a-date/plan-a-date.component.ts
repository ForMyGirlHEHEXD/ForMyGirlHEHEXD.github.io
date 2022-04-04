import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-plan-a-date',
  templateUrl: './plan-a-date.component.html',
  styleUrls: ['./plan-a-date.component.css']
})
export class PlanADateComponent implements OnInit 
{
  wantsFood: boolean = false;
  dateForm = this.formBuilder.group(
    {
      date: '',
      food: false,
      location: ''
    });

  activities: any[] = 
  [
    {value: 'chillBoyfriend', viewValue: 'Chill at boyfriend\'s place'},
    {value: 'chillGirlfriend', viewValue: 'Chill at girlfriend\'s place'},
    {value: 'minigolf', viewValue: '⛳Minigolf'},
    {value: 'golf', viewValue: '🏌️‍♀️Golf'},
    {value: 'swim', viewValue: '🏊Swim'},
    {value: 'swim', viewValue: 'Swim'},
  ];
  foodLocationGroups: any[] = 
  [
    {
      name: '🍔Burger',
      location: [
        {value: 'bigburger', viewValue: 'BigBurger'},
        {value: 'thebutcher', viewValue: 'The Butcher'},
        {value: 'mcdonalds', viewValue: 'McDonald\'s'},
      ],
    },
    {
      name: '🍕Pizza',
      location: [
        {value: 'lapizza', viewValue: 'La Pizza'},
        {value: 'telepizza', viewValue: 'Telepizza'},
        {value: '10Dieci', viewValue: '10 Dieci'},
      ],
    },
    {
      name: '🏟Places',
      location: [
        {value: 'freiruum', viewValue: 'Freiruum'},        
        {value: 'lataverna', viewValue: 'La Taverna'},
        {value: 'sanmarco', viewValue: 'San Marco'},
      ],
    }
  ];

  constructor(private formBuilder: FormBuilder) 
  {
  }

  ngOnInit(): void 
  {

  }

  onSubmit(): void
  {
    console.log(this.dateForm.value);
  }
}
