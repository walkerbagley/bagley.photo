import { Component, inject } from '@angular/core';
import { Timestamp, Firestore, collection, query, where, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { GalleriesService, Gallery } from '../services/galleries-service';

@Component({
    selector: 'app-galleries-page',
    imports: [CommonModule],
    templateUrl: './galleries-page.component.html',
    styleUrl: './galleries-page.component.scss',
})
export class GalleriesPageComponent {
    private readonly galleriesService = inject(GalleriesService);
    galleries: Gallery[] = [];

    constructor() {
        this.galleries = this.galleriesService.getGalleries();
    }
}
