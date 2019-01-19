/**
 * Imports
 */
import * as THREE from 'three'


/**
 * Class
 */
class Environement{
    constructor(_options)
    {
        this.textureLoader = _options.textureLoader
        this.container = new THREE.Object3D()

        this.setStars()
        this.setFloor()
    }

    setStars(){
        this.stars = {}
        this.stars.geometry = new THREE.Geometry()

        for (let i = 0; i < 10000; i++){
            const vertice = new THREE.Vector3()

            const distance = 1000
            const theta = THREE.Math.randFloatSpread(360)
            const phi = THREE.Math.randFloatSpread(360)

            vertice.x = distance * Math.sin(theta) * Math.cos(phi)
            vertice.y = distance * Math.sin(theta) * Math.sin(phi)
            vertice.z = distance * Math.cos(theta)

            this.stars.geometry.vertices.push(vertice)
        }
        this.stars.material = new THREE.PointsMaterial({
            size: 1,
            sizeAttenuation: false,
        })
        this.stars.points = new THREE.Points(this.stars.geometry, this.stars.material)
        this.stars.points.rotation.x = Math.PI
        this.container.add(this.stars.points)
    }

    setFloor(){
        this.floor = {}
        this.floor.geometry = new THREE.PlaneBufferGeometry( 200, 200, 32 )
        this.floor.material = new THREE.MeshStandardMaterial()
    }
    
}

 /**
 * Exports
 */
export default Environement