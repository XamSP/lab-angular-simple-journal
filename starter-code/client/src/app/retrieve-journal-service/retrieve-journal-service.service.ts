import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators'
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class RetrieveJournalService {

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries`)
      .pipe(map((res) => res.json()));
  }

  getId(id) {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries/${id}`)
      .pipe(map((res) => res.json()));
  }

  editId(journal) {
    return this.http.put(`${environment.BASE_URL}/api/journal-entries/${journal.id}`, journal)
      .pipe(map((res) => res.json()));
  }

  removeId(id) {
    return this.http.delete(`${environment.BASE_URL}/api/journal-entries/${id}`)
      .pipe(map((res) => res.json()));
  }

  addIt(journal) {
    console.log(journal.title);
    return this.http.post(`${environment.BASE_URL}/api/journal-entries`, journal)
      .pipe(map((res) => res.json()))
  }
}
