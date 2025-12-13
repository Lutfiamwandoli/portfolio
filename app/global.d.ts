// Needed so TS treats this file as a module
export {};

//
// File + asset declarations
//
declare module '*.glb';
declare module '*.png';

//
// Meshline declaration
//
declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

//
// React Three Fiber intrinsic elements for meshline
//
declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}
