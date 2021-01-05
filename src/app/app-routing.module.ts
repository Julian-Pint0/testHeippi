import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';

const routes: Routes = [
	{ path: "home", component: HomeComponent},
	{ path: "contact-list", component: ContactListComponent},
	{ path: "new-contact", component: NewContactComponent},
	{ path: "update-contact/:id", component: UpdateContactComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
