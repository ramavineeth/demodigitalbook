import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReaderService,Category } from 'src/service/reader.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  Books:any;
  bookcategory=Object.values(Category).filter(value => typeof value==="string");
  book=this.readerService.hastoeditbook;
  hastoeditbook={
    id:'',
    authorid:"",
    title:'',
    category:"",
    author:'',
    price:'',
    publisher:'',
    publisheddate:null,
    chapters:'',
  bookstatus:'',
    content:''
  };
  nobookFoundMessage: any;
  updatebookblankResponse={
    title:'',
    category:'',
    author:'',
    price:'',
    publisher:'',
    publisheddate:'',
    chapters:'',
    bookstatus:'',
    content:''
  };
  bookupdateSuccessMessage: any="";
  constructor(public router:Router,public readerService:ReaderService) { }
  cancelupdatebook(){
    this.readerService.editbooksuccessContainerFlag=false;
    this.router.navigate(["/authorhome"]);
  }
  updateBook(){
    this.updatebookblankResponse.title="";
    this.updatebookblankResponse.category="";
    this.updatebookblankResponse.publisher="";
    this.updatebookblankResponse.publisheddate="";
    this.updatebookblankResponse.price="";
    this.updatebookblankResponse.chapters="";
    this.updatebookblankResponse.content="";

    if(this.book.title===null){
      this.updatebookblankResponse.title="Book title cannot be blank";
    }
    if(this.book.chapters===null){
          this.updatebookblankResponse.category="Book category cannot be blank";
    }
    if(this.book.publisher===null){
          this.updatebookblankResponse.publisher="Book publisher cannot be blank";
    }
    if(this.book.publisheddate===null){
          this.updatebookblankResponse.publisheddate="Book publisheddatecannot be blank";
    }
    if(this.book.price===null || this.book.price===null){
          this.updatebookblankResponse.price="Book pricecannot be blank";
    }
    if(this.book.chapters===null|| this.book.chapters===null){
          this.updatebookblankResponse.chapters="Book chapterscannot be blank";
    }
    if(this.book.content===null){
          this.updatebookblankResponse.content="Book contentcannot be blank";
    }
    else{
    this.readerService.editbooksuccessContainerFlag=false;
    const observable= this.readerService.updateBook(this.book);
    observable.subscribe((responseBody:any)=>{
      console.log("R"+JSON.stringify(responseBody));
        // this.updatebookblankResponse.title=responseBody.title;
        // this.updatebookblankResponse.category=responseBody.category;
        // this.updatebookblankResponse.author=responseBody.author;
        // this.updatebookblankResponse.publisher=responseBody.publisher;
        // this.updatebookblankResponse.publisheddate=responseBody.publisheddate;
        // this.updatebookblankResponse.chapters=responseBody.chapters;
        // this.updatebookblankResponse.active=responseBody.active;
        // this.updatebookblankResponse.price=responseBody.price;
      },
      (error:any)=>{
        console.log("E"+JSON.stringify(error.error));
      if(typeof error.error.text==="string"){
        this.readerService.editBookContainerFlag=false;
        this.readerService.editbooksuccessContainerFlag=true;
        console.log("E"+JSON.stringify(error.error));
        this.bookupdateSuccessMessage=error.error.text;
      }
    });
  }
  }
  ngOnInit(): void {
    this.readerService.editbooksuccessContainerFlag=false;
    const observable=this.readerService.getbooksByAuthorID();
    observable.subscribe((responseBody:any)=>{
      console.log(JSON.stringify(responseBody));
      this.Books=JSON.parse(JSON.stringify(responseBody));
    });
  }
}
