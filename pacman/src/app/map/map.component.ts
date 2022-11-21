import { Component, OnInit } from '@angular/core';
import { LinkedList } from '../lista';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  listas: any[] = [];

  todos_os_lados = [12, 17, 34, 35, 42, 47, 62, 67]
  direita_cima_esquerda = [95, 94, 81, 88, 74, 75, 63, 66, 15, 14]
  direita_baixo_esquerda = [2, 7, 13, 16, 73, 76];
  cima_baixo_esquerda = [19, 22, 43, 56, 77];
  cima_baixo_direita = [10, 27, 46, 53, 72];
  direita_esquerda = [1, 3, 6, 8, 11, 18, 21, 28, 40, 41, 48, 49, 54, 55, 61, 68, 91, 92, 93, 96, 97, 98];
  direita_cima = [90, 70, 83, 87, 44, 20, 23];
  direita_baixo = [0, 5, 25, 33, 60, 65, 78, 80, 85];
  cima_esquerda = [26, 29, 45, 82, 79, 86, 99];
  cima_baixo = [32, 37, 52, 57];
  esquerda_baixo = [4, 9, 24, 36, 64, 69, 71, 84, 89];

  map: boolean[] = [];
  currentIndex: any = null;

  selectedValue: string = '';
  buscas: string[] = ['Busca em Largura', 'Busca em Profundidade'];

  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<100; i++){
      this.map.push(false)
    }
    this.selectedValue = this.buscas[0];
    
    this.listInit();
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
      console.log(index);
      
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

  restaurar(){
    if(this.currentIndex!=null) this.map[this.currentIndex] = false;
    this.currentIndex = null;
  }

  buscar(){
    console.log("buscar em "+this.selectedValue);
  }

  listInit(){
    for(let i=0; i<100; i++){
      this.listas[i] = new LinkedList<number>();
      if(this.todos_os_lados.includes(i)){
        this.listas[i].push(i+1);
        this.listas[i].push(i-1);
        this.listas[i].push(i+10);
        this.listas[i].push(i-10);
      }
      else if(this.direita_cima_esquerda.includes(i)){
        this.listas[i].push(i+1);
        this.listas[i].push(i-10);
        this.listas[i].push(i-1);
      }
      else if(this.direita_baixo_esquerda.includes(i)){
        this.listas[i].push(i+1);
        this.listas[i].push(i+10);
        this.listas[i].push(i-1);
      }
      else if(this.cima_baixo_esquerda.includes(i)){
        this.listas[i].push(i-10);
        this.listas[i].push(i+10);
        this.listas[i].push(i-1);
      }
      else if(this.cima_baixo_direita.includes(i)){
        this.listas[i].push(i-10);
        this.listas[i].push(i+10);
        this.listas[i].push(i+1);
      }
      else if(this.direita_esquerda.includes(i)){
        this.listas[i].push(i+1);
        this.listas[i].push(i-1);
      }
      else if(this.direita_cima.includes(i)){
        this.listas[i].push(i+1);
        this.listas[i].push(i-10);
      }
      else if(this.direita_baixo.includes(i)){
        this.listas[i].push(i+1);
        this.listas[i].push(i+10);
      }
      else if(this.cima_esquerda.includes(i)){
        this.listas[i].push(i-10);
        this.listas[i].push(i-1);
      }
      else if(this.cima_baixo.includes(i)){
        this.listas[i].push(i-10);
        this.listas[i].push(i+10);
      }
      else if(this.esquerda_baixo.includes(i)){
        this.listas[i].push(i-1);
        this.listas[i].push(i+10);
      }
    }
  }
  
}
