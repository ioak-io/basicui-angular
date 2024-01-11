import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { TaskModule } from './components/task.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
//import InboxScreenComponent from './components/inbox-screen.component';
//import PureInboxScreenComponent from './components/pure-inbox-screen.component';
//import { AvatarComponent } from './avatar/avatar.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { LinkComponent } from './link/link.component';
import { RadioComponent } from './radio/radio.component';
import { TextareaComponent } from './textarea/textarea.component';


@NgModule({
  declarations: [AppComponent, LinkComponent, TextareaComponent, RadioComponent /*InboxScreenComponent, PureInboxScreenComponent,*/ /*AvatarComponent*/, SelectComponent, IconButtonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    //TaskModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production, }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production, }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
