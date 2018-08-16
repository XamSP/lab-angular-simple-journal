import { Routes } from '@angular/router';

import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component'

export const routes: Routes = [
    { path: '', component: EntryListComponent },
    { path: 'journal/:id', component: SingleEntryComponent },
    { path: 'form', component: EntryFormComponent  }
];