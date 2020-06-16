import { Component, OnInit } from '@angular/core';
import { AddbrandService } from '../addbrand.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css'],
  providers: [ AddbrandService]
})
export class AddbrandComponent implements OnInit {
  public name:any[]

  constructor(public router: Router, private activateRoute:ActivatedRoute,public api:AddbrandService) { 
    
  }
  
  addbrand = () => {
    this.api.addbrand(this.name).subscribe(
      data => {
        this.name=data;
        alert('added brand');
        this.router.navigateByUrl('/home/brand')
      },
      error => {
        console.log(error);
      }
    );
    
  }
  ngOnInit(): void {
    
    if(localStorage['login_status'] != '1'){

      alert('you are not logged in')

      this.router.navigate(['/login'])
  }
  
}
}
// (response)=>{
//   if(response['status']=='success')
//   {
    
//       alert('added product')
//      this.router.navigateByUrl('home/brand')
//   }
