import React, { useState } from 'react';
import { useBoardContext } from './BoardContext';
import './TrelloClone.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TrelloClone() {
  const { lists, addCard, editCard, moveCard } = useBoardContext();

  const [editedCard, setEditedCard] = useState(null);
  const [newCardText, setNewCardText] = useState('');

  const handleEditStart = (cardId) => {
    setEditedCard(cardId);
  };

  const handleEditCancel = () => {
    setEditedCard(null);
  };

  const handleEditSave = (listId, cardId, newText) => {
    if (newText) {
      setEditedCard(null);
      editCard(listId, cardId, newText);
    }
  };

  const handleAddCard = (listId) => {
    if (newCardText) {
      addCard(listId, newCardText);
      setNewCardText('');
    }
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceListId = parseInt(source.droppableId);
    const destinationListId = parseInt(destination.droppableId);
    const cardId = parseInt(draggableId);

    moveCard(sourceListId, destinationListId, cardId);
};
return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="trello-board">
        {lists.map((list) => (
          <Droppable droppableId={list.id.toString()} key={list.id}>
            {(provided) => (
              <div ref={provided.innerRef} className="list">
                <h2>{list.title}</h2>
                <div className="cards">
                  {list.cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card"
                        >
                          {editedCard === card.id ? (
                            <div>
                              <textarea
                                rows={3}
                                defaultValue={card.text}
                                autoFocus
                                onBlur={(event) =>
                                  handleEditSave(list.id, card.id, event.target.value)
                                }
                              />
                              <button onClick={handleEditCancel}>Cancel</button>
                            </div>
                          ) : (
                            <>
                              <span>{card.text}</span>
                              <button onClick={() => handleEditStart(card.id)}>Edit</button>
                            </>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {/* Add Card input */}
                  <div className="add-card">
                    <input
                      type="text"
                      placeholder="Enter card text"
                      value={newCardText}
                      onChange={(event) => setNewCardText(event.target.value)}
                    />
                    <button onClick={() => handleAddCard(list.id)}>Add Card</button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default TrelloClone;