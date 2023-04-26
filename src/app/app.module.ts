
import { AppComponent } from "./app.component";
import { routing } from "./app-routing.module"; 
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({

declarations: [AppComponent, LoginComponent, HomeComponent],
imports: [BrowserModule, routing, FormsModule, HttpClientModule],
providers: [{provide: APP_BASE_HREF, useValue: '/https://portfolio-carlos-olivares.web.app/'}],
bootstrap: [AppComponent]

})
export class AppModule {}



