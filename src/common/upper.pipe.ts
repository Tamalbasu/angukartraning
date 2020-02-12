import { PipeTransform,Pipe } from "@angular/core";



@Pipe({
    name:"upper"
})
class upper implements PipeTransform {
    transform(value: any, ...args: any[]) {
        value.toUpperCase();
    }


}