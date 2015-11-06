var i = 0, imgsrc = new Array(), preload = new Array();
imgsrc[0]="images/man1.gif";
imgsrc[1]="images/man2.gif";
imgsrc[2]="images/man3.gif";
imgsrc[3]="images/man4.gif";
imgsrc[4]="images/man5.gif";
imgsrc[5]="images/man6.gif";
imgsrc[6]="images/man7.gif";
imgsrc[7]="images/man8.gif";
imgsrc[8]="images/man9.gif";
imgsrc[9]="images/man10.gif";
imgsrc[10]="images/man11.gif";
imgsrc[11]="images/man12.gif";
for (var j=0;j<imgsrc.length;j++)
{
preload[j] = new Image;
preload[j].src = imgsrc[j];
}
function mode(param)
{
smode=param;
}
function startSlideshow()
{
if(smode=="play")
{
document.getElementById("play").disabled="disabled";
document.getElementById("pause").disabled="";
document.getElementById("stop").disabled="";
document.getElementById("slideshow").src=imgsrc[i];
i++;
setTimeout("startSlideshow()",1000);
}
else if(smode=="pause")
{
document.getElementById("pause").disabled="disabled";
document.getElementById("play").disabled="";
document.getElementById("play").value="Resume";
}
else if(smode=="stop")
{
document.getElementById("play").disabled="";
document.getElementById("play").value="Play";
document.getElementById("pause").disabled="disabled";
document.getElementById("stop").disabled="disabled";
document.getElementById("slideshow").src=imgsrc[0];
i=0;
}
if(i==imgsrc.length)
{
i=0;
}
}