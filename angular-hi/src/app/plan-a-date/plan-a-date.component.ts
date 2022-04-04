import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import LocationPicker from "location-picker";



@Component({
  selector: 'app-plan-a-date',
  templateUrl: './plan-a-date.component.html',
  styleUrls: ['./plan-a-date.component.css']
})
export class PlanADateComponent implements OnInit 
{
  sentForm: boolean = false;
  exactLocation: string = "";
  locationPicker!: LocationPicker;
  wantsFood: boolean = false;
  dateForm = this.formBuilder.group(
    {
      what: ['', Validators.required],
      date: ['', Validators.required],
      food: false,
      whenFood: '',
      location: '',
      exactLocation: '',
      notes: '',
    });

  activities: any[] = 
  [
    {value: 'chillBoyfriend', viewValue: 'Chill at boyfriend\'s place'},
    {value: 'chillGirlfriend', viewValue: 'Chill at girlfriend\'s place'},
    {value: 'minigolf', viewValue: '⛳Minigolf'},
    {value: 'golf', viewValue: '🏌️‍♀️Golf'},
    {value: 'swim', viewValue: '🏊Swim'},
    {value: 'cinema', viewValue: '🎥Cinema'},
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

  dateFormKeys: string[] = Object.keys(this.dateForm.value);

  constructor(private formBuilder: FormBuilder) 
  {
  }

  ngOnInit(): void
  {
    const myLatlng = { lat: 47.1846998, lng: 8.4736975 };
  
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 4,
        center: myLatlng,
      }
    );
  
    const marker = new google.maps.Marker({
      position: myLatlng,
      map,
      title: "Click to zoom",
    });
  
    map.addListener("drag", () => 
    {
      marker.setPosition(map.getCenter());
    });
  
    map.addListener("dragend", () => 
    {
      this.exactLocation = marker.getPosition()?.lat() + ", " + marker.getPosition()?.lng();
    });
  
  }

  body: string = ""
  onSubmit(): void
  {
    this.sentForm = !this.sentForm;
    Object.keys(this.dateForm.value).forEach((key: string) => 
    {
      this.body += key + ": " +this.dateForm.value[key] + "\n";
    });
  }
}
