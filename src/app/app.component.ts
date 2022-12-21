import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angularhttp_BatchFive';

  postsData: any = [];

  productsData: any = [];

  //Which is developed by the jsonplaceholder
  API = 'https://jsonplaceholder.typicode.com/posts';

  //https://api.firstamedu.com/api/api/class/AllStates

  // 1.

  //https://localhost:3000/posts

  //

  constructor(private httpclient: HttpClient) {
    // this.httpclient.get("https://jsonplaceholder.typicode.com/posts").subscribe((response)=>{
    //      console.log(response);
    //      this.postsData = response;
    // })
    // this.httpclient.get(this.proudctsResource).subscribe((response)=>{
    //      console.log("my own API related data " , response);
    //      this.myownAPIPostData = response;
    // })
  }


  //username = "madan" paswword - "Q1234$"

  proudctsResource = 'http://localhost:3000/Products';
  ngOnInit() {
    // this.httpclient
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe((response) => {
    //     console.log(response);
    //     this.postsData = response;
    //   });
    this.httpclient
      .get(this.proudctsResource, {
        headers: {
          companyName: 'Misard',
          information: 'Online teachying portal',
        },
        params : {     
          location : "Banoglore",
          teamSize : 10
        },
      })
      .subscribe((response) => {
        console.log('my own API related data ', response);
        this.productsData = response;
      });
  }

  //proudctsResourceByID = 'http://localhost:3000/Products/3';
  //proudctsResource = 'http://localhost:3000/Products';
  evtGetProductsByID(textID: HTMLInputElement) {
    let textvalue = textID.value;

    //http://localhost:3000/Products/3
    this.httpclient
      .get(this.proudctsResource + '/' + textvalue)
      .subscribe((response) => {
        console.log('my own API related data ', response);
        //this.productsData = response;
      });
  }

  // {
  //   proudctName : text1box.value
  //   proudctID :  text1box.value
  //   proudctName : <>
  //   proudctName : <>
  //   proudctName : <>
  // }

  evtCreate() {
    this.httpclient
      .post(this.proudctsResource, {
        Device: 'HP - Second Version',
        Price: '59000',
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  evtGetALL() {
    this.httpclient.get(this.proudctsResource).subscribe((response) => {
      this.productsData = response;
    });
  }

  evtUpdate(textID: HTMLInputElement) {
    let textvalue = textID.value;

    this.httpclient
      .put(this.proudctsResource + '/' + textvalue, {
        Device: 'Updated',
        Price: '20000',
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  evtPatch(textID: HTMLInputElement) {
    let textvalue = textID.value;

    this.httpclient
      .patch(this.proudctsResource + '/' + textvalue, {
        Price: '20000',
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  evtDelete(textID: HTMLInputElement) {
    let textvalue = textID.value;

    this.httpclient
      .delete(this.proudctsResource + '/' + textvalue)
      .subscribe((response) => {
        console.log(response);
      });
  }

  // 1. Once we have to get the information from below api
  // 2. Then we have to subscribe for getting the data
  // 3. For that we have to use angular http service in this project
}
