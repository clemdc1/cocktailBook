import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]',
  standalone: true,
})
export class SelectedDirective implements OnChanges {
  @Input() public appSelected?: boolean;
  @HostBinding('style.backgroundColor') private backgroundColor: string;
  @HostBinding('style.color') private color: string;
  @HostBinding('style.fontWeight') private fontWeight: string;
  constructor() {
    this.appSelected = false;
    this.backgroundColor = 'white';
    this.fontWeight = '400';
    this.color = 'var(--text-regular)';
  }
  ngOnChanges(): void {
    if (this.appSelected) {
      this.backgroundColor = 'var(--primary)';
      this.color = 'white';
      this.fontWeight = '500';
    } else {
      this.backgroundColor = 'white';
      this.fontWeight = '400';
      this.color = 'var(--text-regular)';
    }
  }
}
