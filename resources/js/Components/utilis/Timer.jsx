export const timer = (time) => {

console.log(time);
        let sec = parseInt((time/1000)%60)
        let min = parseInt((time/(1000*60))%60)
        let hour = parseInt((time/(1000*60*60))%24);

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec= (sec< 10) ? "0" + sec : sec;

    return `${hour}:${min}:${sec}`
}

// export const time = (time) => {
//     let seconds = Math.floor(time/1000);

//     let minutes = Math.floor(seconds/60);

//     let hours = Math.floor(minutes/60);

//     seconds = seconds % 60;

//     minutes = minutes % 60;

//     hours = hours < 10 ?   hours : hours;

//     minutes = minutes < 10 ? "0" + minutes : minutes;

//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     return `${hours}:${minutes}:${seconds}`;
// }
