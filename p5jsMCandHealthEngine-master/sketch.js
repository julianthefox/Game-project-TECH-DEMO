var qquestion1;
var qquestion2;

var question1;
var question2;
var question3;
var questionX;
var questionY;
var questionLength;
var questionHeight;
var health;

// all sound effect files
var gameARapidfireandreload;
var ganeLMGfiringsound;
var canvasID;
var locked;

var numberOfAnswers;

function preload()
{
	// numberOfAnswers is how many multiple choice the player has
	numberOfAnswers = 5;
	questionLength = 126;
	questionHeight = 40;

	questionX = [100,100,100,100,100];
	questionY = [50,100,150,200,250];


	question1 = new Array(numberOfAnswers);
	question2 = new Array(numberOfAnswers);
	question3 = new Array(numberOfAnswers);

	qquestion1 = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_ww.png');

	question1[0] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_ww.png');
	question1[1] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_the-colder-war.png');
	question1[2] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_ww1.png');
	question1[3] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_the-vietnam-war.png');
	question1[4] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_american-civil-war.png');

      

	question2[0] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button.png');
	question2[1] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button-2.png');
	question2[2] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button-3.png');
	question2[3] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button-4.png');
	question2[4] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button-5.png');


	question3[0] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_stars-each-represent-a-the-past-native-tribes.png');
	question3[1] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_stars-each-represents-a-state.png');
	question3[2] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_stars-each-represent-the-cites-of-the-us.png');
	question3[3] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_stars-each-represent-the-parts-of-the-government.png');
	question3[4] = loadImage('https://julianthefox.github.io/GameProject/p5jsMCandHealthEngine-master/images/button_stars-each-represent-the-historical-figures-of-the-us.png');

	gameARapidfireandreload = loadSound('https://julianthefox.github.io/GameProject/game sounds/game AR apid fire and reload.m4a');
    gameLMGfiringsound = loadSound('https://julianthefox.github.io/GameProject/game sounds/game LMG firing sound.m4a'); 
}

function setup()
{
	createCanvas(800,600);

	health = 200;
	canvasID = 0;
	locked = false;
}

function draw()
{
	background(0,0,0);

	if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 0)
	{
		image(qquestion1,50,500);
		showQuestions(question1);
		isButtonClicked(0,1,gameARapidfireandreload)
	}
	else if (canvasID == 1)
	{
		showQuestions(question2);
		isButtonClicked(0,2,gameARapidfireandreload)
	}
	else if (canvasID == 2)
	{
		showQuestions(question3);
		isButtonClicked(1,0,gameLMGfiringsound)
	}

	showHealth();

}

// shows your health bar and check if you are dead or not
function showHealth()
{
	fill(0,255,0);
	rect(300,30,health,25);
	fill(0,0,0);
	text(health,300+10,30+20)
	if (health <= 0)
	{
		canvasID = -1;
	}
}

// checks what happens when you click on a button
function isButtonClicked(correct,nextID,playsoundeffect)
{
	var deductHealth = false;
	if (mouseIsPressed && !locked)
	{
		locked = true;
		for (var i = 0; i < numberOfAnswers; i++)
		{
			if (mouseX > questionX[i] && mouseX < questionX[i] + questionLength && mouseY > questionY[i] && mouseY < questionY[i] + questionHeight)
			{
				if (i == correct)
				{
					canvasID = nextID;
					return 0;
				}
				else
				{
					if (!playsoundeffect.isPlaying())
					{
						playsoundeffect.play();
					}
					deductHealth = true;
				}
			}
		}
		if (deductHealth)
		{
			health = health - 15;
		}
	}
}

// handles all game over code
function gameOver()
{
	textSize(32);
	fill(255,255,255);
	text("YOU D I E D!",50,50);
	textSize(12);
}

// shows questions on the screen
function showQuestions(thequestion)
{
	for (var i = 0; i < numberOfAnswers; i++)
	{
		image(thequestion[i],questionX[i],questionY[i])
	}
}

// locked is to prevent HOLDING onto the button
function mouseReleased()
{
	locked = false;
}










