import { Component, OnInit } from '@angular/core';
import { BdserverService } from 'src/app/services/bdserver.service';
import { Responce } from 'src/definitions/responce';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
    constructor(private server: BdserverService) {}

    respone!: Responce;
    keys: string[] = [];

    async ngOnInit() {
        this.server.firstTest().subscribe((res) => {
            this.respone = res;
            this.keys = Object.keys(this.respone.types);
        });
    }
}
