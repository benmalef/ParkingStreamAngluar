import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class UserSettingService {
    currencySymbolEmitter = new EventEmitter<string>();
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
        this.currencySymbolEmitter.emit(currencySymbol);
        return (currencySymbol);
    }


}