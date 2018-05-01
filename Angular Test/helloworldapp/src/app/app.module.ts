import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NpcService } from './npc.service';
import { BlueColorDirective } from './blue-color.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainPaneComponent } from './main-pane/main-pane.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BodyElementDirective } from './body-element.directive';
import { NpcComponent } from './npc/npc.component';
import { NpcPaneComponent } from './npc-pane/npc-pane.component';
import { NpcPreviewComponent } from './npc-preview/npc-preview.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        BlueColorDirective,
        NavbarComponent,
        LeftPaneComponent,
        SearchBarComponent,
        LoginComponent,
        HeaderComponent,
        MainPaneComponent,
        FooterComponent,
        BodyComponent,
        BodyElementDirective,
        NpcComponent,
        NpcPaneComponent,
        NpcPreviewComponent
    ],
    imports: [
        AlertModule.forRoot(),
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    providers: [
        NpcService
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
