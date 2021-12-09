import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared.service'
declare let $: any;

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  @ViewChild('modal') modal:ElementRef;

  showModal(){
    // Show modal with jquery
    $(this.modal.nativeElement).modal('show'); 
}
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
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
  showdata(item:any){
    this.ModalTitle="Add Book";
    this.ActivateAddEditBook=true;
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
