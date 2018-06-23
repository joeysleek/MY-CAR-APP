import { passengers } from './passenger';
import { drivers } from './driver';

const friends = [];

export default class Friend {
	constructor (passengerId, driverId) {
		this.passengerId = passengerId;
		this.driverId = driverId;
	}

// static methods

static create ({passengerId, driverId}) {
	try {
		const friendPair = new Friend (passengerId, driverId);
		if (Friend.isFriend(friendPair)) {
			throw new Error ('Already friends!');
		}
		friends.push(friendPair);
	}   catch (e) {
		return false;
	}
	return true;
}

static isFriend({ passengerId, driverId}) {
	const answer = friends.filter(friend =>
		passengerId === friends.passengerId && driverId === friend.driverId);
       return !!answer.length;
}

static unFriend({ passengerId, driverId}) {
	if (Friend.isFriend({ passengerId, driverId})) {
		let delId;
		friends.forEach((friendPair, index) =>{
			if (friendPair.passengerId === passengerId && friendPair.driverId === driverId) {
			 delId = index;	
			}
		});
		friends.splice(delId, 1);
	}
	return false;
}

	static getFriends ({ passengerId, driverId = null}) {
		const allFriends = [];
		if (driverId && !passengerId) {
			friends.forEach((friend) => {
				if(friend.driverId) {
					allFriends.push(friend.passengerId);
				}
			});
			return passengers.filter(passenger => allFriends.includes(passenger.passengerId));
	}
	friends.forEach((friend) => {
		if (friend.passengerId) {
			allFriends.push(friend.driverId);
		}
	});
	return drivers.filter(driver => allFriends.includes(driver.driverId));
 }
}
