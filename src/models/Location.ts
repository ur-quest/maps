import { ICoordinates } from 'src/interfaces/ICoordinates';
import { ILocationParams } from 'src/interfaces/ILocationParams';
import { ILocation } from 'src/interfaces/ILocation';

abstract class LocationFactory {
  protected abstract coordinates: ICoordinates;

  protected abstract markerIcon: string;

  protected abstract clickable: boolean;

  protected abstract draggable: boolean;

  abstract get getInfo(): ILocation
}

export class CurrentLocation extends LocationFactory {
  protected coordinates: ICoordinates;

  protected accuracy?: number;

  protected markerIcon = 'https://abrakadabra.fun/uploads/posts/2021-12/1640747246_17-abrakadabra-fun-p-znachok-geolokatsii-bez-fona-17.png';

  protected clickable = false;

  protected draggable = false;

  constructor(location: ILocationParams) {
    super();
    this.accuracy = location.accuracy;
    this.coordinates = {
      lat: location.latitude,
      lng: location.longitude,
    };
  }

  get getInfo() {
    return {
      position: this.coordinates,
      accuracy: this.accuracy,
      icon: this.markerIcon,
      clickable: this.clickable,
      draggable: this.draggable,
    };
  }
}

export class SearchLocation extends LocationFactory {
  protected coordinates: ICoordinates;

  protected markerIcon = 'https://cdn-icons-png.flaticon.com/512/5817/5817087.png';

  protected clickable = false;

  protected draggable = false;

  constructor(location: ILocationParams) {
    super();
    this.coordinates = {
      lat: location.latitude,
      lng: location.longitude,
    };
  }

  get getInfo() {
    return {
      position: this.coordinates,
      icon: this.markerIcon,
      clickable: this.clickable,
      draggable: this.draggable,
    };
  }
}
