import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { ColorsComponent } from './components/dashboard/colors/colors.component';
import { BlueComponent } from './components/dashboard/blue/blue.component';
import { RedComponent } from './components/dashboard/red/red.component';
import { YellowComponent } from './components/dashboard/yellow/yellow.component';
import { DataComponent } from './components/dashboard/data/data.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { StructuralDirectivesComponent } from './components/dashboard/structural-directives/structural-directives.component';
import { ChildInteractionComponent } from './components/dashboard/child-interaction/child-interaction.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      ColorsComponent,
      BlueComponent,
      RedComponent,
      YellowComponent,
      DataComponent,
      StructuralDirectivesComponent,
      ChildInteractionComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
