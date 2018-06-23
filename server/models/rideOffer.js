const rideOffers = [];
 
 export default class RideOffer {
 	constructor(
 		driverId, currentLocation,
 		destination, startTime,
 		route, seatsAvail, id = rideOffers.length + 1,
 	) {
 		this.id = id;
 		this.currentLocation = currentLocation;
 		this.destination = destination;
 		this.startTime = startTime;
        This.route = route;
        this.seatsAvail = seatsAvail;
        this.driverId = driverId;
 	}

 	static create({
 		cureentLocation, destination,
 		startTime, route,
 		seatsAvail, driverId,
 	}) {
 		const rideOffer = new RideOffer(
 			currentLocation, destiantion,
 			startTime, route,
 			seatsAvail, driverId,
 			);
 		rideOffers.push(rideOffer);
 		return rideOffer;
 	}

 	static all() {
 		return rideOffers;
 	}
 }