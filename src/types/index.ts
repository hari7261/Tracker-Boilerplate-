export interface Location {
  latitude: number;
  longitude: number;
  timestamp: number;
}

export interface TrackingData {
  id: string;
  currentLocation: Location;
  predictedDestination?: Location;
  route?: Location[];
  status: 'active' | 'idle' | 'offline';
}

export interface Alert {
  id: string;
  type: 'warning' | 'info' | 'error';
  message: string;
  timestamp: number;
}