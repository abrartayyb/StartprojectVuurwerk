export abstract class Product {
    /**
     * Symbool voor Euro-teken
     */
    public static readonly EURO: string = "\u20AC";
    

    _naam: string;
    _prijs: number;
    kracht: number = 0;
    kleurenverhouding: number = 0;


    constructor(naam: string, prijs: number) {
        this._naam = naam;
        this._prijs = prijs;
        this.kracht = 0;
        this.kleurenverhouding = 0;
    }

    public abstract isLegaal(): boolean;

    public toString(): string {
        return `Naam: ${this._naam}\n\tPrijs: ${Product.EURO}${this._prijs.toFixed(2)}`;
    }
}
