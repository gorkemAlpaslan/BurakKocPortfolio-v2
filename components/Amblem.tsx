import * as React from "react";

const Amblem = (props) => {
  return (
    <svg
      {...props} // Bu sayede className vb. props’u iletebiliriz
      fill="currentColor" // Light/Dark modda otomatik renk ayarı için
      viewBox="0 0 16 29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 20.747v2.662h-3.889v-2.662c0-2.339-1.844-4.241-4.11-4.241-2.268 0-4.112 1.903-4.112 4.241 0 2.34 1.845 4.241 4.111 4.241V29c-4.412 0-8-3.702-8-8.253A8.35 8.35 0 0 1 2.781 14.5 8.35 8.35 0 0 1 0 8.253C0 3.702 3.588 0 8 0v4.012c-2.267 0-4.111 1.902-4.111 4.24 0 2.34 1.844 4.242 4.11 4.242 2.268 0 4.112-1.903 4.112-4.241V5.59h3.888v2.662a8.35 8.35 0 0 1-2.78 6.247 8.35 8.35 0 0 1 2.78 6.247z"></path>
    </svg>
  );
};

export default Amblem; // <-- Mutlaka default export olmalı
