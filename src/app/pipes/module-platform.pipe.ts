import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modulePlatform'
})
export class ModulePlatformPipe implements PipeTransform {

  transform(value: any, typeLevelId: any): any {
    return value.filter((data) => {
      return data.typeLevelId == typeLevelId;
    });
  }

}
