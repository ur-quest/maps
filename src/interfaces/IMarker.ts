import { ICoordinates } from './ICoordinates';

export interface IMarker {
    position: ICoordinates,
    icon: string,
    clickable: boolean,
    draggable: boolean,
}
