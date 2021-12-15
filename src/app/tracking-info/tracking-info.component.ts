import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tracking-info',
  templateUrl: './tracking-info.component.html',
  styleUrls: ['./tracking-info.component.scss'],
})
export class TrackingInfoComponent implements OnInit {
  url: string =
    'https://api.allorigins.win/raw?url=https://indian-courier-api-premium.vercel.app/api';
  details: any[] = [];
  isLoading = false;
  isFailed = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const courierProvider = paramMap.get('provider');
      const trackingNumber = paramMap.get('number');
      this.isLoading = true;
      this.isFailed = false;
      this.details = [];

      this.http
        .get(`${this.url}/${courierProvider}/${trackingNumber}`)
        .subscribe(
          (data: any) => {
            this.isLoading = false;
            if (data.status === 'failed') {
              this.isFailed = true;
            } else {
              this.details = data.data;
            }
          },
          (error) => {
            this.isFailed = true;
            this.isLoading = false;
          }
        );
    });
  }
}
