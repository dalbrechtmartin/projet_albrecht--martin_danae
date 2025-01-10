export class Product {
    shape: string;
    categorie: string;
    name: string;
    description: string;
    price: number;
    image: string;

    constructor(shape: string, categorie: string, name: string, description: string, price: number, image: string) {
        this.shape = shape;
        this.categorie = categorie;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}