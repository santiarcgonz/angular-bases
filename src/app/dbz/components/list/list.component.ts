import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public characterList: Character[]= [
    {
      id: 'asdfasdfasdf',
      name: 'Trunks',
      power: 10
    }
  ]
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string):void{
    //TODO: Emitir el Id del personaje
    this.onDelete.emit(id)
    console.log({id});
  }

}
