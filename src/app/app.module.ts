import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { ContactComponent } from './views/contact/contact.component'
import { AboutComponent } from './views/about/about.component';
import { ChartComponent } from './views/chart/chart.component';
import { StatuteComponent } from './views/statute/statute.component';
import { TeamComponent } from './views/team/team.component';
import { CodeOfEthicsComponent } from './views/code-of-ethics/code-of-ethics.component';
import { InternalRegulationsComponent } from './views/internal-regulations/internal-regulations.component';
import { IntegrityProgramComponent } from './views/integrity-program/integrity-program.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ChartComponent,
    StatuteComponent,
    TeamComponent,
    CodeOfEthicsComponent,
    InternalRegulationsComponent,
    IntegrityProgramComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FooterComponent]
})
export class AppModule { }
