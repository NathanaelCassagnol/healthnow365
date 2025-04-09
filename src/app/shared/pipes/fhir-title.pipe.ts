import { PipeTransform, Pipe } from '@angular/core';
import { getTitle } from 'app/types/fhir-info-functions';
import { FHIRResource } from 'fhir/R4/types/_resource.types';

@Pipe({ name: 'fhirTitle', standalone: true })
export class FhirTitlePipe implements PipeTransform {
  transform(resource: FHIRResource): string {
    return getTitle(resource);
  }
}
