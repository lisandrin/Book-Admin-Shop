import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){
    return [{
      name: 'Horror',
      data: [502, 635, 809, 947, 1405, 3546, 845]
    },
    {
      name: 'Romance',
      data: [106, 107, 111, 130, 144, 155, 180]
    },
    {
      name: 'Detective',
      data: [163, 203, 276, 450, 560, 729, 811]
    },
    {
      name: 'Fantasy',
      data: [180, 310, 540, 1560, 885, 811, 997]
    },
    {
      name: 'Non-fiction',
      data: [530, 641, 689, 851, 880, 930, 1023]
    }];
  }

  cards(){
    return [51, 66, 74, 43]
  }

  pieChart(){
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
        name: 'Internet Explorer',
        y: 11.84
    }, {
        name: 'Firefox',
        y: 10.85
    }, {
        name: 'Edge',
        y: 4.67
    }, {
        name: 'Safari',
        y: 4.18
    }, {
        name: 'Sogou Explorer',
        y: 1.64
    }, {
        name: 'Opera',
        y: 1.6
    }, {
        name: 'QQ',
        y: 1.2
    }, {
        name: 'Other',
        y: 2.61
    }];
  }
}
