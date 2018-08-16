import { Component, OnInit } from '@angular/core';
import { RetrieveJournalService } from '../retrieve-journal-service/retrieve-journal-service.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  providers: [RetrieveJournalService]
})
export class EntryFormComponent implements OnInit {

  journals: any;

  constructor(private journal: RetrieveJournalService) { }
  
  ngOnInit() {
  }
  
  submitForm(myForm){
    
    let item: Object = {title: myForm.value.title, content: myForm.value.content};

    if(!myForm.value.title){
      alert("Please fill out the title")
    } else {
    this.journal.addIt(item)    
      .subscribe((journals) => {
      this.journals = journals;
    });
    console.log(item)
    }

  }
}
