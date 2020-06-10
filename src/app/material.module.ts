import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        FlexLayoutModule,
        MatTabsModule,
    ],
    exports: [
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        FlexLayoutModule,
        MatTabsModule,
    ],

})

export class MaterialModule {

}
