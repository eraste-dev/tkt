import { Router } from '@angular/router';
import { MenuInterface } from './../../../interfaces/MenuInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  logo: string = 'TKT';
  menu: MenuInterface[] = [
    {
      id: 'dashbord',
      title: 'DASHBORD',
      link: ['/dashboard'],
      icon: 'icon ni ni-dashboard',
    },
    {
      id: 'Lorem-ipsum',
      title: 'Lorem ipsum',
      link: ['/Lorem ipsum'],
      icon: 'icon ni ni-bell',
    },
    {
      id: 'lorem-ipsum-alt',
      title: 'Lorem ipsum',
      link: ['/404'],
      icon: 'icon ni ni-info',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(link: string[]) {
    return this.router.navigate(link);
  }
}
