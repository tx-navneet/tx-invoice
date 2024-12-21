/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import { Popover, Menu, Position, Button, Icon, Text } from 'evergreen-ui';
import { colorOptions } from '../../../../../utils/ExternalData/Data';
import './Card.css';

const Card = ({ card }) => {
  const [bgColor, setBgColor] = useState('');
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]); // Initially selecting the first color

  useEffect(() => {
    feather.replace(); // Initialize Feather Icons
  }, []);

  // Function to handle background color change
  const handleColorChange = (color) => {
    const selected = colorOptions.find((option) => option.color === color);
    setSelectedColor(selected); // Update the selected color object
    setBgColor(color); // Set the background color
  };

  return (
    <div
      className="card card-border spipeline-card "
      style={{ backgroundColor: bgColor }}
    >
      <div className="card-body">
        <div className="media">
          {/* Logo Section */}
          <div className="media-head">
            <div className="avatar avatar-logo avatar-rounded">
              <img
                src={card.logo}
                alt="Logo"
                className="img-fluid rounded-full"
              />
            </div>
          </div>

          {/* Card Details */}
          <div className="media-body">
            <div className="d-flex justify-between items-center">
              <div className="brand-name fw-bold capitalize text-black">
                {card.brandName}
              </div>
              <div>
                <Popover
                  position={Position.BOTTOM_LEFT}
                  content={
                    <Menu className="glassy-menu">
                      <Menu.Group>
                        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                          {colorOptions.map(({ name, color }) => (
                            <Menu.Item
                              key={name}
                              onSelect={() => handleColorChange(color)}
                              className="menu-item text-black"
                            >
                              <div className="div d-flex justify-between items-center">
                                <div
                                  className="color-swatch text-black"
                                  style={{ backgroundColor: color }}
                                ></div>
                                <Text className="text-black">{name}</Text>
                              </div>
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Group>
                    </Menu>
                  }
                >
                  <Button
                    iconBefore={
                      <Icon
                        icon={selectedColor.icon}
                        color={selectedColor.color}
                        backgroundColor={selectedColor.color}
                      />
                    }
                    appearance="primary"
                    size="small"
                    className={`glassy-button p-2 rounded-full `} 
                    
                  >
                    {selectedColor.name}
                  </Button>
                </Popover>
              </div>
            </div>
            <div className="price-estimation">{card.priceEstimation}</div>
            <div className="brand-cat text-muted">{card.brandCategory}</div>
            <div className="media align-items-center mt-2">
              {/* User Avatar */}
              <div className="media-head">
                <div className="avatar avatar-xs avatar-rounded d-4 d-flex">
                  <img
                    src={card.userAvatar}
                    alt="User Avatar"
                    className="avatar-img img-fluid"
                  />
                </div>
              </div>
              {/* Duration */}
              <div className="media-body ms-2">
                <p className="mb-0 text-sm text-secondary">{card.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
