import React, { useEffect } from 'react';
import KanbanNavbar from '../../components/Navbar/KanbarNavbar';
import KanbanHeader from '../../components/Navbar/KanbanHeader';
import SectionFooter from './Cards/SectionFooter';
import feather from 'feather-icons';
import PipelineHeader from './components/PipelineHeader';
import PipelineBody from './Cards/PipelineBody';

// Mock card data generator
const generateCards = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    brandName: `Brand ${index + 1}`,
    priceEstimation: `$${(Math.random() * 1000 + 1000).toFixed(2)}`,
    brandCategory: index % 2 === 0 ? 'Technology' : 'Service',
    logo: '/img/symbol-avatar-14.png',
    userAvatar: '/img/avatar2.jpg',
    duration: `${Math.floor(Math.random() * 10) + 1} days`,
  }));

const Pipeline = () => {
  const cards = generateCards(25);

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div
      className="hk-wrapper"
      data-layout="horizontal"
      data-layout-style="default"
      data-menu="light"
      data-footer="simple"
    >
      {/* Navigation and Header */}
      <KanbanNavbar />
      <KanbanHeader />
      <div id="hk_menu_backdrop" className="hk-menu-backdrop"></div>

      {/* Page Body */}
      <div className="hk-pg-wrapper pb-0">
        <div className="hk-pg-body py-0">
          <div className="taskboardapp-wrap">
            <div className="taskboardapp-content ps-0">
              <div className="taskboardapp-detail-wrap">
                {/* Header */}
                <PipelineHeader />

                {/* Taskboard */}
                <PipelineBody cards={cards} />

                {/* Footer */}
                <SectionFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipeline
