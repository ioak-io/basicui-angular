import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { LinkComponent } from './link/link.component';
import { RadioComponent } from './radio/radio.component';
import { TextareaComponent } from './textarea/textarea.component';
import { AccordionComponent } from './accordion/accordion.component';
import { StoryWrapperComponent } from './story-wrapper/story-wrapper.component';
import { ModalComponent } from './modal/modal.component';
import { ModalFooterComponent } from './modal/modal-footer.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ColorSchemesComponent } from './colorschemes/colorschemes.component';
import { ThemesOverviewComponent } from './themes-overview/themes-overview.component';
import { TypographyComponent } from './typography/typography.component';
import { DemoSectionComponent } from './demosection/demosection.component';
import Button from '../stories/button.component';
import Header from '../stories/header.component';
import Page from '../stories/page.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent, 
    IconButtonComponent,
    LinkComponent,
    RadioComponent, 
    TextareaComponent,
    AccordionComponent,
    StoryWrapperComponent,
    ModalComponent,
    ModalFooterComponent,
    TableComponent,
    TabsComponent,
    ColorSchemesComponent,
    ThemesOverviewComponent,
    TypographyComponent,
    DemoSectionComponent,
    Button,
    Header,
    Page
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production, }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production, }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
