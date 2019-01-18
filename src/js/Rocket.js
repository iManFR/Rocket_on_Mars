/**
 * Imports
 */
import * as THREE from 'three'


/**
 * Class
 */
class Rocket{
    constructor(_options)
    {
        this.textureLoader = _options.textureLoader
        this.container = new THREE.Object3D()

        this.setMainCylinder()
        this.setCap()

        this.setFirstPropulsor()
        this.setSecondPropulsor()
    }

    setMainCylinder(){
        this.mainCylinder = {}
        this.mainCylinder.geometry = new THREE.CylinderBufferGeometry( 1, 1, 10, 32 )
        this.mainCylinder.material = new THREE.MeshStandardMaterial({ color: 0xededed })
        this.mainCylinder.mesh = new THREE.Mesh(this.mainCylinder.geometry, this.mainCylinder.material)
        this.container.add(this.mainCylinder.mesh)
    }

    setCap(){
        /*this.cap = {}
        this.cap.points = []
        for (let i = 0; i < 10; i ++) {
            this.cap.points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * -2 ) )
        }
        this.cap.geometry = new THREE.LatheBufferGeometry( this.cap.points )
        this.cap.material = new THREE.MeshBasicMaterial( { color: 0xff0000 } )
        this.cap.mesh = new THREE.Mesh(this.cap.geometry, this.cap.material)
        this.container.add(this.cap.mesh)*/
        this.cap = {}
        this.cap.geometry = new THREE.ConeBufferGeometry( 1, 1, 32 )
        this.cap.material = new THREE.MeshStandardMaterial({ color: 0xededed })
        this.cap.mesh = new THREE.Mesh(this.cap.geometry, this.cap.material)
        this.cap.mesh.position.y += 5.5
        this.container.add(this.cap.mesh)
    }

    setFirstPropulsor(){
        this.firstPropulsor = {}
        this.firstPropulsor.geometry = new THREE.CylinderBufferGeometry( 0.7, 0.7, 7, 32 )
        this.firstPropulsor.material = new THREE.MeshStandardMaterial({ color: 0xffffff })
        this.firstPropulsor.mesh = new THREE.Mesh(this.firstPropulsor.geometry, this.firstPropulsor.material)
        this.firstPropulsor.mesh.position.x += 1.5
        this.firstPropulsor.mesh.position.y -= 2
        this.container.add(this.firstPropulsor.mesh)

        this.firstPropulsor.cap = {}
        this.firstPropulsor.cap.geometry = new THREE.ConeBufferGeometry( 0.7, 0.7, 32 )
        this.firstPropulsor.cap.material = new THREE.MeshStandardMaterial({ color: 0xffffff })
        this.firstPropulsor.cap.mesh = new THREE.Mesh(this.firstPropulsor.cap.geometry, this.firstPropulsor.cap.material)
        this.firstPropulsor.cap.mesh.position.x += 1.5
        this.firstPropulsor.cap.mesh.position.y += 1.85
        this.container.add(this.firstPropulsor.cap.mesh)
    }

    setSecondPropulsor(){
        this.secondPropulsor = {}
        this.secondPropulsor.geometry = new THREE.CylinderBufferGeometry( 0.7, 0.7, 7, 32 )
        this.secondPropulsor.material = new THREE.MeshStandardMaterial({ color: 0xededed })
        this.secondPropulsor.mesh = new THREE.Mesh(this.secondPropulsor.geometry, this.secondPropulsor.material)
        this.secondPropulsor.mesh.position.x -= 1.5
        this.secondPropulsor.mesh.position.y -= 2
        this.container.add(this.secondPropulsor.mesh)

        this.secondPropulsor.cap = {}
        this.secondPropulsor.cap.geometry = new THREE.ConeBufferGeometry( 0.7, 0.7, 32 )
        this.secondPropulsor.cap.material = new THREE.MeshStandardMaterial({ color: 0xededed })
        this.secondPropulsor.cap.mesh = new THREE.Mesh(this.secondPropulsor.cap.geometry, this.secondPropulsor.cap.material)
        this.secondPropulsor.cap.mesh.position.x -= 1.5
        this.secondPropulsor.cap.mesh.position.y += 1.85
        this.container.add(this.secondPropulsor.cap.mesh)
    }
}


/**
 * Exports
 */
export default Rocket