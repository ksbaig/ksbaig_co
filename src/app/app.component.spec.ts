import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

    it('should show contact details with working phone and email destinations', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const contact = compiled.querySelector('#contact');
      expect(contact?.getAttribute('aria-labelledby')).toBe('contact-title');
      expect(contact?.querySelector('h2')?.textContent).toBe('Let’s Build a Smarter Tomorrow Together.');
      expect(contact?.textContent).toContain('Khuram Shehzad Baig');
      expect(contact?.textContent).toContain('Azmat Baig');
      expect(Array.from(contact?.querySelectorAll('a[href^="tel:"]') ?? [], link => link.getAttribute('href'))).toEqual([
        'tel:+923334535623',
        'tel:+923211995269',
      ]);
      expect(contact?.querySelector('a[href="mailto:ksbaig.co@gmail.com"]')?.textContent).toBe('ksbaig.co@gmail.com');
      expect(contact?.querySelector('.button')?.getAttribute('href')).toBe('mailto:ksbaig.co@gmail.com?subject=Geospatial%20project%20discussion');
      expect(contact?.querySelector('address')?.textContent).toContain('Alkabir Town Phase 2');
      expect(contact?.querySelector('address')?.textContent).toContain('Raiwind Road, Lahore');
      expect(contact?.querySelector('img')?.getAttribute('src')).toBe('assets/slides/contact us1.png');
      expect(compiled.querySelector('.desktop-nav a[href="#contact"]')).not.toBeNull();
      expect(compiled.querySelector('.footer-links a[href="#contact"]')).not.toBeNull();
    });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the KSB Solutions landing page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#hero-title')?.textContent).toContain('KSB Solutions.');
    expect(compiled.querySelector('#services')).not.toBeNull();
  });

  it('should render the About capabilities and link to existing services', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const about = compiled.querySelector('#about');
    expect(about?.getAttribute('aria-labelledby')).toBe('about-title');
    expect(about?.querySelector('h2')?.textContent).toBe('Turning Geospatial Intelligence into Real-World Impact.');
    expect(Array.from(about?.querySelectorAll('.about-points h3') ?? [], heading => heading.textContent)).toEqual([
      'Geospatial Expertise',
      'Intelligent Digital Solutions',
      'Built Around Your Needs',
      'From Data to Decisions',
    ]);
    expect(Array.from(about?.querySelectorAll('.about-purpose h3') ?? [], heading => heading.textContent)).toEqual([
      'Our Mission',
      'Our Vision',
    ]);
    const image = about?.querySelector('img');
    expect(image?.getAttribute('src')).toBe('assets/slides/Geospatial Intelligence in Action.png');
    expect(image?.alt).toContain('satellite');
    const cta = about?.querySelector('a');
    expect(cta?.textContent).toContain('Discover Our Capabilities');
    expect(cta?.getAttribute('href')).toBe('#services');
    expect(compiled.querySelector(cta?.getAttribute('href') ?? '')).not.toBeNull();
  });
});
