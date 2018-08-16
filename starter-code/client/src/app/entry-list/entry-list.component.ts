import { Component, OnInit } from '@angular/core';
import { RetrieveJournalService } from '../retrieve-journal-service/retrieve-journal-service.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [RetrieveJournalService]
})
export class EntryListComponent implements OnInit {

  journals: any;

  constructor(private journal: RetrieveJournalService) { }

  ngOnInit() {
    console.log(this.journal);
    this.journal.getList()
    .subscribe((journals) => {
      this.journals = journals;
    });
  }
   
}
