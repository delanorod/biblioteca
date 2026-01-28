import crypto from 'node:crypto';
let biblioteca=[];

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("Voce deve usar o operador 'new' para chamar o construtor")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = read;
    this.info = function(){
        console.log(`${this.id},${this.title}, ${this.author}, ${this.pages}, ${this.read}`);
        
    };
    
}

function adicionarLivroNaBiblioteca(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    biblioteca.push(newBook);
}

adicionarLivroNaBiblioteca("O Hobbit", "J.R.R. Tolkien", 310, true);
adicionarLivroNaBiblioteca("Dom Casmurro", "Machado de Assis", 256, false);
adicionarLivroNaBiblioteca("Clean Code", "Robert C. Martin", 464, true);

console.table(biblioteca);
