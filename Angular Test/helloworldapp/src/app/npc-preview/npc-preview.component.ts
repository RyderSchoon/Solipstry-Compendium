import { Component, OnInit, HostListener, Input, HostBinding } from '@angular/core';
import { NPC } from '../npc';
import { NpcPaneComponent } from '../npc-pane/npc-pane.component';

@Component({
  selector: 'app-npc-preview',
  templateUrl: './npc-preview.component.html',
  styleUrls: ['./npc-preview.component.css']
})
export class NpcPreviewComponent implements OnInit {


    @Input() npc: NPC;
    @Input() npcPane: NpcPaneComponent;

    @HostBinding('class.is-open')
    isOpen = true;

    expand() {
        this.npcPane.preview = this;
        this.isOpen = true;
    }
    collapse() {
        this.npcPane.preview = this;
        this.npcPane.preview.expand = this.expand;
        this.npcPane.expand();
        this.isOpen = false;
        console.log("collapsing preview " + this.isOpen)
    }

    constructor() { }

    ngOnInit() {
    }
}
