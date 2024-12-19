/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import LeadCardHeader from '../Cards/CardHeader';
import Card from '../Cards/Card';
// import Card from './Card';

const PipelineList = ({ title, estimation, price, leadCount }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    brandName: '',
    priceEstimation: '',
    brandCategory: '',
    duration: '',
  });

  // Default images
  const defaultLogo = 'https://via.placeholder.com/50';
  const defaultUserAvatar = 'https://via.placeholder.com/30';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prevCard) => ({ ...prevCard, [name]: value }));
  };

  const handleAddCard = () => {
    // Add the new card to the cards list with default images
    setCards((prevCards) => [
      ...prevCards,
      {
        ...newCard,
        logo: defaultLogo,
        userAvatar: defaultUserAvatar,
      },
    ]);
    setIsModalOpen(false);
    setNewCard({
      brandName: '',
      priceEstimation: '',
      brandCategory: '',
      duration: '',
    });
  };

  return (
    <div className="card card-simple card-flush spipeline-list bg-blue-200">
      <LeadCardHeader
        title={title}
        estimation={estimation}
        price={price}
        leadCount={leadCount}
        onAddCard={() => setIsModalOpen(true)}
      />
      <div className="card-body">
        <div className="tasklist-cards-wrap">
          {/* Render cards dynamically */}
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>

      {/* Modal for Adding Card */}
      {isModalOpen && (
        <div className="modal fade show d-block z-[1060]" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Card</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="brandName" className="form-label">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="brandName"
                      name="brandName"
                      value={newCard.brandName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="priceEstimation" className="form-label">
                      Price Estimation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="priceEstimation"
                      name="priceEstimation"
                      value={newCard.priceEstimation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="brandCategory" className="form-label">
                      Brand Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="brandCategory"
                      name="brandCategory"
                      value={newCard.brandCategory}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="duration" className="form-label">
                      Duration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="duration"
                      name="duration"
                      value={newCard.duration}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddCard}
                >
                  Add Card
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </div>
  );
};

export default PipelineList;
