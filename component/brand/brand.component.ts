import { Component, OnInit } from '@angular/core';
import { BrandService } from './brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers:[BrandService],
})
export class BrandComponent implements OnInit {
  brandList: any=[]
  //brand: any[]

  constructor(private router: Router,
    brandservice: BrandService,
   private service :BrandService) { 
  
    brandservice.getbrand().subscribe(res => {
      console.log(res)
      this.brandList = res["data"];
      // console.log(this.brands);
      // console.log("gggjkl")
    
    },
    error => {
      console.log(error);
    }
    
    ); 
  }
  onAddBrand()
    {
        this.router.navigate(['/addbrand'])
    }


    ondelete(id:any) {
      console.log("ss")
      this.service.deleteBrand(id).subscribe(data => {
        this.brandList = data;

        alert("delete brand")
        
        //this.router.navigate(['/brand']); 
      
      },
      error => {
        console.log(error);
      }
      
      );
    }
     
       
   onSelect(id: number)
   {
     console.log(id,"============")
       //this.router.navigate(['/editbrand/'+id])
       this.router.navigate(['/editbrand', id]);
   }
  //  ondelete(id:any) {
  //   console.log("ss")
  //   this.service.deleteBrand(id).subscribe(data => {
  //     this.brandList = data;
  //     this.router.navigate(['/brand']); 
    
  //   },
  //   error => {
  //     console.log(error);
  //   }
    
  //   );
  // }
   
   ngOnInit(): void{

   }
  
    //     getbrand(){
    //       this.service.getbrand()
    //     .subscribe(response => {
    //       if (response['status'] == 'success') {
    //         this.brands = response['data']
    //       } else {
    //         alert('error')
    //       }
    //     })
    // }
  

  

}



