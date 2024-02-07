import { CapabilityStatement } from "../../types/capability-statement";

// https://hl7.org/fhir/R4/capabilitystatement-base.json.html
// Base Capability Statement

export const mockCapabilityStatement3: CapabilityStatement = {
    "resourceType" : "CapabilityStatement",
    "id" : "base",
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "url" : "http://hl7.org/fhir/CapabilityStatement/base",
    "version" : "4.0.1",
    "name" : "Base FHIR Capability Statement (Full)",
    "status" : "draft",
    "experimental" : true,
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "FHIR Project Team",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "This is the base Capability Statement for FHIR. It represents a server that provides the full set of functionality defined by FHIR. It is provided to use as a template for system designers to build their own Capability Statements from",
    "kind" : "capability",
    "software" : {
      "name" : "Insert your software name here..."
    },
    "fhirVersion" : "4.0.1",
    "format" : ["xml",
    "json"],
    "rest" : [{
      "mode" : "server",
      "documentation" : "All the functionality defined in FHIR",
      "security" : {
        "cors" : true,
        "service" : [{
          "coding" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/restful-security-service",
            "code" : "SMART-on-FHIR",
            "display" : "SMART-on-FHIR"
          }],
          "text" : "See http://docs.smarthealthit.org/"
        }],
        "description" : "This is the Capability Statement to declare that the server supports SMART-on-FHIR. See the SMART-on-FHIR docs for the extension that would go with such a server"
      },
      "resource" : [{
        "type" : "Account",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Account",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Account.owner",
        "Account.subject",
        "Account.patient"],
        "searchRevInclude" : ["ChargeItem.account",
        "Encounter.account",
        "Invoice.account"],
        "searchParam" : [{
          "name" : "owner",
          "definition" : "http://hl7.org/fhir/SearchParameter/Account-owner",
          "type" : "reference",
          "documentation" : "Entity managing the Account"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Account-identifier",
          "type" : "token",
          "documentation" : "Account number"
        },
        {
          "name" : "period",
          "definition" : "http://hl7.org/fhir/SearchParameter/Account-period",
          "type" : "date",
          "documentation" : "Transaction window"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Account-subject",
          "type" : "reference",
          "documentation" : "The entity that caused the expenses"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Account-patient",
          "type" : "reference",
          "documentation" : "The entity that caused the expenses"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Account-name",
          "type" : "string",
          "documentation" : "Human-readable label"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Account-type",
          "type" : "token",
          "documentation" : "E.g. patient, expense, depreciation"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Account-status",
          "type" : "token",
          "documentation" : "active | inactive | entered-in-error | on-hold | unknown"
        }]
      },
      {
        "type" : "ActivityDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ActivityDefinition.successor",
        "ActivityDefinition.derived-from",
        "ActivityDefinition.predecessor",
        "ActivityDefinition.composed-of",
        "ActivityDefinition.depends-on"],
        "searchRevInclude" : ["CarePlan.instantiates-canonical",
        "Communication.instantiates-canonical",
        "DeviceRequest.instantiates-canonical",
        "FamilyMemberHistory.instantiates-canonical",
        "MessageDefinition.parent",
        "NutritionOrder.instantiates-canonical",
        "PlanDefinition.definition",
        "Procedure.instantiates-canonical",
        "ServiceRequest.instantiates-canonical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-date",
          "type" : "date",
          "documentation" : "The activity definition publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-identifier",
          "type" : "token",
          "documentation" : "External identifier for the activity definition"
        },
        {
          "name" : "successor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-successor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the activity definition"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the activity definition"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-description",
          "type" : "string",
          "documentation" : "The description of the activity definition"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-derived-from",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the activity definition"
        },
        {
          "name" : "predecessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-predecessor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the activity definition"
        },
        {
          "name" : "composed-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-composed-of",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-version",
          "type" : "token",
          "documentation" : "The business version of the activity definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the activity definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the activity definition"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-effective",
          "type" : "date",
          "documentation" : "The time during which the activity definition is intended to be in use"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-depends-on",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the activity definition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-context",
          "type" : "token",
          "documentation" : "A use context assigned to the activity definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the activity definition"
        },
        {
          "name" : "topic",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-topic",
          "type" : "token",
          "documentation" : "Topics associated with the module"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the activity definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ActivityDefinition-status",
          "type" : "token",
          "documentation" : "The current status of the activity definition"
        }]
      },
      {
        "type" : "AdverseEvent",
        "profile" : "http://hl7.org/fhir/StructureDefinition/AdverseEvent",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["AdverseEvent.recorder",
        "AdverseEvent.study",
        "AdverseEvent.subject",
        "AdverseEvent.resultingcondition",
        "AdverseEvent.substance",
        "AdverseEvent.location"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-date",
          "type" : "date",
          "documentation" : "When the event occurred"
        },
        {
          "name" : "severity",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-severity",
          "type" : "token",
          "documentation" : "mild | moderate | severe"
        },
        {
          "name" : "recorder",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-recorder",
          "type" : "reference",
          "documentation" : "Who recorded the adverse event"
        },
        {
          "name" : "study",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-study",
          "type" : "reference",
          "documentation" : "AdverseEvent.study"
        },
        {
          "name" : "actuality",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-actuality",
          "type" : "token",
          "documentation" : "actual | potential"
        },
        {
          "name" : "seriousness",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-seriousness",
          "type" : "token",
          "documentation" : "Seriousness of the event"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-subject",
          "type" : "reference",
          "documentation" : "Subject impacted by event"
        },
        {
          "name" : "resultingcondition",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-resultingcondition",
          "type" : "reference",
          "documentation" : "Effect on the subject due to this event"
        },
        {
          "name" : "substance",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-substance",
          "type" : "reference",
          "documentation" : "Refers to the specific entity that caused the adverse event"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-location",
          "type" : "reference",
          "documentation" : "Location where adverse event occurred"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-category",
          "type" : "token",
          "documentation" : "product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment"
        },
        {
          "name" : "event",
          "definition" : "http://hl7.org/fhir/SearchParameter/AdverseEvent-event",
          "type" : "token",
          "documentation" : "Type of the event itself in relation to the subject"
        }]
      },
      {
        "type" : "AllergyIntolerance",
        "profile" : "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["AllergyIntolerance.recorder",
        "AllergyIntolerance.asserter",
        "AllergyIntolerance.patient"],
        "searchRevInclude" : ["ClinicalImpression.problem"],
        "searchParam" : [{
          "name" : "severity",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-severity",
          "type" : "token",
          "documentation" : "mild | moderate | severe (of event as a whole)"
        },
        {
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "Date first version of the resource instance was recorded"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "External ids for this item"
        },
        {
          "name" : "manifestation",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-manifestation",
          "type" : "token",
          "documentation" : "Clinical symptoms/signs associated with the Event"
        },
        {
          "name" : "recorder",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-recorder",
          "type" : "reference",
          "documentation" : "Who recorded the sensitivity"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "Code that identifies the allergy or intolerance"
        },
        {
          "name" : "verification-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-verification-status",
          "type" : "token",
          "documentation" : "unconfirmed | confirmed | refuted | entered-in-error"
        },
        {
          "name" : "criticality",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-criticality",
          "type" : "token",
          "documentation" : "low | high | unable-to-assess"
        },
        {
          "name" : "clinical-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-clinical-status",
          "type" : "token",
          "documentation" : "active | inactive | resolved"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-type",
          "type" : "token",
          "documentation" : "allergy | intolerance - Underlying mechanism (if known)"
        },
        {
          "name" : "onset",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-onset",
          "type" : "date",
          "documentation" : "Date(/time) when manifestations showed"
        },
        {
          "name" : "route",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-route",
          "type" : "token",
          "documentation" : "How the subject was exposed to the substance"
        },
        {
          "name" : "asserter",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-asserter",
          "type" : "reference",
          "documentation" : "Source of the information about the allergy"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who the sensitivity is for"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-category",
          "type" : "token",
          "documentation" : "food | medication | environment | biologic"
        },
        {
          "name" : "last-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-last-date",
          "type" : "date",
          "documentation" : "Date(/time) of last known occurrence of a reaction"
        }]
      },
      {
        "type" : "Appointment",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Appointment",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Appointment.practitioner",
        "Appointment.slot",
        "Appointment.actor",
        "Appointment.based-on",
        "Appointment.patient",
        "Appointment.reason-reference",
        "Appointment.supporting-info",
        "Appointment.location"],
        "searchRevInclude" : ["AppointmentResponse.appointment",
        "CarePlan.activity-reference",
        "Encounter.appointment",
        "ImagingStudy.basedon"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-date",
          "type" : "date",
          "documentation" : "Appointment date/time."
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-identifier",
          "type" : "token",
          "documentation" : "An Identifier of the Appointment"
        },
        {
          "name" : "specialty",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-specialty",
          "type" : "token",
          "documentation" : "The specialty of a practitioner that would be required to perform the service requested in this appointment"
        },
        {
          "name" : "service-category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-service-category",
          "type" : "token",
          "documentation" : "A broad categorization of the service that is to be performed during this appointment"
        },
        {
          "name" : "practitioner",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-practitioner",
          "type" : "reference",
          "documentation" : "One of the individuals of the appointment is this practitioner"
        },
        {
          "name" : "part-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-part-status",
          "type" : "token",
          "documentation" : "The Participation status of the subject, or other participant on the appointment. Can be used to locate participants that have not responded to meeting requests."
        },
        {
          "name" : "appointment-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-appointment-type",
          "type" : "token",
          "documentation" : "The style of appointment or patient that has been booked in the slot (not service type)"
        },
        {
          "name" : "service-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-service-type",
          "type" : "token",
          "documentation" : "The specific service that is to be performed during this appointment"
        },
        {
          "name" : "slot",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-slot",
          "type" : "reference",
          "documentation" : "The slots that this appointment is filling"
        },
        {
          "name" : "reason-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-reason-code",
          "type" : "token",
          "documentation" : "Coded reason this appointment is scheduled"
        },
        {
          "name" : "actor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-actor",
          "type" : "reference",
          "documentation" : "Any one of the individuals participating in the appointment"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-based-on",
          "type" : "reference",
          "documentation" : "The service request this appointment is allocated to assess"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-patient",
          "type" : "reference",
          "documentation" : "One of the individuals of the appointment is this patient"
        },
        {
          "name" : "reason-reference",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-reason-reference",
          "type" : "reference",
          "documentation" : "Reason the appointment is to take place (resource)"
        },
        {
          "name" : "supporting-info",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-supporting-info",
          "type" : "reference",
          "documentation" : "Additional information to support the appointment"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-location",
          "type" : "reference",
          "documentation" : "This location is listed in the participants of the appointment"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Appointment-status",
          "type" : "token",
          "documentation" : "The overall status of the appointment"
        }]
      },
      {
        "type" : "AppointmentResponse",
        "profile" : "http://hl7.org/fhir/StructureDefinition/AppointmentResponse",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["AppointmentResponse.actor",
        "AppointmentResponse.practitioner",
        "AppointmentResponse.patient",
        "AppointmentResponse.appointment",
        "AppointmentResponse.location"],
        "searchRevInclude" : ["ImagingStudy.basedon"],
        "searchParam" : [{
          "name" : "actor",
          "definition" : "http://hl7.org/fhir/SearchParameter/AppointmentResponse-actor",
          "type" : "reference",
          "documentation" : "The Person, Location/HealthcareService or Device that this appointment response replies for"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/AppointmentResponse-identifier",
          "type" : "token",
          "documentation" : "An Identifier in this appointment response"
        },
        {
          "name" : "practitioner",
          "definition" : "http://hl7.org/fhir/SearchParameter/AppointmentResponse-practitioner",
          "type" : "reference",
          "documentation" : "This Response is for this Practitioner"
        },
        {
          "name" : "part-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/AppointmentResponse-part-status",
          "type" : "token",
          "documentation" : "The participants acceptance status for this appointment"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/AppointmentResponse-patient",
          "type" : "reference",
          "documentation" : "This Response is for this Patient"
        },
        {
          "name" : "appointment",
          "definition" : "http://hl7.org/fhir/SearchParameter/AppointmentResponse-appointment",
          "type" : "reference",
          "documentation" : "The appointment that the response is attached to"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/AppointmentResponse-location",
          "type" : "reference",
          "documentation" : "This Response is for this Location"
        }]
      },
      {
        "type" : "AuditEvent",
        "profile" : "http://hl7.org/fhir/StructureDefinition/AuditEvent",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["AuditEvent.agent",
        "AuditEvent.source",
        "AuditEvent.patient",
        "AuditEvent.entity"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-date",
          "type" : "date",
          "documentation" : "Time when the event was recorded"
        },
        {
          "name" : "entity-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-entity-type",
          "type" : "token",
          "documentation" : "Type of entity involved"
        },
        {
          "name" : "agent",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-agent",
          "type" : "reference",
          "documentation" : "Identifier of who"
        },
        {
          "name" : "address",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-address",
          "type" : "string",
          "documentation" : "Identifier for the network access point of the user device"
        },
        {
          "name" : "entity-role",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-entity-role",
          "type" : "token",
          "documentation" : "What role the entity played"
        },
        {
          "name" : "source",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-source",
          "type" : "reference",
          "documentation" : "The identity of source detecting the event"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-type",
          "type" : "token",
          "documentation" : "Type/identifier of event"
        },
        {
          "name" : "altid",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-altid",
          "type" : "token",
          "documentation" : "Alternative User identity"
        },
        {
          "name" : "site",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-site",
          "type" : "token",
          "documentation" : "Logical source location within the enterprise"
        },
        {
          "name" : "agent-name",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-agent-name",
          "type" : "string",
          "documentation" : "Human friendly name for the agent"
        },
        {
          "name" : "entity-name",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-entity-name",
          "type" : "string",
          "documentation" : "Descriptor for entity"
        },
        {
          "name" : "subtype",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-subtype",
          "type" : "token",
          "documentation" : "More specific type/id for the event"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-patient",
          "type" : "reference",
          "documentation" : "Identifier of who"
        },
        {
          "name" : "action",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-action",
          "type" : "token",
          "documentation" : "Type of action performed during the event"
        },
        {
          "name" : "agent-role",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-agent-role",
          "type" : "token",
          "documentation" : "Agent role in the event"
        },
        {
          "name" : "entity",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-entity",
          "type" : "reference",
          "documentation" : "Specific instance of resource"
        },
        {
          "name" : "outcome",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-outcome",
          "type" : "token",
          "documentation" : "Whether the event succeeded or failed"
        },
        {
          "name" : "policy",
          "definition" : "http://hl7.org/fhir/SearchParameter/AuditEvent-policy",
          "type" : "uri",
          "documentation" : "Policy that authorized event"
        }]
      },
      {
        "type" : "Basic",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Basic",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Basic.subject",
        "Basic.patient",
        "Basic.author"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Basic-identifier",
          "type" : "token",
          "documentation" : "Business identifier"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Basic-code",
          "type" : "token",
          "documentation" : "Kind of Resource"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Basic-subject",
          "type" : "reference",
          "documentation" : "Identifies the focus of this resource"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/Basic-created",
          "type" : "date",
          "documentation" : "When created"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Basic-patient",
          "type" : "reference",
          "documentation" : "Identifies the focus of this resource"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/Basic-author",
          "type" : "reference",
          "documentation" : "Who created"
        }]
      },
      {
        "type" : "Binary",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Binary",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "BiologicallyDerivedProduct",
        "profile" : "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "BodyStructure",
        "profile" : "http://hl7.org/fhir/StructureDefinition/BodyStructure",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["BodyStructure.patient"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/BodyStructure-identifier",
          "type" : "token",
          "documentation" : "Bodystructure identifier"
        },
        {
          "name" : "morphology",
          "definition" : "http://hl7.org/fhir/SearchParameter/BodyStructure-morphology",
          "type" : "token",
          "documentation" : "Kind of Structure"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/BodyStructure-patient",
          "type" : "reference",
          "documentation" : "Who this is about"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/BodyStructure-location",
          "type" : "token",
          "documentation" : "Body site"
        }]
      },
      {
        "type" : "Bundle",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Bundle",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Bundle.composition",
        "Bundle.message"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Bundle-identifier",
          "type" : "token",
          "documentation" : "Persistent identifier for the bundle"
        },
        {
          "name" : "composition",
          "definition" : "http://hl7.org/fhir/SearchParameter/Bundle-composition",
          "type" : "reference",
          "documentation" : "The first resource in the bundle, if the bundle type is \"document\" - this is a composition, and this parameter provides access to search its contents"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Bundle-type",
          "type" : "token",
          "documentation" : "document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection"
        },
        {
          "name" : "message",
          "definition" : "http://hl7.org/fhir/SearchParameter/Bundle-message",
          "type" : "reference",
          "documentation" : "The first resource in the bundle, if the bundle type is \"message\" - this is a message header, and this parameter provides access to search its contents"
        },
        {
          "name" : "timestamp",
          "definition" : "http://hl7.org/fhir/SearchParameter/Bundle-timestamp",
          "type" : "date",
          "documentation" : "When the bundle was assembled"
        }]
      },
      {
        "type" : "CapabilityStatement",
        "profile" : "http://hl7.org/fhir/StructureDefinition/CapabilityStatement",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["CapabilityStatement.resource-profile",
        "CapabilityStatement.supported-profile",
        "CapabilityStatement.guide"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The capability statement publication date"
        },
        {
          "name" : "resource-profile",
          "definition" : "http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource-profile",
          "type" : "reference",
          "documentation" : "A profile id invoked in a capability statement"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the capability statement"
        },
        {
          "name" : "software",
          "definition" : "http://hl7.org/fhir/SearchParameter/CapabilityStatement-software",
          "type" : "string",
          "documentation" : "Part of the name of a software application"
        },
        {
          "name" : "resource",
          "definition" : "http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource",
          "type" : "token",
          "documentation" : "Name of a resource mentioned in a capability statement"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the capability statement"
        },
        {
          "name" : "format",
          "definition" : "http://hl7.org/fhir/SearchParameter/CapabilityStatement-format",
          "type" : "token",
          "documentation" : "formats supported (xml | json | ttl | mime type)"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the capability statement"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the capability statement"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the capability statement"
        },
        {
          "name" : "fhirversion",
          "definition" : "http://hl7.org/fhir/SearchParameter/CapabilityStatement-fhirversion",
          "type" : "token",
          "documentation" : "The version of FHIR"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the capability statement"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the capability statement"
        },
        {
          "name" : "supported-profile",
          "definition" : "http://hl7.org/fhir/SearchParameter/CapabilityStatement-supported-profile",
          "type" : "reference",
          "documentation" : "Profiles for use cases supported"
        },
        {
          "name" : "mode",
          "definition" : "http://hl7.org/fhir/SearchParameter/CapabilityStatement-mode",
          "type" : "token",
          "documentation" : "Mode - restful (server/client) or messaging (sender/receiver)"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the capability statement"
        },
        {
          "name" : "security-service",
          "definition" : "http://hl7.org/fhir/SearchParameter/CapabilityStatement-security-service",
          "type" : "token",
          "documentation" : "OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the capability statement"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the capability statement"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the capability statement"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the capability statement"
        },
        {
          "name" : "guide",
          "definition" : "http://hl7.org/fhir/SearchParameter/CapabilityStatement-guide",
          "type" : "reference",
          "documentation" : "Implementation guides supported"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the capability statement"
        }]
      },
      {
        "type" : "CarePlan",
        "profile" : "http://hl7.org/fhir/StructureDefinition/CarePlan",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["CarePlan.care-team",
        "CarePlan.performer",
        "CarePlan.goal",
        "CarePlan.subject",
        "CarePlan.replaces",
        "CarePlan.instantiates-canonical",
        "CarePlan.part-of",
        "CarePlan.encounter",
        "CarePlan.activity-reference",
        "CarePlan.condition",
        "CarePlan.based-on",
        "CarePlan.patient"],
        "searchRevInclude" : ["CarePlan.replaces",
        "CarePlan.part-of",
        "CarePlan.based-on",
        "DiagnosticReport.based-on",
        "ImagingStudy.basedon",
        "Media.based-on",
        "Observation.based-on",
        "Procedure.based-on",
        "QuestionnaireResponse.based-on",
        "ServiceRequest.based-on"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "Time period plan covers"
        },
        {
          "name" : "care-team",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-care-team",
          "type" : "reference",
          "documentation" : "Who's involved in plan?"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "External Ids for this plan"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-performer",
          "type" : "reference",
          "documentation" : "Matches if the practitioner is listed as a performer in any of the \"simple\" activities.  (For performers of the detailed activities, chain through the activitydetail search parameter.)"
        },
        {
          "name" : "goal",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-goal",
          "type" : "reference",
          "documentation" : "Desired outcome of plan"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-subject",
          "type" : "reference",
          "documentation" : "Who the care plan is for"
        },
        {
          "name" : "replaces",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-replaces",
          "type" : "reference",
          "documentation" : "CarePlan replaced by this CarePlan"
        },
        {
          "name" : "instantiates-canonical",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-instantiates-canonical",
          "type" : "reference",
          "documentation" : "Instantiates FHIR protocol or definition"
        },
        {
          "name" : "part-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-part-of",
          "type" : "reference",
          "documentation" : "Part of referenced CarePlan"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-encounter",
          "type" : "reference",
          "documentation" : "Encounter created as part of"
        },
        {
          "name" : "intent",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-intent",
          "type" : "token",
          "documentation" : "proposal | plan | order | option"
        },
        {
          "name" : "activity-reference",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-activity-reference",
          "type" : "reference",
          "documentation" : "Activity details defined in specific resource"
        },
        {
          "name" : "condition",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-condition",
          "type" : "reference",
          "documentation" : "Health issues this plan addresses"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-based-on",
          "type" : "reference",
          "documentation" : "Fulfills CarePlan"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who the care plan is for"
        },
        {
          "name" : "activity-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-activity-date",
          "type" : "date",
          "documentation" : "Specified date occurs within period specified by CarePlan.activity.detail.scheduled[x]"
        },
        {
          "name" : "instantiates-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-instantiates-uri",
          "type" : "uri",
          "documentation" : "Instantiates external protocol or definition"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-category",
          "type" : "token",
          "documentation" : "Type of plan"
        },
        {
          "name" : "activity-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-activity-code",
          "type" : "token",
          "documentation" : "Detail type of activity"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/CarePlan-status",
          "type" : "token",
          "documentation" : "draft | active | on-hold | revoked | completed | entered-in-error | unknown"
        }]
      },
      {
        "type" : "CareTeam",
        "profile" : "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["CareTeam.patient",
        "CareTeam.subject",
        "CareTeam.encounter",
        "CareTeam.participant"],
        "searchRevInclude" : ["CarePlan.care-team",
        "CarePlan.performer",
        "CareTeam.participant",
        "ChargeItem.performer-actor",
        "Communication.recipient",
        "CommunicationRequest.recipient",
        "Consent.actor",
        "DeviceRequest.performer",
        "DiagnosticReport.performer",
        "DiagnosticReport.results-interpreter",
        "ImagingStudy.performer",
        "Media.operator",
        "MedicationRequest.intended-performer",
        "Observation.performer",
        "ServiceRequest.performer",
        "Task.owner"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "Time period team covers"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "External Ids for this team"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who care team is for"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/CareTeam-subject",
          "type" : "reference",
          "documentation" : "Who care team is for"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/CareTeam-encounter",
          "type" : "reference",
          "documentation" : "Encounter created as part of"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/CareTeam-category",
          "type" : "token",
          "documentation" : "Type of team"
        },
        {
          "name" : "participant",
          "definition" : "http://hl7.org/fhir/SearchParameter/CareTeam-participant",
          "type" : "reference",
          "documentation" : "Who is involved"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/CareTeam-status",
          "type" : "token",
          "documentation" : "proposed | active | suspended | inactive | entered-in-error"
        }]
      },
      {
        "type" : "CatalogEntry",
        "profile" : "http://hl7.org/fhir/StructureDefinition/CatalogEntry",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "ChargeItem",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ChargeItem",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ChargeItem.performing-organization",
        "ChargeItem.subject",
        "ChargeItem.patient",
        "ChargeItem.service",
        "ChargeItem.context",
        "ChargeItem.enterer",
        "ChargeItem.performer-actor",
        "ChargeItem.account",
        "ChargeItem.requesting-organization"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-identifier",
          "type" : "token",
          "documentation" : "Business Identifier for item"
        },
        {
          "name" : "performing-organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-performing-organization",
          "type" : "reference",
          "documentation" : "Organization providing the charged service"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-code",
          "type" : "token",
          "documentation" : "A code that identifies the charge, like a billing code"
        },
        {
          "name" : "quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-quantity",
          "type" : "quantity",
          "documentation" : "Quantity of which the charge item has been serviced"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-subject",
          "type" : "reference",
          "documentation" : "Individual service was done for/to"
        },
        {
          "name" : "occurrence",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-occurrence",
          "type" : "date",
          "documentation" : "When the charged service was applied"
        },
        {
          "name" : "entered-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-entered-date",
          "type" : "date",
          "documentation" : "Date the charge item was entered"
        },
        {
          "name" : "performer-function",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-performer-function",
          "type" : "token",
          "documentation" : "What type of performance was done"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-patient",
          "type" : "reference",
          "documentation" : "Individual service was done for/to"
        },
        {
          "name" : "factor-override",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-factor-override",
          "type" : "number",
          "documentation" : "Factor overriding the associated rules"
        },
        {
          "name" : "service",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-service",
          "type" : "reference",
          "documentation" : "Which rendered service is being charged?"
        },
        {
          "name" : "price-override",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-price-override",
          "type" : "quantity",
          "documentation" : "Price overriding the associated rules"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-context",
          "type" : "reference",
          "documentation" : "Encounter / Episode associated with event"
        },
        {
          "name" : "enterer",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-enterer",
          "type" : "reference",
          "documentation" : "Individual who was entering"
        },
        {
          "name" : "performer-actor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-performer-actor",
          "type" : "reference",
          "documentation" : "Individual who was performing"
        },
        {
          "name" : "account",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-account",
          "type" : "reference",
          "documentation" : "Account to place this charge"
        },
        {
          "name" : "requesting-organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItem-requesting-organization",
          "type" : "reference",
          "documentation" : "Organization requesting the charged service"
        }]
      },
      {
        "type" : "ChargeItemDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-date",
          "type" : "date",
          "documentation" : "The charge item definition publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-identifier",
          "type" : "token",
          "documentation" : "External identifier for the charge item definition"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the charge item definition"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the charge item definition"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-description",
          "type" : "string",
          "documentation" : "The description of the charge item definition"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the charge item definition"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the charge item definition"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-version",
          "type" : "token",
          "documentation" : "The business version of the charge item definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the charge item definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the charge item definition"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-effective",
          "type" : "date",
          "documentation" : "The time during which the charge item definition is intended to be in use"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context",
          "type" : "token",
          "documentation" : "A use context assigned to the charge item definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the charge item definition"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the charge item definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-status",
          "type" : "token",
          "documentation" : "The current status of the charge item definition"
        }]
      },
      {
        "type" : "Claim",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Claim",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Claim.care-team",
        "Claim.encounter",
        "Claim.payee",
        "Claim.provider",
        "Claim.patient",
        "Claim.insurer",
        "Claim.detail-udi",
        "Claim.enterer",
        "Claim.procedure-udi",
        "Claim.subdetail-udi",
        "Claim.facility",
        "Claim.item-udi"],
        "searchRevInclude" : ["ClaimResponse.request",
        "ExplanationOfBenefit.claim"],
        "searchParam" : [{
          "name" : "care-team",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-care-team",
          "type" : "reference",
          "documentation" : "Member of the CareTeam"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-identifier",
          "type" : "token",
          "documentation" : "The primary identifier of the financial resource"
        },
        {
          "name" : "use",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-use",
          "type" : "token",
          "documentation" : "The kind of financial resource"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-created",
          "type" : "date",
          "documentation" : "The creation date for the Claim"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-encounter",
          "type" : "reference",
          "documentation" : "Encounters associated with a billed line item"
        },
        {
          "name" : "priority",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-priority",
          "type" : "token",
          "documentation" : "Processing priority requested"
        },
        {
          "name" : "payee",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-payee",
          "type" : "reference",
          "documentation" : "The party receiving any payment for the Claim"
        },
        {
          "name" : "provider",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-provider",
          "type" : "reference",
          "documentation" : "Provider responsible for the Claim"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-patient",
          "type" : "reference",
          "documentation" : "Patient receiving the products or services"
        },
        {
          "name" : "insurer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-insurer",
          "type" : "reference",
          "documentation" : "The target payor/insurer for the Claim"
        },
        {
          "name" : "detail-udi",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-detail-udi",
          "type" : "reference",
          "documentation" : "UDI associated with a line item, detail product or service"
        },
        {
          "name" : "enterer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-enterer",
          "type" : "reference",
          "documentation" : "The party responsible for the entry of the Claim"
        },
        {
          "name" : "procedure-udi",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-procedure-udi",
          "type" : "reference",
          "documentation" : "UDI associated with a procedure"
        },
        {
          "name" : "subdetail-udi",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-subdetail-udi",
          "type" : "reference",
          "documentation" : "UDI associated with a line item, detail, subdetail product or service"
        },
        {
          "name" : "facility",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-facility",
          "type" : "reference",
          "documentation" : "Facility where the products or services have been or will be provided"
        },
        {
          "name" : "item-udi",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-item-udi",
          "type" : "reference",
          "documentation" : "UDI associated with a line item product or service"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Claim-status",
          "type" : "token",
          "documentation" : "The status of the Claim instance."
        }]
      },
      {
        "type" : "ClaimResponse",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ClaimResponse",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ClaimResponse.request",
        "ClaimResponse.insurer",
        "ClaimResponse.patient",
        "ClaimResponse.requestor"],
        "searchRevInclude" : ["DeviceRequest.insurance"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-identifier",
          "type" : "token",
          "documentation" : "The identity of the ClaimResponse"
        },
        {
          "name" : "request",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-request",
          "type" : "reference",
          "documentation" : "The claim reference"
        },
        {
          "name" : "disposition",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-disposition",
          "type" : "string",
          "documentation" : "The contents of the disposition message"
        },
        {
          "name" : "insurer",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-insurer",
          "type" : "reference",
          "documentation" : "The organization which generated this resource"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-created",
          "type" : "date",
          "documentation" : "The creation date"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-patient",
          "type" : "reference",
          "documentation" : "The subject of care"
        },
        {
          "name" : "use",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-use",
          "type" : "token",
          "documentation" : "The type of claim"
        },
        {
          "name" : "payment-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-payment-date",
          "type" : "date",
          "documentation" : "The expected payment date"
        },
        {
          "name" : "outcome",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-outcome",
          "type" : "token",
          "documentation" : "The processing outcome"
        },
        {
          "name" : "requestor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-requestor",
          "type" : "reference",
          "documentation" : "The Provider of the claim"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClaimResponse-status",
          "type" : "token",
          "documentation" : "The status of the ClaimResponse"
        }]
      },
      {
        "type" : "ClinicalImpression",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ClinicalImpression",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ClinicalImpression.previous",
        "ClinicalImpression.assessor",
        "ClinicalImpression.subject",
        "ClinicalImpression.encounter",
        "ClinicalImpression.finding-ref",
        "ClinicalImpression.problem",
        "ClinicalImpression.patient",
        "ClinicalImpression.supporting-info",
        "ClinicalImpression.investigation"],
        "searchRevInclude" : ["ClinicalImpression.previous"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "When the assessment was documented"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-identifier",
          "type" : "token",
          "documentation" : "Business identifier"
        },
        {
          "name" : "previous",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-previous",
          "type" : "reference",
          "documentation" : "Reference to last assessment"
        },
        {
          "name" : "finding-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-code",
          "type" : "token",
          "documentation" : "What was found"
        },
        {
          "name" : "assessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-assessor",
          "type" : "reference",
          "documentation" : "The clinician performing the assessment"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-subject",
          "type" : "reference",
          "documentation" : "Patient or group assessed"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-encounter",
          "type" : "reference",
          "documentation" : "Encounter created as part of"
        },
        {
          "name" : "finding-ref",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-ref",
          "type" : "reference",
          "documentation" : "What was found"
        },
        {
          "name" : "problem",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-problem",
          "type" : "reference",
          "documentation" : "Relevant impressions of patient state"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Patient or group assessed"
        },
        {
          "name" : "supporting-info",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-supporting-info",
          "type" : "reference",
          "documentation" : "Information supporting the clinical impression"
        },
        {
          "name" : "investigation",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-investigation",
          "type" : "reference",
          "documentation" : "Record of a specific investigation"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ClinicalImpression-status",
          "type" : "token",
          "documentation" : "in-progress | completed | entered-in-error"
        }]
      },
      {
        "type" : "CodeSystem",
        "profile" : "http://hl7.org/fhir/StructureDefinition/CodeSystem",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["CodeSystem.supplements"],
        "searchRevInclude" : ["CodeSystem.supplements"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The code system publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-identifier",
          "type" : "token",
          "documentation" : "External identifier for the code system"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/CodeSystem-code",
          "type" : "token",
          "documentation" : "A code defined in the code system"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the code system"
        },
        {
          "name" : "content-mode",
          "definition" : "http://hl7.org/fhir/SearchParameter/CodeSystem-content-mode",
          "type" : "token",
          "documentation" : "not-present | example | fragment | complete | supplement"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the code system"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the code system"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the code system"
        },
        {
          "name" : "language",
          "definition" : "http://hl7.org/fhir/SearchParameter/CodeSystem-language",
          "type" : "token",
          "documentation" : "A language in which a designation is provided"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the code system"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the code system"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the code system"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the code system"
        },
        {
          "name" : "supplements",
          "definition" : "http://hl7.org/fhir/SearchParameter/CodeSystem-supplements",
          "type" : "reference",
          "documentation" : "Find code system supplements for the referenced code system"
        },
        {
          "name" : "system",
          "definition" : "http://hl7.org/fhir/SearchParameter/CodeSystem-system",
          "type" : "uri",
          "documentation" : "The system for any codes defined by this code system (same as 'url')"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the code system"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the code system"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the code system"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the code system"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the code system"
        }]
      },
      {
        "type" : "Communication",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Communication",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Communication.subject",
        "Communication.instantiates-canonical",
        "Communication.part-of",
        "Communication.encounter",
        "Communication.based-on",
        "Communication.sender",
        "Communication.patient",
        "Communication.recipient"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-identifier",
          "type" : "token",
          "documentation" : "Unique identifier"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-subject",
          "type" : "reference",
          "documentation" : "Focus of message"
        },
        {
          "name" : "instantiates-canonical",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-instantiates-canonical",
          "type" : "reference",
          "documentation" : "Instantiates FHIR protocol or definition"
        },
        {
          "name" : "received",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-received",
          "type" : "date",
          "documentation" : "When received"
        },
        {
          "name" : "part-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-part-of",
          "type" : "reference",
          "documentation" : "Part of this action"
        },
        {
          "name" : "medium",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-medium",
          "type" : "token",
          "documentation" : "A channel of communication"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-encounter",
          "type" : "reference",
          "documentation" : "Encounter created as part of"
        },
        {
          "name" : "sent",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-sent",
          "type" : "date",
          "documentation" : "When sent"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-based-on",
          "type" : "reference",
          "documentation" : "Request fulfilled by this communication"
        },
        {
          "name" : "sender",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-sender",
          "type" : "reference",
          "documentation" : "Message sender"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-patient",
          "type" : "reference",
          "documentation" : "Focus of message"
        },
        {
          "name" : "recipient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-recipient",
          "type" : "reference",
          "documentation" : "Message recipient"
        },
        {
          "name" : "instantiates-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-instantiates-uri",
          "type" : "uri",
          "documentation" : "Instantiates external protocol or definition"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-category",
          "type" : "token",
          "documentation" : "Message category"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Communication-status",
          "type" : "token",
          "documentation" : "preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown"
        }]
      },
      {
        "type" : "CommunicationRequest",
        "profile" : "http://hl7.org/fhir/StructureDefinition/CommunicationRequest",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["CommunicationRequest.requester",
        "CommunicationRequest.subject",
        "CommunicationRequest.replaces",
        "CommunicationRequest.encounter",
        "CommunicationRequest.based-on",
        "CommunicationRequest.sender",
        "CommunicationRequest.patient",
        "CommunicationRequest.recipient"],
        "searchRevInclude" : ["CarePlan.activity-reference",
        "CommunicationRequest.replaces"],
        "searchParam" : [{
          "name" : "requester",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-requester",
          "type" : "reference",
          "documentation" : "Who/what is requesting service"
        },
        {
          "name" : "authored",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-authored",
          "type" : "date",
          "documentation" : "When request transitioned to being actionable"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-identifier",
          "type" : "token",
          "documentation" : "Unique identifier"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-subject",
          "type" : "reference",
          "documentation" : "Focus of message"
        },
        {
          "name" : "replaces",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-replaces",
          "type" : "reference",
          "documentation" : "Request(s) replaced by this request"
        },
        {
          "name" : "medium",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-medium",
          "type" : "token",
          "documentation" : "A channel of communication"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-encounter",
          "type" : "reference",
          "documentation" : "Encounter created as part of"
        },
        {
          "name" : "occurrence",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-occurrence",
          "type" : "date",
          "documentation" : "When scheduled"
        },
        {
          "name" : "priority",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-priority",
          "type" : "token",
          "documentation" : "routine | urgent | asap | stat"
        },
        {
          "name" : "group-identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-group-identifier",
          "type" : "token",
          "documentation" : "Composite request this is part of"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-based-on",
          "type" : "reference",
          "documentation" : "Fulfills plan or proposal"
        },
        {
          "name" : "sender",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-sender",
          "type" : "reference",
          "documentation" : "Message sender"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-patient",
          "type" : "reference",
          "documentation" : "Focus of message"
        },
        {
          "name" : "recipient",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-recipient",
          "type" : "reference",
          "documentation" : "Message recipient"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-category",
          "type" : "token",
          "documentation" : "Message category"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/CommunicationRequest-status",
          "type" : "token",
          "documentation" : "draft | active | on-hold | revoked | completed | entered-in-error | unknown"
        }]
      },
      {
        "type" : "CompartmentDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/CompartmentDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The compartment definition publication date"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/CompartmentDefinition-code",
          "type" : "token",
          "documentation" : "Patient | Encounter | RelatedPerson | Practitioner | Device"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the compartment definition"
        },
        {
          "name" : "resource",
          "definition" : "http://hl7.org/fhir/SearchParameter/CompartmentDefinition-resource",
          "type" : "token",
          "documentation" : "Name of resource type"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the compartment definition"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the compartment definition"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the compartment definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the compartment definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the compartment definition"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the compartment definition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the compartment definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the compartment definition"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the compartment definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the compartment definition"
        }]
      },
      {
        "type" : "Composition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Composition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Composition.subject",
        "Composition.author",
        "Composition.encounter",
        "Composition.attester",
        "Composition.entry",
        "Composition.related-ref",
        "Composition.patient"],
        "searchRevInclude" : ["Composition.related-ref"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "Composition editing time"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Version-independent identifier for the Composition"
        },
        {
          "name" : "period",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-period",
          "type" : "date",
          "documentation" : "The period covered by the documentation"
        },
        {
          "name" : "related-id",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-related-id",
          "type" : "token",
          "documentation" : "Target of the relationship"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-subject",
          "type" : "reference",
          "documentation" : "Who and/or what the composition is about"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-author",
          "type" : "reference",
          "documentation" : "Who and/or what authored the composition"
        },
        {
          "name" : "confidentiality",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-confidentiality",
          "type" : "token",
          "documentation" : "As defined by affinity domain"
        },
        {
          "name" : "section",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-section",
          "type" : "token",
          "documentation" : "Classification of section (recommended)"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Context of the Composition"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-type",
          "type" : "token",
          "documentation" : "Kind of composition (LOINC if possible)"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-title",
          "type" : "string",
          "documentation" : "Human Readable name/title"
        },
        {
          "name" : "attester",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-attester",
          "type" : "reference",
          "documentation" : "Who attested the composition"
        },
        {
          "name" : "entry",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-entry",
          "type" : "reference",
          "documentation" : "A reference to data that supports this section"
        },
        {
          "name" : "related-ref",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-related-ref",
          "type" : "reference",
          "documentation" : "Target of the relationship"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who and/or what the composition is about"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-context",
          "type" : "token",
          "documentation" : "Code(s) that apply to the event being documented"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-category",
          "type" : "token",
          "documentation" : "Categorization of Composition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Composition-status",
          "type" : "token",
          "documentation" : "preliminary | final | amended | entered-in-error"
        }]
      },
      {
        "type" : "ConceptMap",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ConceptMap",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ConceptMap.other",
        "ConceptMap.source",
        "ConceptMap.source-uri",
        "ConceptMap.target-uri",
        "ConceptMap.target"],
        "searchRevInclude" : ["ConceptMap.other"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The concept map publication date"
        },
        {
          "name" : "other",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-other",
          "type" : "reference",
          "documentation" : "canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the concept map"
        },
        {
          "name" : "target-system",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-target-system",
          "type" : "uri",
          "documentation" : "Target system that the concepts are to be mapped to"
        },
        {
          "name" : "dependson",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-dependson",
          "type" : "uri",
          "documentation" : "Reference to property mapping depends on"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the concept map"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the concept map"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the concept map"
        },
        {
          "name" : "source",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-source",
          "type" : "reference",
          "documentation" : "The source value set that contains the concepts that are being mapped"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the concept map"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the concept map"
        },
        {
          "name" : "source-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-source-uri",
          "type" : "reference",
          "documentation" : "The source value set that contains the concepts that are being mapped"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the concept map"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the concept map"
        },
        {
          "name" : "source-system",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-source-system",
          "type" : "uri",
          "documentation" : "Source system where concepts to be mapped are defined"
        },
        {
          "name" : "target-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-target-code",
          "type" : "token",
          "documentation" : "Code that identifies the target element"
        },
        {
          "name" : "target-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-target-uri",
          "type" : "reference",
          "documentation" : "The target value set which provides context for the mappings"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-identifier",
          "type" : "token",
          "documentation" : "External identifier for the concept map"
        },
        {
          "name" : "product",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-product",
          "type" : "uri",
          "documentation" : "Reference to property mapping depends on"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the concept map"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the concept map"
        },
        {
          "name" : "target",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-target",
          "type" : "reference",
          "documentation" : "The target value set which provides context for the mappings"
        },
        {
          "name" : "source-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/ConceptMap-source-code",
          "type" : "token",
          "documentation" : "Identifies element being mapped"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the concept map"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the concept map"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the concept map"
        }]
      },
      {
        "type" : "Condition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Condition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Condition.evidence-detail",
        "Condition.subject",
        "Condition.encounter",
        "Condition.asserter",
        "Condition.patient"],
        "searchRevInclude" : ["AdverseEvent.resultingcondition",
        "Appointment.reason-reference",
        "CarePlan.condition",
        "ClinicalImpression.finding-ref",
        "ClinicalImpression.problem",
        "Encounter.diagnosis",
        "Encounter.reason-reference",
        "EpisodeOfCare.condition",
        "Immunization.reason-reference",
        "Procedure.reason-reference",
        "RiskAssessment.condition"],
        "searchParam" : [{
          "name" : "severity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-severity",
          "type" : "token",
          "documentation" : "The severity of the condition"
        },
        {
          "name" : "evidence-detail",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-evidence-detail",
          "type" : "reference",
          "documentation" : "Supporting information found elsewhere"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "A unique identifier of the condition record"
        },
        {
          "name" : "onset-info",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-onset-info",
          "type" : "string",
          "documentation" : "Onsets as a string"
        },
        {
          "name" : "recorded-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-recorded-date",
          "type" : "date",
          "documentation" : "Date record was first recorded"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "Code for the condition"
        },
        {
          "name" : "evidence",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-evidence",
          "type" : "token",
          "documentation" : "Manifestation/symptom"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-subject",
          "type" : "reference",
          "documentation" : "Who has the condition?"
        },
        {
          "name" : "verification-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-verification-status",
          "type" : "token",
          "documentation" : "unconfirmed | provisional | differential | confirmed | refuted | entered-in-error"
        },
        {
          "name" : "clinical-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-clinical-status",
          "type" : "token",
          "documentation" : "The clinical status of the condition"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-encounter",
          "type" : "reference",
          "documentation" : "Encounter created as part of"
        },
        {
          "name" : "onset-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-onset-date",
          "type" : "date",
          "documentation" : "Date related onsets (dateTime and Period)"
        },
        {
          "name" : "abatement-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-abatement-date",
          "type" : "date",
          "documentation" : "Date-related abatements (dateTime and period)"
        },
        {
          "name" : "asserter",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-asserter",
          "type" : "reference",
          "documentation" : "Person who asserts this condition"
        },
        {
          "name" : "stage",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-stage",
          "type" : "token",
          "documentation" : "Simple summary (disease specific)"
        },
        {
          "name" : "abatement-string",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-abatement-string",
          "type" : "string",
          "documentation" : "Abatement as a string"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who has the condition?"
        },
        {
          "name" : "onset-age",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-onset-age",
          "type" : "quantity",
          "documentation" : "Onsets as age or age range"
        },
        {
          "name" : "abatement-age",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-abatement-age",
          "type" : "quantity",
          "documentation" : "Abatement as age or age range"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-category",
          "type" : "token",
          "documentation" : "The category of the condition"
        },
        {
          "name" : "body-site",
          "definition" : "http://hl7.org/fhir/SearchParameter/Condition-body-site",
          "type" : "token",
          "documentation" : "Anatomical location, if relevant"
        }]
      },
      {
        "type" : "Consent",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Consent",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Consent.data",
        "Consent.source-reference",
        "Consent.actor",
        "Consent.patient",
        "Consent.organization",
        "Consent.consentor"],
        "searchRevInclude" : ["Consent.source-reference"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "When this Consent was created or indexed"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Identifier for this record (external references)"
        },
        {
          "name" : "period",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-period",
          "type" : "date",
          "documentation" : "Timeframe for this rule"
        },
        {
          "name" : "data",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-data",
          "type" : "reference",
          "documentation" : "The actual data reference"
        },
        {
          "name" : "purpose",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-purpose",
          "type" : "token",
          "documentation" : "Context of activities covered by this rule"
        },
        {
          "name" : "source-reference",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-source-reference",
          "type" : "reference",
          "documentation" : "Search by reference to a Consent, DocumentReference, Contract  or QuestionnaireResponse"
        },
        {
          "name" : "actor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-actor",
          "type" : "reference",
          "documentation" : "Resource for the actor (or group, by role)"
        },
        {
          "name" : "security-label",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-security-label",
          "type" : "token",
          "documentation" : "Security Labels that define affected resources"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who the consent applies to"
        },
        {
          "name" : "organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-organization",
          "type" : "reference",
          "documentation" : "Custodian of the consent"
        },
        {
          "name" : "scope",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-scope",
          "type" : "token",
          "documentation" : "Which of the four areas this resource covers (extensible)"
        },
        {
          "name" : "action",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-action",
          "type" : "token",
          "documentation" : "Actions controlled by this rule"
        },
        {
          "name" : "consentor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-consentor",
          "type" : "reference",
          "documentation" : "Who is agreeing to the policy and rules"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-category",
          "type" : "token",
          "documentation" : "Classification of the consent statement - for indexing/retrieval"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Consent-status",
          "type" : "token",
          "documentation" : "draft | proposed | active | rejected | inactive | entered-in-error"
        }]
      },
      {
        "type" : "Contract",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Contract",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Contract.patient",
        "Contract.subject",
        "Contract.authority",
        "Contract.domain",
        "Contract.signer"],
        "searchRevInclude" : ["Consent.source-reference"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-identifier",
          "type" : "token",
          "documentation" : "The identity of the contract"
        },
        {
          "name" : "instantiates",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-instantiates",
          "type" : "uri",
          "documentation" : "A source definition of the contract"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-patient",
          "type" : "reference",
          "documentation" : "The identity of the subject of the contract (if a patient)"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-subject",
          "type" : "reference",
          "documentation" : "The identity of the subject of the contract"
        },
        {
          "name" : "authority",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-authority",
          "type" : "reference",
          "documentation" : "The authority of the contract"
        },
        {
          "name" : "domain",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-domain",
          "type" : "reference",
          "documentation" : "The domain of the contract"
        },
        {
          "name" : "issued",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-issued",
          "type" : "date",
          "documentation" : "The date/time the contract was issued"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-url",
          "type" : "uri",
          "documentation" : "The basal contract definition"
        },
        {
          "name" : "signer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-signer",
          "type" : "reference",
          "documentation" : "Contract Signatory Party"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Contract-status",
          "type" : "token",
          "documentation" : "The status of the contract"
        }]
      },
      {
        "type" : "Coverage",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Coverage",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Coverage.payor",
        "Coverage.subscriber",
        "Coverage.beneficiary",
        "Coverage.patient",
        "Coverage.policy-holder"],
        "searchRevInclude" : ["DeviceRequest.insurance",
        "ExplanationOfBenefit.coverage"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-identifier",
          "type" : "token",
          "documentation" : "The primary identifier of the insured and the coverage"
        },
        {
          "name" : "payor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-payor",
          "type" : "reference",
          "documentation" : "The identity of the insurer or party paying for services"
        },
        {
          "name" : "subscriber",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-subscriber",
          "type" : "reference",
          "documentation" : "Reference to the subscriber"
        },
        {
          "name" : "beneficiary",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-beneficiary",
          "type" : "reference",
          "documentation" : "Covered party"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-patient",
          "type" : "reference",
          "documentation" : "Retrieve coverages for a patient"
        },
        {
          "name" : "class-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-class-value",
          "type" : "string",
          "documentation" : "Value of the class (eg. Plan number, group number)"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-type",
          "type" : "token",
          "documentation" : "The kind of coverage (health plan, auto, Workers Compensation)"
        },
        {
          "name" : "dependent",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-dependent",
          "type" : "string",
          "documentation" : "Dependent number"
        },
        {
          "name" : "class-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-class-type",
          "type" : "token",
          "documentation" : "Coverage class (eg. plan, group)"
        },
        {
          "name" : "policy-holder",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-policy-holder",
          "type" : "reference",
          "documentation" : "Reference to the policyholder"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Coverage-status",
          "type" : "token",
          "documentation" : "The status of the Coverage"
        }]
      },
      {
        "type" : "CoverageEligibilityRequest",
        "profile" : "http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["CoverageEligibilityRequest.provider",
        "CoverageEligibilityRequest.patient",
        "CoverageEligibilityRequest.enterer",
        "CoverageEligibilityRequest.facility"],
        "searchRevInclude" : ["CoverageEligibilityResponse.request"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-identifier",
          "type" : "token",
          "documentation" : "The business identifier of the Eligibility"
        },
        {
          "name" : "provider",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-provider",
          "type" : "reference",
          "documentation" : "The reference to the provider"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-patient",
          "type" : "reference",
          "documentation" : "The reference to the patient"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-created",
          "type" : "date",
          "documentation" : "The creation date for the EOB"
        },
        {
          "name" : "enterer",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-enterer",
          "type" : "reference",
          "documentation" : "The party who is responsible for the request"
        },
        {
          "name" : "facility",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-facility",
          "type" : "reference",
          "documentation" : "Facility responsible for the goods and services"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-status",
          "type" : "token",
          "documentation" : "The status of the EligibilityRequest"
        }]
      },
      {
        "type" : "CoverageEligibilityResponse",
        "profile" : "http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["CoverageEligibilityResponse.request",
        "CoverageEligibilityResponse.patient",
        "CoverageEligibilityResponse.insurer",
        "CoverageEligibilityResponse.requestor"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-identifier",
          "type" : "token",
          "documentation" : "The business identifier"
        },
        {
          "name" : "request",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-request",
          "type" : "reference",
          "documentation" : "The EligibilityRequest reference"
        },
        {
          "name" : "disposition",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-disposition",
          "type" : "string",
          "documentation" : "The contents of the disposition message"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-patient",
          "type" : "reference",
          "documentation" : "The reference to the patient"
        },
        {
          "name" : "insurer",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-insurer",
          "type" : "reference",
          "documentation" : "The organization which generated this resource"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-created",
          "type" : "date",
          "documentation" : "The creation date"
        },
        {
          "name" : "outcome",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-outcome",
          "type" : "token",
          "documentation" : "The processing outcome"
        },
        {
          "name" : "requestor",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-requestor",
          "type" : "reference",
          "documentation" : "The EligibilityRequest provider"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-status",
          "type" : "token",
          "documentation" : "The EligibilityRequest status"
        }]
      },
      {
        "type" : "DetectedIssue",
        "profile" : "http://hl7.org/fhir/StructureDefinition/DetectedIssue",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["DetectedIssue.patient",
        "DetectedIssue.author",
        "DetectedIssue.implicated"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Unique id for the detected issue"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/DetectedIssue-code",
          "type" : "token",
          "documentation" : "Issue Category, e.g. drug-drug, duplicate therapy, etc."
        },
        {
          "name" : "identified",
          "definition" : "http://hl7.org/fhir/SearchParameter/DetectedIssue-identified",
          "type" : "date",
          "documentation" : "When identified"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Associated patient"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/DetectedIssue-author",
          "type" : "reference",
          "documentation" : "The provider or device that identified the issue"
        },
        {
          "name" : "implicated",
          "definition" : "http://hl7.org/fhir/SearchParameter/DetectedIssue-implicated",
          "type" : "reference",
          "documentation" : "Problem resource"
        }]
      },
      {
        "type" : "Device",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Device",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Device.patient",
        "Device.organization",
        "Device.location"],
        "searchRevInclude" : ["Account.subject",
        "Account.patient",
        "AdverseEvent.substance",
        "Appointment.practitioner",
        "Appointment.actor",
        "Appointment.patient",
        "Appointment.location",
        "AppointmentResponse.actor",
        "AppointmentResponse.practitioner",
        "AppointmentResponse.patient",
        "AppointmentResponse.location",
        "AuditEvent.agent",
        "AuditEvent.source",
        "AuditEvent.patient",
        "CarePlan.performer",
        "ChargeItem.enterer",
        "ChargeItem.performer-actor",
        "Claim.detail-udi",
        "Claim.procedure-udi",
        "Claim.subdetail-udi",
        "Claim.item-udi",
        "Communication.sender",
        "Communication.recipient",
        "CommunicationRequest.requester",
        "CommunicationRequest.sender",
        "CommunicationRequest.recipient",
        "Composition.author",
        "Consent.actor",
        "DetectedIssue.author",
        "DeviceMetric.parent",
        "DeviceMetric.source",
        "DeviceRequest.requester",
        "DeviceRequest.performer",
        "DeviceRequest.subject",
        "DeviceRequest.patient",
        "DeviceRequest.device",
        "DeviceUseStatement.device",
        "DiagnosticReport.subject",
        "DiagnosticReport.patient",
        "DocumentManifest.subject",
        "DocumentManifest.author",
        "DocumentManifest.patient",
        "DocumentReference.subject",
        "DocumentReference.patient",
        "DocumentReference.author",
        "ExplanationOfBenefit.detail-udi",
        "ExplanationOfBenefit.procedure-udi",
        "ExplanationOfBenefit.subdetail-udi",
        "ExplanationOfBenefit.item-udi",
        "Flag.author",
        "Group.member",
        "ImagingStudy.performer",
        "ImagingStudy.subject",
        "ImagingStudy.patient",
        "Invoice.participant",
        "List.subject",
        "List.patient",
        "List.source",
        "MeasureReport.patient",
        "MeasureReport.subject",
        "Media.subject",
        "Media.operator",
        "Media.patient",
        "Media.device",
        "MedicationAdministration.performer",
        "MedicationAdministration.device",
        "MedicationDispense.performer",
        "MedicationRequest.requester",
        "MedicationRequest.intended-performer",
        "MessageHeader.target",
        "Observation.subject",
        "Observation.patient",
        "Observation.device",
        "Procedure.performer",
        "Provenance.agent",
        "QuestionnaireResponse.author",
        "RequestGroup.author",
        "RequestGroup.participant",
        "RiskAssessment.performer",
        "Schedule.actor",
        "ServiceRequest.requester",
        "ServiceRequest.performer",
        "ServiceRequest.subject",
        "ServiceRequest.patient",
        "Specimen.subject",
        "Specimen.patient",
        "SupplyRequest.requester",
        "Task.owner",
        "Task.requester"],
        "searchParam" : [{
          "name" : "udi-di",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-udi-di",
          "type" : "string",
          "documentation" : "The udi Device Identifier (DI)"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-identifier",
          "type" : "token",
          "documentation" : "Instance id from manufacturer, owner, and others"
        },
        {
          "name" : "udi-carrier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-udi-carrier",
          "type" : "string",
          "documentation" : "UDI Barcode (RFID or other technology) string in *HRF* format."
        },
        {
          "name" : "device-name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-device-name",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in Device.deviceName or Device.type."
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-patient",
          "type" : "reference",
          "documentation" : "Patient information, if the resource is affixed to a person"
        },
        {
          "name" : "organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-organization",
          "type" : "reference",
          "documentation" : "The organization responsible for the device"
        },
        {
          "name" : "model",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-model",
          "type" : "string",
          "documentation" : "The model of the device"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-location",
          "type" : "reference",
          "documentation" : "A location, where the resource is found"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-type",
          "type" : "token",
          "documentation" : "The type of the device"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-url",
          "type" : "uri",
          "documentation" : "Network address to contact device"
        },
        {
          "name" : "manufacturer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-manufacturer",
          "type" : "string",
          "documentation" : "The manufacturer of the device"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Device-status",
          "type" : "token",
          "documentation" : "active | inactive | entered-in-error | unknown"
        }]
      },
      {
        "type" : "DeviceDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["DeviceDefinition.parent"],
        "searchRevInclude" : ["DeviceDefinition.parent"],
        "searchParam" : [{
          "name" : "parent",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceDefinition-parent",
          "type" : "reference",
          "documentation" : "The parent DeviceDefinition resource"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceDefinition-identifier",
          "type" : "token",
          "documentation" : "The identifier of the component"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceDefinition-type",
          "type" : "token",
          "documentation" : "The device component type"
        }]
      },
      {
        "type" : "DeviceMetric",
        "profile" : "http://hl7.org/fhir/StructureDefinition/DeviceMetric",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["DeviceMetric.parent",
        "DeviceMetric.source"],
        "searchRevInclude" : ["Media.device",
        "Observation.device"],
        "searchParam" : [{
          "name" : "parent",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceMetric-parent",
          "type" : "reference",
          "documentation" : "The parent DeviceMetric resource"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceMetric-identifier",
          "type" : "token",
          "documentation" : "The identifier of the metric"
        },
        {
          "name" : "source",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceMetric-source",
          "type" : "reference",
          "documentation" : "The device resource"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceMetric-type",
          "type" : "token",
          "documentation" : "The component type"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceMetric-category",
          "type" : "token",
          "documentation" : "The category of the metric"
        }]
      },
      {
        "type" : "DeviceRequest",
        "profile" : "http://hl7.org/fhir/StructureDefinition/DeviceRequest",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["DeviceRequest.requester",
        "DeviceRequest.insurance",
        "DeviceRequest.performer",
        "DeviceRequest.subject",
        "DeviceRequest.instantiates-canonical",
        "DeviceRequest.encounter",
        "DeviceRequest.based-on",
        "DeviceRequest.patient",
        "DeviceRequest.prior-request",
        "DeviceRequest.device"],
        "searchRevInclude" : ["CarePlan.activity-reference",
        "Observation.based-on"],
        "searchParam" : [{
          "name" : "requester",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-requester",
          "type" : "reference",
          "documentation" : "Who/what is requesting service"
        },
        {
          "name" : "insurance",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-insurance",
          "type" : "reference",
          "documentation" : "Associated insurance coverage"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Business identifier for request/order"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "Code for what is being requested/ordered"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-performer",
          "type" : "reference",
          "documentation" : "Desired performer for service"
        },
        {
          "name" : "event-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-event-date",
          "type" : "date",
          "documentation" : "When service should occur"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-subject",
          "type" : "reference",
          "documentation" : "Individual the service is ordered for"
        },
        {
          "name" : "instantiates-canonical",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-instantiates-canonical",
          "type" : "reference",
          "documentation" : "Instantiates FHIR protocol or definition"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Encounter during which request was created"
        },
        {
          "name" : "authored-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-authored-on",
          "type" : "date",
          "documentation" : "When the request transitioned to being actionable"
        },
        {
          "name" : "intent",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-intent",
          "type" : "token",
          "documentation" : "proposal | plan | original-order |reflex-order"
        },
        {
          "name" : "group-identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-group-identifier",
          "type" : "token",
          "documentation" : "Composite request this is part of"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-based-on",
          "type" : "reference",
          "documentation" : "Plan/proposal/order fulfilled by this request"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Individual the service is ordered for"
        },
        {
          "name" : "instantiates-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-instantiates-uri",
          "type" : "uri",
          "documentation" : "Instantiates external protocol or definition"
        },
        {
          "name" : "prior-request",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-prior-request",
          "type" : "reference",
          "documentation" : "Request takes the place of referenced completed or terminated requests"
        },
        {
          "name" : "device",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-device",
          "type" : "reference",
          "documentation" : "Reference to resource that is being requested/ordered"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceRequest-status",
          "type" : "token",
          "documentation" : "entered-in-error | draft | active |suspended | completed"
        }]
      },
      {
        "type" : "DeviceUseStatement",
        "profile" : "http://hl7.org/fhir/StructureDefinition/DeviceUseStatement",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["DeviceUseStatement.subject",
        "DeviceUseStatement.patient",
        "DeviceUseStatement.device"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceUseStatement-identifier",
          "type" : "token",
          "documentation" : "Search by identifier"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceUseStatement-subject",
          "type" : "reference",
          "documentation" : "Search by subject"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Search by subject - a patient"
        },
        {
          "name" : "device",
          "definition" : "http://hl7.org/fhir/SearchParameter/DeviceUseStatement-device",
          "type" : "reference",
          "documentation" : "Search by device"
        }]
      },
      {
        "type" : "DiagnosticReport",
        "profile" : "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["DiagnosticReport.performer",
        "DiagnosticReport.subject",
        "DiagnosticReport.media",
        "DiagnosticReport.encounter",
        "DiagnosticReport.result",
        "DiagnosticReport.based-on",
        "DiagnosticReport.patient",
        "DiagnosticReport.specimen",
        "DiagnosticReport.results-interpreter"],
        "searchRevInclude" : ["ChargeItem.service",
        "ClinicalImpression.investigation",
        "Immunization.reason-reference",
        "Procedure.reason-reference"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "The clinically relevant time of the report"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "An identifier for the report"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-performer",
          "type" : "reference",
          "documentation" : "Who is responsible for the report"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-subject",
          "type" : "reference",
          "documentation" : "The subject of the report"
        },
        {
          "name" : "media",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-media",
          "type" : "reference",
          "documentation" : "A reference to the image source."
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "The Encounter when the order was made"
        },
        {
          "name" : "result",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-result",
          "type" : "reference",
          "documentation" : "Link to an atomic result (observation resource)"
        },
        {
          "name" : "conclusion",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-conclusion",
          "type" : "token",
          "documentation" : "A coded conclusion (interpretation/impression) on the report"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-based-on",
          "type" : "reference",
          "documentation" : "Reference to the service request."
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The subject of the report if a patient"
        },
        {
          "name" : "specimen",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-specimen",
          "type" : "reference",
          "documentation" : "The specimen details"
        },
        {
          "name" : "issued",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-issued",
          "type" : "date",
          "documentation" : "When the report was issued"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-category",
          "type" : "token",
          "documentation" : "Which diagnostic discipline/department created the report"
        },
        {
          "name" : "results-interpreter",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-results-interpreter",
          "type" : "reference",
          "documentation" : "Who was the source of the report"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/DiagnosticReport-status",
          "type" : "token",
          "documentation" : "The status of the report"
        }]
      },
      {
        "type" : "DocumentManifest",
        "profile" : "http://hl7.org/fhir/StructureDefinition/DocumentManifest",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["DocumentManifest.item",
        "DocumentManifest.subject",
        "DocumentManifest.author",
        "DocumentManifest.related-ref",
        "DocumentManifest.patient",
        "DocumentManifest.recipient"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Unique Identifier for the set of documents"
        },
        {
          "name" : "item",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-item",
          "type" : "reference",
          "documentation" : "Items in manifest"
        },
        {
          "name" : "related-id",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-related-id",
          "type" : "token",
          "documentation" : "Identifiers of things that are related"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-subject",
          "type" : "reference",
          "documentation" : "The subject of the set of documents"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-author",
          "type" : "reference",
          "documentation" : "Who and/or what authored the DocumentManifest"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-created",
          "type" : "date",
          "documentation" : "When this document manifest created"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-description",
          "type" : "string",
          "documentation" : "Human-readable description (title)"
        },
        {
          "name" : "source",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-source",
          "type" : "uri",
          "documentation" : "The source system/application/software"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-type",
          "type" : "token",
          "documentation" : "Kind of document set"
        },
        {
          "name" : "related-ref",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-related-ref",
          "type" : "reference",
          "documentation" : "Related Resource"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The subject of the set of documents"
        },
        {
          "name" : "recipient",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-recipient",
          "type" : "reference",
          "documentation" : "Intended to get notified about this set of documents"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentManifest-status",
          "type" : "token",
          "documentation" : "current | superseded | entered-in-error"
        }]
      },
      {
        "type" : "DocumentReference",
        "profile" : "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["DocumentReference.subject",
        "DocumentReference.related",
        "DocumentReference.patient",
        "DocumentReference.authenticator",
        "DocumentReference.custodian",
        "DocumentReference.author",
        "DocumentReference.encounter",
        "DocumentReference.relatesto"],
        "searchRevInclude" : ["Consent.source-reference",
        "DocumentReference.relatesto",
        "MedicationKnowledge.monograph",
        "Observation.derived-from",
        "Procedure.reason-reference"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-date",
          "type" : "date",
          "documentation" : "When this document reference was created"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-subject",
          "type" : "reference",
          "documentation" : "Who/what is the subject of the document"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-description",
          "type" : "string",
          "documentation" : "Human-readable description"
        },
        {
          "name" : "language",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-language",
          "type" : "token",
          "documentation" : "Human language of the content (BCP-47)"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-type",
          "type" : "token",
          "documentation" : "Kind of document (LOINC if possible)"
        },
        {
          "name" : "relation",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-relation",
          "type" : "token",
          "documentation" : "replaces | transforms | signs | appends"
        },
        {
          "name" : "setting",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-setting",
          "type" : "token",
          "documentation" : "Additional details about where the content was created (e.g. clinical specialty)"
        },
        {
          "name" : "related",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-related",
          "type" : "reference",
          "documentation" : "Related identifiers or resources"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who/what is the subject of the document"
        },
        {
          "name" : "relationship",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-relationship",
          "type" : "composite",
          "documentation" : "Combination of relation and relatesTo"
        },
        {
          "name" : "event",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-event",
          "type" : "token",
          "documentation" : "Main clinical acts documented"
        },
        {
          "name" : "authenticator",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-authenticator",
          "type" : "reference",
          "documentation" : "Who/what authenticated the document"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Master Version Specific Identifier"
        },
        {
          "name" : "period",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-period",
          "type" : "date",
          "documentation" : "Time of service that is being documented"
        },
        {
          "name" : "custodian",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-custodian",
          "type" : "reference",
          "documentation" : "Organization which maintains the document"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-author",
          "type" : "reference",
          "documentation" : "Who and/or what authored the document"
        },
        {
          "name" : "format",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-format",
          "type" : "token",
          "documentation" : "Format/content rules for the document"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Context of the document  content"
        },
        {
          "name" : "contenttype",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-contenttype",
          "type" : "token",
          "documentation" : "Mime type of the content, with charset etc."
        },
        {
          "name" : "security-label",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-security-label",
          "type" : "token",
          "documentation" : "Document security-tags"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-location",
          "type" : "uri",
          "documentation" : "Uri where the data can be found"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-category",
          "type" : "token",
          "documentation" : "Categorization of document"
        },
        {
          "name" : "relatesto",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-relatesto",
          "type" : "reference",
          "documentation" : "Target of the relationship"
        },
        {
          "name" : "facility",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-facility",
          "type" : "token",
          "documentation" : "Kind of facility where patient was seen"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/DocumentReference-status",
          "type" : "token",
          "documentation" : "current | superseded | entered-in-error"
        }]
      },
      {
        "type" : "EffectEvidenceSynthesis",
        "profile" : "http://hl7.org/fhir/StructureDefinition/EffectEvidenceSynthesis",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-date",
          "type" : "date",
          "documentation" : "The effect evidence synthesis publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-identifier",
          "type" : "token",
          "documentation" : "External identifier for the effect evidence synthesis"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the effect evidence synthesis"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the effect evidence synthesis"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-description",
          "type" : "string",
          "documentation" : "The description of the effect evidence synthesis"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the effect evidence synthesis"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the effect evidence synthesis"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-version",
          "type" : "token",
          "documentation" : "The business version of the effect evidence synthesis"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the effect evidence synthesis"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the effect evidence synthesis"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-effective",
          "type" : "date",
          "documentation" : "The time during which the effect evidence synthesis is intended to be in use"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the effect evidence synthesis"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context",
          "type" : "token",
          "documentation" : "A use context assigned to the effect evidence synthesis"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the effect evidence synthesis"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the effect evidence synthesis"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-status",
          "type" : "token",
          "documentation" : "The current status of the effect evidence synthesis"
        }]
      },
      {
        "type" : "Encounter",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Encounter",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Encounter.practitioner",
        "Encounter.subject",
        "Encounter.episode-of-care",
        "Encounter.diagnosis",
        "Encounter.appointment",
        "Encounter.part-of",
        "Encounter.participant",
        "Encounter.based-on",
        "Encounter.patient",
        "Encounter.reason-reference",
        "Encounter.location",
        "Encounter.service-provider",
        "Encounter.account"],
        "searchRevInclude" : ["CarePlan.encounter",
        "CareTeam.encounter",
        "ChargeItem.context",
        "Claim.encounter",
        "ClinicalImpression.encounter",
        "Communication.encounter",
        "CommunicationRequest.encounter",
        "Composition.encounter",
        "Condition.encounter",
        "DeviceRequest.encounter",
        "DiagnosticReport.encounter",
        "DocumentReference.encounter",
        "Encounter.part-of",
        "ExplanationOfBenefit.encounter",
        "Flag.encounter",
        "ImagingStudy.encounter",
        "List.encounter",
        "Media.encounter",
        "MedicationAdministration.context",
        "MedicationDispense.context",
        "MedicationRequest.encounter",
        "MedicationStatement.context",
        "NutritionOrder.encounter",
        "Observation.encounter",
        "Procedure.encounter",
        "QuestionnaireResponse.encounter",
        "RequestGroup.encounter",
        "RiskAssessment.encounter",
        "ServiceRequest.encounter",
        "Task.encounter",
        "VisionPrescription.encounter"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "A date within the period the Encounter lasted"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Identifier(s) by which this encounter is known"
        },
        {
          "name" : "participant-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-participant-type",
          "type" : "token",
          "documentation" : "Role of participant in encounter"
        },
        {
          "name" : "practitioner",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-practitioner",
          "type" : "reference",
          "documentation" : "Persons involved in the encounter other than the patient"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-subject",
          "type" : "reference",
          "documentation" : "The patient or group present at the encounter"
        },
        {
          "name" : "length",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-length",
          "type" : "quantity",
          "documentation" : "Length of encounter in days"
        },
        {
          "name" : "episode-of-care",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-episode-of-care",
          "type" : "reference",
          "documentation" : "Episode(s) of care that this encounter should be recorded against"
        },
        {
          "name" : "diagnosis",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-diagnosis",
          "type" : "reference",
          "documentation" : "The diagnosis or procedure relevant to the encounter"
        },
        {
          "name" : "appointment",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-appointment",
          "type" : "reference",
          "documentation" : "The appointment that scheduled this encounter"
        },
        {
          "name" : "part-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-part-of",
          "type" : "reference",
          "documentation" : "Another Encounter this encounter is part of"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-type",
          "type" : "token",
          "documentation" : "Specific type of encounter"
        },
        {
          "name" : "reason-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-reason-code",
          "type" : "token",
          "documentation" : "Coded reason the encounter takes place"
        },
        {
          "name" : "participant",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-participant",
          "type" : "reference",
          "documentation" : "Persons involved in the encounter other than the patient"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-based-on",
          "type" : "reference",
          "documentation" : "The ServiceRequest that initiated this encounter"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The patient or group present at the encounter"
        },
        {
          "name" : "reason-reference",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-reason-reference",
          "type" : "reference",
          "documentation" : "Reason the encounter takes place (reference)"
        },
        {
          "name" : "location-period",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-location-period",
          "type" : "date",
          "documentation" : "Time period during which the patient was present at the location"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-location",
          "type" : "reference",
          "documentation" : "Location the encounter takes place"
        },
        {
          "name" : "service-provider",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-service-provider",
          "type" : "reference",
          "documentation" : "The organization (facility) responsible for this encounter"
        },
        {
          "name" : "special-arrangement",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-special-arrangement",
          "type" : "token",
          "documentation" : "Wheelchair, translator, stretcher, etc."
        },
        {
          "name" : "class",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-class",
          "type" : "token",
          "documentation" : "Classification of patient encounter"
        },
        {
          "name" : "account",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-account",
          "type" : "reference",
          "documentation" : "The set of accounts that may be used for billing for this Encounter"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Encounter-status",
          "type" : "token",
          "documentation" : "planned | arrived | triaged | in-progress | onleave | finished | cancelled +"
        }]
      },
      {
        "type" : "Endpoint",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Endpoint",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Endpoint.organization"],
        "searchRevInclude" : ["HealthcareService.endpoint",
        "ImagingStudy.endpoint",
        "InsurancePlan.endpoint",
        "Location.endpoint",
        "Organization.endpoint",
        "OrganizationAffiliation.endpoint",
        "PractitionerRole.endpoint"],
        "searchParam" : [{
          "name" : "payload-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Endpoint-payload-type",
          "type" : "token",
          "documentation" : "The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Endpoint-identifier",
          "type" : "token",
          "documentation" : "Identifies this endpoint across multiple systems"
        },
        {
          "name" : "organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/Endpoint-organization",
          "type" : "reference",
          "documentation" : "The organization that is managing the endpoint"
        },
        {
          "name" : "connection-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Endpoint-connection-type",
          "type" : "token",
          "documentation" : "Protocol/Profile/Standard to be used with this endpoint connection"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Endpoint-name",
          "type" : "string",
          "documentation" : "A name that this endpoint can be identified by"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Endpoint-status",
          "type" : "token",
          "documentation" : "The current status of the Endpoint (usually expected to be active)"
        }]
      },
      {
        "type" : "EnrollmentRequest",
        "profile" : "http://hl7.org/fhir/StructureDefinition/EnrollmentRequest",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["EnrollmentRequest.subject",
        "EnrollmentRequest.patient"],
        "searchRevInclude" : ["EnrollmentResponse.request"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/EnrollmentRequest-identifier",
          "type" : "token",
          "documentation" : "The business identifier of the Enrollment"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/EnrollmentRequest-subject",
          "type" : "reference",
          "documentation" : "The party to be enrolled"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/EnrollmentRequest-patient",
          "type" : "reference",
          "documentation" : "The party to be enrolled"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/EnrollmentRequest-status",
          "type" : "token",
          "documentation" : "The status of the enrollment"
        }]
      },
      {
        "type" : "EnrollmentResponse",
        "profile" : "http://hl7.org/fhir/StructureDefinition/EnrollmentResponse",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["EnrollmentResponse.request"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/EnrollmentResponse-identifier",
          "type" : "token",
          "documentation" : "The business identifier of the EnrollmentResponse"
        },
        {
          "name" : "request",
          "definition" : "http://hl7.org/fhir/SearchParameter/EnrollmentResponse-request",
          "type" : "reference",
          "documentation" : "The reference to the claim"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/EnrollmentResponse-status",
          "type" : "token",
          "documentation" : "The status of the enrollment response"
        }]
      },
      {
        "type" : "EpisodeOfCare",
        "profile" : "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["EpisodeOfCare.condition",
        "EpisodeOfCare.patient",
        "EpisodeOfCare.organization",
        "EpisodeOfCare.care-manager",
        "EpisodeOfCare.incoming-referral"],
        "searchRevInclude" : ["ChargeItem.context",
        "DocumentReference.encounter",
        "Encounter.episode-of-care",
        "MedicationAdministration.context",
        "MedicationDispense.context",
        "MedicationStatement.context"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "The provided date search value falls within the episode of care's period"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Business Identifier(s) relevant for this EpisodeOfCare"
        },
        {
          "name" : "condition",
          "definition" : "http://hl7.org/fhir/SearchParameter/EpisodeOfCare-condition",
          "type" : "reference",
          "documentation" : "Conditions/problems/diagnoses this episode of care is for"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The patient who is the focus of this episode of care"
        },
        {
          "name" : "organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/EpisodeOfCare-organization",
          "type" : "reference",
          "documentation" : "The organization that has assumed the specific responsibilities of this EpisodeOfCare"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-type",
          "type" : "token",
          "documentation" : "Type/class  - e.g. specialist referral, disease management"
        },
        {
          "name" : "care-manager",
          "definition" : "http://hl7.org/fhir/SearchParameter/EpisodeOfCare-care-manager",
          "type" : "reference",
          "documentation" : "Care manager/care coordinator for the patient"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/EpisodeOfCare-status",
          "type" : "token",
          "documentation" : "The current status of the Episode of Care as provided (does not check the status history collection)"
        },
        {
          "name" : "incoming-referral",
          "definition" : "http://hl7.org/fhir/SearchParameter/EpisodeOfCare-incoming-referral",
          "type" : "reference",
          "documentation" : "Incoming Referral Request"
        }]
      },
      {
        "type" : "EventDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/EventDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["EventDefinition.successor",
        "EventDefinition.derived-from",
        "EventDefinition.predecessor",
        "EventDefinition.composed-of",
        "EventDefinition.depends-on"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-date",
          "type" : "date",
          "documentation" : "The event definition publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-identifier",
          "type" : "token",
          "documentation" : "External identifier for the event definition"
        },
        {
          "name" : "successor",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-successor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the event definition"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the event definition"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-description",
          "type" : "string",
          "documentation" : "The description of the event definition"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-derived-from",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the event definition"
        },
        {
          "name" : "predecessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-predecessor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the event definition"
        },
        {
          "name" : "composed-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-composed-of",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-version",
          "type" : "token",
          "documentation" : "The business version of the event definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the event definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the event definition"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-effective",
          "type" : "date",
          "documentation" : "The time during which the event definition is intended to be in use"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-depends-on",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the event definition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-context",
          "type" : "token",
          "documentation" : "A use context assigned to the event definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the event definition"
        },
        {
          "name" : "topic",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-topic",
          "type" : "token",
          "documentation" : "Topics associated with the module"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the event definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/EventDefinition-status",
          "type" : "token",
          "documentation" : "The current status of the event definition"
        }]
      },
      {
        "type" : "Evidence",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Evidence",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Evidence.successor",
        "Evidence.derived-from",
        "Evidence.predecessor",
        "Evidence.composed-of",
        "Evidence.depends-on"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-date",
          "type" : "date",
          "documentation" : "The evidence publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-identifier",
          "type" : "token",
          "documentation" : "External identifier for the evidence"
        },
        {
          "name" : "successor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-successor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the evidence"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the evidence"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-description",
          "type" : "string",
          "documentation" : "The description of the evidence"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-derived-from",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the evidence"
        },
        {
          "name" : "predecessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-predecessor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the evidence"
        },
        {
          "name" : "composed-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-composed-of",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-version",
          "type" : "token",
          "documentation" : "The business version of the evidence"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the evidence"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the evidence"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-effective",
          "type" : "date",
          "documentation" : "The time during which the evidence is intended to be in use"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-depends-on",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the evidence"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-context",
          "type" : "token",
          "documentation" : "A use context assigned to the evidence"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the evidence"
        },
        {
          "name" : "topic",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-topic",
          "type" : "token",
          "documentation" : "Topics associated with the Evidence"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the evidence"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Evidence-status",
          "type" : "token",
          "documentation" : "The current status of the evidence"
        }]
      },
      {
        "type" : "EvidenceVariable",
        "profile" : "http://hl7.org/fhir/StructureDefinition/EvidenceVariable",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["EvidenceVariable.successor",
        "EvidenceVariable.derived-from",
        "EvidenceVariable.predecessor",
        "EvidenceVariable.composed-of",
        "EvidenceVariable.depends-on"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-date",
          "type" : "date",
          "documentation" : "The evidence variable publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-identifier",
          "type" : "token",
          "documentation" : "External identifier for the evidence variable"
        },
        {
          "name" : "successor",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-successor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the evidence variable"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the evidence variable"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-description",
          "type" : "string",
          "documentation" : "The description of the evidence variable"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-derived-from",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the evidence variable"
        },
        {
          "name" : "predecessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-predecessor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the evidence variable"
        },
        {
          "name" : "composed-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-composed-of",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-version",
          "type" : "token",
          "documentation" : "The business version of the evidence variable"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the evidence variable"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the evidence variable"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-effective",
          "type" : "date",
          "documentation" : "The time during which the evidence variable is intended to be in use"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-depends-on",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the evidence variable"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-context",
          "type" : "token",
          "documentation" : "A use context assigned to the evidence variable"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the evidence variable"
        },
        {
          "name" : "topic",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-topic",
          "type" : "token",
          "documentation" : "Topics associated with the EvidenceVariable"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the evidence variable"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/EvidenceVariable-status",
          "type" : "token",
          "documentation" : "The current status of the evidence variable"
        }]
      },
      {
        "type" : "ExampleScenario",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ExampleScenario",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-date",
          "type" : "date",
          "documentation" : "The example scenario publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-identifier",
          "type" : "token",
          "documentation" : "External identifier for the example scenario"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the example scenario"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the example scenario"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the example scenario"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-version",
          "type" : "token",
          "documentation" : "The business version of the example scenario"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the example scenario"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the example scenario"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the example scenario"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-context",
          "type" : "token",
          "documentation" : "A use context assigned to the example scenario"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the example scenario"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the example scenario"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExampleScenario-status",
          "type" : "token",
          "documentation" : "The current status of the example scenario"
        }]
      },
      {
        "type" : "ExplanationOfBenefit",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ExplanationOfBenefit.coverage",
        "ExplanationOfBenefit.care-team",
        "ExplanationOfBenefit.encounter",
        "ExplanationOfBenefit.payee",
        "ExplanationOfBenefit.provider",
        "ExplanationOfBenefit.patient",
        "ExplanationOfBenefit.detail-udi",
        "ExplanationOfBenefit.claim",
        "ExplanationOfBenefit.enterer",
        "ExplanationOfBenefit.procedure-udi",
        "ExplanationOfBenefit.subdetail-udi",
        "ExplanationOfBenefit.facility",
        "ExplanationOfBenefit.item-udi"],
        "searchParam" : [{
          "name" : "coverage",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-coverage",
          "type" : "reference",
          "documentation" : "The plan under which the claim was adjudicated"
        },
        {
          "name" : "care-team",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-care-team",
          "type" : "reference",
          "documentation" : "Member of the CareTeam"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-identifier",
          "type" : "token",
          "documentation" : "The business identifier of the Explanation of Benefit"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-created",
          "type" : "date",
          "documentation" : "The creation date for the EOB"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-encounter",
          "type" : "reference",
          "documentation" : "Encounters associated with a billed line item"
        },
        {
          "name" : "payee",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-payee",
          "type" : "reference",
          "documentation" : "The party receiving any payment for the Claim"
        },
        {
          "name" : "disposition",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-disposition",
          "type" : "string",
          "documentation" : "The contents of the disposition message"
        },
        {
          "name" : "provider",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-provider",
          "type" : "reference",
          "documentation" : "The reference to the provider"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-patient",
          "type" : "reference",
          "documentation" : "The reference to the patient"
        },
        {
          "name" : "detail-udi",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-detail-udi",
          "type" : "reference",
          "documentation" : "UDI associated with a line item detail product or service"
        },
        {
          "name" : "claim",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-claim",
          "type" : "reference",
          "documentation" : "The reference to the claim"
        },
        {
          "name" : "enterer",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-enterer",
          "type" : "reference",
          "documentation" : "The party responsible for the entry of the Claim"
        },
        {
          "name" : "procedure-udi",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-procedure-udi",
          "type" : "reference",
          "documentation" : "UDI associated with a procedure"
        },
        {
          "name" : "subdetail-udi",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-subdetail-udi",
          "type" : "reference",
          "documentation" : "UDI associated with a line item detail subdetail product or service"
        },
        {
          "name" : "facility",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-facility",
          "type" : "reference",
          "documentation" : "Facility responsible for the goods and services"
        },
        {
          "name" : "item-udi",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-item-udi",
          "type" : "reference",
          "documentation" : "UDI associated with a line item product or service"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-status",
          "type" : "token",
          "documentation" : "Status of the instance"
        }]
      },
      {
        "type" : "FamilyMemberHistory",
        "profile" : "http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["FamilyMemberHistory.patient",
        "FamilyMemberHistory.instantiates-canonical"],
        "searchRevInclude" : ["ClinicalImpression.investigation"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "When history was recorded or last updated"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "A search by a record identifier"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "A search by a condition code"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The identity of a subject to list family member history items for"
        },
        {
          "name" : "sex",
          "definition" : "http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-sex",
          "type" : "token",
          "documentation" : "A search by a sex code of a family member"
        },
        {
          "name" : "instantiates-canonical",
          "definition" : "http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-instantiates-canonical",
          "type" : "reference",
          "documentation" : "Instantiates FHIR protocol or definition"
        },
        {
          "name" : "instantiates-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-instantiates-uri",
          "type" : "uri",
          "documentation" : "Instantiates external protocol or definition"
        },
        {
          "name" : "relationship",
          "definition" : "http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-relationship",
          "type" : "token",
          "documentation" : "A search by a relationship type"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-status",
          "type" : "token",
          "documentation" : "partial | completed | entered-in-error | health-unknown"
        }]
      },
      {
        "type" : "Flag",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Flag",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Flag.subject",
        "Flag.patient",
        "Flag.author",
        "Flag.encounter"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "Time period when flag is active"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Flag-identifier",
          "type" : "token",
          "documentation" : "Business identifier"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Flag-subject",
          "type" : "reference",
          "documentation" : "The identity of a subject to list flags for"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The identity of a subject to list flags for"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/Flag-author",
          "type" : "reference",
          "documentation" : "Flag creator"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Alert relevant during encounter"
        }]
      },
      {
        "type" : "Goal",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Goal",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Goal.patient",
        "Goal.subject"],
        "searchRevInclude" : ["CarePlan.goal"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "External Ids for this goal"
        },
        {
          "name" : "lifecycle-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Goal-lifecycle-status",
          "type" : "token",
          "documentation" : "proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected"
        },
        {
          "name" : "achievement-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Goal-achievement-status",
          "type" : "token",
          "documentation" : "in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who this goal is intended for"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Goal-subject",
          "type" : "reference",
          "documentation" : "Who this goal is intended for"
        },
        {
          "name" : "start-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Goal-start-date",
          "type" : "date",
          "documentation" : "When goal pursuit begins"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Goal-category",
          "type" : "token",
          "documentation" : "E.g. Treatment, dietary, behavioral, etc."
        },
        {
          "name" : "target-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Goal-target-date",
          "type" : "date",
          "documentation" : "Reach goal on or before"
        }]
      },
      {
        "type" : "GraphDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/GraphDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The graph definition publication date"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the graph definition"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the graph definition"
        },
        {
          "name" : "start",
          "definition" : "http://hl7.org/fhir/SearchParameter/GraphDefinition-start",
          "type" : "token",
          "documentation" : "Type of resource at which the graph starts"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the graph definition"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the graph definition"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the graph definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the graph definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the graph definition"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the graph definition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the graph definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the graph definition"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the graph definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the graph definition"
        }]
      },
      {
        "type" : "Group",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Group",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Group.managing-entity",
        "Group.member"],
        "searchRevInclude" : ["AdverseEvent.subject",
        "CarePlan.subject",
        "CarePlan.patient",
        "CareTeam.patient",
        "CareTeam.subject",
        "ChargeItem.subject",
        "ChargeItem.patient",
        "ClinicalImpression.subject",
        "ClinicalImpression.patient",
        "Communication.subject",
        "Communication.patient",
        "Communication.recipient",
        "CommunicationRequest.subject",
        "CommunicationRequest.patient",
        "CommunicationRequest.recipient",
        "Condition.subject",
        "Condition.patient",
        "Consent.actor",
        "DeviceRequest.subject",
        "DeviceRequest.patient",
        "DeviceUseStatement.subject",
        "DeviceUseStatement.patient",
        "DiagnosticReport.subject",
        "DiagnosticReport.patient",
        "DocumentManifest.subject",
        "DocumentManifest.patient",
        "DocumentReference.subject",
        "DocumentReference.patient",
        "Encounter.subject",
        "Encounter.patient",
        "Flag.subject",
        "Flag.patient",
        "Goal.patient",
        "Goal.subject",
        "Group.member",
        "GuidanceResponse.patient",
        "GuidanceResponse.subject",
        "ImagingStudy.subject",
        "ImagingStudy.patient",
        "Invoice.subject",
        "Invoice.patient",
        "List.subject",
        "List.patient",
        "MeasureReport.patient",
        "MeasureReport.subject",
        "Media.subject",
        "Media.patient",
        "MedicationAdministration.subject",
        "MedicationAdministration.patient",
        "MedicationDispense.subject",
        "MedicationDispense.patient",
        "MedicationRequest.subject",
        "MedicationRequest.patient",
        "MedicationStatement.subject",
        "MedicationStatement.patient",
        "Observation.subject",
        "Observation.patient",
        "Procedure.subject",
        "Procedure.patient",
        "RequestGroup.subject",
        "RequestGroup.patient",
        "RiskAssessment.subject",
        "RiskAssessment.patient",
        "ServiceRequest.subject",
        "ServiceRequest.patient",
        "Specimen.subject",
        "Specimen.patient"],
        "searchParam" : [{
          "name" : "actual",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-actual",
          "type" : "token",
          "documentation" : "Descriptive or actual"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-identifier",
          "type" : "token",
          "documentation" : "Unique id"
        },
        {
          "name" : "characteristic-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-characteristic-value",
          "type" : "composite",
          "documentation" : "A composite of both characteristic and value"
        },
        {
          "name" : "managing-entity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-managing-entity",
          "type" : "reference",
          "documentation" : "Entity that is the custodian of the Group's definition"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-code",
          "type" : "token",
          "documentation" : "The kind of resources contained"
        },
        {
          "name" : "member",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-member",
          "type" : "reference",
          "documentation" : "Reference to the group member"
        },
        {
          "name" : "exclude",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-exclude",
          "type" : "token",
          "documentation" : "Group includes or excludes"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-type",
          "type" : "token",
          "documentation" : "The type of resources the group contains"
        },
        {
          "name" : "value",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-value",
          "type" : "token",
          "documentation" : "Value held by characteristic"
        },
        {
          "name" : "characteristic",
          "definition" : "http://hl7.org/fhir/SearchParameter/Group-characteristic",
          "type" : "token",
          "documentation" : "Kind of characteristic"
        }]
      },
      {
        "type" : "GuidanceResponse",
        "profile" : "http://hl7.org/fhir/StructureDefinition/GuidanceResponse",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["GuidanceResponse.patient",
        "GuidanceResponse.subject"],
        "searchParam" : [{
          "name" : "request",
          "definition" : "http://hl7.org/fhir/SearchParameter/GuidanceResponse-request",
          "type" : "token",
          "documentation" : "The identifier of the request associated with the response"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/GuidanceResponse-identifier",
          "type" : "token",
          "documentation" : "The identifier of the guidance response"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/GuidanceResponse-patient",
          "type" : "reference",
          "documentation" : "The identity of a patient to search for guidance response results"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/GuidanceResponse-subject",
          "type" : "reference",
          "documentation" : "The subject that the guidance response is about"
        }]
      },
      {
        "type" : "HealthcareService",
        "profile" : "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["HealthcareService.endpoint",
        "HealthcareService.coverage-area",
        "HealthcareService.organization",
        "HealthcareService.location"],
        "searchRevInclude" : ["Account.subject",
        "Account.patient",
        "Appointment.practitioner",
        "Appointment.actor",
        "Appointment.patient",
        "Appointment.location",
        "AppointmentResponse.actor",
        "AppointmentResponse.practitioner",
        "AppointmentResponse.patient",
        "AppointmentResponse.location",
        "CarePlan.performer",
        "Communication.sender",
        "Communication.recipient",
        "CommunicationRequest.sender",
        "CommunicationRequest.recipient",
        "DeviceRequest.performer",
        "OrganizationAffiliation.service",
        "PractitionerRole.service",
        "Schedule.actor",
        "ServiceRequest.performer",
        "SupplyRequest.supplier",
        "Task.owner"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-identifier",
          "type" : "token",
          "documentation" : "External identifiers for this item"
        },
        {
          "name" : "specialty",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-specialty",
          "type" : "token",
          "documentation" : "The specialty of the service provided by this healthcare service"
        },
        {
          "name" : "endpoint",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-endpoint",
          "type" : "reference",
          "documentation" : "Technical endpoints providing access to electronic services operated for the healthcare service"
        },
        {
          "name" : "service-category",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-service-category",
          "type" : "token",
          "documentation" : "Service Category of the Healthcare Service"
        },
        {
          "name" : "coverage-area",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-coverage-area",
          "type" : "reference",
          "documentation" : "Location(s) service is intended for/available to"
        },
        {
          "name" : "service-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-service-type",
          "type" : "token",
          "documentation" : "The type of service provided by this healthcare service"
        },
        {
          "name" : "organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-organization",
          "type" : "reference",
          "documentation" : "The organization that provides this Healthcare Service"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-name",
          "type" : "string",
          "documentation" : "A portion of the Healthcare service name"
        },
        {
          "name" : "active",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-active",
          "type" : "token",
          "documentation" : "The Healthcare Service is currently marked as active"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-location",
          "type" : "reference",
          "documentation" : "The location of the Healthcare Service"
        },
        {
          "name" : "program",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-program",
          "type" : "token",
          "documentation" : "One of the Programs supported by this HealthcareService"
        },
        {
          "name" : "characteristic",
          "definition" : "http://hl7.org/fhir/SearchParameter/HealthcareService-characteristic",
          "type" : "token",
          "documentation" : "One of the HealthcareService's characteristics"
        }]
      },
      {
        "type" : "ImagingStudy",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ImagingStudy",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ImagingStudy.performer",
        "ImagingStudy.subject",
        "ImagingStudy.interpreter",
        "ImagingStudy.encounter",
        "ImagingStudy.referrer",
        "ImagingStudy.endpoint",
        "ImagingStudy.patient",
        "ImagingStudy.basedon"],
        "searchRevInclude" : ["ChargeItem.service",
        "ClinicalImpression.investigation",
        "Observation.derived-from",
        "Observation.part-of"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Identifiers for the Study, such as DICOM Study Instance UID and Accession number"
        },
        {
          "name" : "reason",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-reason",
          "type" : "token",
          "documentation" : "The reason for the study"
        },
        {
          "name" : "dicom-class",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class",
          "type" : "token",
          "documentation" : "The type of the instance"
        },
        {
          "name" : "modality",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-modality",
          "type" : "token",
          "documentation" : "The modality of the series"
        },
        {
          "name" : "bodysite",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite",
          "type" : "token",
          "documentation" : "The body site studied"
        },
        {
          "name" : "instance",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-instance",
          "type" : "token",
          "documentation" : "SOP Instance UID for an instance"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-performer",
          "type" : "reference",
          "documentation" : "The person who performed the study"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-subject",
          "type" : "reference",
          "documentation" : "Who the study is about"
        },
        {
          "name" : "started",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-started",
          "type" : "date",
          "documentation" : "When the study was started"
        },
        {
          "name" : "interpreter",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-interpreter",
          "type" : "reference",
          "documentation" : "Who interpreted the images"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-encounter",
          "type" : "reference",
          "documentation" : "The context of the study"
        },
        {
          "name" : "referrer",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-referrer",
          "type" : "reference",
          "documentation" : "The referring physician"
        },
        {
          "name" : "endpoint",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-endpoint",
          "type" : "reference",
          "documentation" : "The endpoint for the study or series"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who the study is about"
        },
        {
          "name" : "series",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-series",
          "type" : "token",
          "documentation" : "DICOM Series Instance UID for a series"
        },
        {
          "name" : "basedon",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-basedon",
          "type" : "reference",
          "documentation" : "The order for the image"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImagingStudy-status",
          "type" : "token",
          "documentation" : "The status of the study"
        }]
      },
      {
        "type" : "Immunization",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Immunization",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Immunization.performer",
        "Immunization.reaction",
        "Immunization.manufacturer",
        "Immunization.patient",
        "Immunization.reason-reference",
        "Immunization.location"],
        "searchRevInclude" : ["AdverseEvent.substance",
        "ChargeItem.service",
        "ImmunizationEvaluation.immunization-event",
        "ImmunizationRecommendation.support",
        "Observation.part-of"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "Vaccination  (non)-Administration Date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Business identifier"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-performer",
          "type" : "reference",
          "documentation" : "The practitioner or organization who played a role in the vaccination"
        },
        {
          "name" : "reaction",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-reaction",
          "type" : "reference",
          "documentation" : "Additional information on reaction"
        },
        {
          "name" : "lot-number",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-lot-number",
          "type" : "string",
          "documentation" : "Vaccine Lot Number"
        },
        {
          "name" : "status-reason",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-status-reason",
          "type" : "token",
          "documentation" : "Reason why the vaccine was not administered"
        },
        {
          "name" : "reason-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-reason-code",
          "type" : "token",
          "documentation" : "Reason why the vaccine was administered"
        },
        {
          "name" : "manufacturer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-manufacturer",
          "type" : "reference",
          "documentation" : "Vaccine Manufacturer"
        },
        {
          "name" : "target-disease",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-target-disease",
          "type" : "token",
          "documentation" : "The target disease the dose is being administered against"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The patient for the vaccination record"
        },
        {
          "name" : "series",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-series",
          "type" : "string",
          "documentation" : "The series being followed by the provider"
        },
        {
          "name" : "vaccine-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-vaccine-code",
          "type" : "token",
          "documentation" : "Vaccine Product Administered"
        },
        {
          "name" : "reason-reference",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-reason-reference",
          "type" : "reference",
          "documentation" : "Why immunization occurred"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-location",
          "type" : "reference",
          "documentation" : "The service delivery location or facility in which the vaccine was / was to be administered"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-status",
          "type" : "token",
          "documentation" : "Immunization event status"
        },
        {
          "name" : "reaction-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Immunization-reaction-date",
          "type" : "date",
          "documentation" : "When reaction started"
        }]
      },
      {
        "type" : "ImmunizationEvaluation",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ImmunizationEvaluation.patient",
        "ImmunizationEvaluation.immunization-event"],
        "searchRevInclude" : ["ImmunizationRecommendation.support"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-date",
          "type" : "date",
          "documentation" : "Date the evaluation was generated"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-identifier",
          "type" : "token",
          "documentation" : "ID of the evaluation"
        },
        {
          "name" : "target-disease",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-target-disease",
          "type" : "token",
          "documentation" : "The vaccine preventable disease being evaluated against"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-patient",
          "type" : "reference",
          "documentation" : "The patient being evaluated"
        },
        {
          "name" : "dose-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-dose-status",
          "type" : "token",
          "documentation" : "The status of the dose relative to published recommendations"
        },
        {
          "name" : "immunization-event",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-immunization-event",
          "type" : "reference",
          "documentation" : "The vaccine administration event being evaluated"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-status",
          "type" : "token",
          "documentation" : "Immunization evaluation status"
        }]
      },
      {
        "type" : "ImmunizationRecommendation",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ImmunizationRecommendation.patient",
        "ImmunizationRecommendation.information",
        "ImmunizationRecommendation.support"],
        "searchRevInclude" : ["Appointment.reason-reference",
        "DiagnosticReport.based-on",
        "Encounter.reason-reference",
        "Observation.based-on"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-date",
          "type" : "date",
          "documentation" : "Date recommendation(s) created"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-identifier",
          "type" : "token",
          "documentation" : "Business identifier"
        },
        {
          "name" : "target-disease",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-target-disease",
          "type" : "token",
          "documentation" : "Disease to be immunized against"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-patient",
          "type" : "reference",
          "documentation" : "Who this profile is for"
        },
        {
          "name" : "vaccine-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-vaccine-type",
          "type" : "token",
          "documentation" : "Vaccine  or vaccine group recommendation applies to"
        },
        {
          "name" : "information",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-information",
          "type" : "reference",
          "documentation" : "Patient observations supporting recommendation"
        },
        {
          "name" : "support",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-support",
          "type" : "reference",
          "documentation" : "Past immunizations supporting recommendation"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-status",
          "type" : "token",
          "documentation" : "Vaccine recommendation status"
        }]
      },
      {
        "type" : "ImplementationGuide",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ImplementationGuide",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ImplementationGuide.resource",
        "ImplementationGuide.global",
        "ImplementationGuide.depends-on"],
        "searchRevInclude" : ["CapabilityStatement.guide",
        "ImplementationGuide.depends-on"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The implementation guide publication date"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the implementation guide"
        },
        {
          "name" : "resource",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImplementationGuide-resource",
          "type" : "reference",
          "documentation" : "Location of the resource"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the implementation guide"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the implementation guide"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the implementation guide"
        },
        {
          "name" : "experimental",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental",
          "type" : "token",
          "documentation" : "For testing purposes, not real usage"
        },
        {
          "name" : "global",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImplementationGuide-global",
          "type" : "reference",
          "documentation" : "Profile that all resources must conform to"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the implementation guide"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the implementation guide"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the implementation guide"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the implementation guide"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/ImplementationGuide-depends-on",
          "type" : "reference",
          "documentation" : "Identity of the IG that this depends on"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the implementation guide"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the implementation guide"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the implementation guide"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the implementation guide"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the implementation guide"
        }]
      },
      {
        "type" : "InsurancePlan",
        "profile" : "http://hl7.org/fhir/StructureDefinition/InsurancePlan",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["InsurancePlan.owned-by",
        "InsurancePlan.administered-by",
        "InsurancePlan.endpoint"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-identifier",
          "type" : "token",
          "documentation" : "Any identifier for the organization (not the accreditation issuer's identifier)"
        },
        {
          "name" : "address",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-address",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
        },
        {
          "name" : "address-state",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-address-state",
          "type" : "string",
          "documentation" : "A state specified in an address"
        },
        {
          "name" : "owned-by",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-owned-by",
          "type" : "reference",
          "documentation" : "An organization of which this organization forms a part"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-type",
          "type" : "token",
          "documentation" : "A code for the type of organization"
        },
        {
          "name" : "address-postalcode",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-address-postalcode",
          "type" : "string",
          "documentation" : "A postal code specified in an address"
        },
        {
          "name" : "administered-by",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-administered-by",
          "type" : "reference",
          "documentation" : "Product administrator"
        },
        {
          "name" : "address-country",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-address-country",
          "type" : "string",
          "documentation" : "A country specified in an address"
        },
        {
          "name" : "endpoint",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-endpoint",
          "type" : "reference",
          "documentation" : "Technical endpoint"
        },
        {
          "name" : "phonetic",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-phonetic",
          "type" : "string",
          "documentation" : "A portion of the organization's name using some kind of phonetic matching algorithm"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-name",
          "type" : "string",
          "documentation" : "A portion of the organization's name or alias"
        },
        {
          "name" : "address-use",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-address-use",
          "type" : "token",
          "documentation" : "A use code specified in an address"
        },
        {
          "name" : "address-city",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-address-city",
          "type" : "string",
          "documentation" : "A city specified in an address"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/InsurancePlan-status",
          "type" : "token",
          "documentation" : "Is the Organization record active"
        }]
      },
      {
        "type" : "Invoice",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Invoice",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Invoice.subject",
        "Invoice.issuer",
        "Invoice.participant",
        "Invoice.patient",
        "Invoice.recipient",
        "Invoice.account"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-date",
          "type" : "date",
          "documentation" : "Invoice date / posting date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-identifier",
          "type" : "token",
          "documentation" : "Business Identifier for item"
        },
        {
          "name" : "totalgross",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-totalgross",
          "type" : "quantity",
          "documentation" : "Gross total of this Invoice"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-subject",
          "type" : "reference",
          "documentation" : "Recipient(s) of goods and services"
        },
        {
          "name" : "participant-role",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-participant-role",
          "type" : "token",
          "documentation" : "Type of involvement in creation of this Invoice"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-type",
          "type" : "token",
          "documentation" : "Type of Invoice"
        },
        {
          "name" : "issuer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-issuer",
          "type" : "reference",
          "documentation" : "Issuing Organization of Invoice"
        },
        {
          "name" : "participant",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-participant",
          "type" : "reference",
          "documentation" : "Individual who was involved"
        },
        {
          "name" : "totalnet",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-totalnet",
          "type" : "quantity",
          "documentation" : "Net total of this Invoice"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-patient",
          "type" : "reference",
          "documentation" : "Recipient(s) of goods and services"
        },
        {
          "name" : "recipient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-recipient",
          "type" : "reference",
          "documentation" : "Recipient of this invoice"
        },
        {
          "name" : "account",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-account",
          "type" : "reference",
          "documentation" : "Account that is being balanced"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Invoice-status",
          "type" : "token",
          "documentation" : "draft | issued | balanced | cancelled | entered-in-error"
        }]
      },
      {
        "type" : "Library",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Library",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Library.successor",
        "Library.derived-from",
        "Library.predecessor",
        "Library.composed-of",
        "Library.depends-on"],
        "searchRevInclude" : ["ActivityDefinition.depends-on",
        "Measure.depends-on",
        "PlanDefinition.depends-on",
        "ResearchDefinition.depends-on",
        "ResearchElementDefinition.depends-on"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-date",
          "type" : "date",
          "documentation" : "The library publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-identifier",
          "type" : "token",
          "documentation" : "External identifier for the library"
        },
        {
          "name" : "successor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-successor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the library"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the library"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-description",
          "type" : "string",
          "documentation" : "The description of the library"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-derived-from",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the library"
        },
        {
          "name" : "predecessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-predecessor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the library"
        },
        {
          "name" : "composed-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-composed-of",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-type",
          "type" : "token",
          "documentation" : "The type of the library (e.g. logic-library, model-definition, asset-collection, module-definition)"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-version",
          "type" : "token",
          "documentation" : "The business version of the library"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the library"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the library"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-effective",
          "type" : "date",
          "documentation" : "The time during which the library is intended to be in use"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-depends-on",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the library"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-context",
          "type" : "token",
          "documentation" : "A use context assigned to the library"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the library"
        },
        {
          "name" : "topic",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-topic",
          "type" : "token",
          "documentation" : "Topics associated with the module"
        },
        {
          "name" : "content-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-content-type",
          "type" : "token",
          "documentation" : "The type of content in the library (e.g. text/cql)"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the library"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Library-status",
          "type" : "token",
          "documentation" : "The current status of the library"
        }]
      },
      {
        "type" : "Linkage",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Linkage",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Linkage.item",
        "Linkage.author",
        "Linkage.source"],
        "searchParam" : [{
          "name" : "item",
          "definition" : "http://hl7.org/fhir/SearchParameter/Linkage-item",
          "type" : "reference",
          "documentation" : "Matches on any item in the Linkage"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/Linkage-author",
          "type" : "reference",
          "documentation" : "Author of the Linkage"
        },
        {
          "name" : "source",
          "definition" : "http://hl7.org/fhir/SearchParameter/Linkage-source",
          "type" : "reference",
          "documentation" : "Matches on any item in the Linkage with a type of 'source'"
        }]
      },
      {
        "type" : "List",
        "profile" : "http://hl7.org/fhir/StructureDefinition/List",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["List.item",
        "List.subject",
        "List.patient",
        "List.source",
        "List.encounter"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "When the list was prepared"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Business identifier"
        },
        {
          "name" : "item",
          "definition" : "http://hl7.org/fhir/SearchParameter/List-item",
          "type" : "reference",
          "documentation" : "Actual entry"
        },
        {
          "name" : "empty-reason",
          "definition" : "http://hl7.org/fhir/SearchParameter/List-empty-reason",
          "type" : "token",
          "documentation" : "Why list is empty"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "What the purpose of this list is"
        },
        {
          "name" : "notes",
          "definition" : "http://hl7.org/fhir/SearchParameter/List-notes",
          "type" : "string",
          "documentation" : "The annotation  - text content (as markdown)"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/List-subject",
          "type" : "reference",
          "documentation" : "If all resources have the same subject"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "If all resources have the same subject"
        },
        {
          "name" : "source",
          "definition" : "http://hl7.org/fhir/SearchParameter/List-source",
          "type" : "reference",
          "documentation" : "Who and/or what defined the list contents (aka Author)"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Context in which list created"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/List-title",
          "type" : "string",
          "documentation" : "Descriptive name for the list"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/List-status",
          "type" : "token",
          "documentation" : "current | retired | entered-in-error"
        }]
      },
      {
        "type" : "Location",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Location",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Location.partof",
        "Location.endpoint",
        "Location.organization"],
        "searchRevInclude" : ["Account.subject",
        "Account.patient",
        "AdverseEvent.location",
        "Appointment.practitioner",
        "Appointment.actor",
        "Appointment.patient",
        "Appointment.location",
        "AppointmentResponse.actor",
        "AppointmentResponse.practitioner",
        "AppointmentResponse.patient",
        "AppointmentResponse.location",
        "Claim.facility",
        "Contract.domain",
        "CoverageEligibilityRequest.facility",
        "Device.location",
        "DeviceRequest.subject",
        "DeviceRequest.patient",
        "DiagnosticReport.subject",
        "DiagnosticReport.patient",
        "Encounter.location",
        "ExplanationOfBenefit.facility",
        "Flag.subject",
        "Flag.patient",
        "HealthcareService.coverage-area",
        "HealthcareService.location",
        "Immunization.location",
        "List.subject",
        "List.patient",
        "Location.partof",
        "MeasureReport.patient",
        "MeasureReport.subject",
        "MeasureReport.reporter",
        "Media.subject",
        "Media.patient",
        "MedicationDispense.destination",
        "Observation.subject",
        "Observation.patient",
        "OrganizationAffiliation.location",
        "PractitionerRole.location",
        "Procedure.location",
        "Provenance.location",
        "ResearchStudy.site",
        "Schedule.actor",
        "ServiceRequest.subject",
        "ServiceRequest.patient",
        "Specimen.subject",
        "Specimen.patient",
        "SupplyRequest.subject"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-identifier",
          "type" : "token",
          "documentation" : "An identifier for the location"
        },
        {
          "name" : "partof",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-partof",
          "type" : "reference",
          "documentation" : "A location of which this location is a part"
        },
        {
          "name" : "address",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-address",
          "type" : "string",
          "documentation" : "A (part of the) address of the location"
        },
        {
          "name" : "address-state",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-address-state",
          "type" : "string",
          "documentation" : "A state specified in an address"
        },
        {
          "name" : "operational-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-operational-status",
          "type" : "token",
          "documentation" : "Searches for locations (typically bed/room) that have an operational status (e.g. contaminated, housekeeping)"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-type",
          "type" : "token",
          "documentation" : "A code for the type of location"
        },
        {
          "name" : "address-postalcode",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-address-postalcode",
          "type" : "string",
          "documentation" : "A postal code specified in an address"
        },
        {
          "name" : "address-country",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-address-country",
          "type" : "string",
          "documentation" : "A country specified in an address"
        },
        {
          "name" : "endpoint",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-endpoint",
          "type" : "reference",
          "documentation" : "Technical endpoints providing access to services operated for the location"
        },
        {
          "name" : "organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-organization",
          "type" : "reference",
          "documentation" : "Searches for locations that are managed by the provided organization"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-name",
          "type" : "string",
          "documentation" : "A portion of the location's name or alias"
        },
        {
          "name" : "address-use",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-address-use",
          "type" : "token",
          "documentation" : "A use code specified in an address"
        },
        {
          "name" : "near",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-near",
          "type" : "special",
          "documentation" : "Search for locations where the location.position is near to, or within a specified distance of, the provided coordinates expressed as [latitude]|[longitude]|[distance]|[units] (using the WGS84 datum, see notes).\nIf the units are omitted, then kms should be assumed. If the distance is omitted, then the server can use its own discretion as to what distances should be considered near (and units are irrelevant)\n\nServers may search using various techniques that might have differing accuracies, depending on implementation efficiency.\n\nRequires the near-distance parameter to be provided also"
        },
        {
          "name" : "address-city",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-address-city",
          "type" : "string",
          "documentation" : "A city specified in an address"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Location-status",
          "type" : "token",
          "documentation" : "Searches for locations with a specific kind of status"
        }]
      },
      {
        "type" : "Measure",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Measure",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Measure.successor",
        "Measure.derived-from",
        "Measure.predecessor",
        "Measure.composed-of",
        "Measure.depends-on"],
        "searchRevInclude" : ["CarePlan.instantiates-canonical",
        "Communication.instantiates-canonical",
        "FamilyMemberHistory.instantiates-canonical",
        "MeasureReport.measure",
        "Procedure.instantiates-canonical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-date",
          "type" : "date",
          "documentation" : "The measure publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-identifier",
          "type" : "token",
          "documentation" : "External identifier for the measure"
        },
        {
          "name" : "successor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-successor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the measure"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the measure"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-description",
          "type" : "string",
          "documentation" : "The description of the measure"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-derived-from",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the measure"
        },
        {
          "name" : "predecessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-predecessor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the measure"
        },
        {
          "name" : "composed-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-composed-of",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-version",
          "type" : "token",
          "documentation" : "The business version of the measure"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the measure"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the measure"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-effective",
          "type" : "date",
          "documentation" : "The time during which the measure is intended to be in use"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-depends-on",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the measure"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-context",
          "type" : "token",
          "documentation" : "A use context assigned to the measure"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the measure"
        },
        {
          "name" : "topic",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-topic",
          "type" : "token",
          "documentation" : "Topics associated with the measure"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the measure"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Measure-status",
          "type" : "token",
          "documentation" : "The current status of the measure"
        }]
      },
      {
        "type" : "MeasureReport",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MeasureReport",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MeasureReport.measure",
        "MeasureReport.patient",
        "MeasureReport.subject",
        "MeasureReport.reporter",
        "MeasureReport.evaluated-resource"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/MeasureReport-date",
          "type" : "date",
          "documentation" : "The date of the measure report"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/MeasureReport-identifier",
          "type" : "token",
          "documentation" : "External identifier of the measure report to be returned"
        },
        {
          "name" : "period",
          "definition" : "http://hl7.org/fhir/SearchParameter/MeasureReport-period",
          "type" : "date",
          "documentation" : "The period of the measure report"
        },
        {
          "name" : "measure",
          "definition" : "http://hl7.org/fhir/SearchParameter/MeasureReport-measure",
          "type" : "reference",
          "documentation" : "The measure to return measure report results for"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/MeasureReport-patient",
          "type" : "reference",
          "documentation" : "The identity of a patient to search for individual measure report results for"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MeasureReport-subject",
          "type" : "reference",
          "documentation" : "The identity of a subject to search for individual measure report results for"
        },
        {
          "name" : "reporter",
          "definition" : "http://hl7.org/fhir/SearchParameter/MeasureReport-reporter",
          "type" : "reference",
          "documentation" : "The reporter to return measure report results for"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/MeasureReport-status",
          "type" : "token",
          "documentation" : "The status of the measure report"
        },
        {
          "name" : "evaluated-resource",
          "definition" : "http://hl7.org/fhir/SearchParameter/MeasureReport-evaluated-resource",
          "type" : "reference",
          "documentation" : "An evaluated resource referenced by the measure report"
        }]
      },
      {
        "type" : "Media",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Media",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Media.subject",
        "Media.encounter",
        "Media.operator",
        "Media.based-on",
        "Media.patient",
        "Media.device"],
        "searchRevInclude" : ["ClinicalImpression.finding-ref",
        "ClinicalImpression.investigation",
        "DiagnosticReport.media",
        "MedicationKnowledge.monograph",
        "Observation.derived-from"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-identifier",
          "type" : "token",
          "documentation" : "Identifier(s) for the image"
        },
        {
          "name" : "modality",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-modality",
          "type" : "token",
          "documentation" : "The type of acquisition equipment/process"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-subject",
          "type" : "reference",
          "documentation" : "Who/What this Media is a record of"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-created",
          "type" : "date",
          "documentation" : "When Media was collected"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-encounter",
          "type" : "reference",
          "documentation" : "Encounter associated with media"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-type",
          "type" : "token",
          "documentation" : "Classification of media as image, video, or audio"
        },
        {
          "name" : "operator",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-operator",
          "type" : "reference",
          "documentation" : "The person who generated the image"
        },
        {
          "name" : "view",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-view",
          "type" : "token",
          "documentation" : "Imaging view, e.g. Lateral or Antero-posterior"
        },
        {
          "name" : "site",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-site",
          "type" : "token",
          "documentation" : "Observed body part"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-based-on",
          "type" : "reference",
          "documentation" : "Procedure that caused this media to be created"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-patient",
          "type" : "reference",
          "documentation" : "Who/What this Media is a record of"
        },
        {
          "name" : "device",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-device",
          "type" : "reference",
          "documentation" : "Observing Device"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Media-status",
          "type" : "token",
          "documentation" : "preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown"
        }]
      },
      {
        "type" : "Medication",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Medication",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Medication.ingredient",
        "Medication.manufacturer"],
        "searchRevInclude" : ["AdverseEvent.substance",
        "Flag.subject",
        "Flag.patient",
        "Group.member",
        "Medication.ingredient",
        "MedicationAdministration.medication",
        "MedicationDispense.medication",
        "MedicationRequest.medication",
        "MedicationStatement.medication",
        "MedicinalProductContraindication.subject",
        "MedicinalProductIndication.subject",
        "MedicinalProductInteraction.subject",
        "MedicinalProductUndesirableEffect.subject"],
        "searchParam" : [{
          "name" : "ingredient-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Medication-ingredient-code",
          "type" : "token",
          "documentation" : "Returns medications for this ingredient code"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Medication-identifier",
          "type" : "token",
          "documentation" : "Returns medications with this external identifier"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "Returns medications for a specific code"
        },
        {
          "name" : "ingredient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Medication-ingredient",
          "type" : "reference",
          "documentation" : "Returns medications for this ingredient reference"
        },
        {
          "name" : "form",
          "definition" : "http://hl7.org/fhir/SearchParameter/Medication-form",
          "type" : "token",
          "documentation" : "Returns medications for a specific dose form"
        },
        {
          "name" : "lot-number",
          "definition" : "http://hl7.org/fhir/SearchParameter/Medication-lot-number",
          "type" : "token",
          "documentation" : "Returns medications in a batch with this lot number"
        },
        {
          "name" : "expiration-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Medication-expiration-date",
          "type" : "date",
          "documentation" : "Returns medications in a batch with this expiration date"
        },
        {
          "name" : "manufacturer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Medication-manufacturer",
          "type" : "reference",
          "documentation" : "Returns medications made or sold for this manufacturer"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Medication-status",
          "type" : "token",
          "documentation" : "Returns medications for this status"
        }]
      },
      {
        "type" : "MedicationAdministration",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicationAdministration.request",
        "MedicationAdministration.performer",
        "MedicationAdministration.subject",
        "MedicationAdministration.medication",
        "MedicationAdministration.patient",
        "MedicationAdministration.context",
        "MedicationAdministration.device"],
        "searchRevInclude" : ["AdverseEvent.substance",
        "ChargeItem.service",
        "MedicationStatement.part-of",
        "Observation.part-of",
        "Procedure.part-of"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Return administrations with this external identifier"
        },
        {
          "name" : "request",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationAdministration-request",
          "type" : "reference",
          "documentation" : "The identity of a request to list administrations from"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "Return administrations of this medication code"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationAdministration-performer",
          "type" : "reference",
          "documentation" : "The identity of the individual who administered the medication"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationAdministration-subject",
          "type" : "reference",
          "documentation" : "The identity of the individual or group to list administrations for"
        },
        {
          "name" : "medication",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-medication",
          "type" : "reference",
          "documentation" : "Return administrations of this medication resource"
        },
        {
          "name" : "reason-given",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-given",
          "type" : "token",
          "documentation" : "Reasons for administering the medication"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The identity of a patient to list administrations  for"
        },
        {
          "name" : "effective-time",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationAdministration-effective-time",
          "type" : "date",
          "documentation" : "Date administration happened (or did not happen)"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationAdministration-context",
          "type" : "reference",
          "documentation" : "Return administrations that share this encounter or episode of care"
        },
        {
          "name" : "reason-not-given",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-not-given",
          "type" : "token",
          "documentation" : "Reasons for not administering the medication"
        },
        {
          "name" : "device",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationAdministration-device",
          "type" : "reference",
          "documentation" : "Return administrations with this administration device identity"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-status",
          "type" : "token",
          "documentation" : "MedicationAdministration event status (for example one of active/paused/completed/nullified)"
        }]
      },
      {
        "type" : "MedicationDispense",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicationDispense",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicationDispense.performer",
        "MedicationDispense.receiver",
        "MedicationDispense.subject",
        "MedicationDispense.destination",
        "MedicationDispense.medication",
        "MedicationDispense.responsibleparty",
        "MedicationDispense.prescription",
        "MedicationDispense.patient",
        "MedicationDispense.context"],
        "searchRevInclude" : ["ChargeItem.service",
        "MedicationStatement.part-of",
        "Observation.part-of"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Returns dispenses with this external identifier"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationDispense-performer",
          "type" : "reference",
          "documentation" : "Returns dispenses performed by a specific individual"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "Returns dispenses of this medicine code"
        },
        {
          "name" : "receiver",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationDispense-receiver",
          "type" : "reference",
          "documentation" : "The identity of a receiver to list dispenses for"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationDispense-subject",
          "type" : "reference",
          "documentation" : "The identity of a patient for whom to list dispenses"
        },
        {
          "name" : "destination",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationDispense-destination",
          "type" : "reference",
          "documentation" : "Returns dispenses that should be sent to a specific destination"
        },
        {
          "name" : "medication",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-medication",
          "type" : "reference",
          "documentation" : "Returns dispenses of this medicine resource"
        },
        {
          "name" : "responsibleparty",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationDispense-responsibleparty",
          "type" : "reference",
          "documentation" : "Returns dispenses with the specified responsible party"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationDispense-type",
          "type" : "token",
          "documentation" : "Returns dispenses of a specific type"
        },
        {
          "name" : "whenhandedover",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationDispense-whenhandedover",
          "type" : "date",
          "documentation" : "Returns dispenses handed over on this date"
        },
        {
          "name" : "whenprepared",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationDispense-whenprepared",
          "type" : "date",
          "documentation" : "Returns dispenses prepared on this date"
        },
        {
          "name" : "prescription",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-prescription",
          "type" : "reference",
          "documentation" : "The identity of a prescription to list dispenses from"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The identity of a patient to list dispenses  for"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationDispense-context",
          "type" : "reference",
          "documentation" : "Returns dispenses with a specific context (episode or episode of care)"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-status",
          "type" : "token",
          "documentation" : "Returns dispenses with a specified dispense status"
        }]
      },
      {
        "type" : "MedicationKnowledge",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicationKnowledge",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicationKnowledge.ingredient",
        "MedicationKnowledge.manufacturer",
        "MedicationKnowledge.monograph"],
        "searchParam" : [{
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-code",
          "type" : "token",
          "documentation" : "Code that identifies this medication"
        },
        {
          "name" : "ingredient",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-ingredient",
          "type" : "reference",
          "documentation" : "Medication(s) or substance(s) contained in the medication"
        },
        {
          "name" : "doseform",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-doseform",
          "type" : "token",
          "documentation" : "powder | tablets | capsule +"
        },
        {
          "name" : "classification-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-classification-type",
          "type" : "token",
          "documentation" : "The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification)"
        },
        {
          "name" : "monograph-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monograph-type",
          "type" : "token",
          "documentation" : "The category of medication document"
        },
        {
          "name" : "classification",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-classification",
          "type" : "token",
          "documentation" : "Specific category assigned to the medication"
        },
        {
          "name" : "manufacturer",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-manufacturer",
          "type" : "reference",
          "documentation" : "Manufacturer of the item"
        },
        {
          "name" : "ingredient-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-ingredient-code",
          "type" : "token",
          "documentation" : "Medication(s) or substance(s) contained in the medication"
        },
        {
          "name" : "source-cost",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-source-cost",
          "type" : "token",
          "documentation" : "The source or owner for the price information"
        },
        {
          "name" : "monograph",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monograph",
          "type" : "reference",
          "documentation" : "Associated documentation about the medication"
        },
        {
          "name" : "monitoring-program-name",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monitoring-program-name",
          "type" : "token",
          "documentation" : "Name of the reviewing program"
        },
        {
          "name" : "monitoring-program-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monitoring-program-type",
          "type" : "token",
          "documentation" : "Type of program under which the medication is monitored"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationKnowledge-status",
          "type" : "token",
          "documentation" : "active | inactive | entered-in-error"
        }]
      },
      {
        "type" : "MedicationRequest",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicationRequest.requester",
        "MedicationRequest.intended-dispenser",
        "MedicationRequest.subject",
        "MedicationRequest.medication",
        "MedicationRequest.encounter",
        "MedicationRequest.patient",
        "MedicationRequest.intended-performer"],
        "searchRevInclude" : ["CarePlan.activity-reference",
        "DiagnosticReport.based-on",
        "MedicationAdministration.request",
        "MedicationDispense.prescription",
        "Observation.based-on",
        "ServiceRequest.based-on"],
        "searchParam" : [{
          "name" : "requester",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationRequest-requester",
          "type" : "reference",
          "documentation" : "Returns prescriptions prescribed by this prescriber"
        },
        {
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-date",
          "type" : "date",
          "documentation" : "Returns medication request to be administered on a specific date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Return prescriptions with this external identifier"
        },
        {
          "name" : "intended-dispenser",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationRequest-intended-dispenser",
          "type" : "reference",
          "documentation" : "Returns prescriptions intended to be dispensed by this Organization"
        },
        {
          "name" : "authoredon",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationRequest-authoredon",
          "type" : "date",
          "documentation" : "Return prescriptions written on this date"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "Return prescriptions of this medication code"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationRequest-subject",
          "type" : "reference",
          "documentation" : "The identity of a patient to list orders  for"
        },
        {
          "name" : "medication",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-medication",
          "type" : "reference",
          "documentation" : "Return prescriptions for this medication reference"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-encounter",
          "type" : "reference",
          "documentation" : "Return prescriptions with this encounter identifier"
        },
        {
          "name" : "priority",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationRequest-priority",
          "type" : "token",
          "documentation" : "Returns prescriptions with different priorities"
        },
        {
          "name" : "intent",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationRequest-intent",
          "type" : "token",
          "documentation" : "Returns prescriptions with different intents"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Returns prescriptions for a specific patient"
        },
        {
          "name" : "intended-performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationRequest-intended-performer",
          "type" : "reference",
          "documentation" : "Returns the intended performer of the administration of the medication request"
        },
        {
          "name" : "intended-performertype",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationRequest-intended-performertype",
          "type" : "token",
          "documentation" : "Returns requests for a specific type of performer"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationRequest-category",
          "type" : "token",
          "documentation" : "Returns prescriptions with different categories"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-status",
          "type" : "token",
          "documentation" : "Status of the prescription"
        }]
      },
      {
        "type" : "MedicationStatement",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicationStatement.subject",
        "MedicationStatement.patient",
        "MedicationStatement.context",
        "MedicationStatement.medication",
        "MedicationStatement.part-of",
        "MedicationStatement.source"],
        "searchRevInclude" : ["AdverseEvent.substance",
        "MedicationStatement.part-of",
        "Observation.part-of"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Return statements with this external identifier"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationStatement-effective",
          "type" : "date",
          "documentation" : "Date when patient was taking (or not taking) the medication"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "Return statements of this medication code"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationStatement-subject",
          "type" : "reference",
          "documentation" : "The identity of a patient, animal or group to list statements for"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Returns statements for a specific patient."
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationStatement-context",
          "type" : "reference",
          "documentation" : "Returns statements for a specific context (episode or episode of Care)."
        },
        {
          "name" : "medication",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-medication",
          "type" : "reference",
          "documentation" : "Return statements of this medication reference"
        },
        {
          "name" : "part-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationStatement-part-of",
          "type" : "reference",
          "documentation" : "Returns statements that are part of another event."
        },
        {
          "name" : "source",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationStatement-source",
          "type" : "reference",
          "documentation" : "Who or where the information in the statement came from"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicationStatement-category",
          "type" : "token",
          "documentation" : "Returns statements of this category of medicationstatement"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/medications-status",
          "type" : "token",
          "documentation" : "Return statements that match the given status"
        }]
      },
      {
        "type" : "MedicinalProduct",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProduct",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchRevInclude" : ["MedicinalProductAuthorization.subject",
        "MedicinalProductContraindication.subject",
        "MedicinalProductIndication.subject",
        "MedicinalProductInteraction.subject",
        "MedicinalProductPackaged.subject",
        "MedicinalProductUndesirableEffect.subject"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProduct-identifier",
          "type" : "token",
          "documentation" : "Business identifier for this product. Could be an MPID"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProduct-name",
          "type" : "string",
          "documentation" : "The full product name"
        },
        {
          "name" : "name-language",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProduct-name-language",
          "type" : "token",
          "documentation" : "Language code for this name"
        }]
      },
      {
        "type" : "MedicinalProductAuthorization",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicinalProductAuthorization.subject",
        "MedicinalProductAuthorization.holder"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-identifier",
          "type" : "token",
          "documentation" : "Business identifier for the marketing authorization, as assigned by a regulator"
        },
        {
          "name" : "country",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-country",
          "type" : "token",
          "documentation" : "The country in which the marketing authorization has been granted"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-subject",
          "type" : "reference",
          "documentation" : "The medicinal product that is being authorized"
        },
        {
          "name" : "holder",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-holder",
          "type" : "reference",
          "documentation" : "Marketing Authorization Holder"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-status",
          "type" : "token",
          "documentation" : "The status of the marketing authorization"
        }]
      },
      {
        "type" : "MedicinalProductContraindication",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProductContraindication",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicinalProductContraindication.subject"],
        "searchParam" : [{
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductContraindication-subject",
          "type" : "reference",
          "documentation" : "The medication for which this is an contraindication"
        }]
      },
      {
        "type" : "MedicinalProductIndication",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicinalProductIndication.subject"],
        "searchParam" : [{
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductIndication-subject",
          "type" : "reference",
          "documentation" : "The medication for which this is an indication"
        }]
      },
      {
        "type" : "MedicinalProductIngredient",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "MedicinalProductInteraction",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProductInteraction",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicinalProductInteraction.subject"],
        "searchParam" : [{
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductInteraction-subject",
          "type" : "reference",
          "documentation" : "The medication for which this is an interaction"
        }]
      },
      {
        "type" : "MedicinalProductManufactured",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProductManufactured",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "MedicinalProductPackaged",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicinalProductPackaged.subject"],
        "searchRevInclude" : ["MedicinalProductAuthorization.subject"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductPackaged-identifier",
          "type" : "token",
          "documentation" : "Unique identifier"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductPackaged-subject",
          "type" : "reference",
          "documentation" : "The product with this is a pack for"
        }]
      },
      {
        "type" : "MedicinalProductPharmaceutical",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-identifier",
          "type" : "token",
          "documentation" : "An identifier for the pharmaceutical medicinal product"
        },
        {
          "name" : "route",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-route",
          "type" : "token",
          "documentation" : "Coded expression for the route"
        },
        {
          "name" : "target-species",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-target-species",
          "type" : "token",
          "documentation" : "Coded expression for the species"
        }]
      },
      {
        "type" : "MedicinalProductUndesirableEffect",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MedicinalProductUndesirableEffect.subject"],
        "searchParam" : [{
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/MedicinalProductUndesirableEffect-subject",
          "type" : "reference",
          "documentation" : "The medication for which this is an undesirable effect"
        }]
      },
      {
        "type" : "MessageDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MessageDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MessageDefinition.parent"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The message definition publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-identifier",
          "type" : "token",
          "documentation" : "External identifier for the message definition"
        },
        {
          "name" : "parent",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageDefinition-parent",
          "type" : "reference",
          "documentation" : "A resource that is the parent of the definition"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the message definition"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the message definition"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the message definition"
        },
        {
          "name" : "focus",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageDefinition-focus",
          "type" : "token",
          "documentation" : "A resource that is a permitted focus of the message"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the message definition"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the message definition"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the message definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the message definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the message definition"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the message definition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the message definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the message definition"
        },
        {
          "name" : "event",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageDefinition-event",
          "type" : "token",
          "documentation" : "The event that triggers the message or link to the event definition."
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageDefinition-category",
          "type" : "token",
          "documentation" : "The behavior associated with the message"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the message definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the message definition"
        }]
      },
      {
        "type" : "MessageHeader",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MessageHeader",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MessageHeader.receiver",
        "MessageHeader.author",
        "MessageHeader.focus",
        "MessageHeader.target",
        "MessageHeader.sender",
        "MessageHeader.responsible",
        "MessageHeader.enterer"],
        "searchParam" : [{
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-code",
          "type" : "token",
          "documentation" : "ok | transient-error | fatal-error"
        },
        {
          "name" : "receiver",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-receiver",
          "type" : "reference",
          "documentation" : "Intended \"real-world\" recipient for the data"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-author",
          "type" : "reference",
          "documentation" : "The source of the decision"
        },
        {
          "name" : "destination",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-destination",
          "type" : "string",
          "documentation" : "Name of system"
        },
        {
          "name" : "focus",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-focus",
          "type" : "reference",
          "documentation" : "The actual content of the message"
        },
        {
          "name" : "source",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-source",
          "type" : "string",
          "documentation" : "Name of system"
        },
        {
          "name" : "target",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-target",
          "type" : "reference",
          "documentation" : "Particular delivery destination within the destination"
        },
        {
          "name" : "destination-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-destination-uri",
          "type" : "uri",
          "documentation" : "Actual destination address or id"
        },
        {
          "name" : "source-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-source-uri",
          "type" : "uri",
          "documentation" : "Actual message source address or id"
        },
        {
          "name" : "sender",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-sender",
          "type" : "reference",
          "documentation" : "Real world sender of the message"
        },
        {
          "name" : "responsible",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-responsible",
          "type" : "reference",
          "documentation" : "Final responsibility for event"
        },
        {
          "name" : "enterer",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-enterer",
          "type" : "reference",
          "documentation" : "The source of the data entry"
        },
        {
          "name" : "response-id",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-response-id",
          "type" : "token",
          "documentation" : "Id of original message"
        },
        {
          "name" : "event",
          "definition" : "http://hl7.org/fhir/SearchParameter/MessageHeader-event",
          "type" : "token",
          "documentation" : "Code for the event this message represents or link to event definition"
        }]
      },
      {
        "type" : "MolecularSequence",
        "profile" : "http://hl7.org/fhir/StructureDefinition/MolecularSequence",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["MolecularSequence.patient"],
        "searchRevInclude" : ["Observation.derived-from",
        "Observation.has-member"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-identifier",
          "type" : "token",
          "documentation" : "The unique identity for a particular sequence"
        },
        {
          "name" : "referenceseqid-variant-coordinate",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-referenceseqid-variant-coordinate",
          "type" : "composite",
          "documentation" : "Search parameter by reference sequence and variant coordinate. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `referenceSeqId-variant-coordinate=NC_000001.11$lt345$gt123`, this means it will search for the MolecularSequence resource with variants on NC_000001.11 and with position >123 and <345, where in 1-based system resource, all strings within region NC_000001.11:124-344 will be revealed, while in 0-based system resource, all strings within region NC_000001.11:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above."
        },
        {
          "name" : "chromosome",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-chromosome",
          "type" : "token",
          "documentation" : "Chromosome number of the reference sequence"
        },
        {
          "name" : "window-end",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-window-end",
          "type" : "number",
          "documentation" : "End position (0-based exclusive, which menas the acid at this position will not be included, 1-based inclusive, which means the acid at this position will be included) of the reference sequence."
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-type",
          "type" : "token",
          "documentation" : "Amino Acid Sequence/ DNA Sequence / RNA Sequence"
        },
        {
          "name" : "window-start",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-window-start",
          "type" : "number",
          "documentation" : "Start position (0-based inclusive, 1-based inclusive, that means the nucleic acid or amino acid at this position will be included) of the reference sequence."
        },
        {
          "name" : "variant-end",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-variant-end",
          "type" : "number",
          "documentation" : "End position (0-based exclusive, which menas the acid at this position will not be included, 1-based inclusive, which means the acid at this position will be included) of the variant."
        },
        {
          "name" : "chromosome-variant-coordinate",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-chromosome-variant-coordinate",
          "type" : "composite",
          "documentation" : "Search parameter by chromosome and variant coordinate. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `chromosome-variant-coordinate=1$lt345$gt123`, this means it will search for the MolecularSequence resource with variants on chromosome 1 and with position >123 and <345, where in 1-based system resource, all strings within region 1:124-344 will be revealed, while in 0-based system resource, all strings within region 1:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above."
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-patient",
          "type" : "reference",
          "documentation" : "The subject that the observation is about"
        },
        {
          "name" : "variant-start",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-variant-start",
          "type" : "number",
          "documentation" : "Start position (0-based inclusive, 1-based inclusive, that means the nucleic acid or amino acid at this position will be included) of the variant."
        },
        {
          "name" : "chromosome-window-coordinate",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-chromosome-window-coordinate",
          "type" : "composite",
          "documentation" : "Search parameter by chromosome and window. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `chromosome-window-coordinate=1$lt345$gt123`, this means it will search for the MolecularSequence resource with a window on chromosome 1 and with position >123 and <345, where in 1-based system resource, all strings within region 1:124-344 will be revealed, while in 0-based system resource, all strings within region 1:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above."
        },
        {
          "name" : "referenceseqid-window-coordinate",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-referenceseqid-window-coordinate",
          "type" : "composite",
          "documentation" : "Search parameter by reference sequence and window. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `referenceSeqId-window-coordinate=NC_000001.11$lt345$gt123`, this means it will search for the MolecularSequence resource with a window on NC_000001.11 and with position >123 and <345, where in 1-based system resource, all strings within region NC_000001.11:124-344 will be revealed, while in 0-based system resource, all strings within region NC_000001.11:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above."
        },
        {
          "name" : "referenceseqid",
          "definition" : "http://hl7.org/fhir/SearchParameter/MolecularSequence-referenceseqid",
          "type" : "token",
          "documentation" : "Reference Sequence of the sequence"
        }]
      },
      {
        "type" : "NamingSystem",
        "profile" : "http://hl7.org/fhir/StructureDefinition/NamingSystem",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The naming system publication date"
        },
        {
          "name" : "period",
          "definition" : "http://hl7.org/fhir/SearchParameter/NamingSystem-period",
          "type" : "date",
          "documentation" : "When is identifier valid?"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the naming system"
        },
        {
          "name" : "kind",
          "definition" : "http://hl7.org/fhir/SearchParameter/NamingSystem-kind",
          "type" : "token",
          "documentation" : "codesystem | identifier | root"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the naming system"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the naming system"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the naming system"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/NamingSystem-type",
          "type" : "token",
          "documentation" : "e.g. driver,  provider,  patient, bank etc."
        },
        {
          "name" : "id-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/NamingSystem-id-type",
          "type" : "token",
          "documentation" : "oid | uuid | uri | other"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the naming system"
        },
        {
          "name" : "responsible",
          "definition" : "http://hl7.org/fhir/SearchParameter/NamingSystem-responsible",
          "type" : "string",
          "documentation" : "Who maintains system namespace?"
        },
        {
          "name" : "contact",
          "definition" : "http://hl7.org/fhir/SearchParameter/NamingSystem-contact",
          "type" : "string",
          "documentation" : "Name of an individual to contact"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the naming system"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the naming system"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the naming system"
        },
        {
          "name" : "telecom",
          "definition" : "http://hl7.org/fhir/SearchParameter/NamingSystem-telecom",
          "type" : "token",
          "documentation" : "Contact details for individual or organization"
        },
        {
          "name" : "value",
          "definition" : "http://hl7.org/fhir/SearchParameter/NamingSystem-value",
          "type" : "string",
          "documentation" : "The unique identifier"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the naming system"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the naming system"
        }]
      },
      {
        "type" : "NutritionOrder",
        "profile" : "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["NutritionOrder.provider",
        "NutritionOrder.patient",
        "NutritionOrder.instantiates-canonical",
        "NutritionOrder.encounter"],
        "searchRevInclude" : ["CarePlan.activity-reference",
        "DiagnosticReport.based-on",
        "Observation.based-on"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Return nutrition orders with this external identifier"
        },
        {
          "name" : "datetime",
          "definition" : "http://hl7.org/fhir/SearchParameter/NutritionOrder-datetime",
          "type" : "date",
          "documentation" : "Return nutrition orders requested on this date"
        },
        {
          "name" : "provider",
          "definition" : "http://hl7.org/fhir/SearchParameter/NutritionOrder-provider",
          "type" : "reference",
          "documentation" : "The identity of the provider who placed the nutrition order"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The identity of the person who requires the diet, formula or nutritional supplement"
        },
        {
          "name" : "supplement",
          "definition" : "http://hl7.org/fhir/SearchParameter/NutritionOrder-supplement",
          "type" : "token",
          "documentation" : "Type of supplement product requested"
        },
        {
          "name" : "formula",
          "definition" : "http://hl7.org/fhir/SearchParameter/NutritionOrder-formula",
          "type" : "token",
          "documentation" : "Type of enteral or infant formula"
        },
        {
          "name" : "instantiates-canonical",
          "definition" : "http://hl7.org/fhir/SearchParameter/NutritionOrder-instantiates-canonical",
          "type" : "reference",
          "documentation" : "Instantiates FHIR protocol or definition"
        },
        {
          "name" : "instantiates-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/NutritionOrder-instantiates-uri",
          "type" : "uri",
          "documentation" : "Instantiates external protocol or definition"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Return nutrition orders with this encounter identifier"
        },
        {
          "name" : "oraldiet",
          "definition" : "http://hl7.org/fhir/SearchParameter/NutritionOrder-oraldiet",
          "type" : "token",
          "documentation" : "Type of diet that can be consumed orally (i.e., take via the mouth)."
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/NutritionOrder-status",
          "type" : "token",
          "documentation" : "Status of the nutrition order."
        },
        {
          "name" : "additive",
          "definition" : "http://hl7.org/fhir/SearchParameter/NutritionOrder-additive",
          "type" : "token",
          "documentation" : "Type of module component to add to the feeding"
        }]
      },
      {
        "type" : "Observation",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Observation",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Observation.subject",
        "Observation.focus",
        "Observation.derived-from",
        "Observation.part-of",
        "Observation.has-member",
        "Observation.based-on",
        "Observation.patient",
        "Observation.specimen",
        "Observation.performer",
        "Observation.encounter",
        "Observation.device"],
        "searchRevInclude" : ["Appointment.reason-reference",
        "ChargeItem.service",
        "ClinicalImpression.finding-ref",
        "ClinicalImpression.investigation",
        "DiagnosticReport.result",
        "Encounter.reason-reference",
        "Immunization.reaction",
        "Immunization.reason-reference",
        "MedicationStatement.part-of",
        "Observation.derived-from",
        "Observation.has-member",
        "Procedure.part-of",
        "Procedure.reason-reference",
        "QuestionnaireResponse.part-of"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "Obtained date/time. If the obtained element is a period, a date that falls in the period"
        },
        {
          "name" : "combo-data-absent-reason",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-combo-data-absent-reason",
          "type" : "token",
          "documentation" : "The reason why the expected value in the element Observation.value[x] or Observation.component.value[x] is missing."
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "The code of the observation type"
        },
        {
          "name" : "combo-code-value-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-quantity",
          "type" : "composite",
          "documentation" : "Code and quantity value parameter pair, including in components"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-subject",
          "type" : "reference",
          "documentation" : "The subject that the observation is about"
        },
        {
          "name" : "component-data-absent-reason",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-component-data-absent-reason",
          "type" : "token",
          "documentation" : "The reason why the expected value in the element Observation.component.value[x] is missing."
        },
        {
          "name" : "value-concept",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-value-concept",
          "type" : "token",
          "documentation" : "The value of the observation, if the value is a CodeableConcept"
        },
        {
          "name" : "value-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-value-date",
          "type" : "date",
          "documentation" : "The value of the observation, if the value is a date or period of time"
        },
        {
          "name" : "focus",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-focus",
          "type" : "reference",
          "documentation" : "The focus of an observation when the focus is not the patient of record."
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-derived-from",
          "type" : "reference",
          "documentation" : "Related measurements the observation is made from"
        },
        {
          "name" : "part-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-part-of",
          "type" : "reference",
          "documentation" : "Part of referenced event"
        },
        {
          "name" : "has-member",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-has-member",
          "type" : "reference",
          "documentation" : "Related resource that belongs to the Observation group"
        },
        {
          "name" : "code-value-string",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-code-value-string",
          "type" : "composite",
          "documentation" : "Code and string value parameter pair"
        },
        {
          "name" : "component-code-value-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-component-code-value-quantity",
          "type" : "composite",
          "documentation" : "Component code and component quantity value parameter pair"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-based-on",
          "type" : "reference",
          "documentation" : "Reference to the service request."
        },
        {
          "name" : "code-value-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-code-value-date",
          "type" : "composite",
          "documentation" : "Code and date/time value parameter pair"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The subject that the observation is about (if patient)"
        },
        {
          "name" : "specimen",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-specimen",
          "type" : "reference",
          "documentation" : "Specimen used for this observation"
        },
        {
          "name" : "component-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-component-code",
          "type" : "token",
          "documentation" : "The component code of the observation type"
        },
        {
          "name" : "code-value-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-code-value-quantity",
          "type" : "composite",
          "documentation" : "Code and quantity value parameter pair"
        },
        {
          "name" : "combo-code-value-concept",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-concept",
          "type" : "composite",
          "documentation" : "Code and coded value parameter pair, including in components"
        },
        {
          "name" : "value-string",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-value-string",
          "type" : "string",
          "documentation" : "The value of the observation, if the value is a string, and also searches in CodeableConcept.text"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "The unique id for a particular observation"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-performer",
          "type" : "reference",
          "documentation" : "Who performed the observation"
        },
        {
          "name" : "combo-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-combo-code",
          "type" : "token",
          "documentation" : "The code of the observation type or component type"
        },
        {
          "name" : "method",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-method",
          "type" : "token",
          "documentation" : "The method used for the observation"
        },
        {
          "name" : "value-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-value-quantity",
          "type" : "quantity",
          "documentation" : "The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)"
        },
        {
          "name" : "component-value-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-component-value-quantity",
          "type" : "quantity",
          "documentation" : "The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)"
        },
        {
          "name" : "data-absent-reason",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-data-absent-reason",
          "type" : "token",
          "documentation" : "The reason why the expected value in the element Observation.value[x] is missing."
        },
        {
          "name" : "combo-value-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-combo-value-quantity",
          "type" : "quantity",
          "documentation" : "The value or component value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Encounter related to the observation"
        },
        {
          "name" : "code-value-concept",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-code-value-concept",
          "type" : "composite",
          "documentation" : "Code and coded value parameter pair"
        },
        {
          "name" : "component-code-value-concept",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-component-code-value-concept",
          "type" : "composite",
          "documentation" : "Component code and component coded value parameter pair"
        },
        {
          "name" : "component-value-concept",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-component-value-concept",
          "type" : "token",
          "documentation" : "The value of the component observation, if the value is a CodeableConcept"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-category",
          "type" : "token",
          "documentation" : "The classification of the type of observation"
        },
        {
          "name" : "device",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-device",
          "type" : "reference",
          "documentation" : "The Device that generated the observation data."
        },
        {
          "name" : "combo-value-concept",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-combo-value-concept",
          "type" : "token",
          "documentation" : "The value or component value of the observation, if the value is a CodeableConcept"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Observation-status",
          "type" : "token",
          "documentation" : "The status of the observation"
        }]
      },
      {
        "type" : "ObservationDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "OperationDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/OperationDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["OperationDefinition.input-profile",
        "OperationDefinition.output-profile",
        "OperationDefinition.base"],
        "searchRevInclude" : ["CarePlan.instantiates-canonical",
        "Communication.instantiates-canonical",
        "FamilyMemberHistory.instantiates-canonical",
        "OperationDefinition.base",
        "Procedure.instantiates-canonical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The operation definition publication date"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/OperationDefinition-code",
          "type" : "token",
          "documentation" : "Name used to invoke the operation"
        },
        {
          "name" : "instance",
          "definition" : "http://hl7.org/fhir/SearchParameter/OperationDefinition-instance",
          "type" : "token",
          "documentation" : "Invoke on an instance?"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the operation definition"
        },
        {
          "name" : "kind",
          "definition" : "http://hl7.org/fhir/SearchParameter/OperationDefinition-kind",
          "type" : "token",
          "documentation" : "operation | query"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the operation definition"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the operation definition"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the operation definition"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the operation definition"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/OperationDefinition-type",
          "type" : "token",
          "documentation" : "Invoke at the type level?"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the operation definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the operation definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the operation definition"
        },
        {
          "name" : "input-profile",
          "definition" : "http://hl7.org/fhir/SearchParameter/OperationDefinition-input-profile",
          "type" : "reference",
          "documentation" : "Validation information for in parameters"
        },
        {
          "name" : "output-profile",
          "definition" : "http://hl7.org/fhir/SearchParameter/OperationDefinition-output-profile",
          "type" : "reference",
          "documentation" : "Validation information for out parameters"
        },
        {
          "name" : "system",
          "definition" : "http://hl7.org/fhir/SearchParameter/OperationDefinition-system",
          "type" : "token",
          "documentation" : "Invoke at the system level?"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the operation definition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the operation definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the operation definition"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the operation definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the operation definition"
        },
        {
          "name" : "base",
          "definition" : "http://hl7.org/fhir/SearchParameter/OperationDefinition-base",
          "type" : "reference",
          "documentation" : "Marks this as a profile of the base"
        }]
      },
      {
        "type" : "OperationOutcome",
        "profile" : "http://hl7.org/fhir/StructureDefinition/OperationOutcome",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "Organization",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Organization",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Organization.partof",
        "Organization.endpoint"],
        "searchRevInclude" : ["Account.owner",
        "Account.subject",
        "Account.patient",
        "AuditEvent.agent",
        "AuditEvent.source",
        "AuditEvent.patient",
        "Basic.author",
        "CarePlan.performer",
        "CareTeam.participant",
        "ChargeItem.performing-organization",
        "ChargeItem.enterer",
        "ChargeItem.performer-actor",
        "ChargeItem.requesting-organization",
        "Claim.care-team",
        "Claim.payee",
        "Claim.provider",
        "Claim.insurer",
        "ClaimResponse.insurer",
        "ClaimResponse.requestor",
        "Communication.sender",
        "Communication.recipient",
        "CommunicationRequest.requester",
        "CommunicationRequest.sender",
        "CommunicationRequest.recipient",
        "Composition.author",
        "Composition.attester",
        "Consent.actor",
        "Consent.organization",
        "Consent.consentor",
        "Contract.authority",
        "Contract.signer",
        "Coverage.payor",
        "Coverage.policy-holder",
        "CoverageEligibilityRequest.provider",
        "CoverageEligibilityResponse.insurer",
        "CoverageEligibilityResponse.requestor",
        "Device.organization",
        "DeviceRequest.requester",
        "DeviceRequest.performer",
        "DiagnosticReport.performer",
        "DiagnosticReport.results-interpreter",
        "DocumentManifest.author",
        "DocumentManifest.recipient",
        "DocumentReference.authenticator",
        "DocumentReference.custodian",
        "DocumentReference.author",
        "Encounter.service-provider",
        "Endpoint.organization",
        "EpisodeOfCare.organization",
        "ExplanationOfBenefit.care-team",
        "ExplanationOfBenefit.payee",
        "ExplanationOfBenefit.provider",
        "Flag.subject",
        "Flag.patient",
        "Flag.author",
        "Goal.patient",
        "Goal.subject",
        "Group.managing-entity",
        "HealthcareService.organization",
        "ImagingStudy.performer",
        "Immunization.performer",
        "Immunization.manufacturer",
        "InsurancePlan.owned-by",
        "InsurancePlan.administered-by",
        "Invoice.issuer",
        "Invoice.participant",
        "Invoice.recipient",
        "Linkage.author",
        "Location.organization",
        "MeasureReport.reporter",
        "Media.operator",
        "Medication.manufacturer",
        "MedicationDispense.performer",
        "MedicationKnowledge.manufacturer",
        "MedicationRequest.requester",
        "MedicationRequest.intended-dispenser",
        "MedicationRequest.intended-performer",
        "MedicationStatement.source",
        "MedicinalProductAuthorization.holder",
        "MessageHeader.receiver",
        "MessageHeader.sender",
        "MessageHeader.responsible",
        "Observation.performer",
        "Organization.partof",
        "OrganizationAffiliation.primary-organization",
        "OrganizationAffiliation.network",
        "OrganizationAffiliation.participating-organization",
        "Patient.general-practitioner",
        "Patient.organization",
        "PaymentNotice.provider",
        "PaymentReconciliation.payment-issuer",
        "PaymentReconciliation.requestor",
        "Person.organization",
        "PractitionerRole.organization",
        "Procedure.performer",
        "Provenance.agent",
        "QuestionnaireResponse.author",
        "ResearchStudy.sponsor",
        "ServiceRequest.requester",
        "ServiceRequest.performer",
        "SupplyDelivery.supplier",
        "SupplyRequest.requester",
        "SupplyRequest.subject",
        "SupplyRequest.supplier",
        "Task.owner",
        "Task.requester"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-identifier",
          "type" : "token",
          "documentation" : "Any identifier for the organization (not the accreditation issuer's identifier)"
        },
        {
          "name" : "partof",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-partof",
          "type" : "reference",
          "documentation" : "An organization of which this organization forms a part"
        },
        {
          "name" : "address",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-address",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
        },
        {
          "name" : "address-state",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-address-state",
          "type" : "string",
          "documentation" : "A state specified in an address"
        },
        {
          "name" : "active",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-active",
          "type" : "token",
          "documentation" : "Is the Organization record active"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-type",
          "type" : "token",
          "documentation" : "A code for the type of organization"
        },
        {
          "name" : "address-postalcode",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-address-postalcode",
          "type" : "string",
          "documentation" : "A postal code specified in an address"
        },
        {
          "name" : "address-country",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-address-country",
          "type" : "string",
          "documentation" : "A country specified in an address"
        },
        {
          "name" : "endpoint",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-endpoint",
          "type" : "reference",
          "documentation" : "Technical endpoints providing access to services operated for the organization"
        },
        {
          "name" : "phonetic",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-phonetic",
          "type" : "string",
          "documentation" : "A portion of the organization's name using some kind of phonetic matching algorithm"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-name",
          "type" : "string",
          "documentation" : "A portion of the organization's name or alias"
        },
        {
          "name" : "address-use",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-address-use",
          "type" : "token",
          "documentation" : "A use code specified in an address"
        },
        {
          "name" : "address-city",
          "definition" : "http://hl7.org/fhir/SearchParameter/Organization-address-city",
          "type" : "string",
          "documentation" : "A city specified in an address"
        }]
      },
      {
        "type" : "OrganizationAffiliation",
        "profile" : "http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["OrganizationAffiliation.primary-organization",
        "OrganizationAffiliation.network",
        "OrganizationAffiliation.endpoint",
        "OrganizationAffiliation.service",
        "OrganizationAffiliation.participating-organization",
        "OrganizationAffiliation.location"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-date",
          "type" : "date",
          "documentation" : "The period during which the participatingOrganization is affiliated with the primary organization"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-identifier",
          "type" : "token",
          "documentation" : "An organization affiliation's Identifier"
        },
        {
          "name" : "specialty",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-specialty",
          "type" : "token",
          "documentation" : "Specific specialty of the participatingOrganization in the context of the role"
        },
        {
          "name" : "role",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-role",
          "type" : "token",
          "documentation" : "Definition of the role the participatingOrganization plays"
        },
        {
          "name" : "active",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-active",
          "type" : "token",
          "documentation" : "Whether this organization affiliation record is in active use"
        },
        {
          "name" : "primary-organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-primary-organization",
          "type" : "reference",
          "documentation" : "The organization that receives the services from the participating organization"
        },
        {
          "name" : "network",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-network",
          "type" : "reference",
          "documentation" : "Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined)"
        },
        {
          "name" : "endpoint",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-endpoint",
          "type" : "reference",
          "documentation" : "Technical endpoints providing access to services operated for this role"
        },
        {
          "name" : "phone",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-phone",
          "type" : "token",
          "documentation" : "A value in a phone contact"
        },
        {
          "name" : "service",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-service",
          "type" : "reference",
          "documentation" : "Healthcare services provided through the role"
        },
        {
          "name" : "participating-organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-participating-organization",
          "type" : "reference",
          "documentation" : "The organization that provides services to the primary organization"
        },
        {
          "name" : "telecom",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-telecom",
          "type" : "token",
          "documentation" : "The value in any kind of contact"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-location",
          "type" : "reference",
          "documentation" : "The location(s) at which the role occurs"
        },
        {
          "name" : "email",
          "definition" : "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-email",
          "type" : "token",
          "documentation" : "A value in an email contact"
        }]
      },
      {
        "type" : "Patient",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Patient",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Patient.general-practitioner",
        "Patient.link",
        "Patient.organization"],
        "searchRevInclude" : ["Account.subject",
        "Account.patient",
        "AdverseEvent.recorder",
        "AdverseEvent.subject",
        "AllergyIntolerance.recorder",
        "AllergyIntolerance.asserter",
        "AllergyIntolerance.patient",
        "Appointment.practitioner",
        "Appointment.actor",
        "Appointment.patient",
        "Appointment.location",
        "AppointmentResponse.actor",
        "AppointmentResponse.practitioner",
        "AppointmentResponse.patient",
        "AppointmentResponse.location",
        "AuditEvent.agent",
        "AuditEvent.source",
        "AuditEvent.patient",
        "Basic.author",
        "BodyStructure.patient",
        "CarePlan.performer",
        "CarePlan.subject",
        "CarePlan.patient",
        "CareTeam.patient",
        "CareTeam.subject",
        "CareTeam.participant",
        "ChargeItem.subject",
        "ChargeItem.patient",
        "ChargeItem.enterer",
        "ChargeItem.performer-actor",
        "Claim.payee",
        "Claim.patient",
        "ClaimResponse.patient",
        "ClinicalImpression.subject",
        "ClinicalImpression.patient",
        "Communication.subject",
        "Communication.sender",
        "Communication.patient",
        "Communication.recipient",
        "CommunicationRequest.requester",
        "CommunicationRequest.subject",
        "CommunicationRequest.sender",
        "CommunicationRequest.patient",
        "CommunicationRequest.recipient",
        "Composition.author",
        "Composition.attester",
        "Condition.subject",
        "Condition.asserter",
        "Condition.patient",
        "Consent.actor",
        "Consent.patient",
        "Consent.consentor",
        "Contract.signer",
        "Coverage.payor",
        "Coverage.subscriber",
        "Coverage.beneficiary",
        "Coverage.patient",
        "Coverage.policy-holder",
        "CoverageEligibilityRequest.patient",
        "CoverageEligibilityResponse.patient",
        "DetectedIssue.patient",
        "Device.patient",
        "DeviceRequest.performer",
        "DeviceRequest.subject",
        "DeviceRequest.patient",
        "DeviceUseStatement.subject",
        "DeviceUseStatement.patient",
        "DiagnosticReport.subject",
        "DiagnosticReport.patient",
        "DocumentManifest.subject",
        "DocumentManifest.author",
        "DocumentManifest.patient",
        "DocumentManifest.recipient",
        "DocumentReference.subject",
        "DocumentReference.patient",
        "DocumentReference.author",
        "Encounter.subject",
        "Encounter.patient",
        "EnrollmentRequest.subject",
        "EnrollmentRequest.patient",
        "EpisodeOfCare.patient",
        "ExplanationOfBenefit.payee",
        "ExplanationOfBenefit.patient",
        "FamilyMemberHistory.patient",
        "Flag.subject",
        "Flag.patient",
        "Flag.author",
        "Goal.patient",
        "Goal.subject",
        "Group.member",
        "GuidanceResponse.patient",
        "GuidanceResponse.subject",
        "ImagingStudy.performer",
        "ImagingStudy.subject",
        "ImagingStudy.patient",
        "Immunization.patient",
        "ImmunizationEvaluation.patient",
        "ImmunizationRecommendation.patient",
        "Invoice.subject",
        "Invoice.participant",
        "Invoice.patient",
        "Invoice.recipient",
        "List.subject",
        "List.patient",
        "List.source",
        "MeasureReport.patient",
        "MeasureReport.subject",
        "Media.subject",
        "Media.operator",
        "Media.patient",
        "MedicationAdministration.performer",
        "MedicationAdministration.subject",
        "MedicationAdministration.patient",
        "MedicationDispense.performer",
        "MedicationDispense.receiver",
        "MedicationDispense.subject",
        "MedicationDispense.patient",
        "MedicationRequest.requester",
        "MedicationRequest.subject",
        "MedicationRequest.patient",
        "MedicationRequest.intended-performer",
        "MedicationStatement.subject",
        "MedicationStatement.patient",
        "MedicationStatement.source",
        "MolecularSequence.patient",
        "NutritionOrder.patient",
        "Observation.subject",
        "Observation.patient",
        "Observation.performer",
        "Patient.link",
        "Person.practitioner",
        "Person.link",
        "Person.relatedperson",
        "Person.patient",
        "Procedure.performer",
        "Procedure.subject",
        "Procedure.patient",
        "Provenance.agent",
        "QuestionnaireResponse.author",
        "QuestionnaireResponse.source",
        "RelatedPerson.patient",
        "RequestGroup.subject",
        "RequestGroup.participant",
        "RequestGroup.patient",
        "ResearchSubject.individual",
        "ResearchSubject.patient",
        "RiskAssessment.subject",
        "RiskAssessment.patient",
        "Schedule.actor",
        "ServiceRequest.requester",
        "ServiceRequest.performer",
        "ServiceRequest.subject",
        "ServiceRequest.patient",
        "Specimen.subject",
        "Specimen.patient",
        "SupplyDelivery.patient",
        "SupplyRequest.requester",
        "SupplyRequest.subject",
        "Task.owner",
        "Task.requester",
        "VisionPrescription.patient"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Patient-identifier",
          "type" : "token",
          "documentation" : "A patient identifier"
        },
        {
          "name" : "given",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-given",
          "type" : "string",
          "documentation" : "A portion of the given name of the patient"
        },
        {
          "name" : "address",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
        },
        {
          "name" : "birthdate",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-birthdate",
          "type" : "date",
          "documentation" : "The patient's date of birth"
        },
        {
          "name" : "deceased",
          "definition" : "http://hl7.org/fhir/SearchParameter/Patient-deceased",
          "type" : "token",
          "documentation" : "This patient has been marked as deceased, or as a death date entered"
        },
        {
          "name" : "address-state",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-state",
          "type" : "string",
          "documentation" : "A state specified in an address"
        },
        {
          "name" : "gender",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-gender",
          "type" : "token",
          "documentation" : "Gender of the patient"
        },
        {
          "name" : "general-practitioner",
          "definition" : "http://hl7.org/fhir/SearchParameter/Patient-general-practitioner",
          "type" : "reference",
          "documentation" : "Patient's nominated general practitioner, not the organization that manages the record"
        },
        {
          "name" : "link",
          "definition" : "http://hl7.org/fhir/SearchParameter/Patient-link",
          "type" : "reference",
          "documentation" : "All patients linked to the given patient"
        },
        {
          "name" : "active",
          "definition" : "http://hl7.org/fhir/SearchParameter/Patient-active",
          "type" : "token",
          "documentation" : "Whether the patient record is active"
        },
        {
          "name" : "language",
          "definition" : "http://hl7.org/fhir/SearchParameter/Patient-language",
          "type" : "token",
          "documentation" : "Language code (irrespective of use value)"
        },
        {
          "name" : "address-postalcode",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-postalcode",
          "type" : "string",
          "documentation" : "A postalCode specified in an address"
        },
        {
          "name" : "address-country",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-country",
          "type" : "string",
          "documentation" : "A country specified in an address"
        },
        {
          "name" : "death-date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Patient-death-date",
          "type" : "date",
          "documentation" : "The date of death has been provided and satisfies this search value"
        },
        {
          "name" : "phonetic",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-phonetic",
          "type" : "string",
          "documentation" : "A portion of either family or given name using some kind of phonetic matching algorithm"
        },
        {
          "name" : "phone",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-phone",
          "type" : "token",
          "documentation" : "A value in a phone contact"
        },
        {
          "name" : "organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/Patient-organization",
          "type" : "reference",
          "documentation" : "The organization that is the custodian of the patient record"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Patient-name",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text"
        },
        {
          "name" : "address-use",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-use",
          "type" : "token",
          "documentation" : "A use code specified in an address"
        },
        {
          "name" : "telecom",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-telecom",
          "type" : "token",
          "documentation" : "The value in any kind of telecom details of the patient"
        },
        {
          "name" : "family",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-family",
          "type" : "string",
          "documentation" : "A portion of the family name of the patient"
        },
        {
          "name" : "address-city",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-city",
          "type" : "string",
          "documentation" : "A city specified in an address"
        },
        {
          "name" : "email",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-email",
          "type" : "token",
          "documentation" : "A value in an email contact"
        }]
      },
      {
        "type" : "PaymentNotice",
        "profile" : "http://hl7.org/fhir/StructureDefinition/PaymentNotice",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["PaymentNotice.request",
        "PaymentNotice.provider",
        "PaymentNotice.response"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier",
          "type" : "token",
          "documentation" : "The business identifier of the notice"
        },
        {
          "name" : "request",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentNotice-request",
          "type" : "reference",
          "documentation" : "The Claim"
        },
        {
          "name" : "provider",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentNotice-provider",
          "type" : "reference",
          "documentation" : "The reference to the provider"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentNotice-created",
          "type" : "date",
          "documentation" : "Creation date fro the notice"
        },
        {
          "name" : "response",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentNotice-response",
          "type" : "reference",
          "documentation" : "The ClaimResponse"
        },
        {
          "name" : "payment-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentNotice-payment-status",
          "type" : "token",
          "documentation" : "The type of payment notice"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentNotice-status",
          "type" : "token",
          "documentation" : "The status of the payment notice"
        }]
      },
      {
        "type" : "PaymentReconciliation",
        "profile" : "http://hl7.org/fhir/StructureDefinition/PaymentReconciliation",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["PaymentReconciliation.request",
        "PaymentReconciliation.payment-issuer",
        "PaymentReconciliation.requestor"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentReconciliation-identifier",
          "type" : "token",
          "documentation" : "The business identifier of the ExplanationOfBenefit"
        },
        {
          "name" : "request",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request",
          "type" : "reference",
          "documentation" : "The reference to the claim"
        },
        {
          "name" : "disposition",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentReconciliation-disposition",
          "type" : "string",
          "documentation" : "The contents of the disposition message"
        },
        {
          "name" : "created",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentReconciliation-created",
          "type" : "date",
          "documentation" : "The creation date"
        },
        {
          "name" : "payment-issuer",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentReconciliation-payment-issuer",
          "type" : "reference",
          "documentation" : "The organization which generated this resource"
        },
        {
          "name" : "outcome",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentReconciliation-outcome",
          "type" : "token",
          "documentation" : "The processing outcome"
        },
        {
          "name" : "requestor",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentReconciliation-requestor",
          "type" : "reference",
          "documentation" : "The reference to the provider who submitted the claim"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/PaymentReconciliation-status",
          "type" : "token",
          "documentation" : "The status of the payment reconciliation"
        }]
      },
      {
        "type" : "Person",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Person",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Person.practitioner",
        "Person.link",
        "Person.relatedperson",
        "Person.patient",
        "Person.organization"],
        "searchRevInclude" : ["Person.practitioner",
        "Person.link",
        "Person.relatedperson",
        "Person.patient"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Person-identifier",
          "type" : "token",
          "documentation" : "A person Identifier"
        },
        {
          "name" : "address",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
        },
        {
          "name" : "birthdate",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-birthdate",
          "type" : "date",
          "documentation" : "The person's date of birth"
        },
        {
          "name" : "address-state",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-state",
          "type" : "string",
          "documentation" : "A state specified in an address"
        },
        {
          "name" : "gender",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-gender",
          "type" : "token",
          "documentation" : "The gender of the person"
        },
        {
          "name" : "practitioner",
          "definition" : "http://hl7.org/fhir/SearchParameter/Person-practitioner",
          "type" : "reference",
          "documentation" : "The Person links to this Practitioner"
        },
        {
          "name" : "link",
          "definition" : "http://hl7.org/fhir/SearchParameter/Person-link",
          "type" : "reference",
          "documentation" : "Any link has this Patient, Person, RelatedPerson or Practitioner reference"
        },
        {
          "name" : "relatedperson",
          "definition" : "http://hl7.org/fhir/SearchParameter/Person-relatedperson",
          "type" : "reference",
          "documentation" : "The Person links to this RelatedPerson"
        },
        {
          "name" : "address-postalcode",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-postalcode",
          "type" : "string",
          "documentation" : "A postal code specified in an address"
        },
        {
          "name" : "address-country",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-country",
          "type" : "string",
          "documentation" : "A country specified in an address"
        },
        {
          "name" : "phonetic",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-phonetic",
          "type" : "string",
          "documentation" : "A portion of name using some kind of phonetic matching algorithm"
        },
        {
          "name" : "phone",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-phone",
          "type" : "token",
          "documentation" : "A value in a phone contact"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Person-patient",
          "type" : "reference",
          "documentation" : "The Person links to this Patient"
        },
        {
          "name" : "organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/Person-organization",
          "type" : "reference",
          "documentation" : "The organization at which this person record is being managed"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Person-name",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text"
        },
        {
          "name" : "address-use",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-use",
          "type" : "token",
          "documentation" : "A use code specified in an address"
        },
        {
          "name" : "telecom",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-telecom",
          "type" : "token",
          "documentation" : "The value in any kind of contact"
        },
        {
          "name" : "address-city",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-city",
          "type" : "string",
          "documentation" : "A city specified in an address"
        },
        {
          "name" : "email",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-email",
          "type" : "token",
          "documentation" : "A value in an email contact"
        }]
      },
      {
        "type" : "PlanDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["PlanDefinition.successor",
        "PlanDefinition.derived-from",
        "PlanDefinition.predecessor",
        "PlanDefinition.composed-of",
        "PlanDefinition.depends-on",
        "PlanDefinition.definition"],
        "searchRevInclude" : ["CarePlan.instantiates-canonical",
        "Communication.instantiates-canonical",
        "DeviceRequest.instantiates-canonical",
        "FamilyMemberHistory.instantiates-canonical",
        "Flag.subject",
        "Flag.patient",
        "MessageDefinition.parent",
        "NutritionOrder.instantiates-canonical",
        "PlanDefinition.definition",
        "Procedure.instantiates-canonical",
        "ResearchStudy.protocol",
        "ServiceRequest.instantiates-canonical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-date",
          "type" : "date",
          "documentation" : "The plan definition publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-identifier",
          "type" : "token",
          "documentation" : "External identifier for the plan definition"
        },
        {
          "name" : "successor",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-successor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the plan definition"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the plan definition"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-description",
          "type" : "string",
          "documentation" : "The description of the plan definition"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-derived-from",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the plan definition"
        },
        {
          "name" : "predecessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-predecessor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the plan definition"
        },
        {
          "name" : "composed-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-composed-of",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-type",
          "type" : "token",
          "documentation" : "The type of artifact the plan (e.g. order-set, eca-rule, protocol)"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-version",
          "type" : "token",
          "documentation" : "The business version of the plan definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the plan definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the plan definition"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-effective",
          "type" : "date",
          "documentation" : "The time during which the plan definition is intended to be in use"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-depends-on",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the plan definition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-context",
          "type" : "token",
          "documentation" : "A use context assigned to the plan definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the plan definition"
        },
        {
          "name" : "topic",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-topic",
          "type" : "token",
          "documentation" : "Topics associated with the module"
        },
        {
          "name" : "definition",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-definition",
          "type" : "reference",
          "documentation" : "Activity or plan definitions used by plan definition"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the plan definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/PlanDefinition-status",
          "type" : "token",
          "documentation" : "The current status of the plan definition"
        }]
      },
      {
        "type" : "Practitioner",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchRevInclude" : ["Account.subject",
        "Account.patient",
        "AdverseEvent.recorder",
        "AdverseEvent.subject",
        "AllergyIntolerance.recorder",
        "AllergyIntolerance.asserter",
        "Appointment.practitioner",
        "Appointment.actor",
        "Appointment.patient",
        "Appointment.location",
        "AppointmentResponse.actor",
        "AppointmentResponse.practitioner",
        "AppointmentResponse.patient",
        "AppointmentResponse.location",
        "AuditEvent.agent",
        "AuditEvent.source",
        "AuditEvent.patient",
        "Basic.author",
        "CarePlan.performer",
        "CareTeam.participant",
        "ChargeItem.enterer",
        "ChargeItem.performer-actor",
        "Claim.care-team",
        "Claim.payee",
        "Claim.provider",
        "Claim.enterer",
        "ClaimResponse.requestor",
        "ClinicalImpression.assessor",
        "Communication.sender",
        "Communication.recipient",
        "CommunicationRequest.requester",
        "CommunicationRequest.sender",
        "CommunicationRequest.recipient",
        "Composition.author",
        "Composition.attester",
        "Condition.asserter",
        "Consent.actor",
        "Consent.consentor",
        "Contract.signer",
        "CoverageEligibilityRequest.provider",
        "CoverageEligibilityRequest.enterer",
        "CoverageEligibilityResponse.requestor",
        "DetectedIssue.author",
        "DeviceRequest.requester",
        "DeviceRequest.performer",
        "DiagnosticReport.performer",
        "DiagnosticReport.results-interpreter",
        "DocumentManifest.subject",
        "DocumentManifest.author",
        "DocumentManifest.patient",
        "DocumentManifest.recipient",
        "DocumentReference.subject",
        "DocumentReference.patient",
        "DocumentReference.authenticator",
        "DocumentReference.author",
        "Encounter.practitioner",
        "Encounter.participant",
        "EpisodeOfCare.care-manager",
        "ExplanationOfBenefit.care-team",
        "ExplanationOfBenefit.payee",
        "ExplanationOfBenefit.provider",
        "ExplanationOfBenefit.enterer",
        "Flag.subject",
        "Flag.patient",
        "Flag.author",
        "Group.managing-entity",
        "Group.member",
        "ImagingStudy.performer",
        "ImagingStudy.interpreter",
        "ImagingStudy.referrer",
        "Immunization.performer",
        "Invoice.participant",
        "Linkage.author",
        "List.source",
        "MeasureReport.patient",
        "MeasureReport.subject",
        "MeasureReport.reporter",
        "Media.subject",
        "Media.operator",
        "Media.patient",
        "MedicationAdministration.performer",
        "MedicationDispense.performer",
        "MedicationDispense.receiver",
        "MedicationDispense.responsibleparty",
        "MedicationRequest.requester",
        "MedicationRequest.intended-performer",
        "MedicationStatement.source",
        "MessageHeader.receiver",
        "MessageHeader.author",
        "MessageHeader.sender",
        "MessageHeader.responsible",
        "MessageHeader.enterer",
        "NutritionOrder.provider",
        "Observation.performer",
        "Patient.general-practitioner",
        "PaymentNotice.provider",
        "PaymentReconciliation.requestor",
        "Person.practitioner",
        "Person.link",
        "Person.relatedperson",
        "Person.patient",
        "PractitionerRole.practitioner",
        "Procedure.performer",
        "Provenance.agent",
        "QuestionnaireResponse.author",
        "QuestionnaireResponse.source",
        "RequestGroup.author",
        "RequestGroup.participant",
        "ResearchStudy.principalinvestigator",
        "RiskAssessment.performer",
        "Schedule.actor",
        "ServiceRequest.requester",
        "ServiceRequest.performer",
        "Specimen.collector",
        "SupplyDelivery.receiver",
        "SupplyDelivery.supplier",
        "SupplyRequest.requester",
        "Task.owner",
        "Task.requester",
        "VisionPrescription.prescriber"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Practitioner-identifier",
          "type" : "token",
          "documentation" : "A practitioner's Identifier"
        },
        {
          "name" : "given",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-given",
          "type" : "string",
          "documentation" : "A portion of the given name"
        },
        {
          "name" : "address",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
        },
        {
          "name" : "address-state",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-state",
          "type" : "string",
          "documentation" : "A state specified in an address"
        },
        {
          "name" : "gender",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-gender",
          "type" : "token",
          "documentation" : "Gender of the practitioner"
        },
        {
          "name" : "active",
          "definition" : "http://hl7.org/fhir/SearchParameter/Practitioner-active",
          "type" : "token",
          "documentation" : "Whether the practitioner record is active"
        },
        {
          "name" : "address-postalcode",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-postalcode",
          "type" : "string",
          "documentation" : "A postalCode specified in an address"
        },
        {
          "name" : "address-country",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-country",
          "type" : "string",
          "documentation" : "A country specified in an address"
        },
        {
          "name" : "phonetic",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-phonetic",
          "type" : "string",
          "documentation" : "A portion of either family or given name using some kind of phonetic matching algorithm"
        },
        {
          "name" : "phone",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-phone",
          "type" : "token",
          "documentation" : "A value in a phone contact"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Practitioner-name",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text"
        },
        {
          "name" : "address-use",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-use",
          "type" : "token",
          "documentation" : "A use code specified in an address"
        },
        {
          "name" : "telecom",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-telecom",
          "type" : "token",
          "documentation" : "The value in any kind of contact"
        },
        {
          "name" : "family",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-family",
          "type" : "string",
          "documentation" : "A portion of the family name"
        },
        {
          "name" : "address-city",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-city",
          "type" : "string",
          "documentation" : "A city specified in an address"
        },
        {
          "name" : "communication",
          "definition" : "http://hl7.org/fhir/SearchParameter/Practitioner-communication",
          "type" : "token",
          "documentation" : "One of the languages that the practitioner can communicate with"
        },
        {
          "name" : "email",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-email",
          "type" : "token",
          "documentation" : "A value in an email contact"
        }]
      },
      {
        "type" : "PractitionerRole",
        "profile" : "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["PractitionerRole.practitioner",
        "PractitionerRole.endpoint",
        "PractitionerRole.service",
        "PractitionerRole.organization",
        "PractitionerRole.location"],
        "searchRevInclude" : ["Account.subject",
        "Account.patient",
        "AdverseEvent.recorder",
        "AllergyIntolerance.recorder",
        "AllergyIntolerance.asserter",
        "Appointment.practitioner",
        "Appointment.actor",
        "Appointment.patient",
        "Appointment.location",
        "AppointmentResponse.actor",
        "AppointmentResponse.practitioner",
        "AppointmentResponse.patient",
        "AppointmentResponse.location",
        "AuditEvent.agent",
        "AuditEvent.source",
        "AuditEvent.patient",
        "Basic.author",
        "CarePlan.performer",
        "CareTeam.participant",
        "ChargeItem.enterer",
        "ChargeItem.performer-actor",
        "Claim.care-team",
        "Claim.payee",
        "Claim.provider",
        "Claim.enterer",
        "ClaimResponse.requestor",
        "ClinicalImpression.assessor",
        "Communication.sender",
        "Communication.recipient",
        "CommunicationRequest.requester",
        "CommunicationRequest.sender",
        "CommunicationRequest.recipient",
        "Composition.author",
        "Composition.attester",
        "Condition.asserter",
        "Consent.actor",
        "Consent.consentor",
        "Contract.signer",
        "CoverageEligibilityRequest.provider",
        "CoverageEligibilityRequest.enterer",
        "CoverageEligibilityResponse.requestor",
        "DetectedIssue.author",
        "DeviceRequest.requester",
        "DeviceRequest.performer",
        "DiagnosticReport.performer",
        "DiagnosticReport.results-interpreter",
        "DocumentManifest.author",
        "DocumentManifest.recipient",
        "DocumentReference.authenticator",
        "DocumentReference.author",
        "Encounter.practitioner",
        "Encounter.participant",
        "EpisodeOfCare.care-manager",
        "ExplanationOfBenefit.care-team",
        "ExplanationOfBenefit.payee",
        "ExplanationOfBenefit.provider",
        "ExplanationOfBenefit.enterer",
        "Flag.author",
        "Group.managing-entity",
        "Group.member",
        "ImagingStudy.performer",
        "ImagingStudy.interpreter",
        "ImagingStudy.referrer",
        "Immunization.performer",
        "Invoice.participant",
        "Linkage.author",
        "List.source",
        "MeasureReport.patient",
        "MeasureReport.subject",
        "MeasureReport.reporter",
        "Media.subject",
        "Media.operator",
        "Media.patient",
        "MedicationAdministration.performer",
        "MedicationDispense.performer",
        "MedicationDispense.responsibleparty",
        "MedicationRequest.requester",
        "MedicationRequest.intended-performer",
        "MedicationStatement.source",
        "MessageHeader.receiver",
        "MessageHeader.author",
        "MessageHeader.sender",
        "MessageHeader.responsible",
        "MessageHeader.enterer",
        "NutritionOrder.provider",
        "Observation.performer",
        "Patient.general-practitioner",
        "PaymentNotice.provider",
        "PaymentReconciliation.requestor",
        "Procedure.performer",
        "Provenance.agent",
        "QuestionnaireResponse.author",
        "QuestionnaireResponse.source",
        "RequestGroup.author",
        "RequestGroup.participant",
        "ResearchStudy.principalinvestigator",
        "RiskAssessment.performer",
        "Schedule.actor",
        "ServiceRequest.requester",
        "ServiceRequest.performer",
        "Specimen.collector",
        "SupplyDelivery.receiver",
        "SupplyDelivery.supplier",
        "SupplyRequest.requester",
        "Task.owner",
        "Task.requester",
        "VisionPrescription.prescriber"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-date",
          "type" : "date",
          "documentation" : "The period during which the practitioner is authorized to perform in these role(s)"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-identifier",
          "type" : "token",
          "documentation" : "A practitioner's Identifier"
        },
        {
          "name" : "specialty",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-specialty",
          "type" : "token",
          "documentation" : "The practitioner has this specialty at an organization"
        },
        {
          "name" : "role",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-role",
          "type" : "token",
          "documentation" : "The practitioner can perform this role at for the organization"
        },
        {
          "name" : "practitioner",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner",
          "type" : "reference",
          "documentation" : "Practitioner that is able to provide the defined services for the organization"
        },
        {
          "name" : "active",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-active",
          "type" : "token",
          "documentation" : "Whether this practitioner role record is in active use"
        },
        {
          "name" : "endpoint",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-endpoint",
          "type" : "reference",
          "documentation" : "Technical endpoints providing access to services operated for the practitioner with this role"
        },
        {
          "name" : "phone",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-phone",
          "type" : "token",
          "documentation" : "A value in a phone contact"
        },
        {
          "name" : "service",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-service",
          "type" : "reference",
          "documentation" : "The list of healthcare services that this worker provides for this role's Organization/Location(s)"
        },
        {
          "name" : "organization",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-organization",
          "type" : "reference",
          "documentation" : "The identity of the organization the practitioner represents / acts on behalf of"
        },
        {
          "name" : "telecom",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-telecom",
          "type" : "token",
          "documentation" : "The value in any kind of contact"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/PractitionerRole-location",
          "type" : "reference",
          "documentation" : "One of the locations at which this practitioner provides care"
        },
        {
          "name" : "email",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-email",
          "type" : "token",
          "documentation" : "A value in an email contact"
        }]
      },
      {
        "type" : "Procedure",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Procedure",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Procedure.performer",
        "Procedure.subject",
        "Procedure.instantiates-canonical",
        "Procedure.part-of",
        "Procedure.encounter",
        "Procedure.based-on",
        "Procedure.patient",
        "Procedure.reason-reference",
        "Procedure.location"],
        "searchRevInclude" : ["AdverseEvent.substance",
        "Appointment.reason-reference",
        "ChargeItem.service",
        "Encounter.diagnosis",
        "Encounter.reason-reference",
        "Flag.subject",
        "Flag.patient",
        "MedicationStatement.part-of",
        "Observation.part-of",
        "Procedure.part-of",
        "Procedure.reason-reference",
        "QuestionnaireResponse.part-of"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "When the procedure was performed"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "A unique identifier for a procedure"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "A code to identify a  procedure"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-performer",
          "type" : "reference",
          "documentation" : "The reference to the practitioner"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-subject",
          "type" : "reference",
          "documentation" : "Search by subject"
        },
        {
          "name" : "instantiates-canonical",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-instantiates-canonical",
          "type" : "reference",
          "documentation" : "Instantiates FHIR protocol or definition"
        },
        {
          "name" : "part-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-part-of",
          "type" : "reference",
          "documentation" : "Part of referenced event"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Encounter created as part of"
        },
        {
          "name" : "reason-code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-reason-code",
          "type" : "token",
          "documentation" : "Coded reason procedure performed"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-based-on",
          "type" : "reference",
          "documentation" : "A request for this procedure"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Search by subject - a patient"
        },
        {
          "name" : "reason-reference",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-reason-reference",
          "type" : "reference",
          "documentation" : "The justification that the procedure was performed"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-location",
          "type" : "reference",
          "documentation" : "Where the procedure happened"
        },
        {
          "name" : "instantiates-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-instantiates-uri",
          "type" : "uri",
          "documentation" : "Instantiates external protocol or definition"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-category",
          "type" : "token",
          "documentation" : "Classification of the procedure"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Procedure-status",
          "type" : "token",
          "documentation" : "preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown"
        }]
      },
      {
        "type" : "Provenance",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Provenance",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Provenance.agent",
        "Provenance.patient",
        "Provenance.location",
        "Provenance.entity",
        "Provenance.target"],
        "searchParam" : [{
          "name" : "agent-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-agent-type",
          "type" : "token",
          "documentation" : "How the agent participated"
        },
        {
          "name" : "agent",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-agent",
          "type" : "reference",
          "documentation" : "Who participated"
        },
        {
          "name" : "signature-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-signature-type",
          "type" : "token",
          "documentation" : "Indication of the reason the entity signed the object(s)"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-patient",
          "type" : "reference",
          "documentation" : "Target Reference(s) (usually version specific)"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-location",
          "type" : "reference",
          "documentation" : "Where the activity occurred, if relevant"
        },
        {
          "name" : "recorded",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-recorded",
          "type" : "date",
          "documentation" : "When the activity was recorded / updated"
        },
        {
          "name" : "agent-role",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-agent-role",
          "type" : "token",
          "documentation" : "What the agents role was"
        },
        {
          "name" : "when",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-when",
          "type" : "date",
          "documentation" : "When the activity occurred"
        },
        {
          "name" : "entity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-entity",
          "type" : "reference",
          "documentation" : "Identity of entity"
        },
        {
          "name" : "target",
          "definition" : "http://hl7.org/fhir/SearchParameter/Provenance-target",
          "type" : "reference",
          "documentation" : "Target Reference(s) (usually version specific)"
        }]
      },
      {
        "type" : "Questionnaire",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Questionnaire",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchRevInclude" : ["CarePlan.instantiates-canonical",
        "Communication.instantiates-canonical",
        "FamilyMemberHistory.instantiates-canonical",
        "PlanDefinition.definition",
        "Procedure.instantiates-canonical",
        "QuestionnaireResponse.questionnaire"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-date",
          "type" : "date",
          "documentation" : "The questionnaire publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-identifier",
          "type" : "token",
          "documentation" : "External identifier for the questionnaire"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-code",
          "type" : "token",
          "documentation" : "A code that corresponds to one of its items in the questionnaire"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the questionnaire"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the questionnaire"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-description",
          "type" : "string",
          "documentation" : "The description of the questionnaire"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the questionnaire"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the questionnaire"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-version",
          "type" : "token",
          "documentation" : "The business version of the questionnaire"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the questionnaire"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the questionnaire"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-effective",
          "type" : "date",
          "documentation" : "The time during which the questionnaire is intended to be in use"
        },
        {
          "name" : "subject-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-subject-type",
          "type" : "token",
          "documentation" : "Resource that can be subject of QuestionnaireResponse"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the questionnaire"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-context",
          "type" : "token",
          "documentation" : "A use context assigned to the questionnaire"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the questionnaire"
        },
        {
          "name" : "definition",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-definition",
          "type" : "uri",
          "documentation" : "ElementDefinition - details for the item"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the questionnaire"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Questionnaire-status",
          "type" : "token",
          "documentation" : "The current status of the questionnaire"
        }]
      },
      {
        "type" : "QuestionnaireResponse",
        "profile" : "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["QuestionnaireResponse.questionnaire",
        "QuestionnaireResponse.based-on",
        "QuestionnaireResponse.subject",
        "QuestionnaireResponse.author",
        "QuestionnaireResponse.patient",
        "QuestionnaireResponse.part-of",
        "QuestionnaireResponse.encounter",
        "QuestionnaireResponse.source"],
        "searchRevInclude" : ["ClinicalImpression.investigation",
        "Consent.source-reference",
        "Observation.derived-from",
        "Observation.has-member"],
        "searchParam" : [{
          "name" : "authored",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored",
          "type" : "date",
          "documentation" : "When the questionnaire response was last changed"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-identifier",
          "type" : "token",
          "documentation" : "The unique identifier for the questionnaire response"
        },
        {
          "name" : "questionnaire",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-questionnaire",
          "type" : "reference",
          "documentation" : "The questionnaire the answers are provided for"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-based-on",
          "type" : "reference",
          "documentation" : "Plan/proposal/order fulfilled by this questionnaire response"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-subject",
          "type" : "reference",
          "documentation" : "The subject of the questionnaire response"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author",
          "type" : "reference",
          "documentation" : "The author of the questionnaire response"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient",
          "type" : "reference",
          "documentation" : "The patient that is the subject of the questionnaire response"
        },
        {
          "name" : "part-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-part-of",
          "type" : "reference",
          "documentation" : "Procedure or observation this questionnaire response was performed as a part of"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-encounter",
          "type" : "reference",
          "documentation" : "Encounter associated with the questionnaire response"
        },
        {
          "name" : "source",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-source",
          "type" : "reference",
          "documentation" : "The individual providing the information reflected in the questionnaire respose"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-status",
          "type" : "token",
          "documentation" : "The status of the questionnaire response"
        }]
      },
      {
        "type" : "RelatedPerson",
        "profile" : "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["RelatedPerson.patient"],
        "searchRevInclude" : ["AdverseEvent.recorder",
        "AdverseEvent.subject",
        "AllergyIntolerance.recorder",
        "AllergyIntolerance.asserter",
        "Appointment.practitioner",
        "Appointment.actor",
        "Appointment.patient",
        "Appointment.location",
        "AppointmentResponse.actor",
        "AppointmentResponse.practitioner",
        "AppointmentResponse.patient",
        "AppointmentResponse.location",
        "AuditEvent.agent",
        "AuditEvent.source",
        "AuditEvent.patient",
        "Basic.author",
        "CarePlan.performer",
        "CareTeam.participant",
        "ChargeItem.enterer",
        "ChargeItem.performer-actor",
        "Claim.payee",
        "Communication.sender",
        "Communication.recipient",
        "CommunicationRequest.requester",
        "CommunicationRequest.sender",
        "CommunicationRequest.recipient",
        "Composition.author",
        "Composition.attester",
        "Condition.asserter",
        "Consent.actor",
        "Consent.consentor",
        "Contract.signer",
        "Coverage.payor",
        "Coverage.subscriber",
        "Coverage.policy-holder",
        "DeviceRequest.performer",
        "DocumentManifest.author",
        "DocumentManifest.recipient",
        "DocumentReference.author",
        "Encounter.practitioner",
        "Encounter.participant",
        "ExplanationOfBenefit.payee",
        "Group.managing-entity",
        "ImagingStudy.performer",
        "Invoice.participant",
        "Invoice.recipient",
        "MeasureReport.patient",
        "MeasureReport.subject",
        "Media.operator",
        "MedicationAdministration.performer",
        "MedicationDispense.performer",
        "MedicationRequest.requester",
        "MedicationRequest.intended-performer",
        "MedicationStatement.source",
        "Observation.performer",
        "Patient.link",
        "Person.practitioner",
        "Person.link",
        "Person.relatedperson",
        "Person.patient",
        "Procedure.performer",
        "Provenance.agent",
        "QuestionnaireResponse.author",
        "QuestionnaireResponse.source",
        "RequestGroup.participant",
        "Schedule.actor",
        "ServiceRequest.requester",
        "ServiceRequest.performer",
        "SupplyRequest.requester",
        "Task.owner",
        "Task.requester"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/RelatedPerson-identifier",
          "type" : "token",
          "documentation" : "An Identifier of the RelatedPerson"
        },
        {
          "name" : "address",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
        },
        {
          "name" : "birthdate",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-birthdate",
          "type" : "date",
          "documentation" : "The Related Person's date of birth"
        },
        {
          "name" : "address-state",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-state",
          "type" : "string",
          "documentation" : "A state specified in an address"
        },
        {
          "name" : "gender",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-gender",
          "type" : "token",
          "documentation" : "Gender of the related person"
        },
        {
          "name" : "active",
          "definition" : "http://hl7.org/fhir/SearchParameter/RelatedPerson-active",
          "type" : "token",
          "documentation" : "Indicates if the related person record is active"
        },
        {
          "name" : "address-postalcode",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-postalcode",
          "type" : "string",
          "documentation" : "A postal code specified in an address"
        },
        {
          "name" : "address-country",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-country",
          "type" : "string",
          "documentation" : "A country specified in an address"
        },
        {
          "name" : "phonetic",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-phonetic",
          "type" : "string",
          "documentation" : "A portion of name using some kind of phonetic matching algorithm"
        },
        {
          "name" : "phone",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-phone",
          "type" : "token",
          "documentation" : "A value in a phone contact"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/RelatedPerson-patient",
          "type" : "reference",
          "documentation" : "The patient this related person is related to"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/RelatedPerson-name",
          "type" : "string",
          "documentation" : "A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text"
        },
        {
          "name" : "address-use",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-use",
          "type" : "token",
          "documentation" : "A use code specified in an address"
        },
        {
          "name" : "telecom",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-telecom",
          "type" : "token",
          "documentation" : "The value in any kind of contact"
        },
        {
          "name" : "address-city",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-address-city",
          "type" : "string",
          "documentation" : "A city specified in an address"
        },
        {
          "name" : "relationship",
          "definition" : "http://hl7.org/fhir/SearchParameter/RelatedPerson-relationship",
          "type" : "token",
          "documentation" : "The relationship between the patient and the relatedperson"
        },
        {
          "name" : "email",
          "definition" : "http://hl7.org/fhir/SearchParameter/individual-email",
          "type" : "token",
          "documentation" : "A value in an email contact"
        }]
      },
      {
        "type" : "RequestGroup",
        "profile" : "http://hl7.org/fhir/StructureDefinition/RequestGroup",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["RequestGroup.subject",
        "RequestGroup.author",
        "RequestGroup.instantiates-canonical",
        "RequestGroup.encounter",
        "RequestGroup.participant",
        "RequestGroup.patient"],
        "searchRevInclude" : ["CarePlan.activity-reference"],
        "searchParam" : [{
          "name" : "authored",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-authored",
          "type" : "date",
          "documentation" : "The date the request group was authored"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-identifier",
          "type" : "token",
          "documentation" : "External identifiers for the request group"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-code",
          "type" : "token",
          "documentation" : "The code of the request group"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-subject",
          "type" : "reference",
          "documentation" : "The subject that the request group is about"
        },
        {
          "name" : "author",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-author",
          "type" : "reference",
          "documentation" : "The author of the request group"
        },
        {
          "name" : "instantiates-canonical",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-instantiates-canonical",
          "type" : "reference",
          "documentation" : "The FHIR-based definition from which the request group is realized"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-encounter",
          "type" : "reference",
          "documentation" : "The encounter the request group applies to"
        },
        {
          "name" : "priority",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-priority",
          "type" : "token",
          "documentation" : "The priority of the request group"
        },
        {
          "name" : "intent",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-intent",
          "type" : "token",
          "documentation" : "The intent of the request group"
        },
        {
          "name" : "participant",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-participant",
          "type" : "reference",
          "documentation" : "The participant in the requests in the group"
        },
        {
          "name" : "group-identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-group-identifier",
          "type" : "token",
          "documentation" : "The group identifier for the request group"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-patient",
          "type" : "reference",
          "documentation" : "The identity of a patient to search for request groups"
        },
        {
          "name" : "instantiates-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-instantiates-uri",
          "type" : "uri",
          "documentation" : "The external definition from which the request group is realized"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/RequestGroup-status",
          "type" : "token",
          "documentation" : "The status of the request group"
        }]
      },
      {
        "type" : "ResearchDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ResearchDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ResearchDefinition.successor",
        "ResearchDefinition.derived-from",
        "ResearchDefinition.predecessor",
        "ResearchDefinition.composed-of",
        "ResearchDefinition.depends-on"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-date",
          "type" : "date",
          "documentation" : "The research definition publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-identifier",
          "type" : "token",
          "documentation" : "External identifier for the research definition"
        },
        {
          "name" : "successor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-successor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the research definition"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the research definition"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-description",
          "type" : "string",
          "documentation" : "The description of the research definition"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-derived-from",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the research definition"
        },
        {
          "name" : "predecessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-predecessor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the research definition"
        },
        {
          "name" : "composed-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-composed-of",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-version",
          "type" : "token",
          "documentation" : "The business version of the research definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the research definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the research definition"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-effective",
          "type" : "date",
          "documentation" : "The time during which the research definition is intended to be in use"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-depends-on",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the research definition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-context",
          "type" : "token",
          "documentation" : "A use context assigned to the research definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the research definition"
        },
        {
          "name" : "topic",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-topic",
          "type" : "token",
          "documentation" : "Topics associated with the ResearchDefinition"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the research definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchDefinition-status",
          "type" : "token",
          "documentation" : "The current status of the research definition"
        }]
      },
      {
        "type" : "ResearchElementDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ResearchElementDefinition.successor",
        "ResearchElementDefinition.derived-from",
        "ResearchElementDefinition.predecessor",
        "ResearchElementDefinition.composed-of",
        "ResearchElementDefinition.depends-on"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-date",
          "type" : "date",
          "documentation" : "The research element definition publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-identifier",
          "type" : "token",
          "documentation" : "External identifier for the research element definition"
        },
        {
          "name" : "successor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-successor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the research element definition"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the research element definition"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-description",
          "type" : "string",
          "documentation" : "The description of the research element definition"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-derived-from",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the research element definition"
        },
        {
          "name" : "predecessor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-predecessor",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the research element definition"
        },
        {
          "name" : "composed-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-composed-of",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-version",
          "type" : "token",
          "documentation" : "The business version of the research element definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the research element definition"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the research element definition"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-effective",
          "type" : "date",
          "documentation" : "The time during which the research element definition is intended to be in use"
        },
        {
          "name" : "depends-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-depends-on",
          "type" : "reference",
          "documentation" : "What resource is being referenced"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the research element definition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context",
          "type" : "token",
          "documentation" : "A use context assigned to the research element definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the research element definition"
        },
        {
          "name" : "topic",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-topic",
          "type" : "token",
          "documentation" : "Topics associated with the ResearchElementDefinition"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the research element definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-status",
          "type" : "token",
          "documentation" : "The current status of the research element definition"
        }]
      },
      {
        "type" : "ResearchStudy",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ResearchStudy.partof",
        "ResearchStudy.sponsor",
        "ResearchStudy.principalinvestigator",
        "ResearchStudy.protocol",
        "ResearchStudy.site"],
        "searchRevInclude" : ["AdverseEvent.study",
        "ResearchStudy.partof",
        "ResearchSubject.study"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-date",
          "type" : "date",
          "documentation" : "When the study began and ended"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-identifier",
          "type" : "token",
          "documentation" : "Business Identifier for study"
        },
        {
          "name" : "partof",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-partof",
          "type" : "reference",
          "documentation" : "Part of larger study"
        },
        {
          "name" : "sponsor",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-sponsor",
          "type" : "reference",
          "documentation" : "Organization that initiates and is legally responsible for the study"
        },
        {
          "name" : "focus",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-focus",
          "type" : "token",
          "documentation" : "Drugs, devices, etc. under study"
        },
        {
          "name" : "principalinvestigator",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-principalinvestigator",
          "type" : "reference",
          "documentation" : "Researcher who oversees multiple aspects of the study"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-title",
          "type" : "string",
          "documentation" : "Name for this study"
        },
        {
          "name" : "protocol",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-protocol",
          "type" : "reference",
          "documentation" : "Steps followed in executing study"
        },
        {
          "name" : "site",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-site",
          "type" : "reference",
          "documentation" : "Facility where study activities are conducted"
        },
        {
          "name" : "location",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-location",
          "type" : "token",
          "documentation" : "Geographic region(s) for study"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-category",
          "type" : "token",
          "documentation" : "Classifications for the study"
        },
        {
          "name" : "keyword",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-keyword",
          "type" : "token",
          "documentation" : "Used to search for the study"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchStudy-status",
          "type" : "token",
          "documentation" : "active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn"
        }]
      },
      {
        "type" : "ResearchSubject",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ResearchSubject",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ResearchSubject.study",
        "ResearchSubject.individual",
        "ResearchSubject.patient"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchSubject-date",
          "type" : "date",
          "documentation" : "Start and end of participation"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchSubject-identifier",
          "type" : "token",
          "documentation" : "Business Identifier for research subject in a study"
        },
        {
          "name" : "study",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchSubject-study",
          "type" : "reference",
          "documentation" : "Study subject is part of"
        },
        {
          "name" : "individual",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchSubject-individual",
          "type" : "reference",
          "documentation" : "Who is part of study"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchSubject-patient",
          "type" : "reference",
          "documentation" : "Who is part of study"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ResearchSubject-status",
          "type" : "token",
          "documentation" : "candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn"
        }]
      },
      {
        "type" : "RiskAssessment",
        "profile" : "http://hl7.org/fhir/StructureDefinition/RiskAssessment",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["RiskAssessment.condition",
        "RiskAssessment.performer",
        "RiskAssessment.subject",
        "RiskAssessment.patient",
        "RiskAssessment.encounter"],
        "searchRevInclude" : ["ClinicalImpression.investigation"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "When was assessment made?"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Unique identifier for the assessment"
        },
        {
          "name" : "condition",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskAssessment-condition",
          "type" : "reference",
          "documentation" : "Condition assessed"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskAssessment-performer",
          "type" : "reference",
          "documentation" : "Who did assessment?"
        },
        {
          "name" : "method",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskAssessment-method",
          "type" : "token",
          "documentation" : "Evaluation mechanism"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskAssessment-subject",
          "type" : "reference",
          "documentation" : "Who/what does assessment apply to?"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Who/what does assessment apply to?"
        },
        {
          "name" : "probability",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskAssessment-probability",
          "type" : "number",
          "documentation" : "Likelihood of specified outcome"
        },
        {
          "name" : "risk",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskAssessment-risk",
          "type" : "token",
          "documentation" : "Likelihood of specified outcome as a qualitative value"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Where was assessment performed?"
        }]
      },
      {
        "type" : "RiskEvidenceSynthesis",
        "profile" : "http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-date",
          "type" : "date",
          "documentation" : "The risk evidence synthesis publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-identifier",
          "type" : "token",
          "documentation" : "External identifier for the risk evidence synthesis"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the risk evidence synthesis"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the risk evidence synthesis"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-description",
          "type" : "string",
          "documentation" : "The description of the risk evidence synthesis"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the risk evidence synthesis"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the risk evidence synthesis"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-version",
          "type" : "token",
          "documentation" : "The business version of the risk evidence synthesis"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the risk evidence synthesis"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the risk evidence synthesis"
        },
        {
          "name" : "effective",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-effective",
          "type" : "date",
          "documentation" : "The time during which the risk evidence synthesis is intended to be in use"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the risk evidence synthesis"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context",
          "type" : "token",
          "documentation" : "A use context assigned to the risk evidence synthesis"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the risk evidence synthesis"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the risk evidence synthesis"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-status",
          "type" : "token",
          "documentation" : "The current status of the risk evidence synthesis"
        }]
      },
      {
        "type" : "Schedule",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Schedule",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Schedule.actor"],
        "searchRevInclude" : ["Slot.schedule"],
        "searchParam" : [{
          "name" : "actor",
          "definition" : "http://hl7.org/fhir/SearchParameter/Schedule-actor",
          "type" : "reference",
          "documentation" : "The individual(HealthcareService, Practitioner, Location, ...) to find a Schedule for"
        },
        {
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/Schedule-date",
          "type" : "date",
          "documentation" : "Search for Schedule resources that have a period that contains this date specified"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Schedule-identifier",
          "type" : "token",
          "documentation" : "A Schedule Identifier"
        },
        {
          "name" : "specialty",
          "definition" : "http://hl7.org/fhir/SearchParameter/Schedule-specialty",
          "type" : "token",
          "documentation" : "Type of specialty needed"
        },
        {
          "name" : "service-category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Schedule-service-category",
          "type" : "token",
          "documentation" : "High-level category"
        },
        {
          "name" : "service-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Schedule-service-type",
          "type" : "token",
          "documentation" : "The type of appointments that can be booked into associated slot(s)"
        },
        {
          "name" : "active",
          "definition" : "http://hl7.org/fhir/SearchParameter/Schedule-active",
          "type" : "token",
          "documentation" : "Is the schedule in active use"
        }]
      },
      {
        "type" : "SearchParameter",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SearchParameter",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["SearchParameter.derived-from",
        "SearchParameter.component"],
        "searchRevInclude" : ["SearchParameter.derived-from",
        "SearchParameter.component"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The search parameter publication date"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/SearchParameter-code",
          "type" : "token",
          "documentation" : "Code used in URL"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the search parameter"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the search parameter"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the search parameter"
        },
        {
          "name" : "derived-from",
          "definition" : "http://hl7.org/fhir/SearchParameter/SearchParameter-derived-from",
          "type" : "reference",
          "documentation" : "Original definition for the search parameter"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the search parameter"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/SearchParameter-type",
          "type" : "token",
          "documentation" : "number | date | string | token | reference | composite | quantity | uri | special"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the search parameter"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the search parameter"
        },
        {
          "name" : "target",
          "definition" : "http://hl7.org/fhir/SearchParameter/SearchParameter-target",
          "type" : "token",
          "documentation" : "Types of resource (if a resource reference)"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the search parameter"
        },
        {
          "name" : "component",
          "definition" : "http://hl7.org/fhir/SearchParameter/SearchParameter-component",
          "type" : "reference",
          "documentation" : "Defines how the part works"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the search parameter"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the search parameter"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the search parameter"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the search parameter"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the search parameter"
        },
        {
          "name" : "base",
          "definition" : "http://hl7.org/fhir/SearchParameter/SearchParameter-base",
          "type" : "token",
          "documentation" : "The resource type(s) this search parameter applies to"
        }]
      },
      {
        "type" : "ServiceRequest",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["ServiceRequest.requester",
        "ServiceRequest.performer",
        "ServiceRequest.replaces",
        "ServiceRequest.subject",
        "ServiceRequest.instantiates-canonical",
        "ServiceRequest.encounter",
        "ServiceRequest.based-on",
        "ServiceRequest.patient",
        "ServiceRequest.specimen"],
        "searchRevInclude" : ["Appointment.based-on",
        "CarePlan.activity-reference",
        "DiagnosticReport.based-on",
        "Encounter.based-on",
        "EpisodeOfCare.incoming-referral",
        "ImagingStudy.basedon",
        "Media.based-on",
        "Observation.based-on",
        "Procedure.based-on",
        "QuestionnaireResponse.based-on",
        "ServiceRequest.replaces",
        "ServiceRequest.based-on"],
        "searchParam" : [{
          "name" : "authored",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-authored",
          "type" : "date",
          "documentation" : "Date request signed"
        },
        {
          "name" : "requester",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-requester",
          "type" : "reference",
          "documentation" : "Who/what is requesting service"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Identifiers assigned to this order"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-code",
          "type" : "token",
          "documentation" : "What is being requested/ordered"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-performer",
          "type" : "reference",
          "documentation" : "Requested performer"
        },
        {
          "name" : "requisition",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-requisition",
          "type" : "token",
          "documentation" : "Composite Request ID"
        },
        {
          "name" : "replaces",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-replaces",
          "type" : "reference",
          "documentation" : "What request replaces"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-subject",
          "type" : "reference",
          "documentation" : "Search by subject"
        },
        {
          "name" : "instantiates-canonical",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-instantiates-canonical",
          "type" : "reference",
          "documentation" : "Instantiates FHIR protocol or definition"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "An encounter in which this request is made"
        },
        {
          "name" : "occurrence",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-occurrence",
          "type" : "date",
          "documentation" : "When service should occur"
        },
        {
          "name" : "priority",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-priority",
          "type" : "token",
          "documentation" : "routine | urgent | asap | stat"
        },
        {
          "name" : "intent",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-intent",
          "type" : "token",
          "documentation" : "proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option"
        },
        {
          "name" : "performer-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-performer-type",
          "type" : "token",
          "documentation" : "Performer role"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-based-on",
          "type" : "reference",
          "documentation" : "What request fulfills"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Search by subject - a patient"
        },
        {
          "name" : "specimen",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-specimen",
          "type" : "reference",
          "documentation" : "Specimen to be tested"
        },
        {
          "name" : "instantiates-uri",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-instantiates-uri",
          "type" : "uri",
          "documentation" : "Instantiates external protocol or definition"
        },
        {
          "name" : "body-site",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-body-site",
          "type" : "token",
          "documentation" : "Where procedure is going to be done"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-category",
          "type" : "token",
          "documentation" : "Classification of service"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/ServiceRequest-status",
          "type" : "token",
          "documentation" : "draft | active | on-hold | revoked | completed | entered-in-error | unknown"
        }]
      },
      {
        "type" : "Slot",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Slot",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Slot.schedule"],
        "searchRevInclude" : ["Appointment.slot"],
        "searchParam" : [{
          "name" : "schedule",
          "definition" : "http://hl7.org/fhir/SearchParameter/Slot-schedule",
          "type" : "reference",
          "documentation" : "The Schedule Resource that we are seeking a slot within"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Slot-identifier",
          "type" : "token",
          "documentation" : "A Slot Identifier"
        },
        {
          "name" : "specialty",
          "definition" : "http://hl7.org/fhir/SearchParameter/Slot-specialty",
          "type" : "token",
          "documentation" : "The specialty of a practitioner that would be required to perform the service requested in this appointment"
        },
        {
          "name" : "service-category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Slot-service-category",
          "type" : "token",
          "documentation" : "A broad categorization of the service that is to be performed during this appointment"
        },
        {
          "name" : "appointment-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Slot-appointment-type",
          "type" : "token",
          "documentation" : "The style of appointment or patient that may be booked in the slot (not service type)"
        },
        {
          "name" : "service-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Slot-service-type",
          "type" : "token",
          "documentation" : "The type of appointments that can be booked into the slot"
        },
        {
          "name" : "start",
          "definition" : "http://hl7.org/fhir/SearchParameter/Slot-start",
          "type" : "date",
          "documentation" : "Appointment date/time."
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Slot-status",
          "type" : "token",
          "documentation" : "The free/busy status of the appointment"
        }]
      },
      {
        "type" : "Specimen",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Specimen",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Specimen.parent",
        "Specimen.subject",
        "Specimen.patient",
        "Specimen.collector"],
        "searchRevInclude" : ["DiagnosticReport.specimen",
        "Media.subject",
        "Media.patient",
        "Observation.specimen",
        "ServiceRequest.specimen",
        "Specimen.parent"],
        "searchParam" : [{
          "name" : "container",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-container",
          "type" : "token",
          "documentation" : "The kind of specimen container"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-identifier",
          "type" : "token",
          "documentation" : "The unique identifier associated with the specimen"
        },
        {
          "name" : "parent",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-parent",
          "type" : "reference",
          "documentation" : "The parent of the specimen"
        },
        {
          "name" : "container-id",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-container-id",
          "type" : "token",
          "documentation" : "The unique identifier associated with the specimen container"
        },
        {
          "name" : "bodysite",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-bodysite",
          "type" : "token",
          "documentation" : "The code for the body site from where the specimen originated"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-subject",
          "type" : "reference",
          "documentation" : "The subject of the specimen"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-patient",
          "type" : "reference",
          "documentation" : "The patient the specimen comes from"
        },
        {
          "name" : "collected",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-collected",
          "type" : "date",
          "documentation" : "The date the specimen was collected"
        },
        {
          "name" : "accession",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-accession",
          "type" : "token",
          "documentation" : "The accession number associated with the specimen"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-type",
          "type" : "token",
          "documentation" : "The specimen type"
        },
        {
          "name" : "collector",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-collector",
          "type" : "reference",
          "documentation" : "Who collected the specimen"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Specimen-status",
          "type" : "token",
          "documentation" : "available | unavailable | unsatisfactory | entered-in-error"
        }]
      },
      {
        "type" : "SpecimenDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SpecimenDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "container",
          "definition" : "http://hl7.org/fhir/SearchParameter/SpecimenDefinition-container",
          "type" : "token",
          "documentation" : "The type of specimen conditioned in container expected by the lab"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/SpecimenDefinition-identifier",
          "type" : "token",
          "documentation" : "The unique identifier associated with the specimen"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/SpecimenDefinition-type",
          "type" : "token",
          "documentation" : "The type of collected specimen"
        }]
      },
      {
        "type" : "StructureDefinition",
        "profile" : "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["StructureDefinition.valueset",
        "StructureDefinition.base"],
        "searchRevInclude" : ["CapabilityStatement.resource-profile",
        "CapabilityStatement.supported-profile",
        "ImplementationGuide.global",
        "OperationDefinition.input-profile",
        "OperationDefinition.output-profile",
        "StructureDefinition.base"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The structure definition publication date"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the structure definition"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the structure definition"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the structure definition"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the structure definition"
        },
        {
          "name" : "experimental",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-experimental",
          "type" : "token",
          "documentation" : "For testing purposes, not real usage"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the structure definition"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-type",
          "type" : "uri",
          "documentation" : "Type defined or constrained by this structure"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the structure definition"
        },
        {
          "name" : "path",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-path",
          "type" : "token",
          "documentation" : "A path that is constrained in the StructureDefinition"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the structure definition"
        },
        {
          "name" : "base-path",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-base-path",
          "type" : "token",
          "documentation" : "Path that identifies the base element"
        },
        {
          "name" : "keyword",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-keyword",
          "type" : "token",
          "documentation" : "A code for the StructureDefinition"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the structure definition"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-identifier",
          "type" : "token",
          "documentation" : "External identifier for the structure definition"
        },
        {
          "name" : "valueset",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-valueset",
          "type" : "reference",
          "documentation" : "A vocabulary binding reference"
        },
        {
          "name" : "kind",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-kind",
          "type" : "token",
          "documentation" : "primitive-type | complex-type | resource | logical"
        },
        {
          "name" : "abstract",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-abstract",
          "type" : "token",
          "documentation" : "Whether the structure is abstract"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the structure definition"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the structure definition"
        },
        {
          "name" : "ext-context",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-ext-context",
          "type" : "token",
          "documentation" : "The system is the URL for the context-type: e.g. http://hl7.org/fhir/extension-context-type#element|CodeableConcept.text"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the structure definition"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the structure definition"
        },
        {
          "name" : "derivation",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-derivation",
          "type" : "token",
          "documentation" : "specialization | constraint - How relates to base definition"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the structure definition"
        },
        {
          "name" : "base",
          "definition" : "http://hl7.org/fhir/SearchParameter/StructureDefinition-base",
          "type" : "reference",
          "documentation" : "Definition that this type is constrained/specialized from"
        }]
      },
      {
        "type" : "StructureMap",
        "profile" : "http://hl7.org/fhir/StructureDefinition/StructureMap",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The structure map publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-identifier",
          "type" : "token",
          "documentation" : "External identifier for the structure map"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the structure map"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the structure map"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the structure map"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the structure map"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the structure map"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the structure map"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the structure map"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the structure map"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the structure map"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the structure map"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the structure map"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the structure map"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the structure map"
        }]
      },
      {
        "type" : "Subscription",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Subscription",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "payload",
          "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-payload",
          "type" : "token",
          "documentation" : "The mime-type of the notification payload"
        },
        {
          "name" : "criteria",
          "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-criteria",
          "type" : "string",
          "documentation" : "The search rules used to determine when to send a notification"
        },
        {
          "name" : "contact",
          "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-contact",
          "type" : "token",
          "documentation" : "Contact details for the subscription"
        },
        {
          "name" : "type",
          "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-type",
          "type" : "token",
          "documentation" : "The type of channel for the sent notifications"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-url",
          "type" : "uri",
          "documentation" : "The uri that will receive the notifications"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-status",
          "type" : "token",
          "documentation" : "The current state of the subscription"
        }]
      },
      {
        "type" : "Substance",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Substance",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Substance.substance-reference"],
        "searchRevInclude" : ["AdverseEvent.substance",
        "Group.member",
        "Medication.ingredient",
        "MedicationKnowledge.ingredient",
        "MedicinalProductInteraction.subject",
        "Specimen.subject",
        "Specimen.patient",
        "Substance.substance-reference"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Substance-identifier",
          "type" : "token",
          "documentation" : "Unique identifier for the substance"
        },
        {
          "name" : "container-identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Substance-container-identifier",
          "type" : "token",
          "documentation" : "Identifier of the package/container"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Substance-code",
          "type" : "token",
          "documentation" : "The code of the substance or ingredient"
        },
        {
          "name" : "quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/Substance-quantity",
          "type" : "quantity",
          "documentation" : "Amount of substance in the package"
        },
        {
          "name" : "substance-reference",
          "definition" : "http://hl7.org/fhir/SearchParameter/Substance-substance-reference",
          "type" : "reference",
          "documentation" : "A component of the substance"
        },
        {
          "name" : "expiry",
          "definition" : "http://hl7.org/fhir/SearchParameter/Substance-expiry",
          "type" : "date",
          "documentation" : "Expiry date of package or container of substance"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/Substance-category",
          "type" : "token",
          "documentation" : "The category of the substance"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Substance-status",
          "type" : "token",
          "documentation" : "active | inactive | entered-in-error"
        }]
      },
      {
        "type" : "SubstanceNucleicAcid",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "SubstancePolymer",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SubstancePolymer",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "SubstanceProtein",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SubstanceProtein",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "SubstanceReferenceInformation",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "SubstanceSourceMaterial",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"]
      },
      {
        "type" : "SubstanceSpecification",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SubstanceSpecification",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/SubstanceSpecification-code",
          "type" : "token",
          "documentation" : "The specific code"
        }]
      },
      {
        "type" : "SupplyDelivery",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SupplyDelivery",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["SupplyDelivery.receiver",
        "SupplyDelivery.patient",
        "SupplyDelivery.supplier"],
        "searchRevInclude" : ["ChargeItem.service"],
        "searchParam" : [{
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "External identifier"
        },
        {
          "name" : "receiver",
          "definition" : "http://hl7.org/fhir/SearchParameter/SupplyDelivery-receiver",
          "type" : "reference",
          "documentation" : "Who collected the Supply"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "Patient for whom the item is supplied"
        },
        {
          "name" : "supplier",
          "definition" : "http://hl7.org/fhir/SearchParameter/SupplyDelivery-supplier",
          "type" : "reference",
          "documentation" : "Dispenser"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/SupplyDelivery-status",
          "type" : "token",
          "documentation" : "in-progress | completed | abandoned | entered-in-error"
        }]
      },
      {
        "type" : "SupplyRequest",
        "profile" : "http://hl7.org/fhir/StructureDefinition/SupplyRequest",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["SupplyRequest.requester",
        "SupplyRequest.subject",
        "SupplyRequest.supplier"],
        "searchParam" : [{
          "name" : "requester",
          "definition" : "http://hl7.org/fhir/SearchParameter/SupplyRequest-requester",
          "type" : "reference",
          "documentation" : "Individual making the request"
        },
        {
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-date",
          "type" : "date",
          "documentation" : "When the request was made"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Business Identifier for SupplyRequest"
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/SupplyRequest-subject",
          "type" : "reference",
          "documentation" : "The destination of the supply"
        },
        {
          "name" : "supplier",
          "definition" : "http://hl7.org/fhir/SearchParameter/SupplyRequest-supplier",
          "type" : "reference",
          "documentation" : "Who is intended to fulfill the request"
        },
        {
          "name" : "category",
          "definition" : "http://hl7.org/fhir/SearchParameter/SupplyRequest-category",
          "type" : "token",
          "documentation" : "The kind of supply (central, non-stock, etc.)"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/SupplyRequest-status",
          "type" : "token",
          "documentation" : "draft | active | suspended +"
        }]
      },
      {
        "type" : "Task",
        "profile" : "http://hl7.org/fhir/StructureDefinition/Task",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["Task.owner",
        "Task.requester",
        "Task.subject",
        "Task.focus",
        "Task.part-of",
        "Task.encounter",
        "Task.based-on",
        "Task.patient"],
        "searchRevInclude" : ["CarePlan.activity-reference",
        "ImagingStudy.basedon",
        "PaymentReconciliation.request",
        "Task.part-of"],
        "searchParam" : [{
          "name" : "owner",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-owner",
          "type" : "reference",
          "documentation" : "Search by task owner"
        },
        {
          "name" : "requester",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-requester",
          "type" : "reference",
          "documentation" : "Search by task requester"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-identifier",
          "type" : "token",
          "documentation" : "Search for a task instance by its business identifier"
        },
        {
          "name" : "business-status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-business-status",
          "type" : "token",
          "documentation" : "Search by business status"
        },
        {
          "name" : "period",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-period",
          "type" : "date",
          "documentation" : "Search by period Task is/was underway"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-code",
          "type" : "token",
          "documentation" : "Search by task code"
        },
        {
          "name" : "performer",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-performer",
          "type" : "token",
          "documentation" : "Search by recommended type of performer (e.g., Requester, Performer, Scheduler)."
        },
        {
          "name" : "subject",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-subject",
          "type" : "reference",
          "documentation" : "Search by subject"
        },
        {
          "name" : "focus",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-focus",
          "type" : "reference",
          "documentation" : "Search by task focus"
        },
        {
          "name" : "part-of",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-part-of",
          "type" : "reference",
          "documentation" : "Search by task this task is part of"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-encounter",
          "type" : "reference",
          "documentation" : "Search by encounter"
        },
        {
          "name" : "priority",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-priority",
          "type" : "token",
          "documentation" : "Search by task priority"
        },
        {
          "name" : "authored-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-authored-on",
          "type" : "date",
          "documentation" : "Search by creation date"
        },
        {
          "name" : "intent",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-intent",
          "type" : "token",
          "documentation" : "Search by task intent"
        },
        {
          "name" : "group-identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-group-identifier",
          "type" : "token",
          "documentation" : "Search by group identifier"
        },
        {
          "name" : "based-on",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-based-on",
          "type" : "reference",
          "documentation" : "Search by requests this task is based on"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-patient",
          "type" : "reference",
          "documentation" : "Search by patient"
        },
        {
          "name" : "modified",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-modified",
          "type" : "date",
          "documentation" : "Search by last modification date"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/Task-status",
          "type" : "token",
          "documentation" : "Search by task status"
        }]
      },
      {
        "type" : "TerminologyCapabilities",
        "profile" : "http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The terminology capabilities publication date"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the terminology capabilities"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the terminology capabilities"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the terminology capabilities"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the terminology capabilities"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the terminology capabilities"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the terminology capabilities"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the terminology capabilities"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the terminology capabilities"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the terminology capabilities"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the terminology capabilities"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the terminology capabilities"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the terminology capabilities"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the terminology capabilities"
        }]
      },
      {
        "type" : "TestReport",
        "profile" : "http://hl7.org/fhir/StructureDefinition/TestReport",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["TestReport.testscript"],
        "searchParam" : [{
          "name" : "result",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestReport-result",
          "type" : "token",
          "documentation" : "The result disposition of the test execution"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestReport-identifier",
          "type" : "token",
          "documentation" : "An external identifier for the test report"
        },
        {
          "name" : "tester",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestReport-tester",
          "type" : "string",
          "documentation" : "The name of the testing organization"
        },
        {
          "name" : "testscript",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestReport-testscript",
          "type" : "reference",
          "documentation" : "The test script executed to produce this report"
        },
        {
          "name" : "issued",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestReport-issued",
          "type" : "date",
          "documentation" : "The test report generation date"
        },
        {
          "name" : "participant",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestReport-participant",
          "type" : "uri",
          "documentation" : "The reference to a participant in the test execution"
        }]
      },
      {
        "type" : "TestScript",
        "profile" : "http://hl7.org/fhir/StructureDefinition/TestScript",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchRevInclude" : ["TestReport.testscript"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-date",
          "type" : "date",
          "documentation" : "The test script publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-identifier",
          "type" : "token",
          "documentation" : "External identifier for the test script"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the test script"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the test script"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-description",
          "type" : "string",
          "documentation" : "The description of the test script"
        },
        {
          "name" : "testscript-capability",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability",
          "type" : "string",
          "documentation" : "TestScript required and validated capability"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the test script"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the test script"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-version",
          "type" : "token",
          "documentation" : "The business version of the test script"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the test script"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the test script"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the test script"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-context",
          "type" : "token",
          "documentation" : "A use context assigned to the test script"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the test script"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the test script"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/TestScript-status",
          "type" : "token",
          "documentation" : "The current status of the test script"
        }]
      },
      {
        "type" : "ValueSet",
        "profile" : "http://hl7.org/fhir/StructureDefinition/ValueSet",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchRevInclude" : ["ConceptMap.source",
        "ConceptMap.source-uri",
        "ConceptMap.target-uri",
        "ConceptMap.target",
        "StructureDefinition.valueset"],
        "searchParam" : [{
          "name" : "date",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-date",
          "type" : "date",
          "documentation" : "The value set publication date"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-identifier",
          "type" : "token",
          "documentation" : "External identifier for the value set"
        },
        {
          "name" : "code",
          "definition" : "http://hl7.org/fhir/SearchParameter/ValueSet-code",
          "type" : "token",
          "documentation" : "This special parameter searches for codes in the value set. See additional notes on the ValueSet resource"
        },
        {
          "name" : "context-type-value",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-value",
          "type" : "composite",
          "documentation" : "A use context type and value assigned to the value set"
        },
        {
          "name" : "jurisdiction",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-jurisdiction",
          "type" : "token",
          "documentation" : "Intended jurisdiction for the value set"
        },
        {
          "name" : "description",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-description",
          "type" : "string",
          "documentation" : "The description of the value set"
        },
        {
          "name" : "context-type",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type",
          "type" : "token",
          "documentation" : "A type of use context assigned to the value set"
        },
        {
          "name" : "title",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-title",
          "type" : "string",
          "documentation" : "The human-friendly name of the value set"
        },
        {
          "name" : "version",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-version",
          "type" : "token",
          "documentation" : "The business version of the value set"
        },
        {
          "name" : "url",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-url",
          "type" : "uri",
          "documentation" : "The uri that identifies the value set"
        },
        {
          "name" : "expansion",
          "definition" : "http://hl7.org/fhir/SearchParameter/ValueSet-expansion",
          "type" : "uri",
          "documentation" : "Identifies the value set expansion (business identifier)"
        },
        {
          "name" : "reference",
          "definition" : "http://hl7.org/fhir/SearchParameter/ValueSet-reference",
          "type" : "uri",
          "documentation" : "A code system included or excluded in the value set or an imported value set"
        },
        {
          "name" : "context-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-quantity",
          "type" : "quantity",
          "documentation" : "A quantity- or range-valued use context assigned to the value set"
        },
        {
          "name" : "name",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-name",
          "type" : "string",
          "documentation" : "Computationally friendly name of the value set"
        },
        {
          "name" : "context",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context",
          "type" : "token",
          "documentation" : "A use context assigned to the value set"
        },
        {
          "name" : "publisher",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-publisher",
          "type" : "string",
          "documentation" : "Name of the publisher of the value set"
        },
        {
          "name" : "context-type-quantity",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity",
          "type" : "composite",
          "documentation" : "A use context type and quantity- or range-based value assigned to the value set"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/conformance-status",
          "type" : "token",
          "documentation" : "The current status of the value set"
        }]
      },
      {
        "type" : "VerificationResult",
        "profile" : "http://hl7.org/fhir/StructureDefinition/VerificationResult",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["VerificationResult.target"],
        "searchParam" : [{
          "name" : "target",
          "definition" : "http://hl7.org/fhir/SearchParameter/VerificationResult-target",
          "type" : "reference",
          "documentation" : "A resource that was validated"
        }]
      },
      {
        "type" : "VisionPrescription",
        "profile" : "http://hl7.org/fhir/StructureDefinition/VisionPrescription",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "vread",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "update",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "delete",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-instance",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "history-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "create",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        },
        {
          "code" : "search-type",
          "documentation" : "Implemented per the specification (or Insert other doco here)"
        }],
        "conditionalCreate" : true,
        "conditionalUpdate" : true,
        "conditionalDelete" : "multiple",
        "referencePolicy" : ["literal",
        "logical"],
        "searchInclude" : ["VisionPrescription.prescriber",
        "VisionPrescription.patient",
        "VisionPrescription.encounter"],
        "searchRevInclude" : ["CarePlan.activity-reference"],
        "searchParam" : [{
          "name" : "prescriber",
          "definition" : "http://hl7.org/fhir/SearchParameter/VisionPrescription-prescriber",
          "type" : "reference",
          "documentation" : "Who authorized the vision prescription"
        },
        {
          "name" : "identifier",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-identifier",
          "type" : "token",
          "documentation" : "Return prescriptions with this external identifier"
        },
        {
          "name" : "patient",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-patient",
          "type" : "reference",
          "documentation" : "The identity of a patient to list dispenses for"
        },
        {
          "name" : "datewritten",
          "definition" : "http://hl7.org/fhir/SearchParameter/VisionPrescription-datewritten",
          "type" : "date",
          "documentation" : "Return prescriptions written on this date"
        },
        {
          "name" : "encounter",
          "definition" : "http://hl7.org/fhir/SearchParameter/clinical-encounter",
          "type" : "reference",
          "documentation" : "Return prescriptions with this encounter identifier"
        },
        {
          "name" : "status",
          "definition" : "http://hl7.org/fhir/SearchParameter/VisionPrescription-status",
          "type" : "token",
          "documentation" : "The status of the vision prescription"
        }]
      }],
      "interaction" : [{
        "code" : "transaction",
        "documentation" : "Implemented per the specification (or Insert other doco here)"
      },
      {
        "code" : "batch",
        "documentation" : "Implemented per the specification (or Insert other doco here)"
      },
      {
        "code" : "history-system",
        "documentation" : "Implemented per the specification (or Insert other doco here)"
      },
      {
        "code" : "search-system",
        "documentation" : "Implemented per the specification (or Insert other doco here)"
      }],
      "searchParam" : [{
        "name" : "_text",
        "definition" : "http://hl7.org/fhir/SearchParameter/DomainResource-text",
        "type" : "string",
        "documentation" : "Search on the narrative of the resource"
      },
      {
        "name" : "something",
        "definition" : "http://hl7.org/fhir/SearchParameter/id",
        "type" : "string",
        "documentation" : "some doco"
      },
      {
        "name" : "_list",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-list",
        "type" : "token",
        "documentation" : "Retrieval of resources that are referenced by a List resource"
      },
      {
        "name" : "_has",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-has",
        "type" : "composite",
        "documentation" : "Provides support for reverse chaining"
      },
      {
        "name" : "_type",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-type",
        "type" : "token",
        "documentation" : "Type of resource (when doing cross-resource search"
      },
      {
        "name" : "_sort",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-source",
        "type" : "token",
        "documentation" : "How to sort the resources when returning"
      },
      {
        "name" : "_count",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-count",
        "type" : "number",
        "documentation" : "How many resources to return"
      },
      {
        "name" : "_include",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-include",
        "type" : "token",
        "documentation" : "Control over returning additional resources (see spec)"
      },
      {
        "name" : "_revinclude",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-revinclude",
        "type" : "token",
        "documentation" : "Control over returning additional resources (see spec)"
      },
      {
        "name" : "_summary",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-summary",
        "type" : "token",
        "documentation" : "What kind of information to return"
      },
      {
        "name" : "_elements",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-elements",
        "type" : "string",
        "documentation" : "What kind of information to return"
      },
      {
        "name" : "_contained",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-contained",
        "type" : "token",
        "documentation" : "Managing search into contained resources"
      },
      {
        "name" : "_containedType",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-containedType",
        "type" : "token",
        "documentation" : "Managing search into contained resources"
      },
      {
        "name" : "something",
        "definition" : "http://hl7.org/fhir/SearchParameter/id",
        "type" : "string",
        "documentation" : "some doco"
      },
      {
        "name" : "_list",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-list",
        "type" : "token",
        "documentation" : "Retrieval of resources that are referenced by a List resource"
      },
      {
        "name" : "_has",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-has",
        "type" : "composite",
        "documentation" : "Provides support for reverse chaining"
      },
      {
        "name" : "_type",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-type",
        "type" : "token",
        "documentation" : "Type of resource (when doing cross-resource search"
      },
      {
        "name" : "_sort",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-source",
        "type" : "token",
        "documentation" : "How to sort the resources when returning"
      },
      {
        "name" : "_count",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-count",
        "type" : "number",
        "documentation" : "How many resources to return"
      },
      {
        "name" : "_include",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-include",
        "type" : "token",
        "documentation" : "Control over returning additional resources (see spec)"
      },
      {
        "name" : "_revinclude",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-revinclude",
        "type" : "token",
        "documentation" : "Control over returning additional resources (see spec)"
      },
      {
        "name" : "_summary",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-summary",
        "type" : "token",
        "documentation" : "What kind of information to return"
      },
      {
        "name" : "_elements",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-elements",
        "type" : "string",
        "documentation" : "What kind of information to return"
      },
      {
        "name" : "_contained",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-contained",
        "type" : "token",
        "documentation" : "Managing search into contained resources"
      },
      {
        "name" : "_containedType",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-containedType",
        "type" : "token",
        "documentation" : "Managing search into contained resources"
      },
      {
        "name" : "_query",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-query",
        "type" : "token",
        "documentation" : "A custom search profile that describes a specific defined query operation"
      },
      {
        "name" : "_profile",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-profile",
        "type" : "uri",
        "documentation" : "Profiles this resource claims to conform to"
      },
      {
        "name" : "_lastUpdated",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated",
        "type" : "date",
        "documentation" : "When the resource version last changed"
      },
      {
        "name" : "_tag",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-tag",
        "type" : "token",
        "documentation" : "Tags applied to this resource"
      },
      {
        "name" : "_security",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-security",
        "type" : "token",
        "documentation" : "Security Labels applied to this resource"
      },
      {
        "name" : "_source",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-source",
        "type" : "uri",
        "documentation" : "Identifies where the resource comes from"
      },
      {
        "name" : "_id",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-id",
        "type" : "token",
        "documentation" : "Logical id of this artifact"
      },
      {
        "name" : "_content",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-content",
        "type" : "string",
        "documentation" : "Search on the entire content of the resource"
      },
      {
        "name" : "something",
        "definition" : "http://hl7.org/fhir/SearchParameter/id",
        "type" : "string",
        "documentation" : "some doco"
      },
      {
        "name" : "_list",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-list",
        "type" : "token",
        "documentation" : "Retrieval of resources that are referenced by a List resource"
      },
      {
        "name" : "_has",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-has",
        "type" : "composite",
        "documentation" : "Provides support for reverse chaining"
      },
      {
        "name" : "_type",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-type",
        "type" : "token",
        "documentation" : "Type of resource (when doing cross-resource search"
      },
      {
        "name" : "_sort",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-source",
        "type" : "token",
        "documentation" : "How to sort the resources when returning"
      },
      {
        "name" : "_count",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-count",
        "type" : "number",
        "documentation" : "How many resources to return"
      },
      {
        "name" : "_include",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-include",
        "type" : "token",
        "documentation" : "Control over returning additional resources (see spec)"
      },
      {
        "name" : "_revinclude",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-revinclude",
        "type" : "token",
        "documentation" : "Control over returning additional resources (see spec)"
      },
      {
        "name" : "_summary",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-summary",
        "type" : "token",
        "documentation" : "What kind of information to return"
      },
      {
        "name" : "_elements",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-elements",
        "type" : "string",
        "documentation" : "What kind of information to return"
      },
      {
        "name" : "_contained",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-contained",
        "type" : "token",
        "documentation" : "Managing search into contained resources"
      },
      {
        "name" : "_containedType",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-containedType",
        "type" : "token",
        "documentation" : "Managing search into contained resources"
      }],
      "operation" : [{
        "name" : "validate",
        "definition" : "http://hl7.org/fhir/OperationDefinition/resource-validate"
      },
      {
        "name" : "meta",
        "definition" : "http://hl7.org/fhir/OperationDefinition/resource-meta"
      },
      {
        "name" : "meta-add",
        "definition" : "http://hl7.org/fhir/OperationDefinition/resource-meta-add"
      },
      {
        "name" : "meta-delete",
        "definition" : "http://hl7.org/fhir/OperationDefinition/resource-meta-delete"
      },
      {
        "name" : "convert",
        "definition" : "http://hl7.org/fhir/OperationDefinition/resource-convert"
      },
      {
        "name" : "graphql",
        "definition" : "http://hl7.org/fhir/OperationDefinition/resource-graphql"
      },
      {
        "name" : "graph",
        "definition" : "http://hl7.org/fhir/OperationDefinition/resource-graph"
      },
      {
        "name" : "apply",
        "definition" : "http://hl7.org/fhir/OperationDefinition/activitydefinition-apply"
      },
      {
        "name" : "data-requirements",
        "definition" : "http://hl7.org/fhir/OperationDefinition/activitydefinition-data-requirements"
      },
      {
        "name" : "subset",
        "definition" : "http://hl7.org/fhir/OperationDefinition/capabilitystatement-subset"
      },
      {
        "name" : "implements",
        "definition" : "http://hl7.org/fhir/OperationDefinition/capabilitystatement-implements"
      },
      {
        "name" : "conforms",
        "definition" : "http://hl7.org/fhir/OperationDefinition/capabilitystatement-conforms"
      },
      {
        "name" : "versions",
        "definition" : "http://hl7.org/fhir/OperationDefinition/capabilitystatement-versions"
      },
      {
        "name" : "apply",
        "definition" : "http://hl7.org/fhir/OperationDefinition/chargeitemdefinition-apply"
      },
      {
        "name" : "submit",
        "definition" : "http://hl7.org/fhir/OperationDefinition/claim-submit"
      },
      {
        "name" : "lookup",
        "definition" : "http://hl7.org/fhir/OperationDefinition/codesystem-lookup"
      },
      {
        "name" : "validate-code",
        "definition" : "http://hl7.org/fhir/OperationDefinition/codesystem-validate-code"
      },
      {
        "name" : "subsumes",
        "definition" : "http://hl7.org/fhir/OperationDefinition/codesystem-subsumes"
      },
      {
        "name" : "find-matches",
        "definition" : "http://hl7.org/fhir/OperationDefinition/codesystem-find-matches"
      },
      {
        "name" : "document",
        "definition" : "http://hl7.org/fhir/OperationDefinition/composition-document"
      },
      {
        "name" : "translate",
        "definition" : "http://hl7.org/fhir/OperationDefinition/conceptmap-translate"
      },
      {
        "name" : "closure",
        "definition" : "http://hl7.org/fhir/OperationDefinition/conceptmap-closure"
      },
      {
        "name" : "submit",
        "definition" : "http://hl7.org/fhir/OperationDefinition/coverageeligibilityrequest-submit"
      },
      {
        "name" : "everything",
        "definition" : "http://hl7.org/fhir/OperationDefinition/encounter-everything"
      },
      {
        "name" : "everything",
        "definition" : "http://hl7.org/fhir/OperationDefinition/group-everything"
      },
      {
        "name" : "data-requirements",
        "definition" : "http://hl7.org/fhir/OperationDefinition/library-data-requirements"
      },
      {
        "name" : "find",
        "definition" : "http://hl7.org/fhir/OperationDefinition/list-find"
      },
      {
        "name" : "evaluate-measure",
        "definition" : "http://hl7.org/fhir/OperationDefinition/measure-evaluate-measure"
      },
      {
        "name" : "data-requirements",
        "definition" : "http://hl7.org/fhir/OperationDefinition/measure-data-requirements"
      },
      {
        "name" : "submit-data",
        "definition" : "http://hl7.org/fhir/OperationDefinition/measure-submit-data"
      },
      {
        "name" : "collect-data",
        "definition" : "http://hl7.org/fhir/OperationDefinition/measure-collect-data"
      },
      {
        "name" : "care-gaps",
        "definition" : "http://hl7.org/fhir/OperationDefinition/measure-care-gaps"
      },
      {
        "name" : "everything",
        "definition" : "http://hl7.org/fhir/OperationDefinition/medicinalproduct-everything"
      },
      {
        "name" : "process-message",
        "definition" : "http://hl7.org/fhir/OperationDefinition/messageheader-process-message"
      },
      {
        "name" : "preferred-id",
        "definition" : "http://hl7.org/fhir/OperationDefinition/namingsystem-preferred-id"
      },
      {
        "name" : "stats",
        "definition" : "http://hl7.org/fhir/OperationDefinition/observation-stats"
      },
      {
        "name" : "lastn",
        "definition" : "http://hl7.org/fhir/OperationDefinition/observation-lastn"
      },
      {
        "name" : "match",
        "definition" : "http://hl7.org/fhir/OperationDefinition/patient-match"
      },
      {
        "name" : "everything",
        "definition" : "http://hl7.org/fhir/OperationDefinition/patient-everything"
      },
      {
        "name" : "apply",
        "definition" : "http://hl7.org/fhir/OperationDefinition/plandefinition-apply"
      },
      {
        "name" : "data-requirements",
        "definition" : "http://hl7.org/fhir/OperationDefinition/plandefinition-data-requirements"
      },
      {
        "name" : "questionnaire",
        "definition" : "http://hl7.org/fhir/OperationDefinition/structuredefinition-questionnaire"
      },
      {
        "name" : "snapshot",
        "definition" : "http://hl7.org/fhir/OperationDefinition/structuredefinition-snapshot"
      },
      {
        "name" : "transform",
        "definition" : "http://hl7.org/fhir/OperationDefinition/structuremap-transform"
      },
      {
        "name" : "expand",
        "definition" : "http://hl7.org/fhir/OperationDefinition/valueset-expand"
      },
      {
        "name" : "validate-code",
        "definition" : "http://hl7.org/fhir/OperationDefinition/valueset-validate-code"
      }]
    }]
  }