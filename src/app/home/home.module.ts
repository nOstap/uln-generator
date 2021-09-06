import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatRippleModule,
    MatSnackBarModule,
  ],
  declarations: [HomePage],
  providers: [
    Clipboard,
    Toast,
  ],
})
export class HomePageModule {}
