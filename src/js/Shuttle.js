/**
 * Imports
 */
// Import Three.js
import * as THREE from 'three'

import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'

/**
 * Class
 */
class Shuttle{
    constructor()
    {
        this.setShuttle()
    }
    
    setShuttle(){
        const mtlLoader = new THREE.MTLLoader()
        mtlLoader.setTexturePath('../obj/shuttle/')
        mtlLoader.setPath('../obj/shuttle/')
        mtlLoader.load('SpaceShuttle.mtl', function (materials) {
        
            materials.preload()
        
            const objLoader = new THREE.OBJLoader()
            objLoader.setMaterials(materials)
            objLoader.setPath('../obj/shuttle/')
            objLoader.load('SpaceShuttle.obj', function (object) {
        
                scene.add(object)
                object.position.y -= 60
            })
        
        })
    }
}


/**
 * Exports
 */
export default Shuttle
