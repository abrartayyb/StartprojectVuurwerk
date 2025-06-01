/**
 * Controleer de veiligheid van een aantal vuurwerkpakketten
 *
 * @author Lennard Fonteijn
 */
import { Instructie } from "./Instructie";
import { Product } from "./Product";

function main(): void {
    console.log("happy new year from: <naam: Abrar Al Tayyb>, <studentnummer: 500950854 >, <klas: F101 >");
    // lijst van vuurwerk
    const pakket: Vuurwerk[] = [];
    // parameters doorgeven aan de functies
    // aanroepen van functies
    stap1(pakket);
    stap2(pakket);
    stap3(pakket);
    stap4(pakket);
    stap5(pakket, 0);
    printHardeKnallers(pakket, 100, 100);
}

/**
 * Beschrijft de veiligheidsinstructie van vuurwerk
 * @param nederlandstalig Of de instructie Nederlandstalig is
 * @param minimumLeeftijd Minimale leeftijd voor gebruik
 * @param omschrijving De gebruiksinstructie
 */


export class Vuurwerk extends Product {
    // vuurwerk bevat een instantie van de Instructie class
    public _instructie: Instructie;
    // public _omschrijving: string;

    constructor(naam: string, prijs: number, instructie: Instructie) {
        super(naam, prijs); // Roept de constructor van Product aan
        this._instructie = instructie;
    }

    public isLegaal(): boolean {
        // Vuurwerk is pas legaal als er een instructie is EN deze Nederlandstalig is
        return this._instructie.nederlandstalig === true;
    }

    public toString(): string {
        // dit is voor de afdruk van het vuurwerk
        // de /n/ is voor een nieuwe regel
        // de \t is voor een tab
        // de instructie wordt afgedrukt met de toString() methode van de Instructie class
       return `${super.toString()}\tInstructie: ${this._instructie ? this._instructie.toString() : "ontbreekt"}\tLegaal: ${this.isLegaal()}`;
    }
}

// STAP 1 
// Deze functie voegt vuurwerk toe aan het pakket
// en drukt de informatie van het vuurwerk af
// het vuurwerk heeft een naam, prijs en instructie
// dit zijn de bronnen die ik heb gebruikt:
// https://www.w3schools.com/js/js_classes.asp
// https://www.geeksforgeeks.org/typescript-class-inheritance/
function stap1(pakket: Product[]): void {
    console.log("\n--- STAP 1 ---");

    // vuurwerk met Nederlandstalige instructie
    const vuurwerk1 = new Vuurwerk("Veiligheidsbril", 2.5, new Instructie(true, 6, "Draag bij aansteken"));
    // vuurwerk1 is een instantie van de vuurwerk class
    // en wordt toegevoegd aan het pakket
    // toString methode wordt aangeroepen om de informatie van het vuurwerk af te drukken
    pakket.push(vuurwerk1);
    console.log(vuurwerk1.toString());

    // vuurwerk met Engelstalige instructie
    const vuurwerk2 = new Vuurwerk("Safety glass", 2.5, new Instructie(false, 6, "Wear before ignition"));
    pakket.push(vuurwerk2);
    console.log(vuurwerk2.toString());

    // vuurwerk zonder instructie
    const vuurwerk3 = new Vuurwerk("Aansteeklont zonder instructie", 0.25, new Instructie(false, 0, ""));
    pakket.push(vuurwerk3);
    console.log(vuurwerk3.toString());

    
}


 export class Knaller extends Vuurwerk {
    private _aantalKnallers: number = 0; // aantal knallers in de verpakking
    private _decibel: number = 0; // decibel van de knaller

    // Getter voor aantalKnallers- private
    public get decibel(): number {
        return this._decibel;
    }

    constructor(naam: string, prijs: number, aantalKnallers: number, decibel: number, instructie: Instructie) {
        super(naam, prijs, instructie); // Roept de constructor van Product aan
        this._aantalKnallers = aantalKnallers; // aantal knallers in de verpakking
        this._decibel = decibel; // decibel van de knaller
    }

    // public isLegaal is een methode die controleert of de knaller legaal is
    public isLegaal(): boolean {
        return this._decibel <= 120;
    }

    public toString(): string {
        // dit is voor de afdruk van de knaller
        // de /n/ is voor een nieuwe regel
        // de \t is voor een tab
        // de instructie wordt afgedrukt met de toString() methode van de Instructie class
        // ik had hier eerst $ this.toString() gebruikt, maar dat gaf een foutmelding
        return `${super.toString()}\n\taantalKnallen: ${this._aantalKnallers}\n\tdecibel: ${this._decibel}`;
    }

    
}

