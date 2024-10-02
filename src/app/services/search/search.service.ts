import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  // Observable que vai armazenar e emitir o termo de busca
  private searchTermSubject = new BehaviorSubject<string>('');

  // Observable que outros componentes podem se inscrever para receber atualizações
  private searchTerm$ = this.searchTermSubject.asObservable();

  // Getter para obter o valor atual do termo de busca
  public get searchTerm(): string {
    return this.searchTermSubject.getValue();
  }

  // Setter para atualizar o termo de busca
  public setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
}