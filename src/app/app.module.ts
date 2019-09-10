import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { CarouselComponent } from './body/carousel/carousel.component';
import { SubscribeComponent } from './body/subscribe/subscribe.component';
import { CompanyInfoComponent } from './body/company-info/company-info.component';
import { CompanyProfileComponent } from './body/company-profile/company-profile.component';
import { CompanyServicesComponent } from './body/company-services/company-services.component';
import { PeopleStoriesComponent } from './body/people-stories/people-stories.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HeaderSearchComponent,
    HeaderMenuComponent,
    CarouselComponent,
    SubscribeComponent,
    CompanyInfoComponent,
    CompanyProfileComponent,
    CompanyServicesComponent,
    PeopleStoriesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