// STAP 2
// Deze functie voegt knallers toe aan het pakket
// en drukt de informatie van de knallers af
// de knallers hebben een naam, prijs, nederlandstalig, minimumleeftijd en omschrijving
// methode toString() wordt gebruikt om de informatie van de knallers af te drukken
// bronnen:
// https://www.w3schools.com/js/js_if_else.asp
// https://www.geeksforgeeks.org/inheritance-in-typescript/
function stap2(pakket: Product[]): void {
    console.log("\n--- STAP 2 ---");

    
    // knaller met Engelstalige instructie
    const knaller1 = new Knaller(
        "Celebration Crackers", 10,
        20, // aantalKnallers
        75, // decibel
        new Instructie(false, 12, "Keep minimum 10 ft distance")
    );
    pakket.push(knaller1);
    console.log(knaller1.toString());

    // knaller met Nederlandstalige instructie en 120 decibel
    const knaller2 = new Knaller(
        "Peking Rol",
        45,
        30, // aantalKnallers
        120, // decibel
        new Instructie(true, 16, "Houd minimaal 5 meter afstand")
    );
    pakket.push(knaller2);
    console.log(knaller2.toString());

    // knaller met Nederlandstalige instructie en 125 decibel
    const knaller3 = new Knaller(
        "Shanghai Rol",
        85,
        40, // aantalKnallers
        125, // decibel
        new Instructie(true, 16, "Houd minimaal 5 meter afstand")
    );
    pakket.push(knaller3);
    console.log(knaller3.toString());

    // knaller zonder instructie en 1000 decibel
    const knaller4 = new Knaller(
        "Hongkong Rol",
        82.5,
        50, // aantalKnallers
        1000, // decibel
        new Instructie(false, 18, "")
    );
    pakket.push(knaller4);
    console.log(knaller4.toString());
}

export class Vuurpijl extends Vuurwerk {
    private _hoogte: number = 0; // hoogte van de vuurpijl in meters
    private _kleurverhouding: number[] = []; // kleurenverhouding van de vuurpijl
    constructor(
        naam: string, 
        prijs: number,
        _hoogte: number,
        _kleurverhouding: number[], // een array van kleuren 
        instructie: Instructie
         ) {
        super(naam, prijs, instructie); // Roept de constructor van vuurwerk aan
        this._hoogte = _hoogte; // hoogte van de vuurpijl in meters
        this._kleurverhouding = _kleurverhouding; // kleurenverhouding van de vuurpijl
    }

public isLegaal(): boolean {
    // pak de kleuren uit de erray van de kleurenverhouding
    // en controleer of de kleurenverhouding precies 50, 25, 25 is
    const [rood, groen, blauw] = this._kleurverhouding;
    // controle methode voor de kleurverhouding
    // controle via methode correcteKleurverhouding()
    // Je moet checken of kleurverhouding optelt tot 100%. Als dat niet zo is, dan:
    // Meld een fout met console.error
    // Stel kleur in op [100, 0, 0]
    if (!this.correcteKleurverhouding(this._kleurverhouding)) {
        console.error("Kleurverhouding is niet correct, wordt aangepast naar [100, 0, 0]");
        this._kleurverhouding = [100, 0, 0]; // pas de kleurverhouding aan
    }

    // constroleer of instructie nederlandstalig is 
    // kracht lager dan 120 
    // kleuren precies 50, 25, 25 
    return this._hoogte < 120 &&
        this._kleurverhouding.length === 3 &&
        rood === 50 && groen === 25 && blauw === 25;
}

private correcteKleurverhouding(kleuren: number[]): boolean {
    return kleuren.length === 3 && kleuren.reduce((a, b) => a + b, 0) === 100;
}


}
 // STAP 3
