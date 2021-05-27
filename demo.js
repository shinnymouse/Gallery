var demo = {
    scene: "Espilit",
    incremental: false,
    binary: true,
    doNotUseCDN: false,
    collisions: true,
    offline: false,
    onload: function() {
        scene.autoClear = true;
        scene.getMeshByName("Sol loin").useVertexColors = false;
        scene.gravity.scaleInPlace(0.5);
        scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
        scene.fogDensity = 0.01;
        scene.fogColor = new BABYLON.Color3(0, 0, 0);

        var camera = scene.activeCamera;
        var cameraBox = BABYLON.Mesh.CreateBox("CameraBox", .1, scene);
        cameraBox.isVisible = false;
        cameraBox.position = new BABYLON.Vector3(0, 0, 0);
        cameraBox.parent = camera;
        camera.speed = 0.1;

        //let ambientVolume = 0;
        //let ambientMusic = new BABYLON.Sound("ambientMusic", "./build/assets/Guitar1.wav", scene, null, { loop: true, autoplay: true, spatialSound: false, volume: ambientVolume });
        var gl = new BABYLON.GlowLayer("glow", scene, {
            mainTextureSamples: 4
        });
        gl.customEmissiveColorSelector = function(mesh, subMesh, material, result) {
            if (mesh.name === "Bandes lum") {
                result.set(1, 1, 1, 1);
            } else {
                result.set(0, 0, 0, 0);
            }
        }

        
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
        var VRHelper = scene.createDefaultVRExperience({ createDeviceOrientationCamera: false });
        VRHelper.enableTeleportation({ floorMeshName: "Sols" });


        scene.onKeyboardObservable.add((kbInfo) => {
            console.log(kbInfo.event.keyCode);
            if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN) {
                if (kbInfo.event.keyCode == 32) {
                    console.log(meshInCrosshair);
                } else {
                    console.log("KEY DOWN: ", kbInfo.event.key);
                    console.log('Player Position X:', camera.position.x.toFixed(2), 'Y:', camera.position.y.toFixed(2), 'Z:', camera.position.z.toFixed(2));
                }
            } else if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYUP) {
                console.log("KEY UP: ", kbInfo.event.key);
            }
        });

        //RoomHum      

