import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnChanges {

  form!: FormGroup;
  contacts: any[]=[];
  @Input() contact: any[]=[];
  @Input() action1: string='';

  @ViewChild('f') myNgForm : any;
  constructor(
    private fb: FormBuilder,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) { 
  	this.initForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
  	//se setea el formulario con la información correspondiente
  	this.form.reset(this.contact[0]);
  }

  get getControls() { // se obtienen los controles del formulario
  	return this.form.controls; 
  }



  initForm(){
  	this.form= this.fb.group({
  		document: ['', [Validators.required, Validators.minLength(6)]],
  		name: ['', [Validators.required, Validators.minLength(5)]],
  		telephone: ['', [Validators.required, Validators.minLength(13)]],
  		direction: ['', [Validators.required, Validators.minLength(10)]],
  		birthdayDate: ['', [Validators.required, Validators.pattern('(([1-2][0-9])|([1-9])|(3[0-1]))/((1[0-2])|([1-9]))/[0-9]{4}')]]

  	});
  }


  cleanForm(){
  	this.form.reset();
  }

  action(){
  	if(this.action1=== 'Actualizar'){
	  	this.contacts= JSON.parse(localStorage.getItem('contacts')!);
	  	this.contacts= this.contacts.map( contact=> {
	  		if(contact.document=== this.contact[0].document)
	  			return contact=this.form.value;
	  		return contact;
	  	})
      this.openSnackBar('Contacto editado correctamente.');
  	}else{
	  	if(localStorage.getItem('contacts')){
	  		this.contacts= JSON.parse(localStorage.getItem('contacts')!);	
	  	}
	  	this.contacts.push(this.form.value);
	  	this.myNgForm.resetForm(); //se resetea el formulario
      this.openSnackBar('Contacto agregado correctamente.');
  	}
	  localStorage.setItem('contacts',JSON.stringify(this.contacts));
    this._location.back(); //se redirige a la ruta anterior
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, '', {
      duration: 1500,
    });
  }

  cancel(e: any){
  	e.preventDefault();
  	this.myNgForm.resetForm();
    this._location.back(); //se redirige a la ruta anterior
  }


}
