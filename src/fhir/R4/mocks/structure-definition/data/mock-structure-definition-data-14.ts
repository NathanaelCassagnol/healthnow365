import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/dosage.profile.json.html
// StructureDefinition for Dosage

export const mockStructureDefinitionData14: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Dosage",
    "meta" : {
      "lastUpdated" : "2019-11-01T09:29:23.356+11:00"
    },
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "trial-use"
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/Dosage",
    "version" : "4.0.1",
    "name" : "Dosage",
    "status" : "draft",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for Dosage Type: Indicates how the medication is/was taken or should be taken by the patient.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    },
    {
      "identity" : "v2",
      "uri" : "http://hl7.org/v2",
      "name" : "HL7 v2 Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "Dosage",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/BackboneElement",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "Dosage",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "trial-use"
        }],
        "path" : "Dosage",
        "short" : "How the medication is/was taken or should be taken",
        "definition" : "Indicates how the medication is/was taken or should be taken by the patient.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Dosage",
          "min" : 0,
          "max" : "*"
        },
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        },
        {
          "identity" : "rim",
          "map" : ".outboundRelationship[typeCode=COMP].target[classCode=SBADM, moodCode=INT]"
        }]
      },
      {
        "id" : "Dosage.id",
        "path" : "Dosage.id",
        "representation" : ["xmlAttr"],
        "short" : "Unique id for inter-element referencing",
        "definition" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Element.id",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "string"
          }],
          "code" : "http://hl7.org/fhirpath/System.String"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Dosage.extension",
        "path" : "Dosage.extension",
        "slicing" : {
          "discriminator" : [{
            "type" : "value",
            "path" : "url"
          }],
          "description" : "Extensions are always sliced by (at least) url",
          "rules" : "open"
        },
        "short" : "Additional content defined by implementations",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "alias" : ["extensions",
        "user content"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Element.extension",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Extension"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "ext-1",
          "severity" : "error",
          "human" : "Must have either extensions or value[x], not both",
          "expression" : "extension.exists() != value.exists()",
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
          "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Dosage.modifierExtension",
        "path" : "Dosage.modifierExtension",
        "short" : "Extensions that cannot be ignored even if unrecognized",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "requirements" : "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
        "alias" : ["extensions",
        "user content",
        "modifiers"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "BackboneElement.modifierExtension",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Extension"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "ext-1",
          "severity" : "error",
          "human" : "Must have either extensions or value[x], not both",
          "expression" : "extension.exists() != value.exists()",
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
          "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
        }],
        "isModifier" : true,
        "isModifierReason" : "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      },
      {
        "id" : "Dosage.sequence",
        "path" : "Dosage.sequence",
        "short" : "The order of the dosage instructions",
        "definition" : "Indicates the order in which the dosage instructions should be applied or interpreted.",
        "requirements" : "If the sequence number of multiple Dosages is the same, then it is implied that the instructions are to be treated as concurrent.  If the sequence number is different, then the Dosages are intended to be sequential.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.sequence",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "integer"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "TQ1-1"
        },
        {
          "identity" : "rim",
          "map" : ".text"
        }]
      },
      {
        "id" : "Dosage.text",
        "path" : "Dosage.text",
        "short" : "Free text dosage instructions e.g. SIG",
        "definition" : "Free text dosage instructions e.g. SIG.",
        "requirements" : "Free text dosage instructions can be used for cases where the instructions are too complex to code.  The content of this attribute does not include the name or description of the medication. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication. It is expected that the text instructions will always be populated.  If the dosage.timing attribute is also populated, then the dosage.text should reflect the same information as the timing.  Additional information about administration or preparation of the medication should be included as text.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.text",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "string"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-6; RXE-21"
        },
        {
          "identity" : "rim",
          "map" : ".text"
        }]
      },
      {
        "id" : "Dosage.additionalInstruction",
        "path" : "Dosage.additionalInstruction",
        "short" : "Supplemental instruction or warnings to the patient - e.g. \"with meals\", \"may cause drowsiness\"",
        "definition" : "Supplemental instructions to the patient on how to take the medication  (e.g. \"with meals\" or\"take half to one hour before food\") or warnings for the patient about the medication (e.g. \"may cause drowsiness\" or \"avoid exposure of skin to direct sunlight or sunlamps\").",
        "comment" : "Information about administration or preparation of the medication (e.g. \"infuse as rapidly as possibly via intraperitoneal port\" or \"immediately following drug x\") should be populated in dosage.text.",
        "requirements" : "Additional instruction is intended to be coded, but where no code exists, the element could include text.  For example, \"Swallow with plenty of water\" which might or might not be coded.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Dosage.additionalInstruction",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "AdditionalInstruction"
          }],
          "strength" : "example",
          "description" : "A coded concept identifying additional instructions such as \"take with water\" or \"avoid operating heavy machinery\".",
          "valueSet" : "http://hl7.org/fhir/ValueSet/additional-instruction-codes"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-7"
        },
        {
          "identity" : "rim",
          "map" : ".text"
        }]
      },
      {
        "id" : "Dosage.patientInstruction",
        "path" : "Dosage.patientInstruction",
        "short" : "Patient or consumer oriented instructions",
        "definition" : "Instructions in terms that are understood by the patient or consumer.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.patientInstruction",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "string"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-7"
        },
        {
          "identity" : "rim",
          "map" : ".text"
        }]
      },
      {
        "id" : "Dosage.timing",
        "path" : "Dosage.timing",
        "short" : "When medication should be administered",
        "definition" : "When medication should be administered.",
        "comment" : "This attribute might not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.",
        "requirements" : "The timing schedule for giving the medication to the patient. This  data type allows many different expressions. For example: \"Every 8 hours\"; \"Three times a day\"; \"1/2 an hour before breakfast for 10 days from 23-Dec 2011:\"; \"15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\".  Sometimes, a rate can imply duration when expressed as total volume / duration (e.g.  500mL/2 hours implies a duration of 2 hours).  However, when rate doesn't imply duration (e.g. 250mL/hour), then the timing.repeat.duration is needed to convey the infuse over time period.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.timing",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Timing"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : ".effectiveTime"
        }]
      },
      {
        "id" : "Dosage.asNeeded[x]",
        "path" : "Dosage.asNeeded[x]",
        "short" : "Take \"as needed\" (for x)",
        "definition" : "Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).",
        "comment" : "Can express \"as needed\" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express \"as needed\" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not \"prn\" or \"as needed\".",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.asNeeded[x]",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "boolean"
        },
        {
          "code" : "CodeableConcept"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "MedicationAsNeededReason"
          }],
          "strength" : "example",
          "description" : "A coded concept identifying the precondition that should be met or evaluated prior to consuming or administering a medication dose.  For example \"pain\", \"30 minutes prior to sexual intercourse\", \"on flare-up\" etc.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/medication-as-needed-reason"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "TQ1-9"
        },
        {
          "identity" : "rim",
          "map" : ".outboundRelationship[typeCode=PRCN].target[classCode=OBS, moodCode=EVN, code=\"as needed\"].value=boolean or codable concept"
        }]
      },
      {
        "id" : "Dosage.site",
        "path" : "Dosage.site",
        "short" : "Body site to administer to",
        "definition" : "Body site to administer to.",
        "comment" : "If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.",
        "requirements" : "A coded specification of the anatomic site where the medication first enters the body.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.site",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "MedicationAdministrationSite"
          }],
          "strength" : "example",
          "description" : "A coded concept describing the site location the medicine enters into or onto the body.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/approach-site-codes"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXR-2"
        },
        {
          "identity" : "rim",
          "map" : ".approachSiteCode"
        }]
      },
      {
        "id" : "Dosage.route",
        "path" : "Dosage.route",
        "short" : "How drug should enter body",
        "definition" : "How drug should enter body.",
        "requirements" : "A code specifying the route or physiological path of administration of a therapeutic agent into or onto a patient's body.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.route",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "RouteOfAdministration"
          }],
          "strength" : "example",
          "description" : "A coded concept describing the route or physiological path of administration of a therapeutic agent into or onto the body of a subject.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/route-codes"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXR-1"
        },
        {
          "identity" : "rim",
          "map" : ".routeCode"
        }]
      },
      {
        "id" : "Dosage.method",
        "path" : "Dosage.method",
        "short" : "Technique for administering medication",
        "definition" : "Technique for administering medication.",
        "comment" : "Terminologies used often pre-coordinate this term with the route and or form of administration.",
        "requirements" : "A coded value indicating the method by which the medication is introduced into or onto the body. Most commonly used for injections.  For examples, Slow Push; Deep IV.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.method",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "MedicationAdministrationMethod"
          }],
          "strength" : "example",
          "description" : "A coded concept describing the technique by which the medicine is administered.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/administration-method-codes"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXR-4"
        },
        {
          "identity" : "rim",
          "map" : ".doseQuantity"
        }]
      },
      {
        "id" : "Dosage.doseAndRate",
        "path" : "Dosage.doseAndRate",
        "short" : "Amount of medication administered",
        "definition" : "The amount of medication administered.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Dosage.doseAndRate",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Element"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "TQ1-2"
        }]
      },
      {
        "id" : "Dosage.doseAndRate.id",
        "path" : "Dosage.doseAndRate.id",
        "representation" : ["xmlAttr"],
        "short" : "Unique id for inter-element referencing",
        "definition" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Element.id",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "string"
          }],
          "code" : "http://hl7.org/fhirpath/System.String"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Dosage.doseAndRate.extension",
        "path" : "Dosage.doseAndRate.extension",
        "slicing" : {
          "discriminator" : [{
            "type" : "value",
            "path" : "url"
          }],
          "description" : "Extensions are always sliced by (at least) url",
          "rules" : "open"
        },
        "short" : "Additional content defined by implementations",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "alias" : ["extensions",
        "user content"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Element.extension",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Extension"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "ext-1",
          "severity" : "error",
          "human" : "Must have either extensions or value[x], not both",
          "expression" : "extension.exists() != value.exists()",
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
          "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Dosage.doseAndRate.type",
        "path" : "Dosage.doseAndRate.type",
        "short" : "The kind of dose or rate specified",
        "definition" : "The kind of dose or rate specified, for example, ordered or calculated.",
        "requirements" : "If the type is not populated, assume to be \"ordered\".",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.doseAndRate.type",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "DoseAndRateType"
          }],
          "strength" : "example",
          "description" : "The kind of dose or rate specified.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/dose-rate-type"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-21; RXE-23"
        }]
      },
      {
        "id" : "Dosage.doseAndRate.dose[x]",
        "path" : "Dosage.doseAndRate.dose[x]",
        "short" : "Amount of medication per dose",
        "definition" : "Amount of medication per dose.",
        "comment" : "Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.",
        "requirements" : "The amount of therapeutic or other substance given at one administration event.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.doseAndRate.dose[x]",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Range"
        },
        {
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-2, RXE-3"
        },
        {
          "identity" : "rim",
          "map" : ".doseQuantity"
        }]
      },
      {
        "id" : "Dosage.doseAndRate.rate[x]",
        "path" : "Dosage.doseAndRate.rate[x]",
        "short" : "Amount of medication per unit of time",
        "definition" : "Amount of medication per unit of time.",
        "comment" : "It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.\r\rIt is possible to specify a rate over time (for example, 100 ml/hour) using either the rateRatio and rateQuantity.  The rateQuantity approach requires systems to have the capability to parse UCUM grammer where ml/hour is included rather than a specific ratio where the time is specified as the denominator.  Where a rate such as 500ml over 2 hours is specified, the use of rateRatio may be more semantically correct than specifying using a rateQuantity of 250 mg/hour.",
        "requirements" : "Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.  Sometimes, a rate can imply duration when expressed as total volume / duration (e.g.  500mL/2 hours implies a duration of 2 hours).  However, when rate doesn't imply duration (e.g. 250mL/hour), then the timing.repeat.duration is needed to convey the infuse over time period.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.doseAndRate.rate[x]",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Ratio"
        },
        {
          "code" : "Range"
        },
        {
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXE22, RXE23, RXE-24"
        },
        {
          "identity" : "rim",
          "map" : ".rateQuantity"
        }]
      },
      {
        "id" : "Dosage.maxDosePerPeriod",
        "path" : "Dosage.maxDosePerPeriod",
        "short" : "Upper limit on medication per unit of time",
        "definition" : "Upper limit on medication per unit of time.",
        "comment" : "This is intended for use as an adjunct to the dosage when there is an upper cap.  For example \"2 tablets every 4 hours to a maximum of 8/day\".",
        "requirements" : "The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time.  For example, 1000mg in 24 hours.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.maxDosePerPeriod",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Ratio"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-23, RXE-19"
        },
        {
          "identity" : "rim",
          "map" : ".maxDoseQuantity"
        }]
      },
      {
        "id" : "Dosage.maxDosePerAdministration",
        "path" : "Dosage.maxDosePerAdministration",
        "short" : "Upper limit on medication per administration",
        "definition" : "Upper limit on medication per administration.",
        "comment" : "This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 â€“ 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.",
        "requirements" : "The maximum total quantity of a therapeutic substance that may be administered to a subject per administration.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.maxDosePerAdministration",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "not supported"
        }]
      },
      {
        "id" : "Dosage.maxDosePerLifetime",
        "path" : "Dosage.maxDosePerLifetime",
        "short" : "Upper limit on medication per lifetime of the patient",
        "definition" : "Upper limit on medication per lifetime of the patient.",
        "requirements" : "The maximum total quantity of a therapeutic substance that may be administered per lifetime of the subject.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Dosage.maxDosePerLifetime",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "not supported"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Dosage",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "trial-use"
        }],
        "path" : "Dosage",
        "short" : "How the medication is/was taken or should be taken",
        "definition" : "Indicates how the medication is/was taken or should be taken by the patient.",
        "min" : 0,
        "max" : "*",
        "mapping" : [{
          "identity" : "rim",
          "map" : ".outboundRelationship[typeCode=COMP].target[classCode=SBADM, moodCode=INT]"
        }]
      },
      {
        "id" : "Dosage.sequence",
        "path" : "Dosage.sequence",
        "short" : "The order of the dosage instructions",
        "definition" : "Indicates the order in which the dosage instructions should be applied or interpreted.",
        "requirements" : "If the sequence number of multiple Dosages is the same, then it is implied that the instructions are to be treated as concurrent.  If the sequence number is different, then the Dosages are intended to be sequential.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "integer"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "TQ1-1"
        },
        {
          "identity" : "rim",
          "map" : ".text"
        }]
      },
      {
        "id" : "Dosage.text",
        "path" : "Dosage.text",
        "short" : "Free text dosage instructions e.g. SIG",
        "definition" : "Free text dosage instructions e.g. SIG.",
        "requirements" : "Free text dosage instructions can be used for cases where the instructions are too complex to code.  The content of this attribute does not include the name or description of the medication. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication. It is expected that the text instructions will always be populated.  If the dosage.timing attribute is also populated, then the dosage.text should reflect the same information as the timing.  Additional information about administration or preparation of the medication should be included as text.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-6; RXE-21"
        },
        {
          "identity" : "rim",
          "map" : ".text"
        }]
      },
      {
        "id" : "Dosage.additionalInstruction",
        "path" : "Dosage.additionalInstruction",
        "short" : "Supplemental instruction or warnings to the patient - e.g. \"with meals\", \"may cause drowsiness\"",
        "definition" : "Supplemental instructions to the patient on how to take the medication  (e.g. \"with meals\" or\"take half to one hour before food\") or warnings for the patient about the medication (e.g. \"may cause drowsiness\" or \"avoid exposure of skin to direct sunlight or sunlamps\").",
        "comment" : "Information about administration or preparation of the medication (e.g. \"infuse as rapidly as possibly via intraperitoneal port\" or \"immediately following drug x\") should be populated in dosage.text.",
        "requirements" : "Additional instruction is intended to be coded, but where no code exists, the element could include text.  For example, \"Swallow with plenty of water\" which might or might not be coded.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "AdditionalInstruction"
          }],
          "strength" : "example",
          "description" : "A coded concept identifying additional instructions such as \"take with water\" or \"avoid operating heavy machinery\".",
          "valueSet" : "http://hl7.org/fhir/ValueSet/additional-instruction-codes"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-7"
        },
        {
          "identity" : "rim",
          "map" : ".text"
        }]
      },
      {
        "id" : "Dosage.patientInstruction",
        "path" : "Dosage.patientInstruction",
        "short" : "Patient or consumer oriented instructions",
        "definition" : "Instructions in terms that are understood by the patient or consumer.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-7"
        },
        {
          "identity" : "rim",
          "map" : ".text"
        }]
      },
      {
        "id" : "Dosage.timing",
        "path" : "Dosage.timing",
        "short" : "When medication should be administered",
        "definition" : "When medication should be administered.",
        "comment" : "This attribute might not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.",
        "requirements" : "The timing schedule for giving the medication to the patient. This  data type allows many different expressions. For example: \"Every 8 hours\"; \"Three times a day\"; \"1/2 an hour before breakfast for 10 days from 23-Dec 2011:\"; \"15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\".  Sometimes, a rate can imply duration when expressed as total volume / duration (e.g.  500mL/2 hours implies a duration of 2 hours).  However, when rate doesn't imply duration (e.g. 250mL/hour), then the timing.repeat.duration is needed to convey the infuse over time period.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Timing"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : ".effectiveTime"
        }]
      },
      {
        "id" : "Dosage.asNeeded[x]",
        "path" : "Dosage.asNeeded[x]",
        "short" : "Take \"as needed\" (for x)",
        "definition" : "Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).",
        "comment" : "Can express \"as needed\" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express \"as needed\" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not \"prn\" or \"as needed\".",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "boolean"
        },
        {
          "code" : "CodeableConcept"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "MedicationAsNeededReason"
          }],
          "strength" : "example",
          "description" : "A coded concept identifying the precondition that should be met or evaluated prior to consuming or administering a medication dose.  For example \"pain\", \"30 minutes prior to sexual intercourse\", \"on flare-up\" etc.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/medication-as-needed-reason"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "TQ1-9"
        },
        {
          "identity" : "rim",
          "map" : ".outboundRelationship[typeCode=PRCN].target[classCode=OBS, moodCode=EVN, code=\"as needed\"].value=boolean or codable concept"
        }]
      },
      {
        "id" : "Dosage.site",
        "path" : "Dosage.site",
        "short" : "Body site to administer to",
        "definition" : "Body site to administer to.",
        "comment" : "If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.",
        "requirements" : "A coded specification of the anatomic site where the medication first enters the body.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "MedicationAdministrationSite"
          }],
          "strength" : "example",
          "description" : "A coded concept describing the site location the medicine enters into or onto the body.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/approach-site-codes"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXR-2"
        },
        {
          "identity" : "rim",
          "map" : ".approachSiteCode"
        }]
      },
      {
        "id" : "Dosage.route",
        "path" : "Dosage.route",
        "short" : "How drug should enter body",
        "definition" : "How drug should enter body.",
        "requirements" : "A code specifying the route or physiological path of administration of a therapeutic agent into or onto a patient's body.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "RouteOfAdministration"
          }],
          "strength" : "example",
          "description" : "A coded concept describing the route or physiological path of administration of a therapeutic agent into or onto the body of a subject.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/route-codes"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXR-1"
        },
        {
          "identity" : "rim",
          "map" : ".routeCode"
        }]
      },
      {
        "id" : "Dosage.method",
        "path" : "Dosage.method",
        "short" : "Technique for administering medication",
        "definition" : "Technique for administering medication.",
        "comment" : "Terminologies used often pre-coordinate this term with the route and or form of administration.",
        "requirements" : "A coded value indicating the method by which the medication is introduced into or onto the body. Most commonly used for injections.  For examples, Slow Push; Deep IV.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "MedicationAdministrationMethod"
          }],
          "strength" : "example",
          "description" : "A coded concept describing the technique by which the medicine is administered.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/administration-method-codes"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXR-4"
        },
        {
          "identity" : "rim",
          "map" : ".doseQuantity"
        }]
      },
      {
        "id" : "Dosage.doseAndRate",
        "path" : "Dosage.doseAndRate",
        "short" : "Amount of medication administered",
        "definition" : "The amount of medication administered.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "Element"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "TQ1-2"
        }]
      },
      {
        "id" : "Dosage.doseAndRate.type",
        "path" : "Dosage.doseAndRate.type",
        "short" : "The kind of dose or rate specified",
        "definition" : "The kind of dose or rate specified, for example, ordered or calculated.",
        "requirements" : "If the type is not populated, assume to be \"ordered\".",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "DoseAndRateType"
          }],
          "strength" : "example",
          "description" : "The kind of dose or rate specified.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/dose-rate-type"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-21; RXE-23"
        }]
      },
      {
        "id" : "Dosage.doseAndRate.dose[x]",
        "path" : "Dosage.doseAndRate.dose[x]",
        "short" : "Amount of medication per dose",
        "definition" : "Amount of medication per dose.",
        "comment" : "Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.",
        "requirements" : "The amount of therapeutic or other substance given at one administration event.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Range"
        },
        {
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-2, RXE-3"
        },
        {
          "identity" : "rim",
          "map" : ".doseQuantity"
        }]
      },
      {
        "id" : "Dosage.doseAndRate.rate[x]",
        "path" : "Dosage.doseAndRate.rate[x]",
        "short" : "Amount of medication per unit of time",
        "definition" : "Amount of medication per unit of time.",
        "comment" : "It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.\r\rIt is possible to specify a rate over time (for example, 100 ml/hour) using either the rateRatio and rateQuantity.  The rateQuantity approach requires systems to have the capability to parse UCUM grammer where ml/hour is included rather than a specific ratio where the time is specified as the denominator.  Where a rate such as 500ml over 2 hours is specified, the use of rateRatio may be more semantically correct than specifying using a rateQuantity of 250 mg/hour.",
        "requirements" : "Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.  Sometimes, a rate can imply duration when expressed as total volume / duration (e.g.  500mL/2 hours implies a duration of 2 hours).  However, when rate doesn't imply duration (e.g. 250mL/hour), then the timing.repeat.duration is needed to convey the infuse over time period.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Ratio"
        },
        {
          "code" : "Range"
        },
        {
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXE22, RXE23, RXE-24"
        },
        {
          "identity" : "rim",
          "map" : ".rateQuantity"
        }]
      },
      {
        "id" : "Dosage.maxDosePerPeriod",
        "path" : "Dosage.maxDosePerPeriod",
        "short" : "Upper limit on medication per unit of time",
        "definition" : "Upper limit on medication per unit of time.",
        "comment" : "This is intended for use as an adjunct to the dosage when there is an upper cap.  For example \"2 tablets every 4 hours to a maximum of 8/day\".",
        "requirements" : "The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time.  For example, 1000mg in 24 hours.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Ratio"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "RXO-23, RXE-19"
        },
        {
          "identity" : "rim",
          "map" : ".maxDoseQuantity"
        }]
      },
      {
        "id" : "Dosage.maxDosePerAdministration",
        "path" : "Dosage.maxDosePerAdministration",
        "short" : "Upper limit on medication per administration",
        "definition" : "Upper limit on medication per administration.",
        "comment" : "This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 â€“ 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.",
        "requirements" : "The maximum total quantity of a therapeutic substance that may be administered to a subject per administration.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "not supported"
        }]
      },
      {
        "id" : "Dosage.maxDosePerLifetime",
        "path" : "Dosage.maxDosePerLifetime",
        "short" : "Upper limit on medication per lifetime of the patient",
        "definition" : "Upper limit on medication per lifetime of the patient.",
        "requirements" : "The maximum total quantity of a therapeutic substance that may be administered per lifetime of the subject.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "not supported"
        }]
      }]
    }
  }