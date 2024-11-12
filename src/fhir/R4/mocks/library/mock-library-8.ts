import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-fhir-helpers.json.html
// FHIR Helpers

export const mockLibrary8: Library = {
    "resourceType": "Library",
    "id": "library-fhir-helpers",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Library/library-fhir-helpers</td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <b>value: </b>\n                  <span>FHIRHelpers</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Version: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">4.0.1</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">FHIR Helpers</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Type: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code: </b>\n                           <span>logic-library</span>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">FHIR Helpers</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span style=\"padding-left: 25px;\">\n                     <b>text: </b>\n                     <span>FHIR Helpers</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>reference: </b>\n                           <span>Library/fhir-model-definition</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Content: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>title: </b>\n                     <span>FHIR Helpers</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>text/cql</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>url: </b>\n                     <span>library-fhir-helpers-content.cql</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n      </div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "FHIRHelpers"
      }
    ],
    "version": "4.0.1",
    "title": "FHIR Helpers",
    "status": "active",
    "experimental": true,
    "type": {
      "coding": [
        {
          "code": "logic-library"
        }
      ]
    },
    "date": "2018-11-10",
    "description": "FHIR Helpers",
    "topic": [
      {
        "text": "FHIR Helpers"
      }
    ],
    "relatedArtifact": [
      {
        "type": "depends-on",
        "resource": "Library/fhir-model-definition"
      },
      {
        "type": "predecessor",
        "resource": "library-fhir-helpers-predecessor"
      }
    ],
    "content": [
      {
        "contentType": "text/cql",
        "data": "bGlicmFyeSBGSElSSGVscGVycyB2ZXJzaW9uICc0LjAuMCcKCnVzaW5nIEZISVIgdmVyc2lvbiAnNC4wLjAnCgpkZWZpbmUgZnVuY3Rpb24gVG9JbnRlcnZhbChwZXJpb2QgRkhJUi5QZXJpb2QpOgogICAgSW50ZXJ2YWxbcGVyaW9kLiJzdGFydCIudmFsdWUsIHBlcmlvZC4iZW5kIi52YWx1ZV0KCmRlZmluZSBmdW5jdGlvbiBUb1F1YW50aXR5KHF1YW50aXR5IEZISVIuUXVhbnRpdHkpOgogICAgU3lzdGVtLlF1YW50aXR5IHsgdmFsdWU6IHF1YW50aXR5LnZhbHVlLnZhbHVlLCB1bml0OiBxdWFudGl0eS51bml0LnZhbHVlIH0KCmRlZmluZSBmdW5jdGlvbiBUb0ludGVydmFsKHJhbmdlIEZISVIuUmFuZ2UpOgogICAgSW50ZXJ2YWxbVG9RdWFudGl0eShyYW5nZS5sb3cpLCBUb1F1YW50aXR5KHJhbmdlLmhpZ2gpXQoKZGVmaW5lIGZ1bmN0aW9uIFRvQ29kZShjb2RpbmcgRkhJUi5Db2RpbmcpOgogICAgU3lzdGVtLkNvZGUgewogICAgICBjb2RlOiBjb2RpbmcuY29kZS52YWx1ZSwKICAgICAgc3lzdGVtOiBjb2Rpbmcuc3lzdGVtLnZhbHVlLAogICAgICB2ZXJzaW9uOiBjb2RpbmcudmVyc2lvbi52YWx1ZSwKICAgICAgZGlzcGxheTogY29kaW5nLmRpc3BsYXkudmFsdWUKICAgIH0KCmRlZmluZSBmdW5jdGlvbiBUb0NvbmNlcHQoY29uY2VwdCBGSElSLkNvZGVhYmxlQ29uY2VwdCk6CiAgICBTeXN0ZW0uQ29uY2VwdCB7CiAgICAgICAgY29kZXM6IGNvbmNlcHQuY29kaW5nIEMgcmV0dXJuIFRvQ29kZShDKSwKICAgICAgICBkaXNwbGF5OiBjb25jZXB0LnRleHQudmFsdWUKICAgIH0KCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLnV1aWQpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5UZXN0U2NyaXB0UmVxdWVzdE1ldGhvZENvZGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Tb3J0RGlyZWN0aW9uKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQmlvbG9naWNhbGx5RGVyaXZlZFByb2R1Y3RTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Vbml0c09mVGltZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkFkZHJlc3NUeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQWxsZXJneUludG9sZXJhbmNlQ2F0ZWdvcnkpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Jc3N1ZVNldmVyaXR5KTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQ2FyZVRlYW1TdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5FbmNvdW50ZXJTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5TdHJ1Y3R1cmVEZWZpbml0aW9uS2luZCk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlB1YmxpY2F0aW9uU3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuRkhJUlZlcnNpb24pOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5DYXJlUGxhbkFjdGl2aXR5S2luZCk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlN0cnVjdHVyZU1hcFNvdXJjZUxpc3RNb2RlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuUmVxdWVzdFN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLnN0cmFuZFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5RdWVzdGlvbm5haXJlUmVzcG9uc2VTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5TZWFyY2hDb21wYXJhdG9yKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQ2hhcmdlSXRlbVN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkFjdGlvblBhcnRpY2lwYW50VHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkFsbGVyZ3lJbnRvbGVyYW5jZVR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5DYXJlUGxhbkFjdGl2aXR5U3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuSW52b2ljZVN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNsYWltUHJvY2Vzc2luZ0NvZGVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuUmVxdWVzdFJlc291cmNlVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlBhcnRpY2lwYXRpb25TdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5EZXZpY2VOYW1lVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkRvY3VtZW50TW9kZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkFzc2VydGlvbk9wZXJhdG9yVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkRheXNPZldlZWspOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Jc3N1ZVR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5jYW5vbmljYWwpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5TdHJ1Y3R1cmVNYXBDb250ZXh0VHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkZhbWlseUhpc3RvcnlTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5zdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5FeHRlbnNpb25Db250ZXh0VHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkFzc2VydGlvblJlc3BvbnNlVHlwZXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5SZXF1ZXN0SW50ZW50KTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuc3RyaW5nKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQWN0aW9uUmVxdWlyZWRCZWhhdmlvcik6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkdyYXBoQ29tcGFydG1lbnRVc2UpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5vcmllbnRhdGlvblR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5BY2NvdW50U3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuSWRlbnRpZmllclVzZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlN0cnVjdHVyZU1hcFRhcmdldExpc3RNb2RlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuRXhwb3N1cmVTdGF0ZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlRlc3RSZXBvcnRQYXJ0aWNpcGFudFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5CaW5kaW5nU3RyZW5ndGgpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5SZXF1ZXN0UHJpb3JpdHkpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5QYXJ0aWNpcGFudFJlcXVpcmVkKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuWFBhdGhVc2FnZVR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5pZCk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkZpbHRlck9wZXJhdG9yKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuTmFtaW5nU3lzdGVtVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvbnRyYWN0UmVzb3VyY2VTdGF0dXNDb2Rlcyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlJlc2VhcmNoU3ViamVjdFN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlN0cnVjdHVyZU1hcFRyYW5zZm9ybSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlJlc3BvbnNlVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb0RlY2ltYWwodmFsdWUgRkhJUi5kZWNpbWFsKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQWdncmVnYXRpb25Nb2RlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuc2VxdWVuY2VUeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuU3lzdGVtUmVzdGZ1bEludGVyYWN0aW9uKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQWR2ZXJzZUV2ZW50QWN0dWFsaXR5KTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Bc3NlcnRpb25EaXJlY3Rpb25UeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQ2FyZVBsYW5JbnRlbnQpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5BbGxlcmd5SW50b2xlcmFuY2VDcml0aWNhbGl0eSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlByb3BlcnR5UmVwcmVzZW50YXRpb24pOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5UcmlnZ2VyVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvbXBvc2l0aW9uU3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQXBwb2ludG1lbnRTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5NZXNzYWdlU2lnbmlmaWNhbmNlQ2F0ZWdvcnkpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5MaXN0TW9kZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlJlc2VhcmNoRWxlbWVudFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5PYnNlcnZhdGlvblN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlJlc291cmNlVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb0Jvb2xlYW4odmFsdWUgRkhJUi5ib29sZWFuKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuU3RydWN0dXJlTWFwR3JvdXBUeXBlTW9kZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlN1cHBseVJlcXVlc3RTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5FbmNvdW50ZXJMb2NhdGlvblN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvbmRpdGlvbmFsRGVsZXRlU3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIudXJsKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIudXJpKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuVXNlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIubWVkaWNhdGlvblJlcXVlc3RTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5JZGVudGl0eUFzc3VyYW5jZUxldmVsKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuRGV2aWNlTWV0cmljQ29sb3IpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9UaW1lKHZhbHVlIEZISVIudGltZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvbmRpdGlvbmFsUmVhZFN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkFsbGVyZ3lJbnRvbGVyYW5jZVNldmVyaXR5KTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuRmluYW5jaWFsUmVzb3VyY2VTdGF0dXNDb2Rlcyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLk9wZXJhdGlvbktpbmQpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5TdWJzY3JpcHRpb25TdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Hb2FsTGlmZWN5Y2xlU3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuT2JzZXJ2YXRpb25EYXRhVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkRvY3VtZW50UmVmZXJlbmNlU3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIucmVwb3NpdG9yeVR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Mb2NhdGlvblN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLk5vdGVUeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuVGVzdFJlcG9ydFN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvZGVTeXN0ZW1Db250ZW50TW9kZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkZISVJEZXZpY2VTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Db250YWN0UG9pbnRTeXN0ZW0pOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5TbG90U3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuUHJvcGVydHlUeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuVHlwZURlcml2YXRpb25SdWxlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuR3VpZGFuY2VSZXNwb25zZVN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlJlbGF0ZWRBcnRpZmFjdFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5vaWQpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Db21wYXJ0bWVudFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5tZWRpY2F0aW9ucmVxdWVzdFN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkludm9pY2VQcmljZUNvbXBvbmVudFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5EZXZpY2VNZXRyaWNDYWxpYnJhdGlvblN0YXRlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuR3JvdXBUeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuRW5hYmxlV2hlbkJlaGF2aW9yKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuVGFza0ludGVudCk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkltbXVuaXphdGlvbkV2YWx1YXRpb25TdGF0dXNDb2Rlcyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkV4YW1wbGVTY2VuYXJpb0FjdG9yVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlByb3ZlbmFuY2VFbnRpdHlSb2xlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuU3BlY2ltZW5TdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5SZXN0ZnVsQ2FwYWJpbGl0eU1vZGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5EZXRlY3RlZElzc3VlU2V2ZXJpdHkpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5WaXNpb25FeWVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQ29uc2VudERhdGFNZWFuaW5nKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIubWVzc2FnZWhlYWRlclJlc3BvbnNlUmVxdWVzdCk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkd1aWRlUGFnZUdlbmVyYXRpb24pOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Eb2N1bWVudFJlbGF0aW9uc2hpcFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5WYXJpYWJsZVR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5UZXN0UmVwb3J0UmVzdWx0KTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQ29uY2VwdE1hcEdyb3VwVW5tYXBwZWRNb2RlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvRGF0ZVRpbWUodmFsdWUgRkhJUi5pbnN0YW50KTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvRGF0ZVRpbWUodmFsdWUgRkhJUi5kYXRlVGltZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb0RhdGUodmFsdWUgRkhJUi5kYXRlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvSW50ZWdlcih2YWx1ZSBGSElSLnBvc2l0aXZlSW50KTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQ2xpbmljYWxJbXByZXNzaW9uU3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuRWxpZ2liaWxpdHlSZXNwb25zZVB1cnBvc2UpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5OYXJyYXRpdmVTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5JbWFnaW5nU3R1ZHlTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5FbmRwb2ludFN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkJpb2xvZ2ljYWxseURlcml2ZWRQcm9kdWN0Q2F0ZWdvcnkpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5SZXNvdXJjZVZlcnNpb25Qb2xpY3kpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5BY3Rpb25DYXJkaW5hbGl0eUJlaGF2aW9yKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuR3JvdXBNZWFzdXJlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuTmFtaW5nU3lzdGVtSWRlbnRpZmllclR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5JbW11bml6YXRpb25TdGF0dXNDb2Rlcyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLk1lZGljYXRpb25TdGF0dXNDb2Rlcyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkRpc2NyaW1pbmF0b3JUeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuU3RydWN0dXJlTWFwSW5wdXRNb2RlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuTGlua2FnZVR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5SZWZlcmVuY2VIYW5kbGluZ1BvbGljeSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlJlc2VhcmNoU3R1ZHlTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5BdWRpdEV2ZW50T3V0Y29tZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlNwZWNpbWVuQ29udGFpbmVkUHJlZmVyZW5jZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkFjdGlvblJlbGF0aW9uc2hpcFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Db25zdHJhaW50U2V2ZXJpdHkpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5FdmVudENhcGFiaWxpdHlNb2RlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQ29kZVNlYXJjaFN1cHBvcnQpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5PYnNlcnZhdGlvblJhbmdlQ2F0ZWdvcnkpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5VRElFbnRyeVR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5EZXZpY2VNZXRyaWNDYXRlZ29yeSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlRlc3RSZXBvcnRBY3Rpb25SZXN1bHQpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5DYXBhYmlsaXR5U3RhdGVtZW50S2luZCk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkV2ZW50VGltaW5nKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuU2VhcmNoUGFyYW1UeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQWN0aW9uR3JvdXBpbmdCZWhhdmlvcik6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlN0cnVjdHVyZU1hcE1vZGVsTW9kZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlRhc2tTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5CaW9sb2dpY2FsbHlEZXJpdmVkUHJvZHVjdFN0b3JhZ2VTY2FsZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkdyYXBoQ29tcGFydG1lbnRSdWxlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuU2xpY2luZ1J1bGVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuRXhwbGFuYXRpb25PZkJlbmVmaXRTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5HdWlkZVBhcmFtZXRlckNvZGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5DYXRhbG9nRW50cnlSZWxhdGlvblR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5MaW5rVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvbmNlcHRNYXBFcXVpdmFsZW5jZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkF1ZGl0RXZlbnRBY3Rpb24pOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5TZWFyY2hNb2RpZmllckNvZGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5FdmVudFN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLk9wZXJhdGlvblBhcmFtZXRlclVzZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvbnNlbnRQcm92aXNpb25UeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQWN0aW9uQ29uZGl0aW9uS2luZCk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLnF1YWxpdHlUeXBlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQWRtaW5pc3RyYXRpdmVHZW5kZXIpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5RdWVzdGlvbm5haXJlSXRlbVR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5EZXZpY2VNZXRyaWNDYWxpYnJhdGlvblR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5FdmlkZW5jZVZhcmlhYmxlVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLmNvZGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5BY3Rpb25TZWxlY3Rpb25CZWhhdmlvcik6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlN1cHBseURlbGl2ZXJ5U3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuRGlhZ25vc3RpY1JlcG9ydFN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkZsYWdTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5TUERYTGljZW5zZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkxpc3RTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5iYXNlNjRCaW5hcnkpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5EZXZpY2VVc2VTdGF0ZW1lbnRTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5BdWRpdEV2ZW50QWdlbnROZXR3b3JrVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkV4cHJlc3Npb25MYW5ndWFnZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkFkZHJlc3NVc2UpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5Db250YWN0UG9pbnRVc2UpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5EZXZpY2VNZXRyaWNPcGVyYXRpb25hbFN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvbnRyaWJ1dG9yVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlJlZmVyZW5jZVZlcnNpb25SdWxlcyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLk1lYXN1cmVSZXBvcnRTdGF0dXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5TZWFyY2hFbnRyeU1vZGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlIEZISVIudW5zaWduZWRJbnQpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5OYW1lVXNlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuTG9jYXRpb25Nb2RlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvSW50ZWdlcih2YWx1ZSBGSElSLmludGVnZXIpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5GSElSU3Vic3RhbmNlU3RhdHVzKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuUXVlc3Rpb25uYWlyZUl0ZW1PcGVyYXRvcik6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkhUVFBWZXJiKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuRXBpc29kZU9mQ2FyZVN0YXR1cyk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLlJlbWl0dGFuY2VPdXRjb21lKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIubWFya2Rvd24pOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5FbGlnaWJpbGl0eVJlcXVlc3RQdXJwb3NlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuUXVhbnRpdHlDb21wYXJhdG9yKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuTWVhc3VyZVJlcG9ydFR5cGUpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5BY3Rpb25QcmVjaGVja0JlaGF2aW9yKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuU2FtcGxlZERhdGFEYXRhVHlwZSk6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvbXBvc2l0aW9uQXR0ZXN0YXRpb25Nb2RlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuVHlwZVJlc3RmdWxJbnRlcmFjdGlvbik6IHZhbHVlLnZhbHVlCmRlZmluZSBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSBGSElSLkNvZGVTeXN0ZW1IaWVyYXJjaHlNZWFuaW5nKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIudkNvbmZpZGVudGlhbGl0eUNsYXNzaWZpY2F0aW9uKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQ29udHJhY3RSZXNvdXJjZVB1YmxpY2F0aW9uU3RhdHVzQ29kZXMpOiB2YWx1ZS52YWx1ZQpkZWZpbmUgZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUgRkhJUi5WaXNpb25CYXNlKTogdmFsdWUudmFsdWUKZGVmaW5lIGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlIEZISVIuQnVuZGxlVHlwZSk6IHZhbHVlLnZhbHVlCg==",
        "url": "library-fhir-helpers-content.cql",
        "title": "FHIR Helpers"
      }
    ]
  }