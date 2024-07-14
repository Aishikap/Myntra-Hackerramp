import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as bodyPix from '@tensorflow-models/body-pix';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './WebcamOverlay.css';

const WebcamOverlay = () => {
    const webcamRef = useRef(null);
    const mountRef = useRef(null);

    useEffect(() => {
        const loadModel = async () => {
            await tf.setBackend('webgl');
            await tf.ready();

            const net = await bodyPix.load();

            const mount = mountRef.current;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

            renderer.setSize(mount.clientWidth, mount.clientHeight);
            mount.appendChild(renderer.domElement);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
            directionalLight.position.set(5, 5, 5);
            scene.add(directionalLight);

            const loader = new GLTFLoader();
            let jeansModel;
            loader.load(
                '/untitled.glb',
                (gltf) => {
                    jeansModel = gltf.scene;
                    scene.add(jeansModel);
                    animate();
                    console.log('Model loaded successfully');
                },
                undefined,
                (error) => {
                    console.error('Error loading model', error);
                }
            );

            camera.position.z = -1;

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.screenSpacePanning = false;

            const animate = () => {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            };

            const performBodyTracking = async () => {
                if (webcamRef.current && webcamRef.current.video.readyState === 4) {
                    const video = webcamRef.current.video;
                    const segmentation = await net.segmentPerson(video);

                    if (jeansModel) {
                        const personParts = segmentation.allPoses[0].keypoints;

                        const leftHip = personParts.find(part => part.part === 'leftHip');
                        const rightHip = personParts.find(part => part.part === 'rightHip');
                        const leftKnee = personParts.find(part => part.part === 'leftKnee');
                        const rightKnee = personParts.find(part => part.part === 'rightKnee');

                        if (leftHip && rightHip && leftKnee && rightKnee) {
                            const hipsMidpoint = (leftHip.position.x + rightHip.position.x) / 2;
                            jeansModel.position.x = hipsMidpoint;
                            jeansModel.position.y = leftHip.position.y;
                            jeansModel.scale.set(0.01, 0.01, 0.01);
                        }
                    }

                    requestAnimationFrame(performBodyTracking);
                }
            };

            performBodyTracking();
        };

        loadModel();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(mountRef.current.firstChild);
            }
        };
    }, []);

    return (
        <div className="webcam-overlay-container">
            <Webcam ref={webcamRef} className="webcam-feed" />
            <div ref={mountRef} className="three-canvas" />
        </div>
    );
};

export default WebcamOverlay;
