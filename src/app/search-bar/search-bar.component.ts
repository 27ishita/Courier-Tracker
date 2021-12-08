import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  courierProvider = [
    'Bluedart',
    'DHL',
    'DTDC',
    'Delhivery',
    'ECom',
    'EKart',
    'Gati',
    'Maruti',
    'Shadowfax',
    'XpressBees',
  ];
}
