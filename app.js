//import request
const request = require('request');
//class bot curius cat
class Bot{

	constructor(user,question){
		this.api = 'https://curiouscat.me/api/v2/post/create'
		//Message must be longer than 4 characters
		this.question = [question]
		this.sendQuestion(user)
	}

	//delay menssagem send
	sleep(ms){
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	}

	//send question
	async sendQuestion(username){
		for (var i = 0; i <= 4; i++) {
			request.post({url:this.api,
				form:{
					'to':username,
					'anon':true,
					'question':this.question[0][i]
	                }},
	                function(error, response, body) {
	                	//See if the messages were sent
	                	//console.log(body)//
	                })
			console.log(`send: ${this.question[0][i]}`)
			await this.sleep(3000)
		}
	}
}

const question = ["array question"]
start = new Bot("username",question)

