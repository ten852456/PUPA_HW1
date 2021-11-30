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
  id: string | undefined;
  bookName: string | undefined;
  bookAmount: string | undefined;
  bookPic_url: string | undefined;
  bookPrice: string | undefined;

  ngOnInit(): void {
    this.id = this.book.id;
    this.bookName = this.book.bookName;
    this.bookAmount = this.book.bookAmount;
    this.bookPic_url = this.book.bookPic_url;
    this.bookPrice = this.book.bookPrice;
  }
  AddBook() {
    var val = {
      bookname: this.bookName,
      amount: this.bookAmount,
      pic_url: this.bookPic_url,
      price: this.bookPrice
    }
    this.service.addBooklist(val).subscribe(res => {
      alert(res.toString());
    });
  }
  UpdateBook() {
    var val = { 
      id: this.id,
      bookname: this.bookName,
      amount: this.bookAmount,
      pic_url: this.bookPic_url,
      price: this.bookPrice
    } 
    this.service.updateBooklist(val).subscribe(res => {
      alert(res.toString());
    });
  }
}

