import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese = {
    Grass: '草',
    Poison: '毒'
  };

  transform(types: string[], ...args: unknown[]): unknown {
    return types.map(type => this.japanese || type);
  }

}
