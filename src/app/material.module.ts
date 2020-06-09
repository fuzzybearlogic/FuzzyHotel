import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
    ],
    exports: [
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
    ],

})

export class MaterialModule {

}
