const rideRequests = [];

export default class RideRequest {
	constructor(
		passengerLocation, destination,
		passengerId, rideOfferId,
		departTime,
		status = 'pending',
		id = (rideRequests.length + 1),
		) {
		this.passengerLocation = passengerlocation;
		this.destination = destinaation;
		this.id = id;
		this.passengerId = passengerId;
		this.departTime = departTime;
		this.status = status;
	}

	// static methods

	static create ({
		passsengerLocation. destination,
		startTime, passengerId, rideOfferId,
		departTime,
	}) {
		const rideRequest = new rideRequest(
			passengerLocation, destination,
			startTime, passengerId, rideOfferId,
			departTime,
			);
		rideRequests.push(rideRequest);
		return rideRequest;
	}

	static all() {
		return rideRequests;
	}
}