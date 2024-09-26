import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // Observable que vai armazenar e emitir o termo de busca
  private searchTermSubject = new BehaviorSubject<string>('');
  
  // Observable que outros componentes podem se inscrever para receber atualizações
  searchTerm$ = this.searchTermSubject.asObservable();

  // Função para atualizar o termo de busca
  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
}
