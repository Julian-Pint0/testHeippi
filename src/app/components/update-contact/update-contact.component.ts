import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit { 
  contacts: any='';
  document: string='';
  action1: string= 'Actualizar';

  constructor(
  	private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  	this.document= this.activatedRoute.snapshot.params.id;
  	let res: any= this.getContact(this.document);
  }


  getContact(document: any){
  	this.contacts= localStorage.getItem('contacts');
  	if(this.contacts!= null)
  		this.contacts= JSON.parse(this.contacts);
  	this.contacts= this.contacts.filter( (contact: any)=> {
  		return contact.document == document;
  	})
  	return this.contacts;
  }


}
