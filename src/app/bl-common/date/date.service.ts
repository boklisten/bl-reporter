import { Injectable } from '@angular/core';
import moment from 'moment-es6';

interface FromToDate {
	from: Date;
	to: Date;
}

@Injectable()
export class DateService {
	numOfPeriodsCancel: number;
	cancelPeriod: string;

	private _defaultSpringSemesterDeadlineDate;
	private _defaultFallSemesterDeadlineDate;

	constructor() {
		this._defaultSpringSemesterDeadlineDate = moment().month(6).date(1)
			.set('hour', 0)
			.set('minute', 0)
			.set('seconds', 0)
			.set('ms', 0);

		this._defaultFallSemesterDeadlineDate = moment()
			.month(11)
			.date(20)
			.set('hour', 0)
			.set('minute', 0)
			.set('seconds', 0)
			.set('ms', 0);
	}

	public currentDateCompact(): string {
		return moment().format('DD_MM_YY');
	}

	private getCurrentDate() {
		return moment()
			.set('hour', 0)
			.set('minutes', 0)
			.set('seconds', 0)
			.set('ms', 0);
	}

	public getCurrentDayPeriod(): {fromDate: Date, toDate: Date} {
		const currentDate = this.getCurrentDate();

		return {
			fromDate: currentDate.toDate(),
			toDate: currentDate.add(1, 'day').toDate()
		};
	}

	public getCurrentSemesterPeriod(): { fromDate: Date, toDate: Date } {
    if (moment().isAfter(this._defaultSpringSemesterDeadlineDate) 
      && moment().isSameOrBefore(this._defaultFallSemesterDeadlineDate)) {
			// the current semester is the fall semester
			return {
				fromDate: this._defaultSpringSemesterDeadlineDate.toDate(),
				toDate: this._defaultFallSemesterDeadlineDate.toDate()
			};
		} else {
			// the current semester is the spring semester
			const lastYearsFallDeadline = this._defaultFallSemesterDeadlineDate.subtract(1, 'year');
			return {
				fromDate: lastYearsFallDeadline.toDate(),
				toDate: this._defaultSpringSemesterDeadlineDate.toDate()
			};
		}
	}

	public getYearPeriod(): {fromDate: Date, toDate: Date} {
		const toDate = this.getCurrentDate().add(1, 'day');
		const fromDate = this.getCurrentDate().subtract(1, 'year');
    console.log('from', fromDate, 'toDate', toDate);
		return {
			fromDate: fromDate.toDate(),
			toDate: toDate.toDate()
		};
	}

	public getAllTimePeriod(): {fromDate: Date, toDate: Date} {
    let toDate = this.getCurrentDate().add(2, 'day');
		return {
      fromDate: moment()
      .year(2000)
      .date(1)
      .month(1)
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0)
      .toDate(),
			toDate: toDate.toDate()
		};
	}

	public isCustomerItemReturnValid(deadline: Date): boolean {
		return moment().isSameOrBefore(moment(deadline));
	}

	public isCustomerItemCancelValid(handoutDate: Date): boolean {
		return moment().isSameOrBefore(moment(handoutDate).add(2, 'week'));
	}

	public isOrderItemCancelValid(orderDate: Date): boolean {
		return moment().isSameOrBefore(moment(orderDate).add(2, 'week'));
	}
}
