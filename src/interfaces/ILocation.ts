import { ICoordinates } from './ICoordinates';

export interface ILocation {
    position: ICoordinates,
    accuracy?: number,
    address?: object,
    icon: string,
    clickable: boolean,
    draggable: boolean,
}
