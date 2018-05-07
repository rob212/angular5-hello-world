import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  // declarations specifies the components that are defined in this NgModule.
  // you have to declare components in a module before you can use them in your templates.
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],
  // describes what dependencies this NgModule has. We're creating a browser app, so we want to import the BrowserModule.
  // if your module depends on other modules you list them here.
  // (used if you are using the modules in your templates or for DI)
  imports: [
    BrowserModule
  ],
  // used for dependency injection (DI), list services available to be injected throughout your module then they will be listed here.
  providers: [],
  // tells angular which component to load when the app is bootstrapped. This AppComponent becomes the top level component.
  bootstrap: [AppComponent]
})
export class AppModule { }
