/**
 * Controleer de veiligheid van een aantal vuurwerkpakketten
 *
 * @author Lennard Fonteijn
 */
import { Instructie } from "./Instructie";
import { Product } from "./Product";

function main(): void {
    console.log("happy new year from: <naam: Abrar Al Tayyb>, <studentnummer: 500950854 >, <klas: F101 >");
    const pakket: Vuurwerk[] = [];
    stap1(pakket);
    stap2(pakket);
    stap3(pakket);
    stap4(pakket);
    stap5(pakket, 0);
    printHardeKnallers(pakket, 100);
}



export class Vuurwerk extends Product {
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
        return `${super.toString()}\n\tInstructie: ${this._instructie.toString()}`;
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


class Knaller extends Product {
    nederlandstalig: boolean; 
    minimumLeeftijd: number;
    omschrijving: string;
    static nederlandstalig: boolean;
    static minimumLeeftijd: number;
    static omschrijving: string;


    constructor(naam: string, prijs: number, nederlandstalig: boolean, minimumleeftijd: number, omschrijving: string) {
        super(naam, prijs); // Roept de constructor van Product aan
        this.nederlandstalig = nederlandstalig;
        this.minimumLeeftijd = minimumleeftijd;
        this.omschrijving = omschrijving;
    }

    // public isLegaal is een methode die controleert of de knaller legaal is
    public isLegaal(): boolean {
        // Een knaller is pas legaal als er een instructie is EN deze Nederlandstalig is
        // > betekent dat de knaller alleen legaal is voor mensen van 16 jaar en ouder
        return this.nederlandstalig && this.minimumLeeftijd >= 16;
    }

    public toString(): string {
        // dit is voor de afdruk van de knaller
        // de /n/ is voor een nieuwe regel
        // de \t is voor een tab
        // de instructie wordt afgedrukt met de toString() methode van de Instructie class
        // ik had hier eerst $ this.toString() gebruikt, maar dat gaf een foutmelding
        return `${super.toString()}\n\tInstructie: ${this.omschrijving}`;
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
    const knaller1 = new Knaller("Celebration Crackers", 10, false, 75, "Keep minimum 10 ft distance");
    pakket.push(knaller1);
    console.log(knaller1.toString());

    // knaller met Nederlandstalige instructie en 120 decibel
    const knaller2 = new Knaller("Peking Rol", 45, true, 120, "Houd minimaal 5 meter afstand");
    pakket.push(knaller2);
    console.log(knaller2.toString());

    // knaller met Nederlandstalige instructie en 125 decibel
    const knaller3 = new Knaller("Shanghai Rol", 85, true, 125, "Houd minimaal 5 meter afstand");
    pakket.push(knaller3);
    console.log(knaller3.toString());

    // knaller zonder instructie en 100 decibel
    const knaller4 = new Knaller("Hongkong Rol", 82.5, false, 1000, ""); // prijs: 82.5, nederlandstalig: false, minimumleeftijd: 1000, omschrijving: ""
    pakket.push(knaller4);
    console.log(knaller4.toString());
}

export class Vuurpijl extends Vuurwerk {
    constructor(
        naam: string, 
        prijs: number,
        private _kracht: number,
        private _kleurenverhouding: number[], // een array van kleuren 
        instructie: Instructie
         ) {
        super(naam, prijs, instructie); // Roept de constructor van vuurwerk aan
    }

