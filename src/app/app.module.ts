import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { DiagramEditorComponent } from './diagram-editor/diagram-editor.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { OrgChartComponent } from './orgChart/orgChart.component';
import { DynamicPortsComponent } from './dynamicPorts/dynamicPorts.component';

@NgModule({
   declarations: [
      AppComponent,
      ModalComponent,
      DiagramEditorComponent,
      HeaderComponent,
      OrgChartComponent,
      DynamicPortsComponent
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
