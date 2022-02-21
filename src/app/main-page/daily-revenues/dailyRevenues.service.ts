import { Injectable } from "@angular/core";
import { dailyRevenue } from "src/app/models/dailyRevenue.model";
import { EventEmitter } from "@angular/core";
Injectable()
export class DailyRevenuesService {
    // calculate the days
    private dates = [];
    private dailyRevenues: dailyRevenue[] = [];
    updatedDailyRevenuesTable = new EventEmitter<dailyRevenue[]>();


    formatDate(day) {
        var today = new Date()
        var dayFormat = day + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        return dayFormat;
    }

    calculateTheDays() {
        const numOfPreviousDays = 3;
        const numOfFollowingDays = 3;
        var today = new Date()
        for (let i = -numOfPreviousDays; i <= numOfFollowingDays; i++) {
            var day = today.getDate() + i;
            this.dates.push(this.formatDate(day));
        }
        return (this.dates);
    }
    getDates() {
        return (this.dates);
    }
    print() {
        console.log(this.dates);
    }

    //create the Revues table
    createDailyRevenueTable(numberOfHours) {
        for (let i = 0; i < numberOfHours; i++) {
            this.dailyRevenues.push(new dailyRevenue(i));
        }
        return (this.dailyRevenues.slice());
    }
    //when one day clicked, the dailyRevenues updated
    updateDailyRevenueTable() {
        this.dailyRevenues = []; //empty the dailyRevenues
        this.createDailyRevenueTable(24);//create the new dailyRevenues
        this.updatedDailyRevenuesTable.emit(this.dailyRevenues.slice());//passing to eventEmitter
    }
}