'use strict';
const schedule = require('node-schedule');
const repository = require('../repositories/pessoa-media-repository');
const firebase = require('../repositories/firebase/firebase-repository');
const config = require('../config/config');

schedule.scheduleJob(config.scheduler.pessoaMedida, async () => {
	if(config.scheduler.ativo){
		console.log('Scheduler start ' + new Date());
		var data = await repository.getAll();
		firebase.create(JSON.stringify(data));
		console.log('Scheduler stop ' + new Date());
	}else{
		console.info(" Scheduler Desativado ")
	}
});





