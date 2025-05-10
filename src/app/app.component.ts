import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { ViewportScroller, Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Idreams';
  currentRoute: string = '';
  currentFragment: string | null = null;
  baseHref: string = '/Idream'; // Set your base href here
  showNavbar = true;

  constructor(
    private gtmService: GoogleTagManagerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide navbar for specific routes
        this.showNavbar = !event.url.includes('/tiruppurTamilans');
        console.log(this.showNavbar)
      }
    });
  }

  ngOnInit() {
    this.setupRouteTracking();
  }

  private setupRouteTracking() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Remove base href from URL for comparison
      let url = event.urlAfterRedirects || event.url;
      if (url.startsWith(this.baseHref)) {
        url = url.substring(this.baseHref.length);
      }
      
      this.currentRoute = url.split('?')[0].split('#')[0];
      this.currentFragment = this.activatedRoute.snapshot.fragment;
      this.trackPageView();
    });
  }

  navigateWithReload(path: string) {
    // Full page navigation with base href
    window.location.href = `${this.baseHref}${path.startsWith('/') ? path : '/' + path}`;
  }

  scrollToLeadership() {
    if (this.currentRoute === '/') {
      // Already on home page, just scroll
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor('leadership');
      }, 100);
      window.location.hash = 'leadership';
    } else {
      // Navigate to home with fragment
      window.location.href = `${this.baseHref}/#leadership`;
    }
    this.trackEvent('navigation', 'leadership-section');
  }

  scrollToContactUs() {
    if (this.currentRoute === '/') {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor('contact');
      }, 100);
      window.location.hash = 'contact';
    } else {
      window.location.href = `${this.baseHref}/#contact`;
    }
    this.trackEvent('navigation', 'contact-section');
  }

  isBusinessesActive(): boolean {
    return [
      '/properties',
      '/cinemas',
      '/tiruppurTamilans'
    ].some(route => this.currentRoute.startsWith(route));
  }

  trackEvent(action: string, label: string) {
    const gtmTag = {
      event: 'user_action',
      action: action,
      label: label,
    };
    this.gtmService.pushTag(gtmTag);
  }

  private trackPageView() {
    const gtmTag = {
      event: 'page_view',
      page_path: `${this.baseHref}${this.currentRoute}`,
      page_fragment: this.currentFragment || 'none'
    };
    this.gtmService.pushTag(gtmTag);
  }
}