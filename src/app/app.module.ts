import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BanksComponent } from './banks/banks.component';
import { ExampleComponent } from './example/example.component';



const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'todo-list', component: TodoListComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'banks', component: BanksComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    TodoListComponent,
    AboutUsComponent,
    BanksComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
