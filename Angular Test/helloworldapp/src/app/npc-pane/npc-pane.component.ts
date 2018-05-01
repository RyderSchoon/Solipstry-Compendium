import { Component, OnInit, Input, HostListener, HostBinding } from '@angular/core';
import { NPC } from '../npc';
import { NpcService } from '../npc.service';
import { NpcPreviewComponent } from '../npc-preview/npc-preview.component';

@Component({
    selector: 'app-npc-pane',
    templateUrl: './npc-pane.component.html',
    styleUrls: ['./npc-pane.component.css']
})
export class NpcPaneComponent implements OnInit {

    @Input() npc: NPC;
    @Input() npcService: NpcService;
    preview: NpcPreviewComponent;

    @HostBinding('class.is-open')
    isOpen = false;

    expand() {
        this.isOpen = true;
    }

    collapse() {
        this.preview.expand();
        this.isOpen = false;
        console.log("collapsing pane")
    }

    save(): void {
        this.npcService.updateNpc(this.npc)
            .subscribe(() => this.collapse());
    }

    constructor() { }

    ngOnInit() {
    }

}
