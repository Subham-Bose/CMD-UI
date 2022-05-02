import { Contact } from "./DoctorContact";

export class Doctor {
    id: number;
    doctor_profile_image: string;
    doctor_name: string;
    ContactDetails: Contact;
    doctor_speciality: string;
    doctor_practice_location: string;
    doctor_npi_no: number;

    constructor(id: number, doctor_profile_image: string, Name: string, doctor_speciality: string, doctor_practice_location: string, doctor_npi_no: number, contactDetails: Contact) {
        this.id = id;
        this.doctor_profile_image = doctor_profile_image;
        this.doctor_name = Name;
        this.ContactDetails = contactDetails;
        this.doctor_speciality = doctor_speciality;
        this.doctor_npi_no = doctor_npi_no;
        this.doctor_practice_location = doctor_practice_location;

    }


}
