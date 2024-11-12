import { CodeSystem } from "fhir/R4/types/CodeSystem";

// https://hl7.org/fhir/R4/codesystem-snomedct.json.html
// Canonical Definition for SNOMED CT

export const mockCodeSystem3: CodeSystem = {
    "resourceType": "CodeSystem",
    "id": "snomedct",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>SNOMED CT (all versions)</h2>\n      <div>\n        <p>SNOMED CT is the most comprehensive and precise clinical health terminology product in the world, owned and distributed around the world by The International Health Terminology Standards Development Organisation (IHTSDO).</p>\n\n      </div>\n      <p>\n        <b>Copyright Statement:</b>\n      </p>\n      <div>\n        <p>© 2002-2016 International Health Terminology Standards Development Organisation (IHTSDO). All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. &quot;SNOMED&quot; and &quot;SNOMED CT&quot; are registered trademarks of the IHTSDO http://www.ihtsdo.org/snomed-ct/get-snomed-ct</p>\n\n      </div>\n      <p>\n        <b>Properties</b>\n      </p>\n      <table class=\"grid\">\n        <tr>\n          <td>\n            <b>Code</b>\n          </td>\n          <td>\n            <b>URL</b>\n          </td>\n          <td>\n            <b>Description</b>\n          </td>\n          <td>\n            <b>Type</b>\n          </td>\n        </tr>\n        <tr>\n          <td>inactive</td>\n          <td>http://snomed.info/field/Concept.active</td>\n          <td>Whether the code is active or not (defaults to false). Not the same as deprecated</td>\n          <td>boolean</td>\n        </tr>\n        <tr>\n          <td>definitionStatusId</td>\n          <td>http://snomed.info/field/Concept.definitionStatusId</td>\n          <td>Either of the codes that are descendants of 900000000000444006</td>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>parent</td>\n          <td>http://.........?</td>\n          <td>A SNOMED CT concept id that has the target of a direct is-a relationship from the concept</td>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>child</td>\n          <td>http://.........?</td>\n          <td>A SNOMED CT concept id that has a direct is-a relationship to the concept</td>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>moduleId</td>\n          <td>http://snomed.info/field/Concept.moduleId</td>\n          <td>The SNOMED CT concept id of the module that the concept belongs to.</td>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>normalForm</td>\n          <td>http://.........?</td>\n          <td>Generated Normal form expression for the provided code or expression, with terms</td>\n          <td>string</td>\n        </tr>\n        <tr>\n          <td>normalFormTerse</td>\n          <td>http://.........?</td>\n          <td>Generated Normal form expression for the provided code or expression, conceptIds only</td>\n          <td>string</td>\n        </tr>\n        <tr>\n          <td>Due to</td>\n          <td>http://snomed.info/id/42752001</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Associated with</td>\n          <td>http://snomed.info/id/47429007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Associated morphology</td>\n          <td>http://snomed.info/id/116676008</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Has specimen</td>\n          <td>http://snomed.info/id/116686009</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Specimen source morphology</td>\n          <td>http://snomed.info/id/118168003</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Specimen source topography</td>\n          <td>http://snomed.info/id/118169006</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Specimen source identity</td>\n          <td>http://snomed.info/id/118170007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Specimen procedure</td>\n          <td>http://snomed.info/id/118171006</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Part of</td>\n          <td>http://snomed.info/id/123005000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Has active ingredient</td>\n          <td>http://snomed.info/id/127489000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Subject of information</td>\n          <td>http://snomed.info/id/131195008</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Causative agent</td>\n          <td>http://snomed.info/id/246075003</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Associated finding</td>\n          <td>http://snomed.info/id/246090004</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Component</td>\n          <td>http://snomed.info/id/246093002</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Severity</td>\n          <td>http://snomed.info/id/246112005</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Occurrence</td>\n          <td>http://snomed.info/id/246454002</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Episodicity</td>\n          <td>http://snomed.info/id/246456000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Technique</td>\n          <td>http://snomed.info/id/246501002</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Revision status</td>\n          <td>http://snomed.info/id/246513007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Units</td>\n          <td>http://snomed.info/id/246514001</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>After</td>\n          <td>http://snomed.info/id/255234002</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Access</td>\n          <td>http://snomed.info/id/260507000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Method</td>\n          <td>http://snomed.info/id/260686004</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Priority</td>\n          <td>http://snomed.info/id/260870009</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Clinical course</td>\n          <td>http://snomed.info/id/263502005</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Laterality</td>\n          <td>http://snomed.info/id/272741003</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Associated procedure</td>\n          <td>http://snomed.info/id/363589002</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Finding site</td>\n          <td>http://snomed.info/id/363698007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Laterality</td>\n          <td>http://snomed.info/id/363699004</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Direct morphology</td>\n          <td>http://snomed.info/id/363700003</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Direct substance</td>\n          <td>http://snomed.info/id/363701004</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Has focus</td>\n          <td>http://snomed.info/id/363702006</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Has intent</td>\n          <td>http://snomed.info/id/363703001</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Procedure site</td>\n          <td>http://snomed.info/id/363704007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Has definitional manifestation</td>\n          <td>http://snomed.info/id/363705008</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Indirect morphology</td>\n          <td>http://snomed.info/id/363709002</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Indirect device</td>\n          <td>http://snomed.info/id/363710007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Has interpretation</td>\n          <td>http://snomed.info/id/363713009</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Interprets</td>\n          <td>http://snomed.info/id/363714003</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Measurement method</td>\n          <td>http://snomed.info/id/370129005</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Property</td>\n          <td>http://snomed.info/id/370130000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Recipient category</td>\n          <td>http://snomed.info/id/370131001</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Scale type</td>\n          <td>http://snomed.info/id/370132008</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Specimen substance</td>\n          <td>http://snomed.info/id/370133003</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Time aspect</td>\n          <td>http://snomed.info/id/370134009</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Pathological process</td>\n          <td>http://snomed.info/id/370135005</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Procedure site - Direct</td>\n          <td>http://snomed.info/id/405813007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Procedure site - Indirect</td>\n          <td>http://snomed.info/id/405814001</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Procedure device</td>\n          <td>http://snomed.info/id/405815000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Procedure morphology</td>\n          <td>http://snomed.info/id/405816004</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Finding context</td>\n          <td>http://snomed.info/id/408729009</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Procedure context</td>\n          <td>http://snomed.info/id/408730004</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Temporal context</td>\n          <td>http://snomed.info/id/408731000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Subject relationship context</td>\n          <td>http://snomed.info/id/408732007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Route of administration</td>\n          <td>http://snomed.info/id/410675002</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Has dose form</td>\n          <td>http://snomed.info/id/411116001</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Finding method</td>\n          <td>http://snomed.info/id/418775008</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Finding informer</td>\n          <td>http://snomed.info/id/419066007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Using device</td>\n          <td>http://snomed.info/id/424226004</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Using energy</td>\n          <td>http://snomed.info/id/424244007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Using substance</td>\n          <td>http://snomed.info/id/424361007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Surgical approach</td>\n          <td>http://snomed.info/id/424876005</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Using access device</td>\n          <td>http://snomed.info/id/425391005</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Role group</td>\n          <td>http://snomed.info/id/609096000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Property type</td>\n          <td>http://snomed.info/id/704318007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Inheres in</td>\n          <td>http://snomed.info/id/704319004</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Towards</td>\n          <td>http://snomed.info/id/704320005</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Characterizes</td>\n          <td>http://snomed.info/id/704321009</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Process agent</td>\n          <td>http://snomed.info/id/704322002</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Process duration</td>\n          <td>http://snomed.info/id/704323007</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Process output</td>\n          <td>http://snomed.info/id/704324001</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Relative to</td>\n          <td>http://snomed.info/id/704325000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Precondition</td>\n          <td>http://snomed.info/id/704326004</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Direct site</td>\n          <td>http://snomed.info/id/704327008</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Specified by</td>\n          <td>http://snomed.info/id/704346009</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Observes</td>\n          <td>http://snomed.info/id/704347000</td>\n          <td/>\n          <td>code</td>\n        </tr>\n        <tr>\n          <td>Is about</td>\n          <td>http://snomed.info/id/704647008</td>\n          <td/>\n          <td>code</td>\n        </tr>\n      </table>\n      <p>\n        <b>Filters</b>\n      </p>\n      <table class=\"grid\">\n        <tr>\n          <td>\n            <b>Code</b>\n          </td>\n          <td>\n            <b>Description</b>\n          </td>\n          <td>\n            <b>operator</b>\n          </td>\n          <td>\n            <b>Value</b>\n          </td>\n        </tr>\n        <tr>\n          <td>concept</td>\n          <td>Filter that includes concepts based on their logical definition. e.g. [concept] [is-a] [x] - include all concepts with an is-a relationship to concept x, or [concept] [in] [x]- include all concepts in the reference set identified by concept x</td>\n          <td>is-a in </td>\n          <td>A SNOMED CT code</td>\n        </tr>\n        <tr>\n          <td>expression</td>\n          <td>The result of the filter is the result of executing the given SNOMED CT Expression Constraint</td>\n          <td>= </td>\n          <td>A SNOMED CT ECL expression (see http://snomed.org/ecl)</td>\n        </tr>\n        <tr>\n          <td>expressions</td>\n          <td>Whether post-coordinated expressions are included in the value set</td>\n          <td>= </td>\n          <td>true or false</td>\n        </tr>\n      </table>\n      <p>This code system http://snomed.info/sct defines many codes, but they are not represented here</p>\n    </div>"
    },
    "url": "http://snomed.info/sct",
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:oid:2.16.840.1.113883.6.96"
      }
    ],
    "name": "SNOMED_CT",
    "title": "SNOMED CT (all versions)",
    "status": "active",
    "experimental": false,
    "publisher": "IHTSDO",
    "contact": [
      {
        "telecom": [
          {
            "system": "url",
            "value": "http://ihtsdo.org"
          }
        ]
      }
    ],
    "description": "SNOMED CT is the most comprehensive and precise clinical health terminology product in the world, owned and distributed around the world by The International Health Terminology Standards Development Organisation (IHTSDO).",
    "copyright": "© 2002-2016 International Health Terminology Standards Development Organisation (IHTSDO). All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. \"SNOMED\" and \"SNOMED CT\" are registered trademarks of the IHTSDO http://www.ihtsdo.org/snomed-ct/get-snomed-ct",
    "caseSensitive": false,
    "hierarchyMeaning": "is-a",
    "compositional": true,
    "versionNeeded": false,
    "content": "not-present",
    "filter": [
      {
        "code": "concept",
        "description": "Filter that includes concepts based on their logical definition. e.g. [concept] [is-a] [x] - include all concepts with an is-a relationship to concept x, or [concept] [in] [x]- include all concepts in the reference set identified by concept x",
        "operator": [
          "is-a",
          "in"
        ],
        "value": "A SNOMED CT code"
      },
      {
        "code": "expression",
        "description": "The result of the filter is the result of executing the given SNOMED CT Expression Constraint",
        "operator": [
          "="
        ],
        "value": "A SNOMED CT ECL expression (see http://snomed.org/ecl)"
      },
      {
        "code": "expressions",
        "description": "Whether post-coordinated expressions are included in the value set",
        "operator": [
          "="
        ],
        "value": "true or false"
      }
    ],
    "property": [
      {
        "code": "inactive",
        "uri": "http://snomed.info/field/Concept.active",
        "description": "Whether the code is active or not (defaults to false). Not the same as deprecated",
        "type": "boolean"
      },
      {
        "code": "definitionStatusId",
        "uri": "http://snomed.info/field/Concept.definitionStatusId",
        "description": "Either of the codes that are descendants of 900000000000444006",
        "type": "code"
      },
      {
        "code": "parent",
        "uri": "http://.........?",
        "description": "A SNOMED CT concept id that has the target of a direct is-a relationship from the concept",
        "type": "code"
      },
      {
        "code": "child",
        "uri": "http://.........?",
        "description": "A SNOMED CT concept id that has a direct is-a relationship to the concept",
        "type": "code"
      },
      {
        "code": "moduleId",
        "uri": "http://snomed.info/field/Concept.moduleId",
        "description": "The SNOMED CT concept id of the module that the concept belongs to.",
        "type": "code"
      },
      {
        "code": "normalForm",
        "uri": "http://.........?",
        "description": "Generated Normal form expression for the provided code or expression, with terms",
        "type": "string"
      },
      {
        "code": "normalFormTerse",
        "uri": "http://.........?",
        "description": "Generated Normal form expression for the provided code or expression, conceptIds only",
        "type": "string"
      },
      {
        "code": "Due to",
        "uri": "http://snomed.info/id/42752001",
        "type": "code"
      },
      {
        "code": "Associated with",
        "uri": "http://snomed.info/id/47429007",
        "type": "code"
      },
      {
        "code": "Associated morphology",
        "uri": "http://snomed.info/id/116676008",
        "type": "code"
      },
      {
        "code": "Has specimen",
        "uri": "http://snomed.info/id/116686009",
        "type": "code"
      },
      {
        "code": "Specimen source morphology",
        "uri": "http://snomed.info/id/118168003",
        "type": "code"
      },
      {
        "code": "Specimen source topography",
        "uri": "http://snomed.info/id/118169006",
        "type": "code"
      },
      {
        "code": "Specimen source identity",
        "uri": "http://snomed.info/id/118170007",
        "type": "code"
      },
      {
        "code": "Specimen procedure",
        "uri": "http://snomed.info/id/118171006",
        "type": "code"
      },
      {
        "code": "Part of",
        "uri": "http://snomed.info/id/123005000",
        "type": "code"
      },
      {
        "code": "Has active ingredient",
        "uri": "http://snomed.info/id/127489000",
        "type": "code"
      },
      {
        "code": "Subject of information",
        "uri": "http://snomed.info/id/131195008",
        "type": "code"
      },
      {
        "code": "Causative agent",
        "uri": "http://snomed.info/id/246075003",
        "type": "code"
      },
      {
        "code": "Associated finding",
        "uri": "http://snomed.info/id/246090004",
        "type": "code"
      },
      {
        "code": "Component",
        "uri": "http://snomed.info/id/246093002",
        "type": "code"
      },
      {
        "code": "Severity",
        "uri": "http://snomed.info/id/246112005",
        "type": "code"
      },
      {
        "code": "Occurrence",
        "uri": "http://snomed.info/id/246454002",
        "type": "code"
      },
      {
        "code": "Episodicity",
        "uri": "http://snomed.info/id/246456000",
        "type": "code"
      },
      {
        "code": "Technique",
        "uri": "http://snomed.info/id/246501002",
        "type": "code"
      },
      {
        "code": "Revision status",
        "uri": "http://snomed.info/id/246513007",
        "type": "code"
      },
      {
        "code": "Units",
        "uri": "http://snomed.info/id/246514001",
        "type": "code"
      },
      {
        "code": "After",
        "uri": "http://snomed.info/id/255234002",
        "type": "code"
      },
      {
        "code": "Access",
        "uri": "http://snomed.info/id/260507000",
        "type": "code"
      },
      {
        "code": "Method",
        "uri": "http://snomed.info/id/260686004",
        "type": "code"
      },
      {
        "code": "Priority",
        "uri": "http://snomed.info/id/260870009",
        "type": "code"
      },
      {
        "code": "Clinical course",
        "uri": "http://snomed.info/id/263502005",
        "type": "code"
      },
      {
        "code": "Laterality",
        "uri": "http://snomed.info/id/272741003",
        "type": "code"
      },
      {
        "code": "Associated procedure",
        "uri": "http://snomed.info/id/363589002",
        "type": "code"
      },
      {
        "code": "Finding site",
        "uri": "http://snomed.info/id/363698007",
        "type": "code"
      },
      {
        "code": "Laterality",
        "uri": "http://snomed.info/id/363699004",
        "type": "code"
      },
      {
        "code": "Direct morphology",
        "uri": "http://snomed.info/id/363700003",
        "type": "code"
      },
      {
        "code": "Direct substance",
        "uri": "http://snomed.info/id/363701004",
        "type": "code"
      },
      {
        "code": "Has focus",
        "uri": "http://snomed.info/id/363702006",
        "type": "code"
      },
      {
        "code": "Has intent",
        "uri": "http://snomed.info/id/363703001",
        "type": "code"
      },
      {
        "code": "Procedure site",
        "uri": "http://snomed.info/id/363704007",
        "type": "code"
      },
      {
        "code": "Has definitional manifestation",
        "uri": "http://snomed.info/id/363705008",
        "type": "code"
      },
      {
        "code": "Indirect morphology",
        "uri": "http://snomed.info/id/363709002",
        "type": "code"
      },
      {
        "code": "Indirect device",
        "uri": "http://snomed.info/id/363710007",
        "type": "code"
      },
      {
        "code": "Has interpretation",
        "uri": "http://snomed.info/id/363713009",
        "type": "code"
      },
      {
        "code": "Interprets",
        "uri": "http://snomed.info/id/363714003",
        "type": "code"
      },
      {
        "code": "Measurement method",
        "uri": "http://snomed.info/id/370129005",
        "type": "code"
      },
      {
        "code": "Property",
        "uri": "http://snomed.info/id/370130000",
        "type": "code"
      },
      {
        "code": "Recipient category",
        "uri": "http://snomed.info/id/370131001",
        "type": "code"
      },
      {
        "code": "Scale type",
        "uri": "http://snomed.info/id/370132008",
        "type": "code"
      },
      {
        "code": "Specimen substance",
        "uri": "http://snomed.info/id/370133003",
        "type": "code"
      },
      {
        "code": "Time aspect",
        "uri": "http://snomed.info/id/370134009",
        "type": "code"
      },
      {
        "code": "Pathological process",
        "uri": "http://snomed.info/id/370135005",
        "type": "code"
      },
      {
        "code": "Procedure site - Direct",
        "uri": "http://snomed.info/id/405813007",
        "type": "code"
      },
      {
        "code": "Procedure site - Indirect",
        "uri": "http://snomed.info/id/405814001",
        "type": "code"
      },
      {
        "code": "Procedure device",
        "uri": "http://snomed.info/id/405815000",
        "type": "code"
      },
      {
        "code": "Procedure morphology",
        "uri": "http://snomed.info/id/405816004",
        "type": "code"
      },
      {
        "code": "Finding context",
        "uri": "http://snomed.info/id/408729009",
        "type": "code"
      },
      {
        "code": "Procedure context",
        "uri": "http://snomed.info/id/408730004",
        "type": "code"
      },
      {
        "code": "Temporal context",
        "uri": "http://snomed.info/id/408731000",
        "type": "code"
      },
      {
        "code": "Subject relationship context",
        "uri": "http://snomed.info/id/408732007",
        "type": "code"
      },
      {
        "code": "Route of administration",
        "uri": "http://snomed.info/id/410675002",
        "type": "code"
      },
      {
        "code": "Has dose form",
        "uri": "http://snomed.info/id/411116001",
        "type": "code"
      },
      {
        "code": "Finding method",
        "uri": "http://snomed.info/id/418775008",
        "type": "code"
      },
      {
        "code": "Finding informer",
        "uri": "http://snomed.info/id/419066007",
        "type": "code"
      },
      {
        "code": "Using device",
        "uri": "http://snomed.info/id/424226004",
        "type": "code"
      },
      {
        "code": "Using energy",
        "uri": "http://snomed.info/id/424244007",
        "type": "code"
      },
      {
        "code": "Using substance",
        "uri": "http://snomed.info/id/424361007",
        "type": "code"
      },
      {
        "code": "Surgical approach",
        "uri": "http://snomed.info/id/424876005",
        "type": "code"
      },
      {
        "code": "Using access device",
        "uri": "http://snomed.info/id/425391005",
        "type": "code"
      },
      {
        "code": "Role group",
        "uri": "http://snomed.info/id/609096000",
        "type": "code"
      },
      {
        "code": "Property type",
        "uri": "http://snomed.info/id/704318007",
        "type": "code"
      },
      {
        "code": "Inheres in",
        "uri": "http://snomed.info/id/704319004",
        "type": "code"
      },
      {
        "code": "Towards",
        "uri": "http://snomed.info/id/704320005",
        "type": "code"
      },
      {
        "code": "Characterizes",
        "uri": "http://snomed.info/id/704321009",
        "type": "code"
      },
      {
        "code": "Process agent",
        "uri": "http://snomed.info/id/704322002",
        "type": "code"
      },
      {
        "code": "Process duration",
        "uri": "http://snomed.info/id/704323007",
        "type": "code"
      },
      {
        "code": "Process output",
        "uri": "http://snomed.info/id/704324001",
        "type": "code"
      },
      {
        "code": "Relative to",
        "uri": "http://snomed.info/id/704325000",
        "type": "code"
      },
      {
        "code": "Precondition",
        "uri": "http://snomed.info/id/704326004",
        "type": "code"
      },
      {
        "code": "Direct site",
        "uri": "http://snomed.info/id/704327008",
        "type": "code"
      },
      {
        "code": "Specified by",
        "uri": "http://snomed.info/id/704346009",
        "type": "code"
      },
      {
        "code": "Observes",
        "uri": "http://snomed.info/id/704347000",
        "type": "code"
      },
      {
        "code": "Is about",
        "uri": "http://snomed.info/id/704647008",
        "type": "code"
      }
    ]
  }