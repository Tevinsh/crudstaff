import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudstaff';
  results : any[] = [];
  constructor(public crudService: CrudService) {}
  ngOnInit(){
    this.crudService.getAllUsers().subscribe((res) => {
      if (res){
        this.results = res;
      }
      //console.log(res[0]);
      console.log("result :",this.results);
    })
  }
}
