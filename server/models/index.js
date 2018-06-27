import driver from './driver';
import friend from './friend';
import { Passenger } from './passenger';
import rideOffer from './rideOffer';
import rideRequest from './rideRequest';

export default {
	[driver.name] : driver,
	[friend.name] : friend,
	[Passenger.name] : Passenger,
	[rideOffer] : rideOffer,
	[rideRequest] : rideRequest,
};