// Deze functie voegt vuurpijlen toe aan het pakket
// en drukt de informatie van de vuurpijlen af
// de vuurpijlen hebben een naam, prijs, kracht, kleurenverhouding en instructie
// bronnen:
// https://www.w3schools.com/js/js_arrays.asp
//

function stap3(pakket: Product[]): void {
    console.log("\n--- STAP 3 ---");

    // vuurpijl met Nederlandstalige instructies
    const vuurpijl1 = new Vuurpijl("cruse rocket", 2.50, 40, [50, 25, 25], new Instructie(true, 10, "niet vast houden"))
    pakket.push(vuurpijl1);
    console.log(vuurpijl1.toString());

    // vuurpijl met Nederlandstalige instructies
    const vuurpijl2 = new Vuurpijl("Killing Arrow", 4.25, 40, [25, 30, 44], new Instructie(true, 16, "niet vast houden"));
    pakket.push(vuurpijl2);
    console.log(vuurpijl2.toString());

    // vuurpijl met Engelstalige instructies\
    const vuurpijl3 = new Vuurpijl("magic sky", 2.75, 40, [50, 41, 10], new Instructie(false, 20, "houd minimaal 10 meter afstand"));
    pakket.push(vuurpijl3);
    console.log(vuurpijl3.toString());
}

// STAP 4
// Deze functie controleert of het vuurwerk legaal is
// en drukt de informatie van het vuurwerk af
// de vuurwerk heeft een naam, prijs en instructie
// bronnen:
// https://www.w3schools.com/js/js_loop_for.asp
// https://www.geeksforgeeks.org/typescript-instanceof-operator/
function stap4(pakket: Product[]): void {
    console.log("\n--- STAP 4 ---");
    for (let i = 0; i < pakket.length; i++) {
        const item = pakket[i];
        console.log(item.toString());
        // Check if item has isLegaal method
        if (typeof (item as any).isLegaal === "function") {
            if ((item as any).isLegaal() === true) {
                console.log("legaal vuurwerk");
            } else {
                console.log("illegaal vuurwerk");
            }
        } else {
            console.log("kan legaliteit niet bepalen");
        }
    }
}

// STAP 5
// Deze functie controleert of er een instructie is voor het vuurwerk
// en drukt de informatie van de instructie af
// de functie neemt een pakket en een index als parameters
// bronnen:
// https://www.w3schools.com/js/js_array_methods.asp
// https://www.w3schools.com/js/js_functions.asp
function stap5(pakket: Vuurwerk[], index: number): void {
    console.log(`\n--- STAP5 ---`);

    // als de index kleiner is dan 0 of groter is dan de lengte van het pakket
    if (index < 0 || index >= pakket.length) {
        console.log("index valt buiten grenzen");
        return; // functie stopt hier
    }

    // haal het vuurwerk uit de erray op basis van de index
    const vuurwerk = pakket[index];

    // controleert of er een instructie is 

    if (!vuurwerk._instructie || vuurwerk._instructie._omschrijving === "") {
    console.log("er is geen instructie");
    } else {
    console.log(vuurwerk._instructie.toString());
}
}
// STAP 6
// Deze functie controleert of er harde knallers zijn in het pakket
// en drukt de informatie van de harde knallers af
// bronnen:
// https://www.geeksforgeeks.org/typescript-instanceof-operator/
// 
function printHardeKnallers(pakket: Vuurwerk[], _decibel: number, drempel:number): void {
    console.log(`\n--- STAP 6 ---`);

    for(let i = 0; i < pakket.length; i++) {
        const item = pakket[i];
        // controleer of het item een Knaller is en of de kracht hoger is dan de drempel
        if (item instanceof Knaller && item.decibel > drempel) {
            console.log(`Harde knaller gevonden: ${item.toString()}`);
        } else {
            console.log(`Geen harde knaller gevonden: ${item.toString()}`);
        }
    }
}
main();



