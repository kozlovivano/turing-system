import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { CircleComponent } from './components/circle/circle.component';
import { TuringSystemComponent } from './components/aboutus/turing-system/turing-system.component';
import { ArsacConsultingComponent } from './components/aboutus/arsac-consulting/arsac-consulting.component';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ErrorComponent,
		HeaderComponent,
		MenuComponent,
		ShowroomComponent,
		AboutusComponent,
		ContactComponent,
		CircleComponent,
		TuringSystemComponent,
		ArsacConsultingComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
		MaterialModule,
		HttpClientModule,
		MarkdownModule.forRoot({ loader: HttpClientModule }),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
