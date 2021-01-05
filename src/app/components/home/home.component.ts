import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: any[]=[];
  cont: number=0;
  constructor() { }

  ngOnInit(): void {
  	this.getContacts();
  	this.getReminders();
  }

  getContacts(){
  	if(localStorage.getItem('contacts')){
		this.contacts= JSON.parse(localStorage.getItem('contacts')!);
		// this.contacts= JSON.parse(this.contacts);	
  	}		
  }

  getReminders(){
  	let currentDate: any= moment().format("D/M/YYYY");
  	currentDate= currentDate.split("/",2)
  	this.contacts.forEach( contact=>{
  		let dateOfContact= contact.birthdayDate.split("/",2);
	  	if(currentDate[0]== dateOfContact[0] && currentDate[1]== dateOfContact[1])
	  		this.cont++;
  	})
  }

}
