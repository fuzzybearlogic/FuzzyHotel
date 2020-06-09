import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    imports: [MatIconModule, MatBadgeModule, MatButtonModule],
    exports: [MatIconModule, MatBadgeModule, MatButtonModule],

})

export class MaterialModule {

}
