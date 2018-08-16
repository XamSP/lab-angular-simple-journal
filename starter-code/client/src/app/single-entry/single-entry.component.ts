import { Component, OnInit, Input } from '@angular/core';
import { RetrieveJournalService } from '../retrieve-journal-service/retrieve-journal-service.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [RetrieveJournalService]
})
export class SingleEntryComponent implements OnInit {

  journals: any;
  
  constructor(
    private journal: RetrieveJournalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJournalDetails(params['id']);
    });
  }

  getJournalDetails(id) {
    this.journal.getId(id)
      .subscribe((journal) => {
        this.journals = journal;
        console.log(this.journals)
      });
  }

}
