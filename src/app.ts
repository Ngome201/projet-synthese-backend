import { DataSource } from "typeorm";
import { State3,State4,State7, State8, State9, State10, State11, State13, State14, State15, State16, State17 } from "./entities";
import { CouncilPresentation } from "./entities/CouncilPresentation";
import { CouncilSignage } from "./entities/CouncilSignage";
import { RessourceNaturelle } from "./entities/RessourceNaturelle";
import { Pays } from "./entities/Pays";
import { Region } from "./entities/Region";
import { Departement } from "./entities/Departement";
import { Commune } from "./entities/Commune";
import { Localite } from "./entities/Localite";
import { Zone } from "./entities/Zone";
import { RessourceFaunique } from "./entities/RessourceFaunique";
import { TypeEtat } from "./entities/TypeEtat";
import { Historique } from "./entities/Historique";


export const AppDataSource = new DataSource({
    type:"postgres",
    database:"projet_synthese",
    username:"aurel",
    password:"2HWZ1sJk5YLDUg5UJUVpObb1tt4HEDJz",
    url :"postgres://aurel:2HWZ1sJk5YLDUg5UJUVpObb1tt4HEDJz@dpg-clf09oc15k1s73f70eeg-a.oregon-postgres.render.com/projet_synthese",
    ssl :true,
    port : 5432,
    entities: [TypeEtat,
         CouncilPresentation, CouncilSignage,
         RessourceNaturelle, RessourceFaunique,
         State3,State4,State7,State9,State10, State8, State11,State13,State14,State15,State16,State17,
         Historique,
         Pays, Region, Departement, Commune, Localite, Zone],
    synchronize :true
})

// export const AppDataSource = new DataSource({
//     type:"postgres",
//     host: "localhost",
//     database:"projet_synthese",
//     username:"postgres",
//     password:"pointsv$1234",
//     port : 5432,
//     entities: [TypeEtat,
//         CouncilPresentation, CouncilSignage,
//         RessourceNaturelle, RessourceFaunique,
//         State3,State4,State7,State9,State10, State8, State11,State13,State14,State15,State16,State17,
        //  Historique,
//         Pays, Region, Departement, Commune, Localite, Zone],
//     synchronize :true
// })
