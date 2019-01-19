/**
 * Imports
 */
//Import css (stylus)
import './css/style.styl'

//Import Three.js
import * as THREE from 'three'

// Import Rocket Model
import Rocket from './js/Rocket.js'

// Import Rocket Model
import Environement from './js/Environement.js'


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
camera.position.z = 15
scene.add(camera)


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)

const sunLight = new THREE.DirectionalLight(0xffcccc, 1.2)
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
const rocket = new Rocket({ textureLoader: textureLoader })
scene.add(rocket.container)

/**
 * Environement
 */
const environement = new Environement({ textureLoader: textureLoader })
scene.add(environement.container)

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
    camera.position.x = cursor.x * 20
    camera.position.y = - cursor.y * 20
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