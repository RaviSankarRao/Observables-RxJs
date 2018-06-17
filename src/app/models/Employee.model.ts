export interface Employee {
    id?: string;
    characterName: string;
    realName: string;
    dob?: string;
    skills?: string;
    address?: string;
    phone?: string;
    imageSrc: string;
}

export function getEmployees(): Employee[] {
    let employees = 
    [
        {
            id: 'Emp_1',
            characterName: 'Iron Man',
            realName: 'Tony Stark',
            skills: `Too smart for his own good. Rich dick who's good with machines.`,
            imageSrc: `https://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa.jpg`
        },
        {
            id: 'Emp_2',
            characterName: 'Black Panther',
            realName: `King T'Challa`,
            skills: `High-tech king of a fictional African country called Wakanda.`,
            imageSrc: `https://i.annihil.us/u/prod/marvel/i/mg/9/03/537ba26276348.jpg`
        },
        {
            id: 'Emp_3',
            characterName: 'Black Widow',
            realName: `Natasha Romanoff`,
            skills: `Just a keen wit, an acrobatic approach to murder, and an ability to avoid chafing while wearing full-body latex.`,
            imageSrc: `https://i.annihil.us/u/prod/marvel/i/mg/3/40/537ba41563b66.jpg`
        },
        {
            id: 'Emp_4',
            characterName: 'Captain America',
            realName: `Steve Rogers`,
            skills: `Enhanced strength, speed, and durability thanks to military experiments.`,
            imageSrc: `https://i.annihil.us/u/prod/marvel/i/mg/9/80/537ba5b368b7d.jpg`
        },
        {
            id: 'Emp_5',
            characterName: 'Hulk',
            realName: `Bruce Banner`,
            skills: `Superstrength and durability when he Hulks out.`,
            imageSrc: `https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg`
        },
        {
            id: 'Emp_6',
            characterName: 'Thor',
            realName: `Thor`,
            skills: `Very strong; able to lift a magic hammer and fly around with it, more beautiful than should be legally allowed.`,
            imageSrc: `https://i.annihil.us/u/prod/marvel/i/mg/7/10/537bc71e9286f.jpg`
        }
    ];

    return employees;
}