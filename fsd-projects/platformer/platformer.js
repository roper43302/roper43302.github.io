$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);

    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1350, 400, 50, 50, "");
createPlatform(1, 200, 200, 20, "");
createPlatform(180, 20, 20, 90, "");
createPlatform(700, 500, 1300, 3000, "");
createPlatform(300, 400, 400, 10, "");
createPlatform(300, 10, 13, 250, "");
createPlatform(300, 380, 13, 250, "");
createPlatform(800, 300, 40, 10, "")
createPlatform(900, 300, 40, 10, "")
createPlatform(1000, 300, 40, 10, "")
createPlatform(1200, 0, 13, 400, "")



    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 360);
createCollectable("diamond", 150, 120, 0.5, 0.7);
createCollectable("steve", 500, 360);



    
    // TODO 4 - Create Cannons
createCannon("top", 1300, 450);
createCannon("top", 320, 400);
createCannon("left", 320, 1000);
createCannon("bottom", 1000, 500);
createCannon("bottom", 900, 500);
createCannon("bottom", 800, 500);
createCannon("bottom", 700, 500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
