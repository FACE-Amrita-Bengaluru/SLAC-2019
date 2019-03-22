const functions = require('firebase-functions'),
	express = require('express'),
	app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/Offline', (req, res) => {
	res.render('offline');
});

app.get('/ComingSoon', (req, res) => {
	res.render('ComingSoon');
});

app.get('/Main', (req, res) => {
	res.render('index');
});

app.get('/CodeConduct', (req, res) => {
	res.render('codeofconduct');
});

app.get('/PrivacyPolicy', (req, res) => {
	res.render('privacy');
});

app.get('/FAQ', (req, res) => {
	res.redirect('ComingSoon');
});

app.get('/Sponsorship', (req, res) => {
	res.render('sponsorship');
});

app.get('/Terms_Conditions', (req, res) => {
	res.redirect('ComingSoon');
});

app.use((req, res, next) => {
	res.status(404).render('404');
});

exports.app = functions.https.onRequest(app);
