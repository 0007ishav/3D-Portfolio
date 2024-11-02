import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

const AlertModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    window.location.reload(); // Optional: Reload on close
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex bg-black-300 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
        <div className="flex-1 flex flex-col justify-between pr-4">
          <div>
            <h2 className="text-lg font-semibold mb-2 head-text">Notification</h2>
            <p className="mb-4 text-lg text-white-600">{message}</p>
          </div>
          <button
            onClick={handleClose}
            className="field-btn hover:bg-black-400 transition duration-300 sub-text"
          >
            Close
          </button>
        </div>

        <div className="w-1/2">
          <Canvas className="z-10">
            <ambientLight intensity={Math.PI} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[100, 10, 10]} intensity={2} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <Suspense fallback={<CanvasLoader />}>
              <Developer position-y={-3} scale={3} animationName="clapping" />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
