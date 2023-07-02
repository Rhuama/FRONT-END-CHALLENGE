import React, { useState } from 'react';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleClick}>
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
