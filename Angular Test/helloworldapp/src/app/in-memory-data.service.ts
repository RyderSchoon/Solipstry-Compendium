import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const npcs = [
            { name: 'Mr. Nice', level: 1, attack: "+1", initiative: "+2", move: 5, AC: 14, will: 11, reflex: 11, fortitude: 13, npcversion: "1", npcauthor: "Anonymous", isHomebrew: true, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" },
            { name: 'Skulker', level: 6, attack: "+5", initiative: "+6", move: 9, AC: 13, will: 15, reflex: 15, fortitude: 11, npcversion: "2.5", npcauthor: "Ryder Schoon", isHomebrew: false, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" },
            { name: 'Steve', level: 1, attack: "+1", initiative: "+2", move: 5, AC: 14, will: 11, reflex: 11, fortitude: 13, npcversion: "1", npcauthor: "Anonymous", isHomebrew: true, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" },
            { name: 'Jablammo', level: 1, attack: "+1", initiative: "+2", move: 5, AC: 14, will: 11, reflex: 11, fortitude: 13, npcversion: "1", npcauthor: "Anonymous", isHomebrew: true, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" },
            { name: 'Mr. Bu', level: 1, attack: "+1", initiative: "+2", move: 5, AC: 14, will: 11, reflex: 11, fortitude: 13, npcversion: "1", npcauthor: "Anonymous", isHomebrew: true, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" },
            { name: 'Mr. Cake', level: 1, attack: "+1", initiative: "+2", move: 5, AC: 14, will: 11, reflex: 11, fortitude: 13, npcversion: "1", npcauthor: "Anonymous", isHomebrew: true, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" },
            { name: 'Mr. Mrs', level: 1, attack: "+1", initiative: "+2", move: 5, AC: 14, will: 11, reflex: 11, fortitude: 13, npcversion: "1", npcauthor: "Alex Reinhart", isHomebrew: false, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" },
            { name: 'Melanie, my ex wife who won\'t stop harassing me on facebook', level: 1, attack: "+1", initiative: "+2", move: 5, AC: 14, will: 11, reflex: 11, fortitude: 13, npcversion: "1", npcauthor: "Anonymous", isHomebrew: true, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" },
            { name: 'Last one is empty', level: 1, attack: "+1", initiative: "+2", move: 5, AC: 14, will: 11, reflex: 11, fortitude: 13, npcversion: "1", npcauthor: "Anonymous", isHomebrew: true, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" },
            { name: 'just kidding', level: 1, attack: "+1", initiative: "+2", move: 5, AC: 14, will: 11, reflex: 11, fortitude: 13, npcversion: "1", npcauthor: "Anonymous", isHomebrew: true, imageSrc: "https://solipstry.com/Solipstry%20Logo.png" }
        ];
        return { npcs };
    }
}