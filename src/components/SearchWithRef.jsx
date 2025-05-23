import React, { useRef, useEffect, useState } from "react";

const SearchWithRef = () => {
  const inputRef = useRef(null);
  const [term, setTerm] = useState("");

  useEffect(() => {
    inputRef.current?.focus(); // фокус на завантаження
  }, []);

  return (
    <div>
      <h3>🔍 Quick Search</h3>
      <input
        ref={inputRef}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search languages..."
      />
    </div>
  );
};

export default SearchWithRef;
