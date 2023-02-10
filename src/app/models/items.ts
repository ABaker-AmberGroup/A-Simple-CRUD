
export class Items {
    _id: string;
    first_nm: string;
    last_nm: string;
    email: string;
    phone_num: string;
    address: string;

    constructor(id: string, first_nm: string, last_nm: string, email: string, phone_num: string, address: string) {
        this._id = id;
        this.first_nm = first_nm;
        this.last_nm = last_nm;
        this.email = email;
        this.phone_num = phone_num;
        this.address = address;
    }
}