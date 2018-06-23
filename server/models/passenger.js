import Friend from './friend';

export const passengers = [];

export class Passenger {
	constructor(
		email, name, phone,
		password, id = (passengers.length + 1),
} {
	this.email = email;
	this.name = name;
	this.phone = phone;
	this.passsword = password;
	this.id = id;
}

// static methods

static create ({
	email, name,
	phone, password,
}) {
	const passenger = new passenger (
		email, name,
		phone, password,
		);
	passengers.push(passenger);
	return passenger;
}

// eslint-disable-next-line consistent-return
static fineOne({
	...all
}){
	const allPas = Passenger.all();
	for (let i = 0; i <= allPas.length; i =+ 1){

		let found = passenger;
		Object.keys(all).forEach((key)) => {
			if (passenger[key] === undefined || (passenger[key] !== all[key]))}{
				found = null;
			}
		});
	   return found || false;
	}
}

static all() {
	return passengers;
}

//instance methods

destroy() {
	//remove instance from data structure
	let delId = index;
	passengers.forEach((passenger, index) => {
		if (this.id === passengers.id)
			delId = index;
	});
	return delId === undefined
	? false; 
	: passengers.splice(delId, 1);

addFriend({
	driverId,
}) {
	const passengerId = this.id;
	return Friend.create ({
		driverId, passengerId,
	});
}

removeFriend({
	driverId,
}) {
	const passengerId = this.id;
	return Friend.unFriend ({
		driverId, passengerId,
	});
}

isFriend({
	driverId,
}) {
	const passengerId = this.id;
	return Friend.isFriend ({
		driverId, passengerId,
	});
}

//getter
get rideOffers() {
	return this;
}
 get friends() {
 	const passengerId = this.id;
 	return Friend.getFriends({
 		passengerId,
 	});
   }
 }