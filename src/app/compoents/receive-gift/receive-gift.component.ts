import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorReceivingGiftDialogComponent } from '../error-receiving-gift-dialog/error-receiving-gift-dialog.component';

@Component({
  selector: 'app-receive-gift',
  templateUrl: './receive-gift.component.html',
  styleUrls: ['./receive-gift.component.css']
})
export class ReceiveGiftComponent implements OnInit {

  constructor(private dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {
  }

  onOpenDialog(): void {
    const dialogRef = this.dialog.open(ErrorReceivingGiftDialogComponent)
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.route.navigateByUrl("/search");
      }
    })
  }

}
