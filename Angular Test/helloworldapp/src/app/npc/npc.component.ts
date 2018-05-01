import { Component, OnInit, HostBinding, HostListener, Input } from '@angular/core';
import { NPC } from '../npc';
import { NpcService } from '../npc.service';


@Component({
    selector: 'app-npc',
    templateUrl: './npc.component.html',
    styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {

    npcs: NPC[];

    getNpcs(): void {
        this.npcService.getNpcs().subscribe(npcs => this.npcs = npcs);
    }

    constructor(private npcService: NpcService) { }

    ngOnInit() {
        this.getNpcs();
    }

}
