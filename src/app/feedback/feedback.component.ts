import {Component} from '@angular/core';
import {Feedback} from "../models/feedback";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  companyName = 'Phrase';
  genderList = ['male', 'female', 'other'];

  customerFeedback = new Feedback();
  copyrightInfoParam: any;
  titleParam: any;

  constructor(private translate: TranslateService) {
    this.titleParam = {company: this.companyName};
    this.copyrightInfoParam = {
      currentYear: new Date().getFullYear(),
      company: this.companyName,
    };
  }

  saveFeedback() {
    this.translate
      .get('successfulSubmitMessage')
      .subscribe((successMessage: string) => {
        alert(successMessage);
      });
    console.table(this.customerFeedback);
  }
}
