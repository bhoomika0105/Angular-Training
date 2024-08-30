import { Component ,OnInit} from '@angular/core';
import { homeService } from '../../assets/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit{

  ngOnInit(): void {
    this.displayDetails()
  }
  constructor(private service:homeService, private route:Router){}
  values:any=[];
displayDetails(){
 this.values=this.service.getDetailes();
}

onClickBack(){
   this.route.navigate(['/home'])
}
}
