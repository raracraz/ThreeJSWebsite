import * as THREE from '/node_modules/three/build/three.min.js';


let scene, camera, renderer, controls, starGeo, stars;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    /* controls = new TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    controls.keys = [65, 83, 68]; */

    starGeo = new THREE.Geometry();
    for (let i = 0; i < 6000; i++) {
        let star = new THREE.Vector3(
            Math.random() * 600 - 300, 
            Math.random() * 600 - 300, 
            Math.random() * 600 - 300
        );
        starGeo.vertices.push(star);
    }
    let sprite = new THREE.TextureLoader().load('../img/star.png');
    let starMat = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.5,
        map: sprite,
    });

    stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    animate();
}

function animate() {
    
    renderer.render(scene, camera);  
    controls.update();
    requestAnimationFrame(animate);
}

init();