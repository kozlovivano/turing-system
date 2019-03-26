import { Pipe, PipeTransform } from '@angular/core';
import { GlobalService } from './services/global.service';
import { LocaleService } from './services/locale.service';
@Pipe({name: 'replaceURL'})
export class ReplaceURL implements PipeTransform {
    constructor(public global: GlobalService, public locale: LocaleService){}
    transform(value: string): string {
        return value.replace("{{url}}", this.global.url).replace("{{locale}}", this.locale.locale);
    }
}