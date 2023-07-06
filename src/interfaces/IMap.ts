import { ICoordinates } from './ICoordinates';

export interface IMap {
    center: ICoordinates,
    zoom: number,
    typeId: string,
    options: {
        styles: {
            featureType?: string,
            elementType: string,
            stylers: { color: string }[]
        }
    }
}
