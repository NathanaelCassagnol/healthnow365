import { Injectable, OnInit, signal } from "@angular/core";
import { AllR4Mocks } from "fhir/R4/mocks/all-r4-mocks";
import { FHIRResource } from "fhir/R4/types/_resource.types";

@Injectable({
    providedIn: 'root'
})
export class ResourceCollectorService implements OnInit {
    resources = signal<FHIRResource[]>([]);

    ngOnInit() {
        this.addResourceToArray(AllR4Mocks);
    }

    getResourceByIdentifier(id: string): FHIRResource | undefined {
        return this.resources().find(r => r.id === id);
    }

    private addResourceToArray(resource: FHIRResource | FHIRResource[]) {
        if (Array.isArray(resource)) {
            this.resources.set([...this.resources(), ...resource]);
        }
        else {
            this.resources.set([...this.resources(), resource]);
        }
    }
}