import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: boolean[] = [];
  currentIndex: any = null;

  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<100; i++){
      this.map.push(false)
    }
  }

  createRange(number: number){
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  getClass(index:number): string{
    if(index==1)return 'text-white mt-4';
    return 'text-white';
  }

  onDrop(event: any, i: any) {
      event.preventDefault();
      let index = parseInt(i);

      this.map[index] = true;
      if(this.currentIndex!=null) this.map[this.currentIndex] = false;
      this.currentIndex = index;
  }
  
  onDragOver(event: any) {
      event.stopPropagation();
      event.preventDefault();
  }

  isHere(i: any, first: boolean = false): boolean {
    if(first) return true;
    return this.map[parseInt(i)];
  }

}
