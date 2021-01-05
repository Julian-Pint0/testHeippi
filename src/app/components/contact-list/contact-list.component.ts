import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[]=[];


  constructor() { }

  ngOnInit(): void {
  	this.getContacts();
  }

  getContacts(){
  	if(localStorage.getItem('contacts')){
		this.contacts= JSON.parse(localStorage.getItem('contacts')!);
  	}
	
  }

  deleteContact(i: number){
  	this.contacts= this.contacts.filter( (contact,index)=> {
  		if(index!= i)
  			return contact;
  	})
  	localStorage.setItem('contacts',JSON.stringify(this.contacts));
  }

}
