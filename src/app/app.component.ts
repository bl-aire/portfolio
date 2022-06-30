import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {

  }

  title = 'my-portfolio';
}
