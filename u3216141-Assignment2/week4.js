function draw() {
    const canvas = document.getElementById("workSpace");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

      
        ctx.beginPath();

        //changing the outline color
        ctx.strokeStyle = '#F4F4F4';

        //drawing the snowman
        ctx.arc(250, 350, 100, 0, 2 * Math.PI, false);
        ctx.moveTo(310, 260);
        ctx.arc(250, 260, 60, 0, 2 * Math.PI, false);
        ctx.moveTo(290, 190);
        ctx.arc(250, 190, 40, 0, 2 * Math.PI, false);

        //fills the shapes
        ctx.fillStyle = '#F4F4F4';
        ctx.fill();
        ctx.stroke();

        ctx.closePath();

        //eyes
        ctx.beginPath();

        ctx.arc(235, 180, 5, 0, 2 * Math.PI, false);
        ctx.moveTo(270, 180);
        ctx.arc(265, 180, 5, 0, 2 * Math.PI, false);


        ctx.fillStyle = '#292929';
        ctx.fill();
        ctx.stroke();

        ctx.closePath();

        //nose
        ctx.beginPath();

        ctx.arc(250, 195, 7, 0, 2 * Math.PI, false);


        ctx.fillStyle = '#FF961E';
        ctx.fill();
        ctx.stroke();


        //top hat
        ctx.beginPath();

        ctx.rect(225, 90, 50, 70)
        ctx.rect(200, 160, 100, 10)


        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
        
    }
}
