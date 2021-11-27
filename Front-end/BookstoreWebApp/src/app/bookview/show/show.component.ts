import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  Bookviewlist:any=[];

  ModalTitle: string | undefined;
  ActivateAddEditBook:boolean = false;
  book:any;

  ngOnInit(): void {
    this.refreshBooklist();
  }

  addClick(){
    this.book={
      id:0,
      Bookname:""
    }
    this.ModalTitle="Add Book";
    this.ActivateAddEditBook=true;
  }
  editClick(item: any){
    this.book=item;
    this.ModalTitle="Edit Book"
    this.ActivateAddEditBook=true;
  }


  closeClick(){
    this.ActivateAddEditBook=false;
    this.refreshBooklist;
  }

  refreshBooklist(){
    this.service.getBooklist().subscribe(data=>{
      this.Bookviewlist = data;
    });
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteBooklist(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshBooklist();
      })
    }
  }

}
