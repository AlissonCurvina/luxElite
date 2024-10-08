import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  //observable que vai armazenar e emitir o termo de busca
  private searchTermSubject = new BehaviorSubject<string>('');

  //observable que outros componentes podem se inscrever para receber atualizações
  private searchTerm$ = this.searchTermSubject.asObservable();

  //getter para obter o valor atual do termo de busca
  public get searchTerm(): string {
    return this.searchTermSubject.getValue();
  }

  //setter para atualizar o termo de busca
  public setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
}