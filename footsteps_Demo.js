var demo = {
    scene: "Heart",
    incremental: false,
    binary: false,
    doNotUseCDN: false,
    collisions: true,
    offline: true,
    onload: function() {
        scene.getMeshByName("Labels").setEnabled(false);
        scene.getMeshByName("lums").useVertexColors = false;
        scene.gravity.scaleInPlace(0.5);

        BABYLON.Mesh.checkCollisions = true;
        scene.gravity.scaleInPlace(0.5);
        let camera = scene.activeCamera;
        camera.checkCollisions = true;
        var cameraBox = BABYLON.Mesh.CreateBox("Box1", .1, scene);
        cameraBox.position = new BABYLON.Vector3(0, 2, 1);
        cameraBox.parent = camera;
        camera.ellipsoid = new BABYLON.Vector3(.4, .8, .4);

        cameraBox.isPickable = false;
        camera.speed = 0.1;
        scene.audioPositioningRefreshRate = 100;
        scene.meshes[0].checkCollisions = true;
        scene.fogMode = BABYLON.Scene.FOGMODE_EXP;;
        scene.fogDensity = 0.1;
        scene.fogColor = scene.clearColor;

        function vecToLocal(vector, mesh) {
            var m = mesh.getWorldMatrix();
            var v = BABYLON.Vector3.TransformCoordinates(vector, m);
            return v;
        }

        // Load the sound and play it automatically once ready
        var collision = new BABYLON.Sound("Collisions", "./build/assets/board.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: 0.2
        });

        var book = new BABYLON.Sound("Book", "./build/assets/book.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: 0.3
        });


        var boris = new BABYLON.Sound("boris", "./build/assets/boris.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: .4
        });

        var jim= new BABYLON.Sound("jim", "./build/assets/jim.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: .8
        });
        function hitTest(x, z) {
            if (camera.position.x > x - 0.05 && camera.position.x < x + 0.05 &&
                camera.position.z > z - 0.5 && camera.position.z < z + 0.5) {
                return true;
            }
            return false;
        }

        let canPlayCollision = true;
        camera.onCollide = function(colMesh) {
            if (colMesh.name != "Coll001" && canPlayCollision) {
                if (hitTest(5.44, 0.7) === true) {
                    collision.play();
                } else if (hitTest(1.94, .22) === true) {
                    book.play();
                } else if (hitTest(-5.18, -2.85) === true) {
                    boris.play();
                } else if (hitTest(2.24, -2.85) === true) {
                    jim.play();
                }
                canPlayCollision = false;
                setTimeout(function() {
                    canPlayCollision = true
                }, 500);
            }
        }



      
        // Load the sound and play it automatically once ready
        var footsteps = new BABYLON.Sound("Footsteps", "./build/assets/footstep.ogg", scene, null, {
            loop: true,
            autoplay: false,
            volume: 3
        });

        var footstepSounds = [];
        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep1.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: 3
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep2.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: 3
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep3.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: 3
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep4.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: 3
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep5.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: 3
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep6.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: 3
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep7.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: 3
        }));

        let isWalking = false;
        let prevIndex = -1;

        function playFootstepSound() {

            let index = Math.floor(Math.random() * (footstepSounds.length - 1));
            if (index === prevIndex && prevIndex < 6)
                index = prevIndex + 1;
            else if (index === prevIndex && prevIndex == 6)
                index = 0;

            if (isWalking === true) {
                footstepSounds[index].setVolume(Math.random() * .2 + .8);
                footstepSounds[index].play();
                setTimeout(playFootstepSound, Math.random() * 100 + 500);
            }
            prevIndex = index;
        }

        // Load the sound and play it automatically once ready

        var hum= new BABYLON.Sound("hum1", "./build/assets/hum.ogg", scene, null, {
            loop: true,
            autoplay: true,
            volume: .1,
            spatialSound: true,
            distanceModel: "linear",
            rolloffFactor: 1
            });
                        
                
    
                
    
    
                var bubbles = new BABYLON.Sound("Bubbling1", "./build/assets/bubbles1.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: 0.4,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 2
                });
        
                
              
                 var bubbles = new BABYLON.Sound("Bubbling2", "./build/assets/bubbles2.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: 0.5,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 2
                });
        
                var bubbles = new BABYLON.Sound("Bubbling3", "./build/assets/bubbles3.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: .4,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 2
                });
        
                bubbles.setPosition(new BABYLON.Vector3(-1.30, 1, 0));
                bubbles.setPosition(new BABYLON.Vector3(0.06, 1, -1.90));
                bubbles.setPosition(new BABYLON.Vector3(-0.25, 1, 1.65));

                var tapemachine = new BABYLON.Sound("Tapemachine1", "./build/assets/tapemachine1.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: 0.4,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 2
                });
                var tapemachine = new BABYLON.Sound("Tapemachine2", "./build/assets/tapemachine2.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: 0.4,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 2
                });
                var tapemachine = new BABYLON.Sound("Tapemachine2", "./build/assets/tapemachine3.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: 0.4,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 2
                });
                var tapemachine = new BABYLON.Sound("Tapemachine2", "./build/assets/tapemachine4.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: 0.4,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 2
                });
                tapemachine.setPosition(new BABYLON.Vector3(-1.76, 1.50, -2.55));
                tapemachine.setPosition(new BABYLON.Vector3(-1.76, .5, -2.55));
                tapemachine.setPosition(new BABYLON.Vector3(-.65, .5, -2.55));
                tapemachine.setPosition(new BABYLON.Vector3(-.65, 1.5, -2.5));
                
        
                
        
                       // Load the sound and play it automatically once ready
                       var heart= new BABYLON.Sound("Heart", "./build/assets/heart.ogg", scene, null, {
                        loop: true,
                        autoplay: true,
                        volume: .1,
                        spatialSound: true,
                        distanceModel: "exponential",
                        rolloffFactor: 2
                    });
            
                    heart.setPosition(new BABYLON.Vector3(-2.89, 1, -1.86));

                      // Load the sound and play it automatically once ready
                      var sirens= new BABYLON.Sound("Sirens", "./build/assets/sirens.ogg", scene, null, {
                        loop: true,
                        autoplay: true,
                        volume: 1,
                        spatialSound: true,
                        distanceModel: "exponential",
                        rolloffFactor: 1
                    });
            
                    sirens.setPosition(new BABYLON.Vector3(4.32, 1, 3.00));

                       // Load the sound and play it automatically once ready
                       var electricbuzz= new BABYLON.Sound("ElectricBuzz1", "./build/assets/electricbuzz.ogg", scene, null, {
                        loop: true,
                        autoplay: true,
                        volume: .3,
                        spatialSound: true,
                        distanceModel: "exponential",
                        rolloffFactor: 1
                    });
                    var electricbuzz= new BABYLON.Sound("ElectricBuzz2", "./build/assets/electricbuzz2.ogg", scene, null, {
                        loop: true,
                        autoplay: true,
                        volume: .3,
                        spatialSound: true,
                        distanceModel: "exponential",
                        rolloffFactor: 1
                    });
            
                    var electricbuzz= new BABYLON.Sound("ElectricBuzz3", "./build/assets/electricbuzz3.ogg", scene, null, {
                        loop: true,
                        autoplay: true,
                        volume: 0.3,
                        spatialSound: true,
                        distanceModel: "exponential",
                        rolloffFactor: 4
                    });

                    electricbuzz.setPosition(new BABYLON.Vector3(-3.30, 1, -2.85));
                    electricbuzz.setPosition(new BABYLON.Vector3(-2.34, 1, 1.76));
                    electricbuzz.setPosition(new BABYLON.Vector3(2.10, 1, 1.76));

                       // Load the sound and play it automatically once ready
                       var steam= new BABYLON.Sound("steam", "./build/assets/steam1.ogg", scene, null, {
                        loop: true,
                        autoplay: true,
                        volume: .2,
                        spatialSound: true,
                        distanceModel: "exponential",
                        rolloffFactor: 4
                    });
            
                    steam.setPosition(new BABYLON.Vector3(-0.07, 1, 1.51));

                      // Load the sound and play it automatically once ready
                      var door= new BABYLON.Sound("Door", "./build/assets/door.ogg", scene, null, {
                        loop: true,
                        autoplay: true,
                        volume: 1,
                        spatialSound: true,
                        distanceModel: "exponential",
                        rolloffFactor: 3
                    });
            
                    door.setPosition(new BABYLON.Vector3(4.32, 1, -3.21));




        
        
                       // Load the sound and play it automatically once ready
                       var sink= new BABYLON.Sound("BubblingSink", "./build/assets/sink.ogg", scene, null, {
                        loop: true,
                        autoplay: true,
                        volume: .3,
                        spatialSound: true,
                        distanceModel: "exponential",
                        rolloffFactor: 5
                    });
            
                    sink.setPosition(new BABYLON.Vector3(-5.34,.5, -1.32));
        

        
                // Load the sound and play it automatically once ready
                var burner = new BABYLON.Sound("Burner1", "./build/assets/burner.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: 0.7,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 5
                });
                var burner = new BABYLON.Sound("Burner2", "./build/assets/burner2.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: 0.7,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 2
                });
                var burner = new BABYLON.Sound("Burner3", "./build/assets/burner.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: 0.7,
                    spatialSound: true,
                    distanceModel: "exponential",
                    rolloffFactor: 2
                });
                burner.setPosition(new BABYLON.Vector3(-1.30, 0.5, 0.88));
                burner.setPosition(new BABYLON.Vector3(-0.22, 0.5, 1.66));
                burner.setPosition(new BABYLON.Vector3(-0.07, 0.5, -2.05));


                // Load the sound and play it automatically once ready

                var noise = new BABYLON.Sound("Lights", "./build/assets/lights.ogg", scene, null, {
                    loop: true,
                    autoplay: true,
                    volume: .3,
                    spatialSound: false
                });
        
        
                lightVectors = [];
                var xPositions = [-5, -3, -1, 1, 3, 5, -5, -3, -1, 1, 3, 5, -5, -3, -1, 1, 3, 5];
                var zPosition = [-2, -2, -2, -2, -2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2]
                for (let i = 0; i < 15; i++) {
                    lightVectors.push(new BABYLON.Vector3(xPositions[i], 2, zPosition[i]));
                }
        scene.onKeyboardObservable.add((kbInfo) => {
            if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN) {
                if (kbInfo.event.key === 'ArrowUp' || kbInfo.event.keyCode == 87) {
                    if (isWalking === false)
                        setTimeout(playFootstepSound, 0);
                    isWalking = true;

                    //footsteps.setVolume(1);
                    //console.log("KEY DOWN: ", kbInfo.event.key);
                    //console.log('Player Position X:', camera.position.x.toFixed(2), 'Y:', camera.position.y.toFixed(2), 'Z:', camera.position.z.toFixed(2));
                }
            } else if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYUP) {
                console.log(kbInfo.event.key);
                if (kbInfo.event.key === 'ArrowUp' || kbInfo.event.keyCode == 87) {
                    isWalking = false;
                    //footsteps.setVolume(1);
                }
            }

        });

        // GUI
        let GUIInfo = "Player's position";
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        var stackPanel = new BABYLON.GUI.StackPanel();
        stackPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        stackPanel.isVertical = true;
        advancedTexture.addControl(stackPanel);

        var textInfo = new BABYLON.GUI.TextBlock();
        textInfo.color = "white";
        textInfo.fontSize = 16;
        textInfo.height = "30px";
        stackPanel.addControl(textInfo);

        scene.onBeforeRenderObservable.add(() => {
            textInfo.text = "Player's position X:" + (camera.position.x).toFixed(2) + " Z:" + (camera.position.z).toFixed(2);
            //trigger areas for rotating camera view
            //castRay();
        });

    }

};