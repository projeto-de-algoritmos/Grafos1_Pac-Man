# Pac-Man

**Número da Dupla**: 39<br>
**Conteúdo da Disciplina**: Grafos 1<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 19/0027355  |  Erick Melo Vidal de Oliveira|
| xx/xxxxxx  |  Lucas Rodrigues Monteiro |

## Sobre 
O objetivo deste projeto é ilustrar a diferença entre a busca em profundidade e a busca em largura na estrutura de grafos. Para isso, utilizamos um exemplo no jogo do Pac-Man, em que o usuário escolhe um local do mapa para colocar o personagem, o tipo de busca que deseja visualizar e consegue ver a trajetória que o fantasma faria para encontrar o Pac-Man em cada tipo de busca para cada posição selecionada. 

## Screenshots
![Screenshot from 2022-11-21 22-14-41](https://user-images.githubusercontent.com/48844857/203191083-b7e9162b-bf2f-47a9-a58b-a2f646f9dc83.png)
![Screenshot from 2022-11-21 22-14-57](https://user-images.githubusercontent.com/48844857/203191101-012667d1-0003-4819-8615-f457721c9af0.png)
![Screenshot from 2022-11-21 22-15-18](https://user-images.githubusercontent.com/48844857/203191132-05a1fad3-9040-4782-a0e0-f57109f16608.png)

## Instalação 
**Linguagem**: TypeScript<br>
**Framework**: Angular<br>

### Pré-requisitos:
Para rodar o projeto é necessário ter instalado o framework Angular na máquina, para isso basta executar o código abaixo:

`npm install -g @angular/cli@latest`
 
É necessário ter o [NodeJs](https://nodejs.org/en/download/) verão 12 ou superior já instalado.

### Iniciando o porjeto
Para rodar o código, primeiro clone este repositório em um diretório de sua preferência com o git

`git clone https://github.com/projeto-de-algoritmos/Grafos1_Pac-Man.git`

Em seguida acesse a pasta do código no repositório clonado

`cd Grafos1_Pac-Man/pacman`

Instale as dependencias do projeto

`npm install`

Agora basta rodar o projeto com este comando que ele abrirá em uma aba de seu navegador padrão

`ng serve --open`

## Uso 
Para visualizar o caminho que o fantasminha irá percorrer, basta arrastar o Pac-Man para um quadrado do mapa, escolher o tipo de busca e clicar em "buscar". Vale ressaltar também, que o fantasminha irá percorrer caminhos diferentes para cada tipo de busca e para cada posição que o Pac-Man for colocado, então seria interessante visualizar essas variações no projeto.

**Atenção:** caso queira realizar uma nova busca, em outra posição e/ou com outro tipo de busca, deve-se apertar o botão "restaurar" antes.




