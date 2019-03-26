import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ShowroomComponent } from './components/showroom/showroom.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { TuringSystemComponent } from './components/aboutus/turing-system/turing-system.component';
import { ArsacConsultingComponent } from './components/aboutus/arsac-consulting/arsac-consulting.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieComponent } from './components/cookie/cookie.component';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { ReplaceURL } from './app.pipe';
import { MarkdownComponent } from './components/markdown/markdown.component';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ErrorComponent,
		HeaderComponent,
		ShowroomComponent,
		AboutusComponent,
		ContactComponent,
		TuringSystemComponent,
		ArsacConsultingComponent,
		CookieComponent,
		ReplaceURL,
		MarkdownComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
		MaterialModule,
		HttpClientModule,
		MarkdownToHtmlModule,
		MarkdownModule.forRoot({ loader: HttpClientModule }),
	],
	providers: [CookieService],
	bootstrap: [AppComponent]
})
export class AppModule { }
