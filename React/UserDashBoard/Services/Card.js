import { useState, useRef } from "react";

export function useCardJS() {
  const [activeCard, setActiveCard] = useState(null);
  const [coverStyle, setCoverStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const cardRefs = useRef({});

  const handleCardClick = (card) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveCard(card);

    const containerEl = containerRef.current;
    const containerRect = containerEl.getBoundingClientRect();
    const cardEl = cardRefs.current[card.id];
    const cardRect = cardEl.getBoundingClientRect();

    const startLeft = cardRect.left - containerRect.left;
    const startTop = cardRect.top - containerRect.top;

    setCoverStyle({
      position: "absolute",
      width: cardRect.width,
      height: cardRect.height,
      left: startLeft,
      top: startTop,
      backgroundColor: card.bgColor,
      transform: "scale(1)",
      transition: "none",
      zIndex: 100,
    });

    containerEl.scrollIntoView({ behavior: "smooth", block: "start" });

    requestAnimationFrame(() => {
      const scaleX = containerRect.width / cardRect.width;
      const scaleY = containerRect.height / cardRect.height;
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const cardCenterX = startLeft + cardRect.width / 2;
      const cardCenterY = startTop + cardRect.height / 2;
      const offsetX = (containerCenterX - cardCenterX) / scaleX;
      const offsetY = (containerCenterY - cardCenterY) / scaleY;

      setCoverStyle((prev) => ({
        ...prev,
        transform: `scaleX(${scaleX}) scaleY(${scaleY}) translate3d(${offsetX}px, ${offsetY}px, 0)`,
        transition: "transform 300ms ease-in-out",
      }));

      setTimeout(() => {
        setIsOpen(true);
        setIsAnimating(false);
      }, 300);
    });
  };

  const handleClose = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsOpen(false);

    setCoverStyle((prev) => ({
      ...prev,
      transform: `scale(1) translate3d(0,0,0)`,
      transition: "transform 300ms ease-in-out",
    }));

    setTimeout(() => {
      setCoverStyle({});
      setActiveCard(null);
      setIsAnimating(false);
    }, 300);
  };

  // We "export" these variables and functions so the main UI can use them
  return {
    activeCard,
    coverStyle,
    isOpen,
    containerRef,
    cardRefs,
    handleCardClick,
    handleClose,
  };
}