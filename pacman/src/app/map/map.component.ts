import { Component, OnInit } from '@angular/core';
import { LinkedList } from '../lista';

interface Arestas {
  de: number;
  para: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  listas: LinkedList<number>[] = [];

  visitados: boolean[] = [];
  s: number[] = [];
  arestas: Arestas[] = [];

  out = [30,31,38,39,50,51,58,59]

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
  ghostPosition = 44;

  selectedValue: string = '';
  buscas: string[] = ['Busca em Largura', 'Busca em Profundidade'];

  constructor() { }

  ngOnInit(): void {
    this.listInit();
    this.selectedValue = this.buscas[0];
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

  ghostIsHere(i: any): boolean {
    return parseInt(i) == this.ghostPosition;
  }

  restaurar(){
    if(this.currentIndex!=null) this.map[this.currentIndex] = false;
    this.currentIndex = null;
    this.ghostPosition = 44;
    this.arestas = [];
    this.visitados = [];
    this.listInit();
    
  }

  buscar(){

    if(this.selectedValue == 'Busca em Largura'){
      this.bfs();
    }
    else {
      this.dfs();
    }
    
    this.ghostWalk(this.getResposta());
  }

  getResposta(): number[]{
    let resposta = []
    resposta.push(this.currentIndex);
    let de = this.arestas.find(a=>a.para==this.currentIndex)?.de;
    resposta.push(de);
    while(de != this.ghostPosition){
      de = this.arestas.find(a=>a.para==de)?.de;
      resposta.push(de);
    }
    resposta = resposta.reverse();
    return resposta;
  }

  bfs(){
    let proximo = this.ghostPosition;
    this.s.push(proximo);
    this.visitados[proximo] = true;
    while(proximo != -1){
      while(this.s.length>0){

        let u = this.s.shift();
        let nodeAux = this.listas[u!].start;
        
        let end = false;
        while(!end) {
            if(this.visitados[nodeAux.value] == false){
              this.marcarAresta(u!, nodeAux.value);
              this.visitados[nodeAux.value] = true;
              this.s.push(nodeAux.value);
            }
            if (nodeAux.prox !== null) {
              nodeAux = nodeAux.prox;
            } else {
              end = true;
            }
        }
      }

      proximo = this.visitados.indexOf(false);
      if(proximo!=-1){
        this.s.push(proximo)
        this.visitados[proximo] = true
      }
    }
  }

  dfs(){
    let v = this.ghostPosition;
        if(this.visitados[v]==false){
          this.dfs_visit(v);
        }
  }

  dfs_visit(v: number){
    this.visitados[v] = true;

    let nodeAux = this.listas[v].start;
        
        let end = false;
        while(!end) {
            if(this.visitados[nodeAux.value]==false){
              this.marcarAresta(v, nodeAux.value);
              this.dfs_visit(nodeAux.value);
            }
            if (nodeAux.prox !== null) {
              nodeAux = nodeAux.prox;
            } else {
              end = true;
            }
        }
  }

  marcarAresta(de: number, para: number){
    this.arestas.push({
      de: de,
      para: para
    })
  }

  listInit(){
    for(let i=0; i<100; i++){
      if(!this.out.includes(i)){
      
      this.map.push(false);
      this.visitados.push(false);

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
      else {
        this.visitados.push(true);
      }
    }
  }

  ghostWalk(resposta: number[]){
    resposta.forEach((casa, i)=>{
      setTimeout(()=>{
        this.ghostPosition = casa;
      }, i*300);
    })
  }
  
}
