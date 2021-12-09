import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) {}
  trackingNumber: string = '';
  trackingProvider: string = '';

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

  trackingDetails() {
    console.log('working');
    this.router.navigate([
      '/details',
      this.trackingProvider.toLocaleLowerCase(),
      this.trackingNumber,
    ]);
  }
}
