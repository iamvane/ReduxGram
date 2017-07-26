//you create a reducer for each state in this app we have posts and comments

//a reducer takes two things

//1. the action iinfo about what happend
//2. a copy of our current state

// this is our post reducer

function posts(state=[], action){
	console.log(state, action);
	return state;
}

export default posts;