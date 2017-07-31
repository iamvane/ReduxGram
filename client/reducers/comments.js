//you create a reducer for each state in this app we have posts and comments

//a reducer takes two things

//1. the action iinfo abi=out what happend
//2. a copy of our current state

// this is our comments reducer

function comments(state=[], action){
	console.log(state, action);
	return state;
}

export default comments;