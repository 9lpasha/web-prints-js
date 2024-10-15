import {useEffect, useState} from 'react';
import {CanvasManager} from './CanvasManager';
import {NodeType} from './CanvasReact.types';

export const CanvasReact = () => {
  const [canvasManager, setCanvasManager] = useState<CanvasManager>();

  useEffect(() => {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;

    setCanvasManager(new CanvasManager(canvas));
  }, []);

  return (
    <div style={{width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '150px', height: '100dvh'}}>
        <button onClick={() => canvasManager?.addNode(NodeType.htmlElement, 'div')}>Add div</button>
        <button onClick={() => canvasManager?.addNode(NodeType.htmlElement, 'button')}>Add button</button>
        <button onClick={() => canvasManager?.addNode(NodeType.style)}>Add styles</button>
        <button onClick={() => canvasManager?.addNode(NodeType.variable)}>Add variable</button>
        <button onClick={() => canvasManager?.addNode(NodeType.event)}>Add Event click</button>
        <button onClick={() => canvasManager?.addNode(NodeType.function)}>Add function</button>
      </div>
      <canvas id='canvas' />
    </div>
  );
};
