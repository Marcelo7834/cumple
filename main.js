var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{

	fabric.image.fromURL('BirthdayImage.jpg', function(IMG){
        block_image_object = IMG;

        block_image_object.scaleTWidth(700);
        block_image_object.scaleTWidth(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });

}

function playSound(){
    x.play()
}
        
	


function playSound(){
	
}
