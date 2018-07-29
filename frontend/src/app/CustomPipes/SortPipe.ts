import {Pipe , PipeTransform} from '@angular/core';

@Pipe({
    name:'sortarr'
})

export class SortArrPipe implements PipeTransform{
    transform(value:any[],args:string) : any {
        if(args == 'asc'){
            return value.sort();
        }
        else{
            return value.sort().reverse();
        }
    }
}