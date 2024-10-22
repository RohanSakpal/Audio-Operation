import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './audio/audio.component';
import { TrimMergeComponent } from './trim-merge/trim-merge.component';
import { WaveTrimComponent } from './wave-trim/wave-trim.component';

const routes: Routes = [
  {path:'',redirectTo:'selection',pathMatch:'full'},
  {path:'merge',component:AudioComponent},
  {path:'trim-merge',component:TrimMergeComponent},
  {path:'wave-trim',component:WaveTrimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
