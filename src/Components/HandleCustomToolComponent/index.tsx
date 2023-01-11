import { FallbackBlock } from '../FallbackBlock';
import { HandleCustomToolComponentProps } from './types';

const HandleCustomToolComponent = ({
  block,
  disabled,
  defaultComponent,
  customComponent,
}: HandleCustomToolComponentProps) => {
  if (disabled) {
    return <FallbackBlock key={block.id} blockType={block.type} />;
  }

  return  (
    <>
      {customComponent ? (
        customComponent
      ) : (
        defaultComponent
      )}
    </>
  );

};

export { HandleCustomToolComponent };
