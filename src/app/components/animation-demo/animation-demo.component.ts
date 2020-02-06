import { OnInit, Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
    selector: 'animation-demo',
    templateUrl: './animation-demo.component.html',
    styleUrls: ['./animation-demo.component.scss'],
    animations: [
        trigger('changeSize', [
            state('initial', style({
                backgroundColor: 'green',
                width: '100px',
                height: '100px'
            })),
            state('final', style({
                backgroundColor: 'red',
                width: '200px',
                height: '200px'
            })),
            transition('initial=>final', animate('1000ms 500ms')),
            transition('final=>initial', animate('1000ms 100ms'))
        ]),
        trigger('ballonEffect', [
            state('initial', style({
                backgroundColor: 'green',
                transform: 'scale(1)'
            })),
            state('final', style({
                backgroundColor: 'red',
                transform: 'scale(1.5)'
            })),
            transition('final=>initial', animate('500ms 100ms')),
            transition('initial=>final', animate('500ms 100ms'))
        ]),
        trigger('fadeInOut', [
            state('void', style({
                opacity: 0
            })),
            transition('void <=> *', animate(500))
        ]),
        trigger('EnterLeave', [
            state('flyIn', style({transform: 'translateX(0)'})),
            transition(':enter', [
                style({transform: 'translateX(-100%)'}),
                animate('0.5s 300ms ease-in')
            ]),
            transition(':leave', [
                animate('0.3s ease-out', style({ transform: 'translateX(100%)'}))
            ])
        ])
    ]
})
export class AnimationDemoComponent implements OnInit {
    private sizeState = 'initial';
    private ballonValue = 'initial';
    listItems = [];
    listOrder: number = 1;
    constructor() {

    }
    ngOnInit() {

    }

    addItem(){
        var listItem = 'List item ' + this.listOrder;
        this.listOrder++;
        this.listItems.push(listItem);
    }

    removeItem(){
        this.listItems.length -= 1;
    }

    changeState(){
        this.sizeState = this.sizeState === 'initial' ? 'final' : 'initial';
    }

    toggleBallon(){
        this.ballonValue = this.ballonValue === 'initial' ? 'final' : 'initial';
    }
}