    public isLegaal(): boolean {
        // pak de kleuren uit de erray van de kleurenverhouding
        const rood = this._kleurenverhouding[0];
        const groen = this._kleurenverhouding[1];
        const blauw = this._kleurenverhouding[2];

        // constroleer of instructie nederlandstalig is 
        // kracht lager dan 120 
        // kleuren precies 50, 25, 25 
        return this._kracht < 120 &&
            this._kleurenverhouding.length === 3 &&
            rood === 50 && groen === 25 && blauw === 25;


            
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
function printHardeKnallers(pakket: Vuurwerk[], drempel:number): void {
    console.log(`\n--- STAP 6 ---`);

    for(let i = 0; i < pakket.length; i++) {
        const item = pakket[i];
        // controleer of het item een Knaller is en of de kracht hoger is dan de drempel
        if (item instanceof Knaller && item.kracht > drempel) {
            console.log(`Harde knaller gevonden: ${item.toString()}`);
        } else {
            console.log(`Geen harde knaller gevonden: ${item.toString()}`);
        }
    }
}
main();



// function main(): void {
//     // Stap 0. Begin met het afdrukken van je naam, klas en studentnummer
//     console.log("Happy new year from: <naam: Abrar Al Tayyb>, <studentnummer: 500950854 >, <klas: F101 >");
     
    
//     //  TODO stap 1: haal commentaar weg
//     const pakket: Vuurwerk[] = [];
//     (pakket);
    
//     // //einde TODO stap 1 */

//     //  TODO stap 2: haal commentaar weg
//      (pakket);
//     // einde TODO stap 2 */

//     // TODO stap 3: haal commentaar weg
//     (pakket);
//     // einde TODO stap 3 */

//     // /* TODO stap 4: haal commentaar weg
//     (pakket);
//     // einde TODO stap 4 */

//     // /* TODO stap 5: haal commentaar weg
//     (pakket);
//     // einde TODO stap 5 */

//     // /* TODO stap 6: haal commentaar weg
//       (pakket);
//     // einde TODO stap6 */

// }

     

// // /* TODO stap 1: haal commentaar weg
// // Class voor het product
// class Product {
//     naam: string;
//     prijs: number;

//     constructor(naam: string, prijs: number) {
//         this.naam = naam;
//         this.prijs = prijs;
//     }
// }

// // Class voor Vuurwerk
// class Vuurwerk extends Product { 
//     nederlandstalig: boolean; 

//     constructor(naam: string, prijs: number, nederlandstalig: boolean) {
//         super(naam, prijs); // Roept de constructor van Product aan
//         // this.instructie = instructie;
//         this.nederlandstalig = nederlandstalig;
//     }

    
//     // is het legaal
//     isLegaal(): boolean {
//         // Vuurwerk is pas  legaal als er een instructie is EN deze Nederlandstalig is
//         return this.nederlandstalig === true;
//     }
// function (pakket: Vuurwerk[]): void {
//     console.log("\n--- STAP 1 ---");

//     let vuurwerk: Vuurwerk
//     let Instructie: any;


//     // vuurwerk met Nederlandstalige instructie
//     // hij geeft error bij new instructies en ik weet niet hoe ik dat zou kunnen oplossen
//     vuurwerk = new Vuurwerk("Veiligheidsbril", 2.5, new Instructie(true, 6, "Draag bij aansteken"));
//     pakket.push(vuurwerk);
//     console.log(vuurwerk.toString());

//     // vuurwerk met Engelstalige instructie
//     vuurwerk = new Vuurwerk("Safety glass", 2.5, new Instructie(false, 6, "Wear before ignition"));
//     pakket.push(vuurwerk);
//     console.log(vuurwerk.toString());

//     // vuurwerk zonder instructie
//     vuurwerk = new Vuurwerk("Aansteeklont zonder instructie", 0.25, false);
//     pakket.push(vuurwerk);
//     console.log(vuurwerk.toString());
// }}
// // einde TODO stap 1 */

// class Knaller extends Product {
//     nederlandstalig: boolean; 
//     minimumLeeftijd: number;
//     omschrijving: string;
//     static nederlandstalig: boolean;
//     static minimumLeeftijd: number;
//     static omschrijving: string;


//     constructor(naam: string, prijs: number, nederlandstalig: boolean, minimumleeftijd: number, omschrijving: string) {
//         super(naam, prijs); // Roept de constructor van Product aan
//         this.nederlandstalig = nederlandstalig;
//         this.minimumLeeftijd = minimumleeftijd;
//         this.omschrijving = omschrijving;


    
    //      // is het legaal
    // isLegaal(): boolean {
    //     return this.nederlandstalig === true;
    //     // Vuurwerk is pas  legaal als er een instructie is EN deze Nederlandstalig is
    //     // return Knaller.nederlandstalig === true && Knaller.minimumLeeftijd === true && Knaller.omschrijving === true;
    // }}

// // /* TODO stap 2: haal commentaar weg
// function (pakket: Vuurwerk[]): void {
//     console.log("\n--- STAP 2 ---");

//     let Knaller: any;

    // knaller met Engelstalige instructie en 75 decibel
//     Knaller = new Knaller("Celebration Crackers", 10, 777, 75, new Instructie(false, 21, "Keep minimum 10 ft distance"));
//     pakket.push(Knaller);
//     console.log(Knaller.toString());

//     // knaller met Nederlandstalige instructie en 120 decibel
//     Knaller = new Knaller("Peking Rol", 45, 500, 120, new Instructie(true, 21, "Houd minimaal 5 meter afstand"));
//     pakket.push(Knaller);
//     console.log(Knaller.toString());

//     // knaller met Nederlandstalige instructie en 125 decibel
//     Knaller = new Knaller("Shanghai Rol", 85, 1000, 125, new Instructie(true, 21, "Houd minimaal 5 meter afstand"));
//     pakket.push(Knaller);
//     console.log(Knaller.toString());

//     // knaller zonder instructie en 100 decibel
//     Knaller = new Knaller("Hongkong Rol", 82.5, 1000, 100);
//     pakket.push(Knaller);
//     console.log(Knaller.toString());
// }}

// function isLegaal() {
//     throw new Error("Function not implemented.");
// }
// // einde TODO stap 2 */

// // // /* TODO stap 3: haal commentaar weg
// // function (pakket: Vuurwerk[]): void {
// //     console.log("\n--- STAP 3 ---");

// //     let vuurpijl: Vuurpijl;

// //     // vuurpijl met Nederlandstalige instructie, correcte kleurverhouding, leeftijd 10
// //     vuurpijl = new vuurpijl("Cruise Rocket", 2.50, 40, [50, 25, 25], new Instructie(true, 10, "Niet in de hand houden"));
// //     pakket.push(vuurpijl);
// //     console.log(vuurpijl.toString());

// //     // vuurpijl met Nederlandstalige instructie, incorrecte kleurverhouding, leeftijd 16
// //     vuurpijl = new vuurpijl("Killing Arrow", 4.25, 40, [25, 30, 44], new Instructie(true, 16, "Niet in de hand houden"));
// //     pakket.push(vuurpijl);
// //     console.log(vuurpijl.toString());

// //     // vuurpijl met Engelstalige instructie, incorrecte kleurverhouding, leeftijd 20
// //     vuurpijl = new vuurpijl("Magic Sky", 2.75, 40, [50, 41, 10], new Instructie(false, 20, "Keep minimum 10 ft distance"));
// //     pakket.push(vuurpijl);
// //     console.log(vuurpijl.toString());

// //     // vuurpijl zonder instructie, correcte kleurverhouding
// //     vuurpijl = new vuurpijl("Golden Sky", 3.25, 40, [50, 50, 0]);
// //     pakket.push(vuurpijl);
// //     console.log(vuurpijl.toString());
// // }
// // // einde TODO stap 3 */

// // // /* TODO stap 4: haal commentaar weg
// // function (pakket: Vuurwerk[]): void {
// //     console.log("\n--- STAP 4 ---");
// //     Vuurwerk(pakket);
// // }
// // // einde TODO stap 4 */

// // /* TODO stap 5: haal commentaar weg
// function (pakket: Vuurwerk[]): void {
//     console.log("\n--- STAP 5 ---");
//     Instructie(pakket, -1);
//     Instructie(pakket, 3);
//     Instructie(pakket, 10);
//     Instructie(pakket, 11);
// }
// // einde TODO stap 5 */

// // // /* TODO stap 6: haal commentaar weg
// // function (pakket: Vuurwerk[]): void {
// //     console.log("\n--- STAP 6 ---");
// //     printHardeKnallers(pakket, 100);
// // }
// // // einde TODO stap 6 */

// // // Start the applicatie
// // main();
// // function isLegaal() {
// //     throw new Error("Function not implemented.");
// // }

// // public get prijs(): number {
// //  return this._vuurwerk;
// // }

// // public set prijs(prijs: number) {
// //     this._prijs = Prijs;
// // }

