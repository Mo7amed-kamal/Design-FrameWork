import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    flag:boolean = false
    userAge:boolean = false
    userEmail:boolean = false
    userPassword:boolean = false
    showLable(u:any){
        if(u.target.value.length > 0){
            this.flag = true
        }else{
            this.flag = false
        }
    }
    showAge(a:any){
        if(a.target.value.length > 0){
            this.userAge = true
        }else{
            this.userAge = false
        }
    }

    showEmail(e:any){
        if(e.target.value.length > 0){
            this.userEmail = true
        }else{
            this.userEmail = false
        }
    }
    showPassword(p:any){
        if(p.target.value.length > 0) {
            this.userPassword = true
        }else{
            this.userPassword = false
        }
    }
}
