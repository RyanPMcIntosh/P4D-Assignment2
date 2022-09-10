function draw()
{
    //getting the canvas information
    var myCanvas = document.getElementById("workSpace");
    var ctx = myCanvas.getContext("2d");

    //defining colors
    //Rainbow
    var colors = ["#75EB00", "#53BBF4", "#FF85CB", "#FF432E", "#FFAC00"];

    //Greys
    colors = ["#DEDEDE", "#A2A2A2", "#686868", "#2E2E2E", "#000000"]

    for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.strokeStyle = colors[i % colors.length];
        //drawing randomly sized shapes with the limit set to the max of the canvas (500)
        ctx.lineWidth = Math.random() * 40;
        ctx.moveTo(Math.random() * 500, Math.random() * 500);
        ctx.lineTo(Math.random() * 500, Math.random() * 500);
        ctx.stroke();
    }


}
