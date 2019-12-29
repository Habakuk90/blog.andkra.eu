import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';
import { IModal } from './modal';
import { IButton } from './buttons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  activeModal: IModal;
  activeModalSubscription: Subscription;
  selectedGame: string;

  constructor(private modalService: ModalService) {

  }

  ngOnInit() {
    this.activeModalSubscription = this.modalService.activeModal
      .subscribe(activeModal => {
        this.activeModal = activeModal;
      });
  }

  ngOnDestroy() {
    this.activeModalSubscription.unsubscribe();
  }

  closeModal() {
    this.modalService.closeModal();
  }

  onClick(event: Event, button: IButton) {

  }

  gameRestart() {
    throw new Error('not implemented');
  }
}


// for custom modals use this pls
export class ModalBuilder {
  private _text;
  private _modal: IModal;

  constructor(private modal: IModal) {
    this._modal = this.buildModal(this.modal);
  }

  buildModal(modal: IModal): IModal {

    return this._modal;
  }
}
