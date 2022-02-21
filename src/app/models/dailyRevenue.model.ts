export class dailyRevenue {
    private hour: string;
    private numberOfCars;
    private revenue;

    constructor(hour) {
        this.hour = this.setHour(hour);
        this.numberOfCars = this.getRandomCars();
        this.revenue = this.getRandonRevenue();
    }
    getHour() {
        return this.hour;
    }
    getNumberOfCars() {
        return (this.numberOfCars);
    }
    getDailyRevenue() {
        return (this.revenue);
    }
    setHour(hour) {
        if (hour <= 9) {
            hour = "0" + hour + ":00"
        } else {
            hour = hour + ":00";
        }
        return hour;
    }
    getRandomCars() {
        return (101 + Math.floor(Math.random() * 150));
    }
    getRandonRevenue() {
        return (100 + Math.floor(Math.random() * 4400));
    }

}