import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path:'card', component:CardComponent},
  { path:'form', component:FormComponent},
  { path:'table', component:TableComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
