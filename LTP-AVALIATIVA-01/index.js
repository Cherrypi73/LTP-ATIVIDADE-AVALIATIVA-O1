class Noticia{
    constructor(titulo,dataDaPublicacao,resumoETexto,texto){
        this.titulo= titulo;
        this.dadaDaPublicacao= dataDaPublicacao;
        this.resumoETexto= resumoETexto;
        this.texto= texto;
    }
    mostrarNoticia(){
        return  this.titulo+ this.dadaDaPublicacao+ this.resumoETexto;
    }
}
let noticia = new Noticia("Morte do Han solo ","14/12/2017","Kylo oferece o próprio sabre de luz ao pai e, no momento que Han segura a arma, seu lado sombrio vence seu conflito interno e ele acaba ativando o sabre, assassinando Han Solo","Foi morto pelo filho Ben Solo (Kylo Ren) na Base de Starkiller. Ao encontrar Kylo Ren, Han tenta convertê-lo para voltar para o lado da luz. Kylo Ren luta contra seus próprios sentimentos e conflito interno ao reencontrar o pai e, se sentindo dividido entre o lado sombrio e o da luz, pede a ajuda de Han Solo para se livrar do sofrimento que passava. Kylo oferece o próprio sabre de luz ao pai e, no momento que Han segura a arma, seu lado sombrio vence seu conflito interno e ele acaba ativando o sabre, assassinando Han Solo. Em outro lugar, a morte de Han assim como o arrependimento de Kylo Ren, são sentidos por Leia através da Força.")
console.log(Noticia.mostrarNoticia());
console.log(noticia.titulo)
console.log(noticia.dadaDaPublicacao)
console.log(noticia.resumoETexto)
console.log(noticia.texto)