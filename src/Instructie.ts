/**
 * Deze class is al voor je gemaakt
 */
export class Instructie{
    _nederlandstalig: boolean;
    _minimumLeeftijd: number;
    _omschrijving: string;

    constructor(nederlandstalig: boolean, minimumLeeftijd: number, omschrijving: string) {
        this._nederlandstalig = nederlandstalig;
        this._minimumLeeftijd = minimumLeeftijd;
        this._omschrijving = omschrijving;
    }

    get nederlandstalig(): boolean {
        return this._nederlandstalig;
    }

    get minimumLeeftijd(): number {
        return this._minimumLeeftijd;
    }

    get omschrijving(): string {
        return this._omschrijving;
    }

    public toString(): string {
        return `Nederlandstalig=${this._nederlandstalig}, leeftijd=${this._minimumLeeftijd}, omschrijving=${this._omschrijving}`;
    }
}
