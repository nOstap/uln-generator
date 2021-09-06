import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ULN } from './uln';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Clipboard as BrowserClipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  public uln: ULN;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly clipboard: Clipboard,
    private readonly browserClipboard: BrowserClipboard,
    private readonly toast: Toast,
    private readonly snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.refreshULN();
  }

  async refreshULN(): Promise<void> {
    this.uln = new ULN();
    this.cdr.detectChanges();
    try {
      await this.clipboard.copy(this.uln.toString());
    } catch(e) {
      this.browserClipboard.copy(this.uln.toString());
    }
    this.toast.show('Copied!', 'short', 'top').subscribe(null, () => {
      this.snackBar.open('Copied!', null, {
        duration: 300,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }

}
