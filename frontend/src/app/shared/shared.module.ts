import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { NgxMasonryModule } from 'ngx-masonry';
// import { library } from '@fortawesome/fontawesome-svg-core';

// import {
//   faCodeBranch,
//   faAsterisk,
//   faBars,
//   faUserCircle,
//   faPowerOff,
//   faCog,
//   faPlayCircle,
//   faRocket,
//   faPlus,
//   faEdit,
//   faTrash,
//   faTimes,
//   faCaretUp,
//   faCaretDown,
//   faExclamationTriangle,
//   faFilter,
//   faTasks,
//   faCheck,
//   faSquare,
//   faLanguage,
//   faPaintBrush,
//   faLightbulb,
//   faWindowMaximize,
//   faStream,
//   faBook
// } from '@fortawesome/free-solid-svg-icons';

// import { faGithub } from '@fortawesome/free-brands-svg-icons';

// library.add(
//   faGithub,
//   faAsterisk,
//   faBars,
//   faUserCircle,
//   faPowerOff,
//   faCog,
//   faRocket,
//   faPlayCircle,
//   faPlus,
//   faEdit,
//   faTrash,
//   faTimes,
//   faCaretUp,
//   faCaretDown,
//   faExclamationTriangle,
//   faFilter,
//   faTasks,
//   faCheck,
//   faSquare,
//   faLanguage,
//   faPaintBrush,
//   faLightbulb,
//   faWindowMaximize,
//   faStream,
//   faBook
// );

// import { SpinnerComponent } from './component/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // NgbModule,
    // FontAwesomeModule
  ],
  declarations: [
    ImageSliderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ImageSliderComponent
    // NgbModule,
    // FontAwesomeModule,
    // NgxMasonryModule,

    // SpinnerComponent
  ]
})
export class SharedModule {}
