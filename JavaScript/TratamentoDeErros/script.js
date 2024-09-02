throw new Error('Houve um erro estamos trabalhando nisso agora')

var video = []
video[0] = []
video[0]['nome'] = 'One piece'
video[0]['categoria'] = 'Anime'

function getVideo(video){

	try{
		console.log(video[1]['nome'])	
	}catch{
		console.log('Agora sim podemos tratar esse erro')
	} 
	finally{
		console.log('Sempre passa por aqui')
	}

	


}

getVideo(video)