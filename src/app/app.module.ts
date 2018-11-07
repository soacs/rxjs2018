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

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    OperatorsComponent,
    SchedulerComponent,
    BehaviorComponent,
    AsyncComponent,
    ReplayComponent,
    ObserversComponent,
    CompletionsComponent,
    MulticastComponent,
    UtilityComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
