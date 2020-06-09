import { Component, ViewChild } from '@angular/core';
import { SidenavServiceService } from 'src/app/sidenav-service.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FuzzyHotel';

@ViewChild('sidenav') public sidenav: MatSidenav;

constructor(private sidenavService: SidenavServiceService) {
}

ngAfterViewInit(): void {
  this.sidenavService.setSidenav(this.sidenav);
}
}
