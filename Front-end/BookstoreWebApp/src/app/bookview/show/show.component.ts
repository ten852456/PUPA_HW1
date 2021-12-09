import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faSearch, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  //icon
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  constructor(private service:SharedService) { }

  Bookviewlist:any=[];

  ModalTitle: string | undefined;
  ActivateAddEditBook:boolean = false;
  book:any;

  BookIdFiltered:string="";
  BookNameFiltered:string="";
  BooklistwithoutFiltered:any=[];


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
      this.BooklistwithoutFiltered=data;
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
  filterfn(){
    var bookIdFilter = this.BookIdFiltered;
    var bookNameFilter = this.BookNameFiltered;

    this.Bookviewlist = this.BooklistwithoutFiltered.filter(function (el: { id: { toString: () => string; }; bookname: { toString: () => string; }; }){
      return el.id.toString().toLowerCase().includes(
        bookIdFilter.toString().trim().toLowerCase()
      )&&
      el.bookname.toString().toLowerCase().includes(
        bookNameFilter.toString().trim().toLowerCase()
      )
    })
  }

}
