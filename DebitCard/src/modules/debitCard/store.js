import { observable, action, makeObservable, computed } from 'mobx';
import data from './mock.json';

class DebitCardStore {
    @observable cardDetails = {};
    @observable weeklyLimit = null;

    defaultLimitRules = [
        { id: 1, value: 5000 },
        { id: 2, value: 10000 },
        { id: 3, value: 20000 },
    ];

    totalSpentLast7Days = 545;

    constructor() {
        makeObservable(this)
    }

    @action setWeeklyLimit = (limit = null) => {
        this.weeklyLimit = limit;
    }

    @action getCardDetails = () => {
        this.cardDetails = data;
    }

    @computed get cardNumbers() {
        if (!this.cardDetails.cardNumber) return [];
        return this.cardDetails.cardNumber.split(' ');
    }

    @computed get spendingPercentage() {
        if (this.weeklyLimit <= this.totalSpentLast7Days) return 1;
        return this.totalSpentLast7Days / this.weeklyLimit;
    }
}

export default new DebitCardStore();
