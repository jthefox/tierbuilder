import { Draggable } from 'react-beautiful-dnd';
import className from 'classnames';

interface Props {
  index: number;
  imageUrl: string;
  itemId: string;
}

export default function Item({ index, imageUrl, itemId }: Props) {
  return (
    <Draggable draggableId={itemId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={className({ 'opacity-80': snapshot.isDragging })}
        >
          <div
            className="h-20 w-20 bg-cover"
            key={index}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
      )}
    </Draggable>
  );
}
