import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform{
    transform(list: any[], filterByFiled: string, filterValue: string) : any {

        if(!filterByFiled || !filterValue){
            return list;
        }

        return list.filter(item => {
            const field = item[filterByFiled].toLowerCase();
            const filter = filterValue.toLocaleLowerCase();
            return field.indexOf(filter) >= 0;
        })
    }

}