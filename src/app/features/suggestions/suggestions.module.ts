import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SuggestionsComponent } from './suggestions.component';

@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
    SuggestionDetailsComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    RouterModule,              
    FormsModule 

  ]
})
export class SuggestionsModule { }

