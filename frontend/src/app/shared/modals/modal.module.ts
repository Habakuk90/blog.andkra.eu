import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { SharedModule } from '../shared.module';
import { ModalService } from './modal.service';

@NgModule({
  imports: [SharedModule],
  declarations: [
    ModalComponent,
  ],
  providers: [ModalService],
  exports: [ModalComponent]
})
export class ModalModule { }
