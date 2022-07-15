import { Switch } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { Button } from '@ui/old_components/Button';
import { ItemIcon } from '@ui/old_components/ItemIcon';
import { ListItem } from '@ui/old_components/ListItem';
import React, { useContext } from 'react';

import { ThemeContext } from '../../../styles/themeProvider';

interface ISettingItem {
    options?: any;
    color?: string;
    label: string;
    value?: string | object | number | null;
    onClick?: any;
    icon: JSX.Element;
}

export const SettingItem = ({ options, color, label, value, onClick, icon }: ISettingItem) => {
    return (
        <ListItem onClick={() => onClick?.(options)}>
            <ItemIcon color={color} icon={icon} />
            <p className="flex-grow ml-4 font-light normal-case">{label}</p>
            <Button className="flex items-center">
                {value ? value : undefined}
                {onClick ? <ChevronRightIcon className="text-gray-200 w-5 h-5" /> : undefined}
            </Button>
        </ListItem>
    );
};

interface ISettingSlider {
    label: string;
    iconStart: JSX.Element;
    iconEnd: JSX.Element;
    value: number;
    onCommit: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SettingItemSlider = ({ iconStart, iconEnd, value, onCommit }: ISettingSlider) => {
    const { theme } = useContext(ThemeContext);

    return (
        <ListItem>
            <div className="text-gray-300 w-6 h-6">{iconStart}</div>
            <input
                type="range"
                min={0}
                max={100}
                defaultValue={value}
                onChange={onCommit}
                className={`w-full mx-2 h-1.5 appearance-none ${
                    theme === 'dark' ? 'bg-white' : 'bg-gray-700'
                } bg-opacity-20 rounded-full cursor-pointer`}
            />
            <div className="text-gray-300 w-6 h-6">{iconEnd}</div>
        </ListItem>
    );
};

interface ISettingSwitch {
    label: string;
    color?: string;
    value: boolean;
    onClick: any;
    icon: JSX.Element;
}

export const SettingSwitch = ({ label, color, value, onClick, icon }: ISettingSwitch) => {
    const { theme } = useContext(ThemeContext);

    return (
        <ListItem>
            <ItemIcon color={color} icon={icon} />
            <p className="flex-grow ml-4 font-light normal-case">{label}</p>
            <div>
                <Switch
                    checked={value}
                    onChange={() => onClick(value)}
                    className={`${
                        value ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-500' : 'bg-gray-300'
                    } inline-flex items-center h-6 rounded-full w-11`}
                >
                    <span
                        className={`transform transition ease-in-out duration-300 ${
                            value ? 'translate-x-6' : 'translate-x-1'
                        } inline-block w-5 h-5 bg-white rounded-full`}
                    />
                </Switch>
            </div>
        </ListItem>
    );
};