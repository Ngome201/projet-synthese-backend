import { RessourceFauniqueDTO } from "../dto/RessourceFauniqueDTO"
import { RessourceNaturelleDTO } from "../dto/RessourceNaturelleDTO"
import { CouncilSignageDTO } from "../dto/CouncilSignageDTO"
import { CouncilPresentationDTO } from "../dto/CouncilPresentationDTO"
import * as state from "../entities"

export type LocalisationGPS = {
    X: number,
    Y: number,
    Z: number
}

export enum MyZone{
    Localite,
    Commune,
    Departement,
    Region,
    Pays,
}

type ZoneDescription = {
    type_zone: string,
    code_zone: number,
    // nom_zone: string,
}

export type ConseillerMunicipal ={
    nbr_femmes : number,
    nbr_hommes : number,
    nbr_deces : number
}

export type Number_of_villages ={
    regroupements : string[],
    nbr_villages : number,
    degree : string[],
}

export type PersonnelCommunal ={
    nbr_contractuels : number,
    nbr_decisionnaires : number,
    nbr_temporaires : number,
    nbr_fonctionnaires : number
}

export type State1 = ZoneDescription & {
    listeRessources: CouncilPresentationDTO[],
}

export type State2 = ZoneDescription & {
    listeRessources: CouncilSignageDTO[],
}

export type State5 = ZoneDescription & {
    listeRessources: RessourceNaturelleDTO[],
}

export type State6 = ZoneDescription & {
    listeRessources: RessourceFauniqueDTO[],
}

export type StateDTO3 = ZoneDescription & {
    list: state.State3[],
}

export type StateDTO4 = ZoneDescription & {
    list: state.State4[],
}

export type StateDTO7 = ZoneDescription & {
    list: state.State7[],
}

export type StateDTO8 = ZoneDescription & {
    list: state.State8[],
}

export type StateDTO9 = ZoneDescription & {
    list: state.State9[],
}

export type StateDTO10 = ZoneDescription & {
    list: state.State10[],
}

export type StateDTO11 = ZoneDescription & {
    list: state.State11[],
}

export type StateDTO13 = ZoneDescription & {
    list: state.State13[],
}

export type StateDTO14 = ZoneDescription & {
    list: state.State14[],
}

export type StateDTO15 = ZoneDescription & {
    list: state.State15[],
}

export type StateDTO16 = ZoneDescription & {
    list: state.State16[],
}

export type StateDTO17 = ZoneDescription & {
    list: state.State17[],
}