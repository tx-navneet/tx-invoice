/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import Card from './Card';
import PipelineList from '../components/PipelineList';
import './Card.css';

const PipelineBody = ({ cards }) => {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: 'New Deals',
      leadCount: 3,
      estimation: '5h',
      price: '$145,000',
      cards: [...cards], // Attach cards only to the first list initially
    },
  ]);
  const [isListDialogOpen, setIsListDialogOpen] = useState(false);
  const [isCardDialogOpen, setIsCardDialogOpen] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [currentListId, setCurrentListId] = useState(null);
  const [newCardData, setNewCardData] = useState({
    logo: '',
    brandName: '',
    priceEstimation: '',
    brandCategory: '',
    userAvatar: '',
    duration: '',
  });

  const handleAddList = () => {
    if (newListName.trim()) {
      const newList = {
        id: lists.length + 1,
        title: newListName,
        leadCount: 0,
        estimation: '0h',
        price: '$0',
        cards: [],
      };
      setLists([...lists, newList]);
      setNewListName('');
      setIsListDialogOpen(false);
    }
  };

  const handleAddCard = (listId, card) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, cards: [...list.cards, card] }
          : list
      )
    );
    setIsCardDialogOpen(false);
    setNewCardData({
      logo: '',
      brandName: '',
      priceEstimation: '',
      brandCategory: '',
      userAvatar: '',
      duration: '',
    });
  };

  const openAddCardDialog = (listId) => {
    setCurrentListId(listId);
    setIsCardDialogOpen(true);
  };

  const handleCardInputChange = (field, value) => {
    setNewCardData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div
      // className=""
      className="taskboard-body pt-6 overflow-x-auto conteriner-fluid bg-yellow-300 bg-opacity-20 backdrop-blur-md border border-yellow-300/30 rounded-lg p-6 shadow-lg "
      style={{
        height: '100vh',
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <SimpleBar
        className="tasklist-scroll position-relative"
        style={{ height: '94%', overflowY: 'auto' }}
      >
        <div
          className="tasklist-wrap d-inline-flex "
          style={{
            gap: '16px',
            minWidth: '100%',
          }}
        >
          {/* Render all lists */}
          {lists.map((list) => (
            <PipelineList
              key={list.id}
              title={list.title}
              estimation={list.estimation}
              price={list.price}
              leadCount={list.leadCount}
              onAddCard={() => openAddCardDialog(list.id)}
            >
              {list.cards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </PipelineList>
          ))}

          {/* Add New List Section */}
          <div
            className="card card-simple card-border spipeline-list create-new-list"
            style={{
              height: '200px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "#f7f7f7"
            }}
          >
            <div className="card-header card-header-action">
              <button
                className="btn btn-light btn-block bg-transparent border-0 text-primary"
                onClick={() => setIsListDialogOpen(true)}
              >
                <span className="feather-icon">
                  <i data-feather="plus"></i>
                </span>
                <span className="btn-text">Add New List</span>
              </button>
            </div>
          </div>
        </div>
      </SimpleBar>

      {/* Add List Dialog */}
      {isListDialogOpen && (

        <div className=" modal fade show d-block z-[1060] reletive" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New List</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsListDialogOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="list-name">List Name</label>
                  <input
                    type="text"
                    id="list-name"
                    className="form-control"
                    placeholder="Enter list name"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setIsListDialogOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddList}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}

      {/* Add Card Dialog */}
      {isCardDialogOpen && (
        <div className="reletive z-[1060]">

        <div className="modal fade show d-block " tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Card</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsCardDialogOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Logo URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter logo URL"
                    value={newCardData.logo}
                    onChange={(e) => handleCardInputChange('logo', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Brand Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter brand name"
                    value={newCardData.brandName}
                    onChange={(e) =>
                      handleCardInputChange('brandName', e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Price Estimation</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter price estimation"
                    value={newCardData.priceEstimation}
                    onChange={(e) =>
                      handleCardInputChange('priceEstimation', e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Brand Category</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter brand category"
                    value={newCardData.brandCategory}
                    onChange={(e) =>
                      handleCardInputChange('brandCategory', e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>User Avatar URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter user avatar URL"
                    value={newCardData.userAvatar}
                    onChange={(e) =>
                      handleCardInputChange('userAvatar', e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter duration"
                    value={newCardData.duration}
                    onChange={(e) =>
                      handleCardInputChange('duration', e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setIsCardDialogOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAddCard(currentListId, newCardData)}
                >
                  Add Card
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
        </div>
      )}
    </div>
  );
};

export default PipelineBody;
