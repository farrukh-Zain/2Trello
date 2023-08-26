import React, { createContext, useContext, useState } from 'react';

const BoardContext = createContext();

export const useBoardContext = () => useContext(BoardContext);

export function BoardProvider({ children }) {
  const [lists, setLists] = useState([
    { id: 1, title: 'Do', cards: [] },
    { id: 2, title: 'In Progress', cards: [] },
    { id: 3, title: 'Done', cards: [] },
    { id: 4, title: '', cards: [] },
  ]);

  const addCard = (listId, cardText) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, cards: [...list.cards, { id: Date.now(), text: cardText }] }
          : list
      )
    );
  };

  const editCard = (listId, cardId, newText) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards.map((card) =>
                card.id === cardId ? { ...card, text: newText } : card
              ),
            }
          : list
      )
    );
  };

  const moveCard = (sourceListId, destinationListId, cardId) => {
    setLists((prevLists) => {
      const updatedLists = [...prevLists];
      const sourceList = updatedLists.find((list) => list.id === sourceListId);
      const destinationList = updatedLists.find((list) => list.id === destinationListId);
      const movedCard = sourceList.cards.find((card) => card.id === cardId);

      if (movedCard) {
        sourceList.cards = sourceList.cards.filter((card) => card.id !== cardId);
        destinationList.cards.push(movedCard);
      }

      return updatedLists;
    });
  };

  return (
    <BoardContext.Provider value={{ lists, addCard, editCard, moveCard }}>
      {children}
    </BoardContext.Provider>
  );
}
