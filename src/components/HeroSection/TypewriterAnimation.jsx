import { useState, useEffect, useRef } from 'react';

const TypewriterAnimation = (words, speed = 200) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const cursorRef = useRef(true);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting ? 1 : -1;
      setText(current => currentWord.substring(0, current.length - shouldDelete));

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, text, words, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      cursorRef.current = !cursorRef.current;
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return { text, cursor: cursorRef.current };
};

export default TypewriterAnimation;
