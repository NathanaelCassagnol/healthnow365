import { Extension, Element } from "./basic-types"

export type BackboneElement = Element & {
    modifierExtension?: Extension[]
}