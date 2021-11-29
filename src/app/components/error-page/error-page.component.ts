import { Component, OnInit } from '@angular/core';
import { ErrorPage } from '../../utils/mixins/errors/page/error.page'

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage: string = ErrorPage.notFound

  constructor() { }

  ngOnInit(): void {
  }

}
