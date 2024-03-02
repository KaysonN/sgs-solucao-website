import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ChartComponent } from './views/chart/chart.component';
import { StatuteComponent } from './views/statute/statute.component';
import { TeamComponent } from './views/team/team.component';
import { CodeOfEthicsComponent } from './views/code-of-ethics/code-of-ethics.component';
import { InternalRegulationsComponent } from './views/internal-regulations/internal-regulations.component';
import { IntegrityProgramComponent } from './views/integrity-program/integrity-program.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: AboutComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'organograma', component: ChartComponent },
  { path: 'estatuto', component: StatuteComponent },
  { path: 'equipe', component: TeamComponent },
  { path: 'codigo-de-etica', component: CodeOfEthicsComponent },
  { path: 'programa-de-integridade', component: IntegrityProgramComponent },
  { path: 'regime-interno', component: InternalRegulationsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
