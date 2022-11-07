import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tkt-app';
  // param_id = this.activatedRoute.snapshot.params;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/dashboard']);
    // console.log('ROUTER ::: ', this.router);
  }
}
