import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventorylistComponent } from './inventorylist/inventorylist.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import {  MatButtonModule } from '@angular/material/button';
import {  MatCheckboxModule } from '@angular/material/checkbox';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {  MatRadioModule } from '@angular/material/radio';
import {  MatSliderModule } from '@angular/material/slider';
import {  MatSelectModule } from '@angular/material/select';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatTableModule } from '@angular/material/table';
import {  MatSortModule } from '@angular/material/sort';
import {  MatTabsModule } from '@angular/material/tabs';
import {  MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InventorylistComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
     MatCheckboxModule,
     MatDatepickerModule,
     MatFormFieldModule,
     MatInputModule,
     MatRadioModule,
     MatSelectModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatPaginatorModule,
     MatSidenavModule,
     MatSnackBarModule,
     MatSortModule,
     MatTableModule,
     MatTabsModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     RouterModule,
     MatDialogModule
  ],
  providers: [],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
     MatCheckboxModule,
     MatDatepickerModule,
     MatFormFieldModule,
     MatInputModule,
     MatRadioModule,
     MatSelectModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatPaginatorModule,
     MatSidenavModule,
     MatSnackBarModule,
     MatSortModule,
     MatTableModule,
     MatTabsModule,
     MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
