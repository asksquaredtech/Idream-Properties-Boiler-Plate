// src/app/services/crud.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the application
})
export class CrudService {
  constructor(private firestore: Firestore) {}

  // Method to add a contact
  async addContact(contact: any): Promise<void> {
    const contactsRef = collection(this.firestore, 'contacts');
    await addDoc(contactsRef, contact);
  }
}