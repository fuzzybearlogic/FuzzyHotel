import { Component, OnInit } from '@angular/core';
import { SidenavServiceService } from 'src/app/sidenav-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private sidenav: SidenavServiceService
  ) { }

  toggleRightSidenav() {
    this.sidenav.toggle();
  }
  ngOnInit(): void {
  }


}
