var tick = new Audio('Img/tick.mp3');

setInterval(() =>{
    dt = new Date();
    hrs = dt.getHours();
    mins = dt.getMinutes();
    secs = dt.getSeconds();
    
    h_rot = 30*hrs + mins/2;
    m_rot = 6*mins;
    s_rot = 6*secs;
    tick.play()
    
    hour.style.transform = `rotate(${h_rot}deg)`;
    minutes.style.transform = `rotate(${m_rot}deg)`;
    seconds.style.transform = `rotate(${s_rot}deg)`;
},1000);