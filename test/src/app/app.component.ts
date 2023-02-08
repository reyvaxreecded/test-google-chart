import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  valueCtrl: FormControl = new FormControl('1');
  data: any[] = [
    {
      name: 'Germany',
      value: 8940000
    },
    {
      name: 'USA',
      value: 5000000
    },
    {
      name: 'France',
      value: 7200000
    }
  ];

  ngOnInit(): void {
    this.valueCtrl.valueChanges.subscribe((value) => {
      if(value === '1') {
        this.data = [
          {
            name: 'Germany',
            value: 8940000
          },
          {
            name: 'USA',
            value: 5000000
          },
          {
            name: 'France',
            value: 7200000
          }
        ];
      } else {
        this.data = [
          {
            name: 'Germany',
            value: 89000
          },
          {
            name: 'USA',
            value: 5056200
          },
          {
            name: 'France',
            value: 2200000
          },
          {
            name: 'Italy',
            value: 6200000
          },
          {
            name: 'UK',
            value: 6200000
          }
        ];
      }
    });
  }
}
