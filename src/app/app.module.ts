import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DiagramEditorComponent } from './diagram-editor/diagram-editor.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DynamicPortsComponent } from './dynamic-ports/dynamic-ports.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { UnlessDirective } from './shared/unless.directive';

@NgModule({
   declarations: [
      AppComponent,
      ModalComponent,
      DropdownDirective,
      DiagramEditorComponent,
      HeaderComponent,
      HomeComponent,
      DynamicPortsComponent,
      OrgChartComponent,
      UnlessDirective
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      ModalComponent
   ]
})
export class AppModule {}
