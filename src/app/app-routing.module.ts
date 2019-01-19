import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// --- Components --- //
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TuringSystemComponent } from './components/aboutus/turing-system/turing-system.component';
import { ArsacConsultingComponent } from './components/aboutus/arsac-consulting/arsac-consulting.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'showroom',
		component: ShowroomComponent
	},
	{
		path: 'aboutus',
		component: AboutusComponent
	},
	{
		path: 'aboutus/turing-system',
		component: TuringSystemComponent
	},
	{
		path: 'aboutus/arsac-consulting',
		component: ArsacConsultingComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: '404',
		component: ErrorComponent
	},
	{
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
