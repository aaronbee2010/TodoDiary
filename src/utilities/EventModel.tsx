class EventModel {
    readonly name: string;
    readonly type: string;
    readonly cohort: string;
    readonly date: Date;

    public constructor(name: string, type: string, cohort: string, date: string) {
        this.name = name;
        this.type = type;
        this.cohort = cohort;
        this.date = new Date(date);
    }

    public getTimeUntilDate(unit: string, isShortTime: boolean): string {
        const currentDate = new Date();

        let timeInMilliseconds = this.date.getTime() - currentDate.getTime();

        if (timeInMilliseconds < 0) {
            timeInMilliseconds = 0;
        }

        let timeInSelectedUnit: number = 0;
        switch (unit) {
            case "hours":
                timeInSelectedUnit = timeInMilliseconds / (1000 * 60 * 60);
                timeInSelectedUnit = Math.floor(timeInSelectedUnit);
                return `${timeInSelectedUnit}${(isShortTime) ? "h" : " hours"}`;
            case "days":
                timeInSelectedUnit = timeInMilliseconds / (1000 * 60 * 60 * 24);
                timeInSelectedUnit = Math.floor(timeInSelectedUnit);
                return `${timeInSelectedUnit}${(isShortTime) ? "d" : " days"}`;
            default:
                throw new Error("Unknown type specified when calling EventModel.getTimeUntilDate()");
        }
    }
};

export default EventModel;