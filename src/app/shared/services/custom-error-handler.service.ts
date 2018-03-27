import { ErrorHandler, Injectable, Injector } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ErrorLogService } from './errorlog.service';
import {AppComponent} from '../../app.component';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {

  constructor(private errorLogService: ErrorLogService) {
    super();
}

handleError(error) {
    super.handleError(error);
    alert(`Error occurred:${error.message}`);
    this.errorLogService.logError(error);
}

}
