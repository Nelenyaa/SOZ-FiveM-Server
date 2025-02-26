import { AdminMenuStateProps } from '../../nui/components/Admin/AdminMenu';
import { WardrobeMenuData } from '../cloth';
import { DrivingSchoolMenuData } from '../driving-school';
import { FuelType } from '../fuel';
import { HousingUpgradesMenuData } from '../housing/menu';
import { BossShopMenu, ShopProduct } from '../shop';
import { GarageMenuData } from '../vehicle/garage';
import { VehicleCustomMenuData } from '../vehicle/modification';
import { VehicleAuctionMenuData, VehicleDealershipMenuData, VehicleMenuData } from '../vehicle/vehicle';
import { WeaponsMenuData } from '../weapons/weapon';

export interface NuiMenuMethodMap {
    ArrowDown: never;
    ArrowLeft: never;
    ArrowRight: never;
    ArrowUp: never;
    Backspace: never;
    CloseMenu: boolean;
    ResetMenu: never;
    Enter: never;
    SetMenuType: SetMenuType;
    ToggleFocus: never;
}

export type SetMenuType = {
    menuType: MenuType;
    data: any;
    useMouse?: boolean;
    subMenuId?: string;
};

export enum MenuType {
    AdminMenu = 'AdminMenu',
    BahamaUnicornJobMenu = 'baun_job',
    BennysOrderMenu = 'bennys_order',
    BennysUpgradeVehicle = 'bennys_upgrade_vehicle',
    Demo = 'demo',
    DrivingSchool = 'driving_school',
    BossShop = 'boss_shop',
    MaskShop = 'mask_shop',
    FightForStyleJobMenu = 'ffs_job',
    FoodJobMenu = 'food_job_menu',
    HousingUpgrades = 'housing_upgrades',
    Garage = 'garage_menu',
    JobBennys = 'job_bennys',
    OilSetStationPrice = 'oil_set_station_price',
    SetHealthState = 'set_health_state',
    StonkJobMenu = 'stonk_job',
    Vehicle = 'vehicle',
    VehicleAuction = 'vehicle_auction',
    VehicleCustom = 'vehicle_custom',
    VehicleDealership = 'vehicle_dealership',
    Wardrobe = 'wardrobe',
    GunSmith = 'gunsmith',
    LsmcPharmacy = 'lsmc_pharmacy',
    MandatoryJobMenu = 'mdr_job',
    IllegalShop = 'illegal_shop',
}

export interface MenuTypeMap extends Record<MenuType, any> {
    [MenuType.AdminMenu]: AdminMenuStateProps['data'];
    [MenuType.BahamaUnicornJobMenu]: any;
    [MenuType.BennysUpgradeVehicle]: VehicleCustomMenuData;
    [MenuType.BennysOrderMenu]: any;
    [MenuType.BossShop]: BossShopMenu;
    [MenuType.Demo]: never;
    [MenuType.DrivingSchool]: DrivingSchoolMenuData;
    [MenuType.FightForStyleJobMenu]: any;
    [MenuType.HousingUpgrades]: HousingUpgradesMenuData;
    [MenuType.Garage]: GarageMenuData;
    [MenuType.JobBennys]: {
        insideUpgradeZone: boolean;
    };
    [MenuType.OilSetStationPrice]: Record<FuelType, number>;
    [MenuType.SetHealthState]: number;
    [MenuType.Vehicle]: VehicleMenuData;
    [MenuType.VehicleAuction]: VehicleAuctionMenuData;
    [MenuType.VehicleCustom]: VehicleCustomMenuData;
    [MenuType.VehicleDealership]: VehicleDealershipMenuData;
    [MenuType.Wardrobe]: WardrobeMenuData;
    [MenuType.GunSmith]: WeaponsMenuData;
    [MenuType.LsmcPharmacy]: never;
    [MenuType.MandatoryJobMenu]: any;
    [MenuType.IllegalShop]: Map<string, ShopProduct[]>;
}
