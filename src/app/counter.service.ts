import {OnInit} from '@angular/core';

export class CounterService{
    private activeToInactiveCount: number = 0;
    private inactiveToActiveCount: number = 0;

    constructor(){}

    activeToInactive(){
        this.activeToInactiveCount++;
        console.log('Active to Inactive Count: ', this.activeToInactiveCount);
        
    }

    inactiveToActive(){
        this.inactiveToActiveCount++;
        console.log('Inactive to Active Count: ', this.inactiveToActiveCount);
    }
}