let humVolume = .2;
let humMusic = new BABYLON.Sound("Roomhum", "./build/assets/hum.ogg", scene, null, { loop: true, autoplay: true, spatialSound: false, volume: humVolume });




            
    
        
 
            //Sound for the different areas.. 
            var areaSounds = [];
            areaSounds.push(new BABYLON.Sound("WaitingRoomarea0", "./build/assets/inside.ogg", scene, soundsReady, {
                loop: true,
                autoplay: false,
                spatialSound: true,
                volume: 0.1,
                distanceModel: "exponential",
                rolloffFactor: 0
            }));
            

           
            areaSounds.push(new BABYLON.Sound("Foyerarea1", "./build/assets/openair.ogg", scene, soundsReady, {
                loop: true,
                autoplay: false,
                spatialSound: true,
                volume: 0.1,
                distanceModel: "exponential", 
                rolloffFactor: 1
            }));

            areaSounds.push(new BABYLON.Sound("SideRoomarea2", "./build/assets/upstairs.ogg", scene, soundsReady, {
                loop: true,
                autoplay: false,
                spatialSound: true,
                volume: 0.1,
                distanceModel: "exponential",
                rolloffFactor: 1
            }));

            areaSounds.push(new BABYLON.Sound("Downstairsthroughwindowarea3", "./build/assets/upstairs.ogg", scene, soundsReady, {
                loop: true,
                autoplay: false,
                spatialSound: true,
                volume: 0.1,
                distanceModel: "exponential",
                rolloffFactor: 0
            }));
            
            

            areaSounds.push(new BABYLON.Sound("upstairsarea4", "./build/assets/inside.ogg", scene, soundsReady, {
                loop: true,
                autoplay: false,
                spatialSound: true,
                volume: 0.1,
                distanceModel: "exponential", 
                rolloffFactor: 1
            }));
           

            
           
            var numberOfSoundsReady = 0;

            function soundsReady() {
                console.log("sounds ready");
                numberOfSoundsReady++;
                if (numberOfSoundsReady === areaSounds.length) {
                    areaSounds.forEach(sound => sound.play());
                }
            }

            areaSounds[0].setPosition(new BABYLON.Vector3(-11.00, 1.82, 10.77));
            areaSounds[1].setPosition(new BABYLON.Vector3(-2.69, 2, 4.46));
            areaSounds[2].setPosition(new BABYLON.Vector3(5.0, 1.81, -2.02));
            areaSounds[3].setPosition(new BABYLON.Vector3(-6.23, 1.81, 11.02));
            areaSounds[4].setPosition(new BABYLON.Vector3(12.77, 4.77, 10.20));
           
            
        // Load the sound and play it automatically once ready
        var footstepSounds = [];
        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep1.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: .05
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep2.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: .05
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep3.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: .05
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep4.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: .05
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep5.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: .05
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep6.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: .05
        }));

        footstepSounds.push(new BABYLON.Sound("Footsteps1", "./build/assets/footstep7.ogg", scene, null, {
            loop: false,
            autoplay: false,
            volume: .05
        }));

        let isWalking = false;
        let prevIndex = -1;

        function playFootstepSounds() {
            let index = Math.floor(Math.random() * (footstepSounds.length - 1));
            if (index === prevIndex && prevIndex < 6)
                index = prevIndex + 1;
            else if (index === prevIndex && prevIndex == 6)
                index = 0;

            if (isWalking === true) {
                footstepSounds[index].setVolume(Math.random() * .05 + .1);
                footstepSounds[index].play();
                setTimeout(playFootstepSounds, Math.random() * 50 + 500);
            }
            prevIndex = index;
        }
  
    

        9
        scene.onKeyboardObservable.add((kbInfo) => {
            console.log(kbInfo.event.keyCode);
            if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN) {
                if (isWalking === false)
                    setTimeout(playFootstepSounds, 0);
                isWalking = true;
                if (kbInfo.event.keyCode == 32) {
                    console.log(meshInCrosshair);
                } else {
                    console.log("KEY DOWN: ", kbInfo.event.key);
                    console.log('Player Position X:', camera.position.x.toFixed(2), 'Y:', camera.position.y.toFixed(2), 'Z:', camera.position.z.toFixed(2));
                }
            } else if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYUP) {
                isWalking = false;
                console.log("KEY UP: ", kbInfo.event.key);
            }
        });



        
 // Load the sound and play it automatically once ready

 var lights1= new BABYLON.Sound("lights1", "./build/assets/electricbuzz.ogg", scene, null, {
    loop: true,
    autoplay: true,
    volume: .2,
    spatialSound: true,
    distanceModel: "exponential",
    rolloffFactor: 2    });
    
    
    lights2= new BABYLON.Sound("lights2", "./build/assets/electricbuzz.ogg", scene, null, {
        loop: true,
        autoplay: true,
        volume: .2,
        spatialSound: true,
        distanceModel: "exponential",
        rolloffFactor: 2
        });


        lights3= new BABYLON.Sound("lights2", "./build/assets/electricbuzz.ogg", scene, null, {
            loop: true,
            autoplay: true,
            volume: .2,
            spatialSound: true,
            distanceModel: "exponential",
            rolloffFactor: 121
            });

    lights1.setPosition(new BABYLON.Vector3(-8.34, 1.81, 1.25));
    lights2.setPosition(new BABYLON.Vector3(6.22, 1.81, 3.17));
    lights3.setPosition(new BABYLON.Vector3(12.77, 4.50, 12.66));
    

        //sample trigger sounds....
        let triggerSounds = [];
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/robot.ogg", x:-0.91, y:4.77,  z: 13.57, polyphony: false, distanceModel: true, spatisalSound: true, rolloffFactor: 3, volume:0.2, visible:false }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/marbleposter.ogg", x:-2.67, y:1.81,  z: -2.27, polyphony: false, distanceModel: true, spatisalSound: true, rolloffFactor: 3, volume:0.2 , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/carbox.ogg", x:12.05, y:1.81,  z: 13.22, polyphony: false, distanceModel: true, spatisalSound: true, rolloffFactor: 3, volume:0.2, visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/shipwreck.ogg", x: 6.04, z: -2, polyphony: false, distanceModel: true, spatisalSound: true, rolloffFactor: 3, volume:0.2 , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/crow.ogg", x: -4.16, z: 6.40, polyphony: false, spatisalSound: true, rolloffFactor: 1, volume:0.5  , visible:false }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/benthisway.ogg", x: 4.95, z: 7.29, polyphony: false, spatisalSound: true, rolloffFactor: 0.5 , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/knock.ogg", x: 7.65, z: 12.03, polyphony: false, distanceModel: false, spatisalSound: true, rolloffFactor: 1, volume:0.1 , visible:false }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/noise1.ogg", x: -1.34, z: 12.29, polyphony: false, spatisalSound: true, rolloffFactor: 1  , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/noise2.ogg", x: 10.79, z: 10.69, polyphony: false, spatisalSound: true, rolloffFactor: 1  , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/laugh.ogg", x: 5.90, z: 3.53, polyphony: false, distanceModel: false ,spatisalSound: true, rolloffFactor: 1 , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/benoverhere.ogg", x: 0.97, y: 4.50, z: 12.67, polyphony: false, spatisalSound: true, rolloffFactor: 1 , volume: 0.1 , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/benhaveyouseen.ogg", x: -6.03, z: -2.42, polyphony: false, spatisalSound: true, rolloffFactor: 1, volume: 0.3 , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/entranceposter.ogg", x: -9.34, z: 7.62, polyphony: false, distanceModel: true, spatisalSound: true, rolloffFactor: 7, volume: 0.2, visible:false }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/foyerposter.ogg", x: -6.03, z: 2.82, polyphony: false, distanceModel: true ,spatisalSound: true, rolloffFactor: 7, volume:0.2 , visible:false }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/cryingbaby.ogg", x: 8.82,y:4.20, z: 12.59, polyphony: false, distanceModel: false , spatisalSound: true, rolloffFactor: 1  , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/friend.ogg", x: 12.04, y:4.50, z:9.00, polyphony: false, singlPlay: true, distanceModel: false, spatisalSound: true, rolloffFactor: 1, volume: 1.5 , visible:false  }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/humming.ogg", x: 8.71, z:13.28, polyphony: false, distanceModel: false, spatisalSound: true, rolloffFactor: 1, volume:0.2 , visible:false }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/glyc.wav", x: 11.10, y:1.81, z:-0.58, h:1, polyphony: false, distanceModel: false, spatisalSound: true, rolloffFactor: 0.2 , visible:false}));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/pushtoy.ogg", x: 6.36, z:13.36, polyphony: false, distanceModel: true, spatisalSound: true, rolloffFactor: 1 , visible:false }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/running.ogg", x: 7.76, z:0.21, polyphony: false, distanceModel: true, spatisalSound: true, rolloffFactor: 1, volume:0.2 , visible:false }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/hide.ogg", x: -6.23, y:4.50, z:10.55, polyphony: false, spatisalSound: true, rolloffFactor: 1, volume:0.2 , visible:false   }));
        triggerSounds.push(new OneShotCollisionSound({ file: "./build/assets/laser.ogg", x: 1.66, y:1.81, z:0.53, polyphony: false, spatisalSound: true, rolloffFactor: 1, volume:0.2 , visible:false   }));


        let clues = [];

        clues.push(new OneShotCollisionSound({ file: "./build/assets/collision1.ogg", x:-5.66,  y:1.50 , z:13.53, polyphony: false, singlePlay : false, visible:false  }));
        clues.push(new OneShotCollisionSound({ file: "./build/assets/collision2.ogg", x: 12.32, z:7.55,  polyphony: false, singlePlay : false , visible:false }));
        clues.push(new OneShotCollisionSound({ file: "./build/assets/collision3.ogg", x: 12.60, y: 4.50, z:11.20, polyphony: false,  singlePlay : false, visible:false  }));
        clues.push(new OneShotCollisionSound({ file: "./build/assets/collision4.ogg", x: 3.72, z:0.30, polyphony: false, singlePlay : false, visible:false  }));
        clues.push(new OneShotCollisionSound({ file: "./build/assets/collision5.ogg", x: -2.66, y:4.50, z:12.97, polyphony: false, singlePlay : false, volume:1 , visible:false }));


        let off= [];
        off.push(new OneShotCollisionSound({ file: "./build/assets/ahhhs.ogg",   x: 12.17, y: 4, z:8, h:3, w:1.5, polyphony: false,  visible:false }));


        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        var crosshair = new BABYLON.GUI.Image("crosshair", "./build/assets/crosshairWhite.png");
        crosshair.width = "40px";
        crosshair.height = "40px";
        advancedTexture.addControl(crosshair);
        var textInfo = new BABYLON.GUI.TextBlock();
        textInfo.color = "white";
        textInfo.fontSize = 16;
        textInfo.height = "30px";
        textInfo.top = "100px";
        advancedTexture.addControl(textInfo);
    
      


        function vecToLocal(vector, mesh) {
            var m = mesh.getWorldMatrix();
            var v = BABYLON.Vector3.TransformCoordinates(vector, m);
            return v;
        }

        let meshInCrosshair = '';

        function castRay() {
            var origin = camera.position;
            var forward = new BABYLON.Vector3(0, 0, 1);
            forward = vecToLocal(forward, camera);
            var direction = forward.subtract(origin);
            direction = BABYLON.Vector3.Normalize(direction);
            var length = 10;
            var ray = new BABYLON.Ray(origin, direction, length);
            var hit = scene.pickWithRay(ray);
            if (hit.pickedMesh) {
                console.log(hit.pickedMesh.name);
                meshInCrosshair = hit.pickedMesh.name;
            }
        }
            let clueSounds = [];
           let lightSwitch = true;
            

       scene.onAfterRenderObservable.add(() => {
            textInfo.text = "Player's position X:" + (camera.position.x).toFixed(2) + " Y:" + (camera.position.y).toFixed(2) + " Z:" + (camera.position.z).toFixed(2) + "\nPicked Mesh: " + meshInCrosshair;
            castRay();
            if (cameraBox) {
                triggerSounds.forEach(oneShot => {
                    if (cameraBox.intersectsMesh(oneShot.box, false)) {
                        oneShot.play();
                    } else
                        oneShot.canPlay = true;
                });
                /////////////////

                off.forEach(off => {
                    if (cameraBox.intersectsMesh(off.box, false)) {
                        if (lightSwitch = true) {
                            scene.fogDensity = 1;
                            scene.fogColor = new BABYLON.Color3(0, 0, 0);
                        }
                        
                        off.play();
                    }  else {
                    off.canPlay = true;
                    scene.fogDensity = 0.01;
                    scene.fogColor = new BABYLON.Color3(0, 0, 0);
                
                }
                lightSwitch = !lightSwitch;
                      
                });

                
                
                clues.forEach(clue => {
                    if (cameraBox.intersectsMesh(clue.box, false)) {
                        if (clue.name == "./build/assets/collision1.ogg" && clueSounds.length >= 0 ) {
                            if (clueSounds.indexOf(clue.name) == -1){
                                clueSounds.push("./build/assets/collision1.ogg");

                            }
                            if (clue.name == "./build/assets/collision1.ogg"){
                                  scene.fogColor = new BABYLON.Color3(1, 0, 0);

                            }
                            clue.play();

                        } else if (clue.name == "./build/assets/collision2.ogg" && clueSounds.length >=1) {
                            if (clueSounds.indexOf(clue.name) == -1) {
                                clues[clueSounds.length - 1] .enabled = false;
                                clueSounds.push ("./build/assets/collision2.ogg");
                            }
                            if (clue.name == "./build/assets/collision2.ogg"){
                                  scene.fogColor = new BABYLON.Color3(2, 1, 0);

                            }
                            clue.play();
                        } else if (clue.name == "./build/assets/collision3.ogg" && clueSounds.length >=2) {
                            if (clueSounds.indexOf(clue.name) == -1) {
                                clues[clueSounds.length - 1] .enabled = false;
                                clueSounds.push ("./build/assets/collision3.ogg");

                            }

                            if (clue.name == "./build/assets/collision3.ogg"){
                                scene.fogColor = new BABYLON.Color3(0, 0, 0.5);
                            }

                            clue.play();
                        } else if (clue.name == "./build/assets/collision4.ogg" && clueSounds.length >=3) {
                            if (clueSounds.indexOf(clue.name) == -1) {
                                clues[clueSounds.length - 1] .enabled = false;
                                clueSounds.push ("./build/assets/collision4.ogg");

                            }
                            if (clue.name == "./build/assets/collision4.ogg"){
                                scene.fogColor = new BABYLON.Color3(1, 1, 0);
                            }
                            clue.play();
                        } else if (clue.name == "./build/assets/collision5.ogg" && clueSounds.length >=4) {
                            if (clueSounds.indexOf(clue.name) == -1) {
                                clues[clueSounds.length - 1] .enabled = false;
                                clueSounds.push ("./build/assets/collision5.ogg");

                            }
                            if (clue.name == "./build/assets/collision5.ogg"){
                                scene.fogColor = new BABYLON.Color3(0, 1, 0);
                            }
                            clue.play();
                        
                        }
                    } else
                        clue.canPlay = true;
                });
            }
        });

    }
};