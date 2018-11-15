import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/application/app.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { BehaviorComponent } from './components/behavior/behavior.component';
import { AsyncComponent } from './components/async/async.component';
import { ReplayComponent } from './components/replay/replay.component';
import { ObserversComponent } from './components/observers/observers.component';
import { CompletionsComponent } from './components/completions/completions.component';
import { MulticastComponent } from './components/multicast/multicast.component';
import { UtilityComponent } from './components/utility/utility.component';
import { CreationComponent } from './components/creation/creation.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    OperatorsComponent,
    BehaviorComponent,
    AsyncComponent,
    ReplayComponent,
    ObserversComponent,
    CompletionsComponent,
    MulticastComponent,
    UtilityComponent,
    SchedulerComponent,
    CreationComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
