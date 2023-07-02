import React, { useState } from 'react';
import './AccordionItem.css';

function AccordionItem({content, title, id}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <div className="row row-dropdown">
          <div className="col-xs-1 col-sm-2 number">{id}</div>
          <div className="col-xs-5 col-sm-10">{title}</div>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="row dropdown-content">
            <p className="col-xs-5 col-md-6 col-sm-10">{content}</p>
          </div>
        </div>
      )}
    </div>

  );
}

export default AccordionItem;
