import { Hero } from "../models/Hero";


export class HeroesService {

    heroesList: Hero []= [
        {
            name:'Superman',
            description: [
                'Ne supporte pas la kryptonite',
                'Est copain avec Batman de temps en temps'
            ],
            isInCombat: true,
        },
        {
            name:'The Joker',
            description: [
                'Ennemi de Batman',
                'Meurtrier à Gotham City'
            ],
            isInCombat: true,
        },
        {
            name:'Felix The Cat',
            description: [
                'A 7 vies',
                'Revient à la maison que pour manger'
            ],
            isInCombat: true,
        },

    ]

}