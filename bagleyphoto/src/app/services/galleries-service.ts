import {
    collection,
    Firestore,
    Timestamp,
    collectionData,
    query,
    where,
    CollectionReference,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

export interface Gallery {
    Name: string;
    Description: string;
    LastModified: Timestamp;
    Images: [];
    Portfolio: boolean;
}

@Injectable({ providedIn: 'root' })
export class GalleriesService {
    gRef: CollectionReference;

    constructor(private db: Firestore) {
        this.gRef = collection(this.db, 'Gallery');
    }

    public galleryList: Gallery[] = [];

    private galleries(): Gallery[] {
        this.galleryList = [];
        collectionData(query(this.gRef, where('Portfolio', '==', false))).subscribe((galleries) => {
            for (let gallery of galleries) {
                this.galleryList.push({
                    Name: gallery['Name'],
                    Description: gallery['Description'],
                    LastModified: gallery['LastModified'],
                    Images: gallery['Images'],
                    Portfolio: gallery['Portfolio'],
                } as Gallery);
            }
        });
        return this.galleryList;
    }

    public getGalleries(): Gallery[] {
        return this.galleries();
    }
}
