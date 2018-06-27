import signup from '../../controllers';

export default (app) => {
	app.post('/signup', signup);
};