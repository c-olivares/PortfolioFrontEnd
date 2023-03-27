
import { AppComponent } from "./app.component";
import { routing } from "./app-routing.module"; 
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({

declarations: [AppComponent, LoginComponent, HomeComponent],
imports: [BrowserModule, routing, FormsModule, HttpClientModule],
providers: [],
bootstrap: [AppComponent]

})
export class AppModule {}



