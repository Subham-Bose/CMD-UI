export class Contact {
    Id: number;
    doctor_phone_number: number;
    doctor_email_id: string;

    constructor(Id: number, doctor_phone_number: number, doctor_email_id: string,) {
        this.Id = Id;
        this.doctor_phone_number = doctor_phone_number;
        this.doctor_email_id = doctor_email_id;

    }

}
