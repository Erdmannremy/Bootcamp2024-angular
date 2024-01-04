import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input() valeur! : string 


list : Link[] = [
  {title : "Nom"},
  {title : "Race"},
]


}
