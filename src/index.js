/**
 * Imports
 */
//Import css (stylus)
import './css/style.styl'

//Import Three.js
import * as THREE from 'three'

import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'

// Import Rocket Model
import Rocket from './js/Rocket.js'

// Import Environment
import Environment from './js/Environment.js'

// Import Rocket Model
//import Shuttle from './js/Shuttle.js'


/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})


/**
 * Controls
 */
/*const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.userPan = false;
controls.userPanSpeed = 0.0;
controls.maxDistance = 5000.0;
controls.autoRotate = true;
controls.autoRotateSpeed = 5.0;*/


/**
 * Scene
 */
const scene = new THREE.Scene()


/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update
    renderer.setSize(sizes.width, sizes.height)
})


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 60
scene.add(camera)


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambientLight)

const sunLight = new THREE.DirectionalLight(0xffcccc, 1.8)
sunLight.castShadow = true
sunLight.shadow.camera.top = 1.20
sunLight.shadow.camera.right = 1.20
sunLight.shadow.camera.bottom = - 1.20
sunLight.shadow.camera.left = - 1.20
sunLight.position.x = 1
sunLight.position.y = 1
sunLight.position.z = 1
scene.add(sunLight)


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()


/**
 * Rocket
 */
/*const rocket = new Rocket({ textureLoader: textureLoader })
scene.add(rocket.container)*/


/**
 * Shuttle
 */
/*const shuttle = new Shuttle()
scene.add(shuttle)*/


/**
 * Environement
 */
const environment = new Environment({ textureLoader: textureLoader })
scene.add(environment.container)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.shadowMap.enabled = true
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)


/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Update camera
    camera.position.x = cursor.x * 60
    camera.position.y = - cursor.y * 60
    camera.lookAt(new THREE.Vector3())

    // Update Orbit Controls
    /*controls.update();*/

    // Renderer
    renderer.render(scene, camera)
}
loop()


/**
 * Hot reload
 */
if(module.hot)
{
    module.hot.accept()

    module.hot.dispose(() =>
    {
        
    })
}


const mtlLoader = new MTLLoader()

const objLoader = new OBJLoader()

mtlLoader.load('SpaceShuttle.mtl', (materials) => {
    materials.preload()
    objLoader.setMaterials(materials)
    objLoader.load('SpaceShuttle.obj', (shuttle) => {
        shuttle.rotation.x = - (Math.PI / 2)
        scene.add(shuttle)
    })
})
