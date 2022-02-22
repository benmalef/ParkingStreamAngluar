import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class UserSettingService {
    currencySymbolEmitter = new Subject<string>();
    currencySymbol = '€';

    currencySymbolUpdated(): Promise<string> {
        return Promise.resolve(this.currencySymbol);
    }
    //update the RevenuesTable currency symbol
    currencySymbolChanged(currencySymbol) {
        this.currencySymbol = currencySymbol;
    }
    //update the Header symbol
    currencySymbolUpdatedEmmiter(currencySymbol) {
        this.currencySymbolEmitter.next(currencySymbol);
        return (currencySymbol);
    }


}