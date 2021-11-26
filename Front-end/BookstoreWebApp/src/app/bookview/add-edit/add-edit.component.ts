import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() book: any;
  bookId: number | undefined;
  bookName: string | undefined;
  bookAmount: number | undefined;
  bookPic_url: string | undefined;
  bookPrice: number | undefined;

  ngOnInit(): void {
    this.bookId = this.book.bookId;
    this.bookName = this.book.bookName;
    this.bookAmount = this.book.bookAmount;
    this.bookPic_url = this.book.bookPic_url;
    this.bookPrice = this.book.bookPrice;
  }
  AddBook() {
    var val = {
      Id: this.bookId,
      Bookname: this.bookName,
      Amount: this.bookAmount,
      Pic_url: this.bookPic_url,
      Price: this.bookPrice
    }
    this.service.addBooklist(val).subscribe(res => {
      alert(res.toString());
    });
  }
  UpdateBook() {
    var val = {
      Id: this.bookId,
      Bookname: this.bookName,
      Amount: this.bookAmount,
      Pic_url: this.bookPic_url,
      Price: this.bookPrice
    }
    this.service.updateBooklist(val).subscribe(res => {
      alert(res.toString());
    });
  }
}

