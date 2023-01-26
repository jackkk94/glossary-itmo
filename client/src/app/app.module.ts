import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';


const appRoutes: Routes =[
  { path: 'terms', component: ListComponent},
  { path: 'terms/:id', component: ItemComponent},
  { path: '', redirectTo: 'terms', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
