export class Bike {

    constructor(_id = '', name = '', kms = 0, description = '', inStation=false) {
        this._id = _id;
        this.name = name;
        this.kms = kms;
        this.description = description;
        this.inStation = inStation;
    }

    _id: string;
    name: string;
    kms: number;
    description: string;
    inStation: Boolean;

}
