// src/app/gtm.service.ts
import { Injectable } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Injectable({
  providedIn: 'root',
})
export class GtmService {
  constructor(private gtmService: GoogleTagManagerService) {}

  pushEvent(event: string, data: any = {}) {
    const gtmTag = {
      event: event,
      ...data,
    };
    this.gtmService.pushTag(gtmTag);
    console.log('GTM Event:', gtmTag); // Log the event for debugging
  }

  trackPageView(pageName: string) {
    this.pushEvent('page_view', {
      page: pageName,
      category: 'page',
      action: 'view',
      label: pageName,
    });
  }

  trackButtonClick(buttonName: string, buttonCategory: string) {
    this.pushEvent('button_click', {
      button: buttonName,
      category: buttonCategory,
      action: 'click',
      label: buttonName,
    });
  }

  trackFormSubmit(formName: string, formCategory: string) {
    this.pushEvent('form_submit', {
      form: formName,
      category: formCategory,
      action: 'submit',
      label: formName,
    });
  }

  trackScrollDepth(percentageScrolled: number) {
    this.pushEvent('scroll_depth', {
      percentage: percentageScrolled,
      category: 'scroll',
      action: 'scroll',
      label: `scrolled to ${percentageScrolled}%`,
    });
  }

  trackAddToCart(productName: string, quantity: number) {
    this.pushEvent('add_to_cart', {
      product: productName,
      quantity: quantity,
      category: 'cart',
      action: 'add to cart',
      label: productName,
    });
  }

  trackError(errorMessage: string) {
    this.pushEvent('error', {
      message: errorMessage,
      category: 'error',
      action: 'occured',
      label: errorMessage,
    });
  }
}
