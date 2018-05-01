import { Injectable } from '@angular/core';
import { NPC } from './npc';
import { NPCS } from './sample-npcs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NpcService {

    private npcUrl = "localhost/npcs";

    getNpcs(): Observable<NPC[]> {
        return this.http.get<NPC[]>(this.npcUrl)
            .pipe(tap(npcs => console.log("fetched npcs")),catchError(this.handleError('getNpcs', [])));
    }

    updateNpc(npc: NPC): Observable<any> {
        this.http.get("http://localhost:80/solipstry/solipstry.php");
        return this.http.put(this.npcUrl, npc, httpOptions).pipe(
            tap(_ => console.log(`updated npc: ${npc.name}`)),
            catchError(this.handleError<any>('updateNpc'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    constructor(private http: HttpClient) { }

}
