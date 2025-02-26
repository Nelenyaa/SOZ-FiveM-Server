import { JobType } from '../job';
import { ShopConfig } from '../shop';

export const BossShop: (ShopConfig & { job: JobType })[] = [
    {
        name: 'pawl',
        job: JobType.Pawl,
        zone: {
            center: [-538.07, 5304.91, 76.37],
            length: 0.55,
            width: 0.65,
            heading: 340,
            minZ: 75.37,
            maxZ: 77.37,
        },
        targets: [],
        products: [{ id: 'weapon_hatchet', type: 'weapon', price: 100 }],
    },
    {
        name: 'stonk',
        job: JobType.CashTransfer,
        zone: {
            center: [-15.5, -708.83, 45.02],
            length: 0.6,
            width: 2.6,
            heading: 25,
            minZ: 45.02,
            maxZ: 48.02,
        },
        targets: [],
        products: [
            { id: 'outfit', type: 'item', metadata: { label: 'STONK', type: 'stonk' }, price: 100 },
            { id: 'armor', type: 'item', metadata: { label: 'STONK', type: 'stonk' }, price: 150 },
            { id: 'weapon_pistol', type: 'weapon', price: 300 },
        ],
    },
    {
        name: 'news',
        job: JobType.News,
        zone: {
            center: [-567.59, -922.01, 28.82],
            length: 0.4,
            width: 2.8,
            heading: 0,
            minZ: 27.82,
            maxZ: 30.82,
        },
        targets: [],
        products: [
            { id: 'armor', type: 'item', metadata: { label: 'Twitch News', type: 'news' }, price: 150 },
            { id: 'n_fix_camera', type: 'item', price: 250 },
            { id: 'n_fix_greenscreen', type: 'item', price: 150 },
            { id: 'n_fix_light', type: 'item', price: 80 },
            { id: 'n_fix_mic', type: 'item', price: 60 },
            { id: 'n_mic', type: 'item', price: 50 },
            { id: 'n_camera', type: 'item', price: 250 },
            { id: 'n_bmic', type: 'item', price: 100 },
            { id: 'microphone', type: 'item', price: 50 },
        ],
    },
    {
        name: 'food',
        job: JobType.Food,
        zone: {
            center: [-1881.68, 2058.03, 140.0],
            length: 0.8,
            width: 2.15,
            heading: 70,
            minZ: 140.0,
            maxZ: 143.0,
        },
        targets: [],
        products: [
            { id: 'weapon_machete', type: 'weapon', price: 45 },
            { id: 'weapon_musket', type: 'weapon', price: 125 },
            { id: 'ammo_09', type: 'weapon_ammo', price: 4 },
        ],
    },
    {
        name: 'bennys',
        job: JobType.Bennys,
        zone: {
            center: [-216.94, -1318.97, 30.89],
            length: 0.8,
            width: 1.6,
            heading: 90,
            minZ: 29.89,
            maxZ: 32.89,
        },
        targets: [],
        products: [
            { id: 'repairkit', type: 'item', price: 200 },
            { id: 'cleaningkit', type: 'item', price: 40 },
            { id: 'wheel_kit', type: 'item', price: 80 },
            { id: 'diagnostic_pad', type: 'item', price: 260 },
            { id: 'oil_jerrycan', type: 'item', price: 100 },
        ],
    },
    {
        name: 'bennys_north',
        job: JobType.Bennys,
        zone: {
            center: [1898.44, 3077.56, 46.92],
            length: 1.2,
            width: 3.0,
            heading: 330.0,
            minZ: 45.92,
            maxZ: 46.922,
        },
        targets: [],
        products: [
            { id: 'repairkit', type: 'item', price: 200 },
            { id: 'cleaningkit', type: 'item', price: 40 },
            { id: 'wheel_kit', type: 'item', price: 80 },
            { id: 'diagnostic_pad', type: 'item', price: 260 },
            { id: 'oil_jerrycan', type: 'item', price: 100 },
        ],
    },
    {
        name: 'lsmc',
        job: JobType.LSMC,
        zone: {
            center: [309.79, -1417.49, 32.51],
            length: 0.6,
            width: 1.25,
            heading: 50,
            minZ: 31.51,
            maxZ: 32.51,
        },
        targets: [],
        products: [
            { id: 'outfit', type: 'item', metadata: { label: 'LSMC', type: 'lsmc' }, price: 100 },
            { id: 'armor', type: 'item', metadata: { label: 'LSMC', type: 'lsmc' }, price: 150 },
            { id: 'antibiotic', type: 'item', price: 15 },
            { id: 'painkiller', type: 'item', price: 15 },
            { id: 'defibrillator', type: 'item', price: 25 },
            { id: 'empty_bloodbag', type: 'item', price: 5 },
            { id: 'firstaid', type: 'item', price: 10 },
            { id: 'pommade', type: 'item', price: 15 },
            { id: 'tissue', type: 'item', price: 5 },
            { id: 'weapon_fireextinguisher', type: 'weapon', metadata: { ammo: 400 }, price: 5 },
            { id: 'walkstick', type: 'item', price: 15 },
            { id: 'poumon', type: 'item', price: 2000 },
            { id: 'rein', type: 'item', price: 2000 },
            { id: 'foie', type: 'item', price: 2000 },
            { id: 'flask_pee_empty', type: 'item', price: 15 },
            { id: 'flask_blood_empty', type: 'item', price: 15 },
            { id: 'antidepressant', type: 'item', price: 15 },
            { id: 'health_book', type: 'item', price: 30 },
            { id: 'antiacide', type: 'item', price: 15 },
            { id: 'breathanalyzer', type: 'item', price: 5 },
        ],
    },
    {
        name: 'lspd',
        job: JobType.LSPD,
        zone: {
            center: [620.64, -26.33, 90.51],
            length: 4.0,
            width: 0.8,
            heading: 340,
            minZ: 89.5,
            maxZ: 92.5,
        },
        targets: [],
        products: [
            { id: 'outfit', type: 'item', metadata: { label: 'LSPD', type: 'lspd' }, price: 100 },
            { id: 'armor', type: 'item', metadata: { label: 'LSPD', type: 'lspd' }, price: 150 },
            { id: 'light_intervention_outfit', type: 'item', metadata: { label: 'LSPD', type: 'lspd' }, price: 300 },
            { id: 'heavy_antiriot_outfit', type: 'item', metadata: { label: 'LSPD', type: 'lspd' }, price: 300 },
            { id: 'radio', type: 'item', price: 80 },
            { id: 'handcuffs', type: 'item', price: 30 },
            { id: 'handcuffs_key', type: 'item', price: 15 },
            { id: 'cone', type: 'item', price: 5 },
            { id: 'spike', type: 'item', price: 5 },
            { id: 'weapon_flashlight', type: 'weapon', price: 15 },
            { id: 'weapon_nightstick', type: 'weapon', price: 25 },
            { id: 'weapon_stungun', type: 'weapon', price: 45 },
            { id: 'weapon_pistol_mk2', type: 'weapon', price: 300 },
            { id: 'weapon_smg', type: 'weapon', price: 1200 },
            { id: 'ammo_01', type: 'weapon_ammo', price: 10 },
            { id: 'mobile_radar', type: 'item', price: 40 },
            { id: 'breathanalyzer', type: 'item', price: 5 },
            { id: 'police_pliers', type: 'item', price: 450 },
        ],
    },
    {
        name: 'bcso',
        job: JobType.BCSO,
        zone: {
            center: [1858.9, 3689.47, 38.07],
            length: 0.6,
            width: 0.6,
            heading: 30,
            minZ: 37,
            maxZ: 39,
        },
        targets: [],
        products: [
            { id: 'outfit', type: 'item', metadata: { label: 'BCSO', type: 'bcso' }, price: 100 },
            { id: 'armor', type: 'item', metadata: { label: 'BCSO', type: 'bcso' }, price: 150 },
            { id: 'light_intervention_outfit', type: 'item', metadata: { label: 'BCSO', type: 'bcso' }, price: 300 },
            { id: 'heavy_antiriot_outfit', type: 'item', metadata: { label: 'BCSO', type: 'bcso' }, price: 300 },
            { id: 'radio', type: 'item', price: 80 },
            { id: 'handcuffs', type: 'item', price: 30 },
            { id: 'handcuffs_key', type: 'item', price: 15 },
            { id: 'cone', type: 'item', price: 5 },
            { id: 'spike', type: 'item', price: 5 },
            { id: 'weapon_flashlight', type: 'weapon', price: 15 },
            { id: 'weapon_nightstick', type: 'weapon', price: 25 },
            { id: 'weapon_stungun', type: 'weapon', price: 45 },
            { id: 'weapon_revolver_mk2', type: 'weapon', price: 300 },
            { id: 'weapon_combatpdw', type: 'weapon', price: 1200 },
            { id: 'ammo_02', type: 'weapon_ammo', price: 10 },
            { id: 'mobile_radar', type: 'item', price: 40 },
            { id: 'breathanalyzer', type: 'item', price: 5 },
            { id: 'police_pliers', type: 'item', price: 450 },
        ],
    },
    {
        name: 'baun',
        job: JobType.Baun,
        zone: {
            center: [92.04, -1291.15, 29.27],
            length: 0.65,
            width: 1,
            heading: 300,
            minZ: 27.87,
            maxZ: 29.87,
        },
        targets: [],
        products: [{ id: 'microphone', type: 'item', price: 50 }],
    },
    {
        name: 'mdr',
        job: JobType.MDR,
        zone: {
            center: [-547.5, -201.13, 47.66],
            length: 0.2,
            width: 1.0,
            heading: 10,
            minZ: 47.36,
            maxZ: 48.36,
        },
        targets: [],
        products: [{ id: 'newcomer_ticket', type: 'item', price: 5000 }],
    },
];
